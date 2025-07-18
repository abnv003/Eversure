import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const productOfferings = [
    {
      title: 'Infusion & Transfusion Therapy',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Aneshesia',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Gastroenterology',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Urology',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Surgery & Wound Drainage',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Central Venous Access Catheters',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Medical Technology"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                  Empowering health through innovation
                </h1>
                <p className="text-lg mb-8 text-gray-200 leading-relaxed max-w-2xl">
                  At Eversure, we believe that innovation is the cornerstone of ensuring access to the best healthcare solutions for all. At the heart of our operations is the strategic integration of automation, which drives operational efficiency and precision in patient care. Our approach focuses on not just addressing the current needs of healthcare but also anticipating the demands of tomorrow. In an era characterized by rapid medical transformation, we remain committed to developing new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isAboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <div className="mb-6">
                <h2 className="text-4xl font-light text-teal-600 mb-4">About Us</h2>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Eversure is a global leader in the medical device industry, renowned for its extensive range of high-quality medical devices. Since our establishment in 1997, the company has upheld a steadfast commitment to innovation and excellence, envisioning a world where top-tier healthcare is universally accessible. Our expansive global reach, cutting edge technologies and advanced manufacturing capabilities...
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  to="/about"
                  className="bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Learn More About Eversure
                </Link>
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-700 transition-colors">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${
              isAboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare Professional with Patient"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Offerings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-teal-600 mb-4">Our Product Offerings</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productOfferings.map((product, index) => (
              <div
                onClick={() => navigate(`/products/${product.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`)}
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex-grow flex items-center">
                    {product.title}
                  </h3>
                  <div className="mt-auto">
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;