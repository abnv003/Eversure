import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Medical Drive', 'Healthcare City, HC 12345', 'United States']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Support)']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@polymedicure.com', 'support@polymedicure.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-teal-100">
              Get in touch with our team to discuss your medical device needs or request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Facility</h2>
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Location</p>
              </div>
              <div className="space-y-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
                  <p className="text-gray-600 mb-2">
                    For urgent technical support or emergency inquiries, please call our 24/7 hotline:
                  </p>
                  <p className="text-teal-600 font-semibold">+1 (555) 911-HELP</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Certification</h3>
                  <p className="text-gray-600 mb-2">
                    Interested in product training or certification programs? Contact our education team:
                  </p>
                  <p className="text-green-600 font-semibold">training@polymedicure.com</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-600 mb-2">
                    Explore partnership and distribution opportunities with our business development team:
                  </p>
                  <p className="text-purple-600 font-semibold">partnerships@polymedicure.com</p>
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