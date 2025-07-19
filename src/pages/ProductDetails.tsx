// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Check, Package, FileText, Settings } from 'lucide-react';
// import { Product, products } from '../data/ProductsData';


// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { category, id } = useParams();
  
//   const product: Product | undefined = products.find(p => p.id === parseInt(id || '0'));
  
//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
//           <button
//             onClick={() => navigate('/products')}
//             className="font-medium transition-colors duration-200" style={{color: '#309ed9'}} onMouseEnter={(e) => e.target.style.color = '#1e7b85'} onMouseLeave={(e) => e.target.style.color = '#309ed9'}
//           >
//             Back to Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const readableCategory = category
//     ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
//     : 'Products';

//   return (
//     <div className="py-16">
//       {/* Navigation */}
//       <section className="bg-gray-50 py-4">
//         <div className="max-w-7xl mx-auto px-4">
//           <button
//             onClick={() => navigate(`/products/${category}`)}
//             className="flex items-center font-medium transition-colors duration-200" style={{color: '#309ed9'}} onMouseEnter={(e) => e.target.style.color = '#1e7b85'} onMouseLeave={(e) => e.target.style.color = '#309ed9'}
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to {readableCategory}
//           </button>
//         </div>
//       </section>

//       {/* Hero Section */}
//       <section style={{backgroundColor: '#309ed9'}} className="text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{backgroundColor: 'rgba(48, 158, 217, 0.2)'}}>
//                 {product.category}
//               </div>
//               <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//                 {product.product_name}
//               </h1>
//               <p className="text-xl mb-8" style={{color: '#f0f9ff'}}>
//                 {product.description}
//               </p>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <Package className="h-5 w-5 mr-2" />
//                   <span className="text-sm">Medical Grade</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Check className="h-5 w-5 mr-2" />
//                   <span className="text-sm">Quality Assured</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
//                 <img
//                   src={product.image}
//                   alt={product.product_name}
//                   className="w-full h-auto rounded-lg shadow-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-8">
              
//               {/* Product Features */}
//               {product.product_features && product.product_features.length > 0 && (
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//                   <div className="flex items-center mb-6">
//                     <Settings className="h-6 w-6 mr-3" style={{color: '#309ed9'}} />
//                     <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {product.product_features.map((feature, index) => (
//                       <div key={index} className="flex items-start">
//                         <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#309ed9'}} />
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
              
//               {/* Product Info Card */}
//               <div className="rounded-lg p-6 border" style={{background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)', borderColor: 'rgba(48, 158, 217, 0.3)'}}>
//                 <h3 className="text-lg font-semibold mb-4" style={{color: '#1e3a8a'}}>Product Information</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span style={{color: '#1e40af'}}>Product Code:</span>
//                     <span className="font-medium" style={{color: '#1e3a8a'}}>{product.product_code}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span style={{color: '#1e40af'}}>Sizes:</span>
//                     <span className="font-medium" style={{color: '#1e3a8a'}}>{product.sizes}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Card */}
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Need More Information?</h3>
//                 <p className="text-gray-600 mb-4">
//                   Contact our medical device specialists for detailed product information and specifications.
//                 </p>
//                 <button onClick={()=>{navigate('/contact')}} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200" style={{backgroundColor: '#309ed9'}}>
//                   Contact Us
//                 </button>
//               </div>

//               {/* Related Products */}
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Products</h3>
//                 <div className="space-y-3">
//                   {products
//                     .filter(p => p.category === product.category && p.id !== product.id)
//                     .slice(0, 3)
//                     .map((relatedProduct) => (
//                       <button
//                         key={relatedProduct.id}
//                         onClick={() => navigate(`/products/${category}/${relatedProduct.id}`)}
//                         className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
//                       >
//                         <div className="flex items-center space-x-3">
//                           <img
//                             src={relatedProduct.image}
//                             alt={relatedProduct.product_name}
//                             className="w-12 h-12 object-cover rounded"
//                           />
//                           <div>
//                             <h4 className="text-sm font-medium text-gray-900">
//                               {relatedProduct.product_name}
//                             </h4>
//                             <p className="text-xs text-gray-500">{relatedProduct.category}</p>
//                           </div>
//                         </div>
//                       </button>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductDetails;



