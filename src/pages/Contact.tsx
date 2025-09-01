import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Download, ChevronDown } from 'lucide-react';
import LocationMap from '../components/LocationMap';
import { useNavigate } from 'react-router-dom';
import { countryCodes } from '../data/Countries';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [downloadBrochure, setDownloadBrochure] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+91',
    flag: '🇮🇳',
    name: 'India'
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const mailData = {
      name: formData.name,
      contact: formData.email + (formData.phone ? ` | Phone: ${selectedCountry.code}${formData.phone}` : ''),
      subject: `${formData.subject} - ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
      body: formData.message
    };

    try {
      const response = await fetch('https://eversure-final.onrender.com/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        if (downloadBrochure) {
          const link = document.createElement('a');
          link.href = '/brochure.pdf';
          link.download = 'brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
      } else {
        setSubmitStatus('error');
        console.error('Server error:', result.error);
      }
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-0">
      {/* Hero Section */}
      <section style={{backgroundColor: '#309ed9'}} className="text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">Contact Us</h1>
            <nav className="text-base opacity-90 text-center text-gray-200">
              <button
                onClick={() => navigate('/')}
                className="hover:underline transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <span className="mx-2 text-white">/</span>
              <button
                onClick={() => console.log('Navigate to contact')}
                className="hover:underline transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your message! We will get back to you soon.
                    {downloadBrochure && " Your brochure download should start automatically."}
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          disabled={isSubmitting}
                          className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <span className="text-lg mr-1">{selectedCountry.flag}</span>
                          <span className="text-sm font-medium text-gray-700 mr-1">{selectedCountry.code}</span>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </button>
                        
                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {countryCodes.map((country, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full flex items-center px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-left"
                              >
                                <span className="text-lg mr-2">{country.flag}</span>
                                <span className="text-sm font-medium mr-2">{country.code}</span>
                                <span className="text-sm text-gray-600 truncate">{country.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:border-transparent focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed" 
                      />
                    </div>                                                                                    
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed" 
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent resize-none focus:ring-2 focus:ring-[#309ed9] disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                {/* Fixed Brochure Download Toggle */}
                <div className="flex items-center space-x-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={downloadBrochure}
                      onChange={(e) => setDownloadBrochure(e.target.checked)}
                      disabled={isSubmitting}
                      className="sr-only"
                    />
                    <div 
                      className={`w-11 h-6 rounded-full peer transition-colors duration-200 ${
                        downloadBrochure ? 'bg-[#309ed9]' : 'bg-gray-200'
                      } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div 
                        className={`absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-transform duration-200 ${
                          downloadBrochure ? 'transform translate-x-full' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                  <div className="flex items-center space-x-2">
                    <Download className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Download Brochure
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  style={{backgroundColor: isSubmitting ? '#6b7280' : '#309ed9'}}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Visit Our Facility</h2>
              <div className="flex-1 min-h-[600px]">
                <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                <div className="h-full min-h-[550px] w-full">
                  <LocationMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;