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
    // {
    //   title: 'Anesthesia',
    //   icon: (
    //     <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
    //       {/* Anesthesia machine main unit */}
    //       <rect x="20" y="40" width="35" height="40" rx="3" strokeWidth="2" />
    //       {/* Ventilator screen */}
    //       <rect x="25" y="45" width="25" height="15" rx="2" />
    //       {/* Breathing circuit waveform */}
    //       <path d="M27 52 L30 48 L33 56 L36 44 L39 58 L42 50 L45 52 L48 52" strokeWidth="1.5" fill="none" />
    //       {/* Control knobs and dials */}
    //       <circle cx="30" cy="67" r="3" />
    //       <circle cx="45" cy="67" r="3" />
    //       <rect x="25" y="72" width="6" height="3" rx="1" />
    //       <rect x="39" y="72" width="6" height="3" rx="1" />
    //       {/* Gas cylinders */}
    //       <rect x="60" y="25" width="8" height="30" rx="4" strokeWidth="2" />
    //       <rect x="70" y="30" width="8" height="25" rx="4" strokeWidth="2" />
    //       {/* Cylinder tops/valves */}
    //       <rect x="62" y="20" width="4" height="8" rx="1" />
    //       <rect x="72" y="25" width="4" height="8" rx="1" />
    //       {/* Breathing circuit tubes */}
    //       <path d="M55 50 Q65 45, 75 50 Q80 55, 75 60 Q65 65, 55 60" fill="none" strokeWidth="2" />
    //       {/* Face mask */}
    //       <ellipse cx="75" cy="55" rx="8" ry="6" fill="none" strokeWidth="2" />
    //       <path d="M67 55 Q71 52, 75 55 Q79 58, 83 55" fill="none" strokeWidth="1.5" />
    //       {/* Connection tubes */}
    //       <line x1="55" y1="55" x2="67" y2="55" strokeWidth="2" />
    //       {/* Pressure gauge */}
    //       <circle cx="85" cy="35" r="6" fill="none" strokeWidth="1.5" />
    //       <path d="M82 32 L85 35 L88 32" fill="none" strokeWidth="1" />
    //     </svg>
    //   )
    // },
    // {
    //   title: 'Gastroenterology',
    //   icon: (
    //     <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 100 100" strokeWidth="1.5">
    //       {/* Stomach outline */}
    //       <path d="M40 25 Q30 30, 30 40 Q25 50, 30 60 Q35 70, 45 75 Q55 80, 65 75 Q75 70, 75 60 Q80 50, 75 40 Q70 30, 60 25 Q50 20, 40 25 Z" fill="none" strokeWidth="2" />
    //       {/* Endoscope tube */}
    //       <path d="M15 15 Q25 20, 35 30 Q45 40, 50 50 Q55 60, 60 65" fill="none" strokeWidth="2" />
    //       {/* Endoscope handle */}
    //       <rect x="10" y="10" width="8" height="15" rx="2" strokeWidth="2" />
    //       <circle cx="14" cy="13" r="1" fill="currentColor" />
    //       <circle cx="14" cy="17" r="1" fill="currentColor" />
    //       {/* Endoscope tip with light */}
    //       <circle cx="60" cy="65" r="3" fill="none" strokeWidth="2" />
    //       <circle cx="60" cy="65" r="1" fill="currentColor" />
    //       {/* Light rays */}
    //       <line x1="57" y1="62" x2="54" y2="59" strokeWidth="1" />
    //       <line x1="63" y1="62" x2="66" y2="59" strokeWidth="1" />
    //       <line x1="60" y1="68" x2="60" y2="71" strokeWidth="1" />
    //       {/* Small intestine representation */}
    //       <path d="M20 75 Q30 70, 40 75 Q50 80, 60 75 Q70 70, 80 75" fill="none" strokeWidth="1.5" strokeDasharray="3,2" />
    //       <path d="M25 85 Q35 80, 45 85 Q55 90, 65 85 Q75 80, 85 85" fill="none" strokeWidth="1.5" strokeDasharray="3,2" />
    //       {/* Liver representation (upper right) */}
    //       <path d="M70 20 Q80 15, 85 25 Q85 35, 80 40 Q75 35, 70 30" fill="none" strokeWidth="1.5" />
    //       {/* Control buttons on endoscope */}
    //       <rect x="12" y="20" width="4" height="2" rx="1" />
    //     </svg>
    //   )
    // },
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

  const formatCategoryPath = (category: string) => {
    return `/products/${encodeURIComponent(category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] bg-black overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src="/heroimages/homepage_main.jpeg"
            alt="Medical Technology"
            className="w-full h-full object-cover opacity-70 object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[65vh] flex items-center">
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
            <div className={`transform transition-all duration-1000 ${isAboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
              <div className="mb-6">
                <h2 className="text-4xl font-light mb-4" style={{ color: '#309ed9' }}>About Us</h2>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Eversure is a global leader in the medical device industry, renowned for its extensive range of high-quality medical devices. Since our establishment in 1997, the company has upheld a steadfast commitment to innovation and excellence, envisioning a world where top-tier healthcare is universally accessible. Our expansive global reach, cutting edge technologies and advanced manufacturing capabilities...
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  to="/company/about-us"
                  className="text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 bg-[#309ed9] hover:bg-[#1e7b85]"
                >
                  Learn More About Eversure
                </Link>
                <div  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-[#309ed9] hover:bg-[#1e7b85]">
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isAboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
              <img
                src="/heroimages/about_section.jpeg"
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
    </div>
  );
};

export default Home;