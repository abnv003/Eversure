import { useState } from 'react';
import { Eye, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Certificate = () => {
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const certificates = [
    {
      id: 1,
      image: '/ISO 13485_Q5 115632 0001 Rev.00_Valid 2023-04-15 to 2026-04-14 (2)_page-0001.jpg'
    },
    {
      id: 3,
      image: '/CE Certificate G10 115632 0002 Rev. 00_Valid 2023-07-18 Until 2028-07-17 (1) (1)_page-0001.jpg'
    }
  ];

  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section style={{backgroundColor: '#309ed9'}} className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">Our Certifications</h1>
            <nav className="text-base opacity-90 text-center text-gray-200">
            <button
              onClick={() => navigate('/')}
              className="hover:underline transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <span className="mx-2 text-white">/</span>
            <button
              onClick={() => navigate(`/certs`)}
              className="hover:underline transition-colors duration-200 font-medium"
            >
              Certificates
            </button>
          </nav>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
<div 
  key={certificate.id} 
  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group"
>
                <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <img src={certificate.image} alt='cert-image'/>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => openModal(certificate)}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      title="View Certificate"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Count */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Showing {certificates.length} certificates
          </p>
        </div>
      </section>

      {/* Modal for Certificate Viewing */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedCertificate.title}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
                  className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  title="Zoom In"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
                  className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-xs px-3"
                  title="Reset Zoom"
                >
                  {zoomLevel}
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto max-h-[70vh]">
              <div className="bg-gray-200 aspect-[3/4] flex items-center justify-center text-gray-500">
                <img 
                  src={selectedCertificate.image} 
                  alt='cert-image'
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s ease-in-out',
                    cursor: zoomLevel > 1 ? 'grab' : 'default'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality & Compliance</h2>
            <p className="text-gray-600 mb-8">
              Our comprehensive certifications demonstrate our commitment to quality, safety, and regulatory compliance in medical device manufacturing.
            </p>
            <button onClick={()=>{navigate('/contact')}} className="text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200" style={{backgroundColor: '#309ed9'}}>
              Contact for Verification
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;