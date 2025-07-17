import React from 'react';
import { Check, Shield, Award, Zap, ArrowRight, Star } from 'lucide-react';

const ProductDetail = () => {
  const features = [
    {
      icon: Shield,
      title: 'Medical Grade Quality',
      description: 'Certified to meet the highest medical industry standards and regulations.'
    },
    {
      icon: Award,
      title: 'FDA Approved',
      description: 'Full FDA clearance ensuring safety and efficacy for medical use.'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge innovation designed for superior performance and reliability.'
    },
    {
      icon: Check,
      title: 'Proven Results',
      description: 'Extensively tested and validated in clinical settings worldwide.'
    }
  ];

  const specifications = [
    { label: 'Material', value: 'Medical Grade Stainless Steel' },
    { label: 'Dimensions', value: '15.2 x 3.8 x 2.1 cm' },
    { label: 'Weight', value: '185g' },
    { label: 'Sterilization', value: 'Autoclave Compatible' },
    { label: 'Warranty', value: '2 Years International' },
    { label: 'Certification', value: 'FDA, CE, ISO 13485' }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-teal-100">(4.8/5 from 127 reviews)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Surgical Instrument Pro</h1>
            <p className="text-xl text-teal-100">
              Precision-engineered medical device designed for optimal performance in critical surgical procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-96">
              <p className="text-gray-500 text-lg">Product Image</p>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-100 text-teal-600 rounded-full mb-4">
                  Professional Grade
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Description</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  This state-of-the-art surgical instrument represents the pinnacle of medical device engineering. 
                  Crafted with precision-grade materials and designed by leading medical professionals, it delivers 
                  unparalleled accuracy and reliability in the most demanding surgical environments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The ergonomic design ensures comfortable handling during extended procedures, while the advanced 
                  surface coating provides superior grip and resistance to contamination. Each unit undergoes rigorous 
                  quality testing to meet international medical standards.
                </p>
              </div>

              <button className="bg-teal-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center">
                View All Available Variants
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed with the latest medical technology and built to exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Product?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Trusted by over 500+ hospitals worldwide</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduces procedure time by up to 30%</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">99.9% success rate in clinical trials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 technical support included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of medical professionals who trust our advanced surgical instruments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Request Quote
            </button>
            <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;