import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Package, FileText, Settings } from 'lucide-react';

// Mock product data - replace with your actual data source
interface Product {
  id: number;
  product_name: string;
  description: string;
  product_code: string;
  sizes: string;
  category: string;
  image: string;
  product_features: string[];
}

const products: Product[] = [
  {
    id: 1,
    product_name: "Polyway Pro Click",
    description: "Advanced three-way stopcock with 450 Click",
    product_code: "13026, 13058, 13600",
    sizes: "Various sizes available",
    category: "Infusion Therapy",
    image: "/lovable-uploads/1e6a4ee8-660b-40fb-994f-bfa9f480ab2d.png",
    product_features: [
      "Multiple Infusions",
      "360° Rotation", 
      "Pressure Capacity",
      "Lipid Resistance",
      "45-Degree Click Mechanism",
      "Enhanced Safety Features"
    ]
  }
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { category, id } = useParams();
  
  const product: Product | undefined = products.find(p => p.id === parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/products')}
            className="font-medium transition-colors duration-200 hover:opacity-80"
            style={{color: '#309ed9'}}
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const readableCategory = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'Products';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section style={{backgroundColor: '#309ed9'}} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 opacity-80">
            <button
              onClick={() => navigate('/')}
              className="hover:underline transition-colors duration-200"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <button
              onClick={() => navigate(`/products/${category}`)}
              className="hover:underline transition-colors duration-200"
            >
              {readableCategory}
            </button>
            <span className="mx-2">/</span>
            <span>{product.product_name}</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            {product.product_name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <img
              src={product.image}
              alt={product.product_name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#309ed9'}}>
                {product.product_name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              {/* Product Codes */}
              <div className="text-sm text-gray-500 mb-6">
                <span className="font-medium">Product Code: </span>
                {product.product_code} | <span className="font-medium">Sizes: </span>{product.sizes}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                The {product.product_name} is an advanced medical device specifically 
                designed for efficient and secure use in clinical settings. Its 
                innovative design and unique features enhance functionality, making it 
                ideal for administering a variety of treatments.
              </p>

              <button 
                onClick={() => navigate('/contact')}
                className="text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center"
                style={{backgroundColor: '#309ed9'}}
              >
                <FileText className="h-5 w-5 mr-2" />
                View All Available Variants
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {product.product_features && product.product_features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.product_features.map((feature, index) => {
                // Create feature cards with titles and descriptions
                const featureCards = [
                  {
                    title: "Multiple Infusions",
                    description: "Simultaneous access to multiple lines for complex treatments."
                  },
                  {
                    title: "360° Rotation", 
                    description: "Flexible positioning without disrupting fluid flow."
                  },
                  {
                    title: "Pressure Capacity",
                    description: "Safe fluid delivery up to 5.5 bar."
                  },
                  {
                    title: "Lipid Resistance",
                    description: "Prevents blockage from lipid emulsions."
                  },
                  {
                    title: "45-Degree Click Mechanism",
                    description: "Tactile feedback for precise flow control."
                  },
                  {
                    title: "Enhanced Safety Features",
                    description: "Reduces risks of disconnection and leakage."
                  }
                ];

                // Use predefined cards or fall back to feature text
                const card = featureCards[index] || { 
                  title: feature, 
                  description: "Advanced medical device feature for enhanced clinical performance." 
                };

                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#309ed9'}}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Additional Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need More Information?</h3>
            <p className="text-gray-600 mb-6">
              Contact our medical device specialists for detailed product information, 
              technical specifications, and ordering details.
            </p>
            <button 
              onClick={() => navigate('/contact')} 
              className="w-full text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              style={{backgroundColor: '#309ed9'}}
            >
              Contact Our Specialists
            </button>
          </div>

          {/* Related Products */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Products</h3>
            <div className="space-y-4">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <button
                    key={relatedProduct.id}
                    onClick={() => navigate(`/products/${category}/${relatedProduct.id}`)}
                    className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.product_name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {relatedProduct.product_name}
                        </h4>
                        <p className="text-sm text-gray-500">{relatedProduct.category}</p>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;