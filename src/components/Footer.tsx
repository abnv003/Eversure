import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">EVERSURE</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading manufacturer of high-quality medical devices and healthcare solutions. 
              Committed to innovation, safety, and improving patient outcomes worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">123 Medical Drive, Healthcare City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">info@eversure.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-teal-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Eversure. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;