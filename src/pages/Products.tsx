// import React from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { Search, Filter, ArrowRight } from 'lucide-react';
// import { products } from '../data/ProductsData';

// const Products = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { category } = useParams();

//   const urlParams = new URLSearchParams(location.search);
//   const subcategoryFromUrl = urlParams.get('subcategory');

//   const readableCategory = category
//     ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
//     : null;

//   // Create a mapping to handle URL category to actual category name conversion
//   const categoryMapping = {
//     'Infusion Transfusion': ['Infusion Transfusion', 'infusion-transfusion'],
//     'Urology': ['Urology', 'urology'],
//     'Surgery Wound Drainage': ['Surgery Wound Drainage', 'surgery-wound-drainage'],
//     'Central Venous Access Catheters': ['Central Venous Access Catheters', 'central-venous-access-catheters']
//   };

  
//   // Find the actual category name that matches either the readable format or URL format
//   const actualCategory = Object.keys(categoryMapping).find(key =>
//     key === readableCategory ||
//     categoryMapping[key as keyof typeof categoryMapping].includes(category || '')
//   ) || readableCategory;

//   const subcategoryMap = {
//     'Infusion Transfusion': [
//       'IV Cannula',
//       'Safety IV Cannula',
//       'Three Way Stop Cock',
//       'I. V. Infusion Set',
//       'Burette Set',
//       'Extension Tube',
//       'Multiway',
//       'Blood Transfusion Set',
//       'Accessories'
//     ],
//     'Urology': ['Foley Catheter'],
//     'Surgery Wound Drainage': [
//       'Yankaur Suction Set',
//       'Closed Wound Suction Unit',
//       'Thoracic Catheter'
//     ],
//     'Central Venous Access Catheters': ['Central Venous Catheter']
//   } as const;

//   type CategoryKey = keyof typeof subcategoryMap;

//   const subcategories =
//     actualCategory && Object.keys(subcategoryMap).includes(actualCategory)
//       ? subcategoryMap[actualCategory as CategoryKey]
//       : [];

//   // Initialize with 'All Products' and ensure it stays that way on component mount
//   const [selectedCategory, setSelectedCategory] = React.useState(
//     subcategoryFromUrl || 'All Products'
//   );
//   const [searchTerm, setSearchTerm] = React.useState('');

//   // Reset to 'All Products' when category changes
//   React.useEffect(() => {
//     if (subcategoryFromUrl) {
//       setSelectedCategory(subcategoryFromUrl);
//     } else {
//       setSelectedCategory('All Products');
//     }
//   }, [category, actualCategory, subcategoryFromUrl]);

//   const categoryDesc = [
//     "When oral medications aren't enough, infusion therapy provides critical treatment by delivering medication directly into the bloodstream. It's essential for managing severe conditions like unresponsive infections, cancer-related pain, dehydration, and gastrointestinal diseases. Eversure supports this vital process with a comprehensive portfolio of infusion therapy products. Our entire range is CE-certified and meets global quality standards, making IV products more efficient for clinicians and less painful for patients.",
//     "A central venous catheter (CVC), or central line, is a thin, flexible tube inserted into a large vein. It is typically placed in the neck, chest, or groin, with its tip positioned in a major vein near the heart. This device provides reliable, long-term access for administering medications, fluids, and nutrition directly into the bloodstream",
//     "Urology is the medical specialty that addresses diseases of the male and female urinary tract, including the kidneys, bladder, and urethra. As a sensitive field of medicine, urology demands meticulous attention to detail from diagnosis through treatment. At Eversure, we understand the critical need for safety and quality in urological procedures. That is why our Foley Balloon Catheters are manufactured to meet the highest safety and industry standards, providing a reliable solution for patient care",
//     "Wound drainage devices clear fluid from a wound to prevent infection and accelerate healing. Eversure provides a selection of DEHP-free devices to support this critical process in surgical and wound care. Our products include Closed Wound Suction Units, Yankauer Suction Sets, and Thoracic Drainage Catheters."
//   ];

//   // Simplified and more reliable filtering logic
//   const filteredProducts = React.useMemo(() => {
//     return products.filter(product => {
//       // First filter by the main category from params (only if category is specified)
//       const matchesMainCategory = !actualCategory ||
//         product.category === actualCategory ||
//         product.category === readableCategory ||
//         product.category === category;

//       // Then filter by selected subcategory (simplified logic)
//       const matchesSubCategory = selectedCategory === 'All Products' ||
//         product.product_name === selectedCategory ||
//         product.sub_category === selectedCategory;

