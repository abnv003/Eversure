import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);


  const location = useLocation();  

  const navigation = [
    { name: 'Company', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Certificates', href: '/certs' },
    { name: 'Event', href: '/events' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const categories = [
    'Infusion & Transfusion Therapy',
    // 'Anesthesia',
    // 'Gastroenterology',
    'Urology',
    'Surgery & Wound Drainage',
    'Central Venous Access Catheters',
  ];

  const drop_company = [
    'About Us',
    'Corporate Social Responsibility',
    'Sustainability'
  ];

  const isActive = (path: string) => location.pathname === path;

  const formatCategoryPath = (category: string) => {
    return `/products/${encodeURIComponent(category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}`;
  };

  const formatCompanyPath = (companyItem: any) => {
  // Format the path based on your routing structure  
  return `/company/${companyItem.toLowerCase().replace(/\s+/g, '-')}`;
};

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <img className='h-10' src='/eversure-logo.jpg'/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  {navigation.map((item) =>
  item.name === 'Products' ? (
    <div
      key={item.name}
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div>
        <button
          className={`flex items-center px-5 py-3 text-sm font-medium transition-colors duration-200 ${
            isActive(item.href)
              ? 'border-b-2'
              : 'text-gray-700 hover:text-gray-700'
          }`}
          style={{
            color: isActive(item.href) ? '#309ed9' : undefined,
            borderColor: isActive(item.href) ? '#309ed9' : undefined,
            ':hover': { color: '#309ed9' }
          }}
          onMouseEnter={(e) => e.target.style.color = '#309ed9'}
          onMouseLeave={(e) => e.target.style.color = isActive(item.href) ? '#309ed9' : '#374151'}
        >
          {item.name}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      {/* Dropdown Categories*/}
      <div
        className={`absolute left-0 mt-0 pt-3 w-[32rem] bg-white shadow-lg rounded-md border z-50 transition-opacity duration-200 ${
          showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {categories.map((category) => (
          <Link
            key={category}
            to={formatCategoryPath(category)}
            className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-700"
            style={{ ':hover': { backgroundColor: '#309ed9', opacity: 0.1, color: '#309ed9' } }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f0f9ff'; e.target.style.color = '#309ed9'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = '#374151'; }}
            onClick={() => setShowDropdown(false)}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  ) : item.name === 'Company' ? (
    <div
      key={item.name}
      className="relative"
      onMouseEnter={() => setShowCompanyDropdown(true)}
      onMouseLeave={() => setShowCompanyDropdown(false)}
    >
      <div>
        <button
          className={`flex items-center px-5 py-3 text-sm font-medium transition-colors duration-200 ${
            isActive(item.href)
              ? 'border-b-2'
              : 'text-gray-700 hover:text-gray-700'
          }`}
          style={{
            color: isActive(item.href) ? '#309ed9' : undefined,
            borderColor: isActive(item.href) ? '#309ed9' : undefined
          }}
          onMouseEnter={(e) => e.target.style.color = '#309ed9'}
          onMouseLeave={(e) => e.target.style.color = isActive(item.href) ? '#309ed9' : '#374151'}
        >
          {item.name}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      {/* Company Dropdown */}
      <div
        className={`absolute left-0 mt-0 pt-3 w-[32rem] bg-white shadow-lg rounded-md border z-50 transition-opacity duration-200 ${
          showCompanyDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {drop_company.map((companyItem) => (
          <Link
            key={companyItem}
            to={formatCompanyPath(companyItem)}
            className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-700"
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f0f9ff'; e.target.style.color = '#309ed9'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = '#374151'; }}
            onClick={() => setShowCompanyDropdown(false)}
          >
            {companyItem}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={item.name}
      to={item.href}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive(item.href)
          ? 'border-b-2'
          : 'text-gray-700'
      }`}
      style={{
        color: isActive(item.href) ? '#309ed9' : undefined,
        borderColor: isActive(item.href) ? '#309ed9' : undefined
      }}
      onMouseEnter={(e) => e.target.style.color = '#309ed9'}
      onMouseLeave={(e) => e.target.style.color = isActive(item.href) ? '#309ed9' : '#374151'}
    >
      {item.name}
    </Link>
  )
)}
  <button className="p-2 text-gray-700" style={{ ':hover': { color: '#309ed9' } }} onMouseEnter={(e) => e.target.style.color = '#309ed9'} onMouseLeave={(e) => e.target.style.color = '#374151'}>
    <Search className="h-5 w-5" />
  </button>
</div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              onMouseEnter={(e) => e.target.style.color = '#309ed9'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) =>
              item.name === 'Products' ? (
                <div key={item.name}>
                  <span className="block px-3 py-2 text-base font-medium text-gray-700">Products</span>
                  <div className="ml-4">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={formatCategoryPath(category)}
                        className="block px-3 py-2 text-sm text-gray-600"
                        onMouseEnter={(e) => e.target.style.color = '#309ed9'}
                        onMouseLeave={(e) => e.target.style.color = '#6b7280'}
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
                      ? 'hover:bg-gray-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    color: isActive(item.href) ? '#309ed9' : undefined,
                    backgroundColor: isActive(item.href) ? '#f0f9ff' : undefined
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#309ed9'; if (!isActive(item.href)) e.target.style.backgroundColor = '#f9fafb'; }}
                  onMouseLeave={(e) => { e.target.style.color = isActive(item.href) ? '#309ed9' : '#374151'; if (!isActive(item.href)) e.target.style.backgroundColor = ''; }}
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
