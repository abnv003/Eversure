import { useParams, useNavigate } from 'react-router-dom';
import { Phone, Mail, FileText } from 'lucide-react';
import { Product, products } from '../data/ProductsData';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { category, id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
    if (zoomLevel <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: any) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: any) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: any) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

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

          <div className="bg-white rounded-lg ml-3 p-6 shadow-sm border border-gray-200 aspect-square w-[480px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.product_name}
              className="max-w-full max-h-full rounded-lg object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={openModal}
            />
          </div>


          {/* Modal Overlay */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              {/* Modal Content */}
              <div
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 shadow-lg hover:bg-opacity-70 transition-colors duration-200 z-20"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-20">
                  <button
                    onClick={zoomIn}
                    className="bg-black bg-opacity-50 text-white rounded-full p-2 shadow-lg hover:bg-opacity-70 transition-colors duration-200"
                    aria-label="Zoom in"
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                  <button
                    onClick={zoomOut}
                    className="bg-black bg-opacity-50 text-white rounded-full p-2 shadow-lg hover:bg-opacity-70 transition-colors duration-200"
                    aria-label="Zoom out"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                </div>

                {/* Zoom Level Indicator */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-20">
                  {Math.round(zoomLevel * 100)}%
                </div>

                {/* Image Container */}
                <div
                  className="w-full h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onWheel={handleWheel}
                  style={{
                    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                  }}
                >
                  {/* Large Image */}
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-200"
                    style={{
                      transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                      transformOrigin: 'center center'
                    }}
                    draggable={false}
                  />
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm z-20">
                  Scroll to zoom • Drag to pan
                </div>
              </div>
            </div>
          )}

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#309ed9' }}>
                {product.product_name}
              </h2>

              {/* Product Codes */}
              <div className="text-sm text-gray-500 mb-6">
                <span className="font-medium">Product Code: </span>
                {product.product_code} | <span className="font-medium">Sizes: </span>{product.sizes}
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* <p className="text-gray-700 leading-relaxed mb-8">
                The {product.product_name} is an advanced medical device specifically
                designed for efficient and secure use in clinical settings. Its
                innovative design and unique features enhance functionality, making it
                ideal for administering a variety of treatments.
              </p> */}

              <button
                onClick={() => window.open('/specs.pdf', '_blank')}
                className="text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center"
                style={{ backgroundColor: '#309ed9' }}
              >
                <FileText className="h-5 w-5 mr-2" />
                View All Available Variants
              </button>
              <div className="bg-white border mt-10 border-gray-200 rounded-lg p-6 shadow-sm max-w-lg">
                <span className="text-md font-medium text-gray-600 mb-3 block">
                  Options
                </span>
                <div className="flex flex-wrap gap-4">
                  {product.options?.map((option, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-50 text-[#309ed9] text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
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
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Inquiry Matters</h3>
            <p className="text-gray-600 mb-6">
              At Eversure, your concerns are our priority. Whether you require further information, have a question, or wish to schedule an appointment, we are here to assist you, just share in the form.
              <p className='mt-6'>
                Or else alternatively you can email us or call us at the below contact details-
              </p>
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-8 w-8" style={{ color: '#309ed9' }} />
                <span className="text-sm text-gray-900">+91-020-6766-1200</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-8 w-8" style={{ color: '#309ed9' }} />
                <span className="text-sm text-gray-900">eversure@rathigroup.com</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="w-full mt-6 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: '#309ed9' }}
            >
              Contact Us
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