import React, { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'ISO 13485:2016 Quality Management Systems',
      category: 'Quality Assurance',
      issueDate: '2023-12-15',
      expiryDate: '2026-12-15',
      image: '/api/placeholder/600/800'
    },
    {
      id: 2,
      title: 'FDA 510(k) Medical Device Clearance',
      category: 'Regulatory Compliance',
      issueDate: '2023-10-22',
      expiryDate: '2028-10-22',
      image: '/api/placeholder/600/800'
    },
    {
      id: 3,
      title: 'CE Mark Certification',
      category: 'European Compliance',
      issueDate: '2023-11-08',
      expiryDate: '2026-11-08',
      image: '/api/placeholder/600/800'
    },
    {
      id: 4,
      title: 'Good Manufacturing Practice (GMP)',
      category: 'Manufacturing Standards',
      issueDate: '2023-09-12',
      expiryDate: '2025-09-12',
      image: '/api/placeholder/600/800'
    },
    {
      id: 5,
      title: 'Medical Device Single Audit Program (MDSAP)',
      category: 'International Standards',
      issueDate: '2023-08-30',
      expiryDate: '2026-08-30',
      image: '/api/placeholder/600/800'
    },
    {
      id: 6,
      title: 'ISO 14971:2019 Risk Management',
      category: 'Risk Management',
      issueDate: '2023-07-18',
      expiryDate: '2026-07-18',
      image: '/api/placeholder/600/800'
    }
  ];

  const categories = ['All', 'Quality Assurance', 'Regulatory Compliance', 'European Compliance', 'Manufacturing Standards', 'International Standards', 'Risk Management', 'Safety Standards', 'Sterilization Standards'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Certifications</h1>
            <p className="text-xl text-teal-100">
              View our comprehensive collection of industry certifications and compliance documents.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-teal-100 hover:text-teal-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate) => (
              <div key={certificate.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group">
                <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Certificate Image
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
                    <button
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      title="Download Certificate"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-teal-100 text-teal-600 rounded-full">
                      {certificate.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                    {certificate.title}
                  </h3>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</p>
                    <p>Expires: {new Date(certificate.expiryDate).toLocaleDateString()}</p>
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
            Showing {filteredCertificates.length} of {certificates.length} certificates
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
                <p className="text-sm text-gray-600">{selectedCertificate.category}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  title="Download Certificate"
                >
                  <Download className="h-5 w-5" />
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
            <div className="p-4">
              <div className="bg-gray-200 aspect-[3/4] max-h-[70vh] flex items-center justify-center text-gray-500">
                Full Certificate Image
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
            <button className="bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
              Contact for Verification
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;