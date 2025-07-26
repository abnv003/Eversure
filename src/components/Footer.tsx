import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img className='h-10' src='/eversure-logo-bg.png' alt="Eversure Logo" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading manufacturer of high-quality medical devices and healthcare solutions.
              Committed to innovation, safety, and improving patient outcomes worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" style={{ color: '#309ed9' }} />
                <span className="text-sm text-gray-300">Gaia Apex, S.N. 33/2D, Viman Nagar, Pune-411 014, INDIA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#309ed9' }} />
                <span className="text-sm text-gray-300">+91-020-6766-1200</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" style={{ color: '#309ed9' }} />
                <span className="text-sm text-gray-300">eversure@rathigroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/company/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social Media */}
          <div>
            {/* Business Hours */}
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5" style={{ color: '#309ed9' }} />
                <div className="text-sm text-gray-300">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            {/* Follow Us On */}
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/EversurebyPolybondIndia/"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" style={{ color: '#309ed9' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/polybond-india-pvt-ltd-medical-division/"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" style={{ color: '#309ed9' }} />
              </a>
              <a
                href="https://x.com/PolybondM"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" style={{ color: '#309ed9' }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTWzxL1hXT63T8BFvs9n3ig?view_as=subscriber"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" style={{ color: '#309ed9' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Eversure - Medical Device Division of Polybond India Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;