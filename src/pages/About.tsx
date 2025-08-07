import { useEffect, useState } from 'react';
import { Heart, Shield, MessageCircle, Users, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  const values = [
    {
      icon: Heart,
      title: 'Customers First',
      description: 'Every product we create is designed with patient safety and comfort as our top priority.'
    },
    {
      icon: Shield,
      title: 'Ethical Practices',
      description: 'We strive for perfection in every aspect of our manufacturing and service delivery.'
    },
    {
      icon: MessageCircle,
      title: 'Honest Communication',
      description: 'Working closely with healthcare professionals to develop innovative solutions.'
    },
    {
      icon: Users,
      title: 'Respect Employees',
      description: 'Making quality healthcare accessible to communities through dedicated teamwork.'
    },
    {
      icon: Leaf,
      title: 'Environment Care',
      description: 'Making quality healthcare accessible to communities through sustainable practices.'
    }
  ];


  const timelineData = [
    {
      "date": "1978",
      "title": "Start of rubber business - Polybond India",
      "description": "Polybond began its journey as a family-owned business in 1978, building a strong reputation in design and testing, offering innovative and reliable rubber solutions.",
      "image": "/timeline/slide1.jpeg",
      "certifications": []
    },
    {
      "date": "1990",
      "title": "Plant I at Alandi",
      "description": "Plant I at Alandi was established in 1990, and this facility combines rubber mixing with injection and compression molding to produce custom-molded components tailored to specific client needs.",
      "image": "/timeline/slide2.jpeg",
      "certifications": [
        "IATF 16949",
        "ISO 45001",
        "ISO 14001",
        "ISO 9001"
      ]
    },
    {
      "date": "2005",
      "title": "Plant II at Sanaswadi",
      "description": "Plant II at Sanaswadi was set up in 2005, equipped with injection molding, compression molding, and in-house rubber mixing. It addresses diverse customer requirements with high efficiency.",
      "image": "/timeline/slide3.jpeg",
      "certifications": [
        "IATF 16949",
        "ISO 45001",
        "ISO 14001",
        "ISO 90014"
      ]
    },
    {
      "date": "2005",
      "title": "Tool Engineering Division",
      "description": "The Tool Engineering Division was launched in 2005 to design and build high-precision molds for compression, transfer, and injection molding using NX software. It also supports fixture and gauge design to enhance manufacturing and quality control.",
      "image": "/timeline/slide6.jpeg",
      "certifications": []
    },
    {
      "date": "2012",
      "title": "Start of Medical Device Division - Polybond India",
      "description": "Polybond launched its Medical Device Division in 2012 under the brand 'Eversure', offering disposable medical devices from a certified, state-of-the-art facility in Pune. The facility features cleanroom assembly, injection molding, extrusion, sterilization, and automated packaging.",
      "image": "/timeline/slide5.jpeg",
      "certifications": []
    },
    {
      "date": "2013",
      "title": "Technology Centre - Polybond Rubber",
      "description": "Established in 2013, the Technology Centre focuses on product design, tooling, rubber formulation, and endurance testing, driving innovation to meet evolving customer needs.",
      "image": "/timeline/slide4.jpeg",
      "certifications": []
    },
    {
      "date": "2017",
      "title": "Plant III Devas, Madhya Pradesh - Polybond Rubber",
      "description": "Plant III in Dewas, inaugurated in 2017, is Polybond’s most advanced facility. It integrates extrusion, injection molding, rubber mixing, and silicone hose manufacturing under one roof.",
      "image": "/timeline/slide1.jpeg",
      "certifications": [
        "IATF 16949",
        "ISO 45001",
        "ISO 14001",
        "ISO 9001"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentItem = timelineData[currentIndex];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Curved Design */}
      <section
        className="text-white py-48 relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/heroimages/about-section.png')`,
          backgroundPosition: 'center 40%'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            About Eversure
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            Eversure is the medical device brand of Pune's Rathigroup, world-class local facility. Our product lines include items for Infusion Therapy, Surgery and Wound Drainage, Central Venous Access Catheters, and Urology, all produced using advanced manufacturing and sterilization. The brand is committed to high standards of quality, innovation, and reliability to ensure patient care.
          </p>
        </div>
      </section>

      {/* Values Section - Fixed spacing */}
      <section className="py-16 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#309ed9] mb-3">
              Our Values Lead The Way
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;

              // Different animation for each icon
              const getAnimationClass = (index) => {
                const animations = ['animate-float', 'animate-pulse-scale', 'animate-rotate-gentle'];
                return animations[index % animations.length];
              };

              return (
                <div key={index} className="text-center group">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl border border-gray-300 flex items-center justify-center group-hover:border-gray-400 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 ease-out">
                      <IconComponent className={`w-8 h-8 text-gray-700 stroke-1 group-hover:scale-110 transition-transform duration-300 ease-out ${getAnimationClass(index)}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* carousel Section */}
      <div className="max-w-7xl mx-auto p-8 bg-gray-50 mb-20">
        <div className="max-w-4xl mx-auto p-6 mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#309ed9] mb-3">
              Our Journey So Far...
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 h-64 lg:h-96 relative overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentItem.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-slate-800 transition-all duration-300">
                  {currentItem.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg transition-all duration-300">
                  {currentItem.description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-slate-700 scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-slate-600 to-slate-800 h-full transition-all duration-500 ease-out"
                style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-slate-500">
              <span>{currentIndex + 1} of {timelineData.length}</span>
              <span>{Math.round(((currentIndex + 1) / timelineData.length) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;