//       // Search filter
//       const matchesSearch = !searchTerm ||
//         (product.product_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (product.description || '').toLowerCase().includes(searchTerm.toLowerCase());

//       return matchesMainCategory && matchesSubCategory && matchesSearch;
//     });
//   }, [actualCategory, readableCategory, category, selectedCategory, searchTerm, products]);

//   return (
//     <div className="">
//       {/* Hero */}
//       <section
//         className="text-white py-48 relative bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url("${actualCategory === 'Infusion Transfusion'
//             ? '/heroimages/infusion.jpeg'
//             : actualCategory === 'Urology'
//               ? '/heroimages/urology.jpeg'
//               : actualCategory === 'Surgery Wound Drainage'
//                 ? '/heroimages/surgery.jpeg'
//                 : actualCategory === 'Central Venous Access Catheters'
//                   ? '/heroimages/cvc.jpeg'
//                   : '/heroimages/surgery.jpeg'
//             }")`,
//           backgroundPosition: 'center 60%'
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Content */}
//         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
//           <h1 className="text-5xl font-normal mb-4">
//             {actualCategory || 'All Products'}
//           </h1>
//         </div>
//       </section>

//       <div className="bg-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-[#309ed9]">
//             <p className="text-gray-700 text-base leading-relaxed">
//               {actualCategory === 'Infusion Transfusion'
//                 ? categoryDesc[0]
//                 : actualCategory === 'Urology'
//                   ? categoryDesc[2]
//                   : actualCategory === 'Surgery Wound Drainage'
//                     ? categoryDesc[3]
//                     : actualCategory === 'Central Venous Access Catheters'
//                       ? categoryDesc[1]
//                       : 'Browse our comprehensive product range designed for medical professionals.'
//               }
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Filters section */}
//       <section className="py-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between gap-4">
//             <div className="flex items-start space-x-4">
//               <Filter className="h-5 w-5 text-gray-600 mt-2 flex-shrink-0" />
//               <div className="flex flex-wrap gap-2">
//                 <button
//                   onClick={() => {
//                     setSelectedCategory('All Products');
//                     // Update URL to remove subcategory parameter
//                     navigate(`/products/${category}`, { replace: true });
//                   }}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition-colors ${selectedCategory === 'All Products'
//                       ? 'border-b-4 border-yellow-400'
//                       : ''
//                     }`}
//                 >
//                   All Products
//                 </button>
//                 {subcategories.map((sub) => (
//                   <button
//                     key={sub}
//                     onClick={() => {
//                       setSelectedCategory(sub);
//                       // Update URL with subcategory parameter
//                       navigate(`/products/${category}?subcategory=${encodeURIComponent(sub)}`, { replace: true });
//                     }}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition-colors ${selectedCategory === sub
//                         ? 'border-b-4 border-yellow-400'
//                         : ''
//                       }`}
//                     >
//                     {sub}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <Search className="absolute left-3 top-5 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {filteredProducts.map((product) => (
//               <div onClick={() => navigate(`/products/${category}/${product.id}`)} key={product.id} className="bg-white rounded-lg overflow-hidden group cursor-pointer">
//                 {/* Custom image container with fixed dimensions */}
//                <div className="w-full max-w-[289px] h-[309px] mx-auto overflow-hidden rounded-lg border-blue-100 border-2">
//                   <img
//                     src={product.image}
//                     alt={product.product_name}
//                     className="w-full h-full object-contain"
//                     onError={(e) => {
//                       e.target.src = '/placeholder-product.jpg'; 
//                     }}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-[#309ed9] mb-2">
//                     {product.product_name}
//                   </h3>
//                   <p className='text-sm font-medium text-gray-700 mb-2'>{product.addition}</p>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium text-gray-700 hover:text-[#309ed9] transition-colors duration-200">
//                       {product.sub_desc}
//                     </span>
//                   </div>
//                 </div>
//                 {/* Updated Read More button - Always visible on mobile, hover on desktop */}
//                 <button
//                   className="flex items-center text-sm font-medium text-[#309ed9] transition-all duration-200 px-6 pb-6 md:opacity-0 md:group-hover:opacity-100"
//                 >
//                   Read More
//                   <ArrowRight className="h-4 w-4 ml-1" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Empty state */}
//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-600 text-lg mb-2">No products found.</p>
//               <p className="text-gray-500 text-sm">
//                 {searchTerm ? 'Try adjusting your search terms.' : 'Try selecting "All Products" or a different category.'}
//               </p>
//               {selectedCategory !== 'All Products' && (
//                 <button
//                   onClick={() => setSelectedCategory('All Products')}
//                   className="mt-4 px-4 py-2 bg-[#309ed9] text-white rounded-lg hover:bg-[#2889c4] transition-colors"
//                 >
//                   Show All Products
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;


