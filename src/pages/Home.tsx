import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSustainabilityVisible, setIsSustainabilityVisible] = useState(false);
  const aboutRef = useRef(null);
  const sustainabilityRef = useRef(null);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    

    const sustainabilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSustainabilityVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    if (sustainabilityRef.current) {
      sustainabilityObserver.observe(sustainabilityRef.current);
    }

    return () => {
      aboutObserver.disconnect();
      sustainabilityObserver.disconnect();
    };
  }, []);

  const productOfferings = [
    {
      title: 'Infusion & Transfusion',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
          {/* IV Bag */}
          <path d="M25 20 Q25 15, 30 15 L45 15 Q50 15, 50 20 L50 40 Q50 50, 40 50 L35 50 Q25 50, 25 40 Z" fill="none" strokeWidth="2" />
          {/* Blood bag */}
          <path d="M55 25 Q55 20, 60 20 L75 20 Q80 20, 80 25 L80 45 Q80 55, 70 55 L65 55 Q55 55, 55 45 Z" fill="none" strokeWidth="2" />
          {/* IV fluid */}
          <path d="M28 25 Q28 23, 30 23 L47 23 Q47 25, 47 35 Q47 40, 42 40 L33 40 Q28 40, 28 35 Z" fill="currentColor" fillOpacity="0.2" />
          {/* Blood in bag */}
          <path d="M58 30 Q58 28, 60 28 L77 28 Q77 30, 77 40 Q77 45, 72 45 L63 45 Q58 45, 58 40 Z" fill="#dc2626" fillOpacity="0.3" />
          {/* Tubes */}
          <line x1="37.5" y1="50" x2="37.5" y2="70" strokeWidth="2" />
          <line x1="67.5" y1="55" x2="67.5" y2="70" strokeWidth="2" />
          {/* Y-connector */}
          <path d="M37.5 70 L52.5 75 L67.5 70" fill="none" strokeWidth="2" />
          <line x1="52.5" y1="75" x2="52.5" y2="85" strokeWidth="2" />
          {/* IV pole */}
          <line x1="15" y1="10" x2="15" y2="90" strokeWidth="2" />
          <line x1="15" y1="15" x2="25" y2="15" />
          <line x1="15" y1="20" x2="55" y2="20" />
          {/* Drips */}
          <circle cx="37.5" cy="62" r="1" fill="currentColor" />
          <circle cx="67.5" cy="63" r="1" fill="#dc2626" />
        </svg>
      )
    },
    {
      title: 'Urology',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
          {/* Kidneys */}
          <ellipse cx="35" cy="35" rx="8" ry="12" fill="none" strokeWidth="2" transform="rotate(-15 35 35)" />
          <ellipse cx="65" cy="35" rx="8" ry="12" fill="none" strokeWidth="2" transform="rotate(15 65 35)" />
          {/* Kidney detail */}
          <ellipse cx="35" cy="35" rx="4" ry="6" fill="none" strokeWidth="1" transform="rotate(-15 35 35)" />
          <ellipse cx="65" cy="35" rx="4" ry="6" fill="none" strokeWidth="1" transform="rotate(15 65 35)" />
          {/* Ureters */}
          <path d="M35 47 Q40 55, 45 65 Q48 70, 50 75" fill="none" strokeWidth="2" />
          <path d="M65 47 Q60 55, 55 65 Q52 70, 50 75" fill="none" strokeWidth="2" />
          {/* Bladder */}
          <ellipse cx="50" cy="75" rx="12" ry="8" fill="none" strokeWidth="2" />
          {/* Bladder detail */}
          <path d="M42 75 Q50 72, 58 75" fill="none" strokeWidth="1" />
          {/* Urethra */}
          <line x1="50" y1="83" x2="50" y2="90" strokeWidth="2" />
          {/* Catheter */}
          <path d="M20 85 Q30 80, 40 82 Q45 83, 50 83" fill="none" strokeWidth="2" strokeDasharray="2,2" />
          {/* Catheter bag */}
          <rect x="15" y="80" width="8" height="12" rx="2" fill="none" strokeWidth="1.5" />
          <path d="M17 85 L21 85 L21 88 L17 88 Z" fill="currentColor" fillOpacity="0.3" />
          {/* Cystoscope */}
          <line x1="70" y1="60" x2="85" y2="60" strokeWidth="2" />
          <rect x="82" y="58" width="6" height="4" rx="1" strokeWidth="1.5" />
          <circle cx="85" cy="60" r="1" fill="currentColor" />
          {/* Connection line to bladder */}
          <line x1="70" y1="60" x2="62" y2="70" strokeWidth="1" strokeDasharray="1,1" />
        </svg>
      )
    },
    {
      title: 'Surgery & Wound Drainage',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
          {/* Surgical incision */}
          <path d="M35 30 Q45 25, 55 30 L65 35" fill="none" strokeWidth="2" />
          {/* Sutures */}
          <path d="M38 32 L42 28 M45 30 L49 26 M52 32 L56 28 M59 34 L63 30" strokeWidth="1" />
          {/* Drainage tube */}
          <path d="M50 35 Q55 45, 60 55 Q65 65, 70 70" fill="none" strokeWidth="2" />
          {/* Drainage reservoir/bulb */}
          <circle cx="75" cy="75" r="8" fill="none" strokeWidth="2" />
          <path d="M70 72 Q75 68, 80 72 Q75 78, 70 75" fill="currentColor" fillOpacity="0.2" />
          {/* Scalpel */}
          <line x1="20" y1="20" x2="30" y2="30" strokeWidth="2" />
          <path d="M18 18 L22 22 L20 24 L16 20 Z" fill="currentColor" />
          {/* Forceps */}
          <path d="M15 50 L25 40 M15 55 L25 45" strokeWidth="2" />
          <path d="M25 40 Q30 38, 32 42 Q30 46, 25 45" fill="none" strokeWidth="1.5" />
          {/* Surgical scissors */}
          <path d="M75 20 L85 30 M80 15 L85 25" strokeWidth="2" />
          <circle cx="77" cy="22" r="2" fill="none" strokeWidth="1" />
          <circle cx="82" cy="17" r="2" fill="none" strokeWidth="1" />
          {/* Wound area */}
          <ellipse cx="50" cy="40" rx="15" ry="8" fill="none" strokeWidth="1" strokeDasharray="2,2" />
          {/* Drainage collection measurement */}
          <line x1="72" y1="82" x2="78" y2="82" strokeWidth="0.5" />
          <line x1="72" y1="78" x2="78" y2="78" strokeWidth="0.5" />
          {/* Connection tubing */}
          <line x1="67" y1="75" x2="62" y2="70" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Central Venous Access Catheters',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
          {/* Neck/chest outline */}
          <path d="M30 20 Q50 15, 70 20 L75 40 Q75 60, 70 80 L30 80 Q25 60, 25 40 Z" fill="none" strokeWidth="2" />
          {/* Central vein (subclavian/jugular) */}
          <path d="M45 25 Q50 30, 55 35 Q60 45, 55 55 Q50 65, 45 70" fill="none" strokeWidth="2" stroke="currentColor" />
          {/* CVC catheter insertion */}
          <line x1="52" y1="30" x2="52" y2="45" strokeWidth="2" />
          {/* Catheter tip in superior vena cava */}
          <circle cx="52" cy="45" r="2" fill="none" strokeWidth="1" />
          {/* External catheter portion */}
          <path d="M52 30 Q45 25, 35 25" fill="none" strokeWidth="2" />
          {/* Multi-lumen ports */}
          <circle cx="35" cy="25" r="3" fill="none" strokeWidth="1.5" />
          <circle cx="30" cy="28" r="2" fill="none" strokeWidth="1" />
          <circle cx="28" cy="22" r="2" fill="none" strokeWidth="1" />
          {/* Port labels */}
          <text x="25" y="26" fontSize="4" fill="currentColor">D</text>
          <text x="27" y="20" fontSize="4" fill="currentColor">P</text>
          {/* Securing sutures */}
          <path d="M48 32 L50 28 M54 32 L56 28" strokeWidth="1" />
          {/* Heart outline */}
          <path d="M45 55 Q40 50, 35 55 Q30 50, 30 58 Q30 68, 45 78 Q60 68, 60 58 Q60 50, 55 55 Q50 50, 45 55 Z" fill="none" strokeWidth="1" strokeDasharray="2,2" />
          {/* Catheter path to heart */}
          <path d="M52 45 Q50 52, 48 58" fill="none" strokeWidth="1" strokeDasharray="1,1" />
          {/* Chest wall */}
          <path d="M35 35 Q50 32, 65 35" fill="none" strokeWidth="1" />
          {/* Insertion site dressing */}
          <rect x="48" y="28" width="8" height="6" rx="1" fill="none" strokeWidth="1" strokeDasharray="1,1" />
        </svg>
      )
    }
  ];

  const formatCategoryPath = (category) => {
    return `/products/${encodeURIComponent(category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}`;
  };

  // const navigate = (path) => {
  //   console.log(`Navigating to: ${path}`);
  // };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-48 bg-black overflow-hidden w-full bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('/heroimages/homepage_main.png')`
        }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <div className="text-white max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-[clamp(1.5rem,5vw,4rem)] font-normal mb-6 sm:mb-8 leading-tight tracking-tight">
                  Innovating Care, Ensuring Comfort
                </h1>
                <p className="text-base md:text-lg mb-8 text-gray-100 leading-relaxed max-w-4xl mx-auto font-light">
                  At Eversure, we believe innovation is key to accessible, high-quality healthcare. By integrating automation, we enhance efficiency and precision in patient care. Our focus is both on current needs and future challenges, driving the development of transformative medical technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isAboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="mb-6">
                <h2 className="text-4xl font-light mb-4" style={{ color: '#309ed9' }}>About Us</h2>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Eversure is a brand of disposable medical devices from Polybond India Pvt Ltd, part of Pune's Rathigroup. Our world-class certified facility in Pune, India, utilizes advanced processes including injection moulding, extrusion, class 10000 clean room assembly, ETO sterilization, and automated packaging.
                <p className='mt-2'>
                  Our product range covers Infusion Therapy, Urology, Surgery & Wound Drainage, and Central Venous Access Catheters, promising innovation, quality, and reliability.
                </p>
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => { navigate('/company/about-us') }}
                  className="text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 bg-[#309ed9] hover:bg-yellow-400"
                >
                  Learn More About Eversure
                </button>
                <div onClick={() => { navigate('/company/about-us') }} className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-[#309ed9] hover:bg-yellow-400">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isAboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <img
                src="/heroimages/about-section.png"
                alt="Healthcare Professional with Patient"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Offerings Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4" style={{ color: '#309ed9' }}>Our Product Offerings</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productOfferings.map((product, index) => (
              <div
                onClick={() => navigate(formatCategoryPath(product.title))}
                key={index}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-colors duration-300 group cursor-pointer border bg-white text-gray-900 border-gray-100 hover:bg-[#309ed9] hover:text-white hover:border-[#309ed9]"
              >
                <div className="flex flex-col items-center text-center h-full min-h-[200px]">
                  <div className="mb-6">
                    <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-4 flex-grow flex items-center text-gray-600 group-hover:text-white transition-colors duration-300">
                    {product.title}
                  </h3>
                  <div className="mt-auto w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 group-hover:bg-white group-hover:text-teal-600 transition-colors duration-300">
                    <ArrowRight className="h-5 w-5 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="py-20 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isSustainabilityVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/heroimages/sustain_home.jpeg"
                  alt="Healthcare Professional with Patient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isSustainabilityVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="mb-6">
                <h2 className="text-4xl font-light mb-4" style={{ color: '#309ed9' }}>Sustainability</h2>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We actively invest in green technologies, recyclable materials, and energy-efficient processes to minimize our environmental footprint. Our manufacturing facilities are constantly being optimized for lower emissions and reduced waste generation, ensuring compliance with the highest environmental standards like ISO 14001.
                <p className='mt-2'>
                  We also empower our workforce and community with awareness programs and sustainable practices, creating a ripple effect beyond our products and into society.
                </p>
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => { navigate('/company/sustainability') }}
                  className="text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 bg-[#309ed9] hover:bg-yellow-400"
                >
                  View More
                </button>
                <div onClick={() => { navigate('/company/sustainability') }} className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-[#309ed9] hover:bg-yellow-400">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;