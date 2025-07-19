import { useParams, useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
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
            className="font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: '#309ed9' }}
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
      <section style={{ backgroundColor: '#309ed9' }} className="text-white py-12">
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
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 aspect-square w-[480px]">
            <img
              src={product.image}
              alt={product.product_name}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#309ed9' }}>
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
                style={{ backgroundColor: '#309ed9' }}
              >
                <FileText className="h-5 w-5 mr-2" />
                View All Available Variants
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-[#309ed9] mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 mb-12">
            {product.product_features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-3 text-[#309ed9] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>



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
              style={{ backgroundColor: '#309ed9' }}
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