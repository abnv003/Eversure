import requests
from bs4 import BeautifulSoup
import json
import time
import re
from urllib.parse import urljoin, urlparse
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class EversureMedicalScraper:
    def __init__(self):
        self.base_url = "http://eversuremedical.com/"
        self.categories_url = "http://eversuremedical.com/surgical-disposable-products-manufacturer-in-india"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        # Disable SSL verification for expired certificates
        self.session.verify = False
        self.products = []
        self.product_id_counter = 1
        
    def get_page(self, url):
        """Fetch a page with error handling"""
        try:
            # Try HTTP first if URL is HTTPS
            if url.startswith('https://'):
                http_url = url.replace('https://', 'http://')
                try:
                    response = self.session.get(http_url, timeout=10)
                    response.raise_for_status()
                    return response
                except:
                    pass
            
            # Disable SSL warnings for expired certificates
            import urllib3
            urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
            
            response = self.session.get(url, timeout=10, verify=False)
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            logger.error(f"Error fetching {url}: {e}")
            return None
    
    def extract_product_links(self):
        """Extract all product page links from the categories page"""
        logger.info("Extracting product links from categories page...")
        
        response = self.get_page(self.categories_url)
        if not response:
            logger.info("Failed to fetch categories page, using example URL")
            return []
        
        soup = BeautifulSoup(response.content, 'html.parser')
        product_links = []
        
        # Look for links that contain product information
        links = soup.find_all('a', href=True)
        
        for link in links:
            href = link.get('href')
            if href:
                # Convert relative URLs to absolute
                if href.startswith('/'):
                    full_url = self.base_url.rstrip('/') + href
                elif href.startswith('http'):
                    full_url = href
                else:
                    full_url = urljoin(self.base_url, href)
                
                # Filter for product pages
                if ('.php' in href and 
                    ('product' in href.lower() or 'modcann' in href.lower() or 
                     'cannula' in href.lower() or 'infusion' in href.lower())):
                    if full_url not in product_links:
                        product_links.append(full_url)
        
        # Also manually add the example URL you provided
        example_url = "http://eversuremedical.com/iv-infusion-products-manufacturers-IV-cannula-modcann-wi.php"
        if example_url not in product_links:
            product_links.append(example_url)
        
        logger.info(f"Found {len(product_links)} product links")
        return product_links
    
    def extract_product_features(self, soup):
        """Extract product features in the specified format"""
        features = []
        
        # Look for feature sections - this will need adjustment based on actual HTML structure
        feature_sections = soup.find_all(['div', 'section', 'ul'], class_=re.compile(r'feature|detail|spec', re.I))
        
        if not feature_sections:
            # Try alternative selectors
            feature_sections = soup.find_all(['h3', 'h4', 'h5'])
        
        current_feature = None
        for section in feature_sections:
            text = section.get_text(strip=True)
            
            # Look for titles that end with colon or dash
            if ':' in text or ':-' in text:
                if current_feature and current_feature.get('points'):
                    features.append(current_feature)
                
                title = text.split(':')[0].strip()
                if not title.endswith(':-'):
                    title += ':-'
                
                current_feature = {
                    'title': title,
                    'points': []
                }
            elif current_feature and text and len(text) > 10:
                # Add as a point if it's substantial content
                current_feature['points'].append(text)
        
        # Add the last feature if it exists
        if current_feature and current_feature.get('points'):
            features.append(current_feature)
        
        # If no features found, create some default ones based on common patterns
        if not features:
            features = [
                {
                    "title": "Product Features:-",
                    "points": ["Feature details not available in current page structure"]
                }
            ]
        
        return features
    
    def extract_product_data(self, url):
        """Extract product data from a single product page"""
        logger.info(f"Scraping product: {url}")
        
        response = self.get_page(url)
        if not response:
            return None
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract product name
        product_name = ""
        name_selectors = ['h1', 'h2', '.product-title', '.product-name', 'title']
        for selector in name_selectors:
            element = soup.select_one(selector)
            if element:
                product_name = element.get_text(strip=True)
                if product_name and len(product_name) > 3:
                    break
        
        # Extract product image
        image_url = "https://via.placeholder.com/400"  # Default
        img_elements = soup.find_all('img')
        for img in img_elements:
            src = img.get('src')
            if src and ('product' in src.lower() or 'modcann' in src.lower()):
                image_url = urljoin(self.base_url, src)
                break
        
        # Extract description
        description = ""
        desc_selectors = ['.description', '.product-desc', 'p']
        for selector in desc_selectors:
            elements = soup.select(selector)
            for element in elements:
                text = element.get_text(strip=True)
                if text and len(text) > 20 and 'for' in text.lower():
                    description = text
                    break
            if description:
                break
        
        # Extract other details
        sizes = self.extract_text_by_keywords(soup, ['size', 'gauge', 'dimension'])
        product_code = self.extract_text_by_keywords(soup, ['code', 'model', 'ref'])
        category = self.extract_text_by_keywords(soup, ['category', 'type'])
        sub_category = self.extract_text_by_keywords(soup, ['sub', 'subcategory'])
        tags = self.extract_text_by_keywords(soup, ['sterilized', 'certified', 'single use'])
        
        # Extract features
        features = self.extract_product_features(soup)
        
        # Create product object
        product = {
            "id": self.product_id_counter,
            "product_name": product_name or "Product Name Not Found",
            "sizes": sizes or "Size information not available",
            "product_code": product_code or str(self.product_id_counter).zfill(4),
            "category": category or "Medical Device",
            "sub_category": sub_category or "Medical Equipment",
            "description": description or "Product description not available",
            "image": image_url,
            "product_features": features,
            "tags": tags or "Medical grade product"
        }
        
        self.product_id_counter += 1
        return product
    
    def extract_text_by_keywords(self, soup, keywords):
        """Extract text containing specific keywords"""
        for keyword in keywords:
            # Look in various elements
            elements = soup.find_all(text=re.compile(keyword, re.I))
            for element in elements:
                parent = element.parent
                if parent:
                    text = parent.get_text(strip=True)
                    if len(text) > len(keyword) and len(text) < 100:
                        return text.replace(keyword + ':', '').strip()
        return None
    
    def scrape_all_products(self):
        """Main method to scrape all products"""
        logger.info("Starting product scraping...")
        
        # Get all product links
        product_links = self.extract_product_links()
        
        # If no links found, try the example URL
        if not product_links:
            product_links = ["http://eversuremedical.com/iv-infusion-products-manufacturers-IV-cannula-modcann-wi.php"]
        
        # Scrape each product
        for url in product_links:
            product = self.extract_product_data(url)
            if product:
                self.products.append(product)
            
            # Be respectful - add delay between requests
            time.sleep(1)
        
        logger.info(f"Successfully scraped {len(self.products)} products")
        return self.products
    
    def save_to_json(self, filename="products.json"):
        """Save products to JSON file"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump({"products": self.products}, f, indent=2, ensure_ascii=False)
        logger.info(f"Products saved to {filename}")
    
    def get_javascript_export_format(self):
        """Return products in JavaScript export format"""
        js_code = "export const products = " + json.dumps(self.products, indent=2)
        return js_code

# Usage example
if __name__ == "__main__":
    scraper = EversureMedicalScraper()
    
    # Scrape all products
    products = scraper.scrape_all_products()
    
    # Save to JSON file
    scraper.save_to_json("eversure_products.json")
    
    # Print JavaScript export format
    print("\n" + "="*50)
    print("JavaScript Export Format:")
    print("="*50)
    print(scraper.get_javascript_export_format())
    
    # Print summary
    print(f"\nScraping completed! Found {len(products)} products.")
    print("Files created:")
    print("- eversure_products.json")

# Additional utility functions for manual testing
def test_single_product():
    """Test scraping a single product"""
    scraper = EversureMedicalScraper()
    url = "http://eversuremedical.com/iv-infusion-products-manufacturers-IV-cannula-modcann-wi.php"
    product = scraper.extract_product_data(url)
    
    if product:
        print("Sample product data:")
        print(json.dumps(product, indent=2))
    else:
        print("Failed to extract product data")

def find_all_product_links():
    """Utility to find all product links on the site"""
    scraper = EversureMedicalScraper()
    links = scraper.extract_product_links()
    print(f"Found {len(links)} product links:")
    for link in links:
        print(f"- {link}")

# Uncomment to test individual functions
# test_single_product()
# find_all_product_links()
