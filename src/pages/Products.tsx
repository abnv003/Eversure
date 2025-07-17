// Products.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { products } from '../data/ProductsData';

const Products = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const readableCategory = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : null;

  const subcategoryMap = {
    'Infusion Transfusion Therapy': [
      'IV Cannula',
      'Three Way Stop Cock',
      'I. V. Infusion Set',
      'Burette Set',
      'Extension Tube',
      'Multiway',
      'Blood Transfusion Set'
    ],
    'Anesthesia': [
      'Suction Catheter',
      'Oxygen Mask',
      'Nebulizer Mask',
      'Nasal Oxygen Cannula'
    ],
    'Gastroenterology': ['Ryles Tube', 'Infant Feeding Tube'],
    'Urology': ['Nelaton Catheter'],
    'Surgery Wound Drainage': [
      'Yankaur Suction Set',
      'Closed Wound Suction Unit',
      'Thoracic Catheter'
    ],
    'Central Venous Access Catheters': ['Central Venous Catheter']
  } as const;

  type CategoryKey = keyof typeof subcategoryMap;

  const subcategories =
    readableCategory && Object.keys(subcategoryMap).includes(readableCategory)
      ? subcategoryMap[readableCategory as CategoryKey]
      : [];

  const [selectedCategory, setSelectedCategory] = React.useState('All Products');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'All Products' ||
      product.product_name === selectedCategory ||
      product.category === readableCategory;

    const matchesSearch = (product.product_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (product.description || '').toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {readableCategory || 'All Products'}
          </h1>
          <p className="text-xl text-teal-100">
            Browse {readableCategory || 'our full'} product range.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All Products')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'All Products'
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Products
                </button>
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedCategory(sub)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedCategory === sub
                        ? 'bg-teal-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-teal-600 font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.product_name}</h3>
                  {/* <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {(product.product_features || []).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                </div>
                <button onClick={()=>{navigate(`/products/${category}/${product.id}`)}} className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors duration-200">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <p className="text-gray-600 mt-12 text-center">No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
