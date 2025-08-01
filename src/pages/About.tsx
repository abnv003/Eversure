import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      lottieUrl: "https://lottie.host/e60762dc-411b-4ded-bc4f-fc20c05c96d5/sPXivvregb.lottie",
      title: 'Customers First',
      description: 'Every product we create is designed with patient safety and comfort as our top priority.'
    },
    {
      lottieUrl: "https://lottie.host/41f6cf46-fe95-45b4-860f-db3b9b8ba5e4/YUMXtoA7hp.lottie",
      title: 'Ethical Practices',
      description: 'We strive for perfection in every aspect of our manufacturing and service delivery.'
    },
    {
      lottieUrl: "https://lottie.host/10bd637e-4856-403a-b8fc-649acabff9c3/kN37TGp11c.lottie",
      title: 'Honest Communication',
      description: 'Working closely with healthcare professionals to develop innovative solutions.'
    },
    {
      lottieUrl: "https://lottie.host/4dcbddd6-7b02-4233-9cbd-b6913f12929e/CLQD5cANC2.lottie",
      title: 'Respect Employees',
      description: 'Making quality healthcare accessible to communities worldwide.'
    },
    {
      lottieUrl: "https://lottie.host/1f1a28a3-2163-40a5-ae9d-7271d537da7b/RT0IyjSNhM.lottie",
      title: 'Environment Care',
      description: 'Making quality healthcare accessible to communities worldwide.'
    }
  ];

  const timelineData = [
    {
      date: '1978',
      title: 'Start of rubber business - Polybond India',
      description: 'Established in 1978 as a family-owned business, Polybond has earned a strong reputation for its design and testing expertise, offering innovative and reliable solutions to its customers.',
      image: '/timeline/slide1.jpeg',
      certifications: []
    },
    {
      date: '1990',
      title: 'Plant I at Alandi',
      description: 'This facility combines rubber mixing with injection and compression molding to produce robust, custom-molded components tailored to client needs.',
      image: '/timeline/slide2.jpeg',
      certifications: [
        "IATF 16949",
        "ISO 45001",
        "ISO 14001",
        "ISO 9001"
      ]
    },
    {
      date: '2005',
      title: 'Plant II at Sanaswadi',
      description: 'Equipped with injection molding, compression molding, and in-house rubber mixing, the Sanaswadi plant caters to diverse customer requirements with precision and efficiency.',
      image: '/timeline/slide3.jpeg',
      certifications: [
        "IATF 16949",
        "ISO 45001",
        "ISO 14001",
        "ISO 90014"
      ]
    },
    {
      date: '2005',
      title: 'Tool Engineering Division',
      description: 'Polybond’s design team uses NX to craft high-precision molds for compression, transfer, and injection molding. Each mold is tailored to production needs, ensuring reliability and efficiency. Beyond molds, we design fixtures and gauges to streamline manufacturing and quality assurance.',
      image: '/timeline/slide6.jpeg',
      certifications: []
    },
    {
      date: '2012',
      title: 'Start of Medical Device Division - Polybond India',
      description: "Eversure is a brand of disposable medical devices from Polybond India Pvt Ltd, part of Pune's Rathigroup. Our world-class certified facility in Pune, India, utilizes advanced processes including injection moulding, extrusion, class 10000 clean room assembly, ETO sterilization, and automated packaging.",
      image: '/timeline/slide5.jpeg',
      certifications: []
    },
    {
      date: '2013',
      title: 'Technology Centre - Polybond Rubber',
      description: 'Here we undertake product design by using simulation techniques, product development, tooling design and development, rubber formulation design and testing as well as rigorous endurance testing of parts. This facility enables us to innovate continuously and meet the evolving demands of our customers.',
      image: '/timeline/slide4.jpeg',
      certifications: []
    },
    {
      date: '2017',
      title: 'Plant III Devas, Madhya Pradesh - Polybond Rubber',
      description: 'Our newest and most advanced facility, the Dewas plant, integrates injection molding, extrusion, silicone hose manufacturing, rubber mixing, and compression molding to deliver a wide range of high-quality products.',
      image: '/timeline/slide1.jpeg',
      certifications: [
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
            Eversure is the medical device brand of Pune's Rathigroup, world-class local facility. Their product lines include items for Infusion Therapy, Surgery and Wound Drainage, Central Venous Access Catheters, and Urology, all produced using advanced manufacturing and sterilization. The brand is committed to high standards of quality, innovation, and reliability to ensure patient care.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <main className="px-6 py-16 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              <span className="italic font-serif">Our values</span> lead the way
            </h2>
          </div>

          {/* Values Grid */}
          <div className="space-y-28">
            {/* First Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.slice(0, 3).map((value, index) => (
                <div key={index} className="text-left space-y-4">
                  <div className="flex justify-left">
                    <div className="w-20 h-20">
                      <DotLottieReact
                        src={value.lottieUrl}
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-medium text-gray-900 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 2 Columns Centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.slice(3, 5).map((value, index) => (
                <div key={index + 3} className="text-left space-y-4">
                  <div className="flex justify-left">
                    <div className="w-20 h-20">
                      <DotLottieReact
                        src={value.lottieUrl}
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-medium text-gray-900 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* carousel Section */}
      <div className="max-w-4xl mx-auto p-6 mb-20 mt-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">The Journey So Far...</h1>

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
  );
};

export default AboutUs;