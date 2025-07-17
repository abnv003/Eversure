import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();  

  const navigation = [
    { name: 'Company', href: '/about' },
    { name: 'Product & Therapies', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Event', href: '/events' },
    { name: 'Certificates', href: '/certs' }
  ];

  const categories = [
    'Infusion & Transfusion Therapy',
    'Anesthesia',
    'Gastroenterology',
    'Urology',
    'Surgery & Wound Drainage',
    'Central Venous Access Catheters',
  ];

  const isActive = (path: string) => location.pathname === path;

  const formatCategoryPath = (category: string) => {
    return `/products/${encodeURIComponent(category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm mr-1"></div>
              <div className="w-8 h-8 bg-teal-500 rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-teal-600 ml-2">EVERSURE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  {navigation.map((item) =>
    item.name === 'Product & Therapies' ? (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div>
          <button
            className={`flex items-center px-5 py-3 text-sm font-medium transition-colors duration-200 hover:text-teal-600 ${
              isActive(item.href)
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-700'
            }`}
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute left-0 mt-0 pt-3 w-[32rem] bg-white shadow-lg rounded-md border z-50 transition-opacity duration-200 ${
            showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {categories.map((category) => (
            <Link
              key={category}
              to={formatCategoryPath(category)}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
              onClick={() => setShowDropdown(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link
        key={item.name}
        to={item.href}
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-600 ${
          isActive(item.href)
            ? 'text-teal-600 border-b-2 border-teal-600'
            : 'text-gray-700'
        }`}
      >
        {item.name}
      </Link>
    )
  )}
  <button className="p-2 text-gray-700 hover:text-teal-600">
    <Search className="h-5 w-5" />
  </button>
</div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) =>
              item.name === 'Product & Therapies' ? (
                <div key={item.name}>
                  <span className="block px-3 py-2 text-base font-medium text-gray-700">Product & Therapies</span>
                  <div className="ml-4">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={formatCategoryPath(category)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