import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { products } from '../data/ProductsData';

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();

  const urlParams = new URLSearchParams(location.search);
  const subcategoryFromUrl = urlParams.get('subcategory');

  // Fixed capitalization - properly capitalize each word including first letter
  const readableCategory = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : null;

  // Create a mapping to handle URL category to actual category name conversion
  const categoryMapping = {
    'Infusion Transfusion': ['Infusion Transfusion', 'Infusion-Transfusion', 'infusion-transfusion'],
    'Urology': ['Urology', 'urology'],
    'Surgery Wound Drainage': ['Surgery Wound Drainage', 'surgery-wound-drainage'],
    'Central Venous Access Catheters': ['Central Venous Access Catheters', 'central-venous-access-catheters']
  };

  
  // Find the actual category name that matches either the readable format or URL format
  const actualCategory = Object.keys(categoryMapping).find(key =>
    key === readableCategory ||
    categoryMapping[key as keyof typeof categoryMapping].includes(category || '')
  ) || readableCategory;

  const subcategoryMap = {
    'Infusion Transfusion': [
      'IV Cannula',
      'Safety IV Cannula',
      'Three Way Stop Cock',
      'I. V. Infusion Set',
      'Burette Set',
      'Extension Tube',
      'Multiway',
      'Blood Transfusion Set',
      'Accessories'
    ],
    'Urology': ['Foley Catheter'],
    'Surgery Wound Drainage': [
      'Yankaur Suction Set',
      'Closed Wound Suction Unit',
      'Thoracic Catheter'
    ],
    'Central Venous Access Catheters': ['Central Venous Catheter']
  } as const;

  type CategoryKey = keyof typeof subcategoryMap;

  const subcategories =
    actualCategory && Object.keys(subcategoryMap).includes(actualCategory)
      ? subcategoryMap[actualCategory as CategoryKey]
      : [];

  // Initialize with 'All Products' and ensure it stays that way on component mount
  const [selectedCategory, setSelectedCategory] = React.useState(
    subcategoryFromUrl || 'All Products'
  );
  const [searchTerm, setSearchTerm] = React.useState('');

  // Reset to 'All Products' when category changes
  React.useEffect(() => {
    if (subcategoryFromUrl) {
      setSelectedCategory(subcategoryFromUrl);
    } else {
      setSelectedCategory('All Products');
    }
  }, [category, actualCategory, subcategoryFromUrl]);

  const categoryDesc = [
    "When oral medications aren't enough, infusion therapy provides critical treatment by delivering medication directly into the bloodstream. It's essential for managing severe conditions like unresponsive infections, cancer-related pain, dehydration, and gastrointestinal diseases. Eversure supports this vital process with a comprehensive portfolio of infusion therapy products. Our entire range is CE-certified and meets global quality standards, making IV products more efficient for clinicians and less painful for patients.",
    "A central venous catheter (CVC), or central line, is a thin, flexible tube inserted into a large vein. It is typically placed in the neck, chest, or groin, with its tip positioned in a major vein near the heart. This device provides reliable, long-term access for administering medications, fluids, and nutrition directly into the bloodstream",
    "Urology is the medical specialty that addresses diseases of the male and female urinary tract, including the kidneys, bladder, and urethra. As a sensitive field of medicine, urology demands meticulous attention to detail from diagnosis through treatment. At Eversure, we understand the critical need for safety and quality in urological procedures. That is why our Foley Balloon Catheters are manufactured to meet the highest safety and industry standards, providing a reliable solution for patient care",
    "Wound drainage devices clear fluid from a wound to prevent infection and accelerate healing. Eversure provides a selection of DEHP-free devices to support this critical process in surgical and wound care. Our products include Closed Wound Suction Units, Yankauer Suction Sets, and Thoracic Drainage Catheters."
  ];

  // Enhanced and more reliable filtering logic
  const filteredProducts = React.useMemo(() => {
    return products.filter(product => {
      // Normalize category names for comparison (convert to lowercase and replace spaces/hyphens)
      const normalizeCategory = (cat) => cat ? cat.toLowerCase().replace(/[-\s]/g, '') : '';
      
      const productCategoryNormalized = normalizeCategory(product.category);
      const actualCategoryNormalized = normalizeCategory(actualCategory);
      const readableCategoryNormalized = normalizeCategory(readableCategory);
      const urlCategoryNormalized = normalizeCategory(category);

      // First filter by the main category from params (only if category is specified)
      const matchesMainCategory = !actualCategory ||
        productCategoryNormalized === actualCategoryNormalized ||
        productCategoryNormalized === readableCategoryNormalized ||
        productCategoryNormalized === urlCategoryNormalized ||
        // Additional fallback matches
        product.category === actualCategory ||
        product.category === readableCategory ||
        product.category === category;

      // Then filter by selected subcategory (simplified logic)
      const matchesSubCategory = selectedCategory === 'All Products' ||
        product.product_name === selectedCategory ||
        product.sub_category === selectedCategory;

      // Search filter
      const matchesSearch = !searchTerm ||
        (product.product_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description || '').toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMainCategory && matchesSubCategory && matchesSearch;
    });
  }, [actualCategory, readableCategory, category, selectedCategory, searchTerm, products]);

  return (
    <div className="">
      {/* Hero */}
      <section
        className="text-white py-48 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${actualCategory === 'Infusion Transfusion'
            ? '/heroimages/infusion.jpeg'
            : actualCategory === 'Urology'
              ? '/heroimages/urology.jpeg'
              : actualCategory === 'Surgery Wound Drainage'
                ? '/heroimages/surgery.jpeg'
                : actualCategory === 'Central Venous Access Catheters'
                  ? '/heroimages/cvc.jpeg'
                  : '/heroimages/surgery.jpeg'
            }")`,
          backgroundPosition: 'center 60%'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-normal mb-4">
            {actualCategory || 'All Products'}
          </h1>
        </div>
      </section>

      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-[#309ed9]">
            <p className="text-gray-700 text-base leading-relaxed">
              {actualCategory === 'Infusion Transfusion'
                ? categoryDesc[0]
                : actualCategory === 'Urology'
                  ? categoryDesc[2]
                  : actualCategory === 'Surgery Wound Drainage'
                    ? categoryDesc[3]
                    : actualCategory === 'Central Venous Access Catheters'
                      ? categoryDesc[1]
                      : 'Browse our comprehensive product range designed for medical professionals.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Filters section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-start space-x-4">
              <Filter className="h-5 w-5 text-gray-600 mt-2 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                    // Update URL to remove subcategory parameter
                    navigate(`/products/${category}`, { replace: true });
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition-colors ${selectedCategory === 'All Products'
                      ? 'border-b-4 border-yellow-400'
                      : ''
                    }`}
                >
                  All Products
                </button>
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedCategory(sub);
                      // Update URL with subcategory parameter
                      navigate(`/products/${category}?subcategory=${encodeURIComponent(sub)}`, { replace: true });
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition-colors ${selectedCategory === sub
                        ? 'border-b-4 border-yellow-400'
                        : ''
                      }`}
                    >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#309ed9] focus:border-transparent"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div onClick={() => navigate(`/products/${category}/${product.id}`)} key={product.id} className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                {/* Custom image container with fixed dimensions */}
               <div className="w-full max-w-[289px] h-[309px] mx-auto overflow-hidden rounded-lg border-blue-100 border-2">
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = '/placeholder-product.jpg'; 
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#309ed9] mb-2">
                    {product.product_name}
                  </h3>
                  <p className='text-sm font-medium text-gray-700 mb-2'>{product.addition}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 hover:text-[#309ed9] transition-colors duration-200">
                      {product.sub_desc}
                    </span>
                  </div>
                </div>
                {/* Updated Read More button - Always visible on mobile, hover on desktop */}
                <button
                  className="flex items-center text-sm font-medium text-[#309ed9] transition-all duration-200 px-6 pb-6 md:opacity-0 md:group-hover:opacity-100"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-2">No products found.</p>
              <p className="text-gray-500 text-sm">
                {searchTerm ? 'Try adjusting your search terms.' : 'Try selecting "All Products" or a different category.'}
              </p>
              {selectedCategory !== 'All Products' && (
                <button
                  onClick={() => setSelectedCategory('All Products')}
                  className="mt-4 px-4 py-2 bg-[#309ed9] text-white rounded-lg hover:bg-[#2889c4] transition-colors"
                >
                  Show All Products
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;