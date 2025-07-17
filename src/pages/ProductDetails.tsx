import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Package, FileText, Settings } from 'lucide-react';
import { Product, products } from '../data/ProductsData';


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
            className="text-teal-600 hover:text-teal-700 font-medium"
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
    <div className="py-16">
      {/* Navigation */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate(`/products/${category}`)}
            className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {readableCategory}
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-500 bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {product.product_name}
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                {product.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  <span className="text-sm">Medical Grade</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span className="text-sm">Quality Assured</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Product Features */}
              {product.product_features && product.product_features.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="h-6 w-6 text-teal-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.product_features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-teal-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Product Description</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description || 'This product is designed with the highest quality standards for medical applications. Our commitment to excellence ensures reliable performance and patient safety.'}
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-2">
                      <dt className="text-sm font-medium text-gray-500">Category</dt>
                      <dd className="text-lg text-gray-900">{product.category}</dd>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <dt className="text-sm font-medium text-gray-500">Product Type</dt>
                      <dd className="text-lg text-gray-900">Medical Device</dd>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-2">
                      <dt className="text-sm font-medium text-gray-500">Quality Standard</dt>
                      <dd className="text-lg text-gray-900">ISO Certified</dd>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <dt className="text-sm font-medium text-gray-500">Sterility</dt>
                      <dd className="text-lg text-gray-900">Sterile</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Product Info Card */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-900 mb-4">Product Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-teal-700">Availability:</span>
                    <span className="font-medium text-teal-900">In Stock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Packaging:</span>
                    <span className="font-medium text-teal-900">Sterile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Material:</span>
                    <span className="font-medium text-teal-900">Medical Grade</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need More Information?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our medical device specialists for detailed product information and specifications.
                </p>
                <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200">
                  Contact Us
                </button>
              </div>

              {/* Related Products */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Products</h3>
                <div className="space-y-3">
                  {products
                    .filter(p => p.category === product.category && p.id !== product.id)
                    .slice(0, 3)
                    .map((relatedProduct) => (
                      <button
                        key={relatedProduct.id}
                        onClick={() => navigate(`/products/${category}/${relatedProduct.id}`)}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.product_name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {relatedProduct.product_name}
                            </h4>
                            <p className="text-xs text-gray-500">{relatedProduct.category}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;