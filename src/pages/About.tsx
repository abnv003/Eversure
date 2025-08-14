import { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import { Heart, Shield, MessageCircle, Users, Leaf } from 'lucide-react';

// Add CSS animation styles
const scrollAnimation = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`;

// import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const navigate = useNavigate();

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Values carousel state
  const [valuesPlaying, setValuesPlaying] = useState(true);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const timelineData = [
    {
      image: "/timeline/slide1.jpeg",
      title: "Start of rubber business - Polybond India",
      // description: "We began our journey as a family-owned business in 1978, building a strong reputation in design and testing, offering innovative and reliable rubber solutions.",
      points: [
        "We began our journey as a family-owned business in 1978.",
        "We have built a strong reputation in design and testing.",
        "We offer innovative and reliable rubber solutions."
      ],
      date: "1978"
    },
    {
      image: "/timeline/slide2.jpeg",
      title: "Plant I at Alandi",
      // description: "Plant I at Alandi was established in 1990, combining rubber mixing with injection and compression molding:",
      points: [
        "Plant I at Alandi was established in 1990.",
        "The facility combines rubber mixing with injection and compression molding.",
        "It produces custom-molded components tailored to specific client needs."
      ],
      date: "1990"
    },
    {
      image: "/timeline/slide3.jpeg",
      title: "Plant II at Sanaswadi",
      // description: "Plant II at Sanaswadi was set up in 2005, equipped with advanced manufacturing capabilities:",
      points: [
        "Plant II at Sanaswadi was set up in 2005.",
        "It is equipped with injection molding, compression molding, and in-house rubber mixing.",
        "The plant addresses diverse customer requirements with high efficiency."
      ],
      date: "2005"
    },
    {
      image: "/timeline/slide6.jpeg",
      title: "Tool Engineering Division",
      // description: "The Tool Engineering Division was launched in 2005 to enhance manufacturing precision:",
      points: [
        "The Tool Engineering Division was launched in 2005.",
        "It designs and builds high-precision molds for compression, transfer, and injection molding using NX software.",
        "It also supports fixture and gauge design to enhance manufacturing and quality control."
      ],
      date: "2005"
    },
    {
      image: "/timeline/slide5.jpeg",
      title: "Start of Medical Device Division",
      // description: "Polybond launched its Medical Device Division in 2012 under the brand 'Eversure':",
      points: [
        "Polybond launched its Medical Device Division in 2012 under the brand Eversure.",
        "The division offers disposable medical devices from a certified, state-of-the-art facility in Pune.",
        "The facility features cleanroom assembly, injection molding, extrusion, sterilization, and automated packaging."
      ],
      date: "2012"
    },
    {
      image: "/timeline/slide4.jpeg",
      title: "Technology Centre - Polybond Rubber",
      // description: "Established in 2013, the Technology Centre focuses on innovation and development:",
      points: [
        "The Technology Centre was established in 2013.",
        "It focuses on product design, tooling, rubber formulation, and endurance testing.",
        "It drives innovation to meet evolving customer needs."
      ],
      date: "2013"
    },
    {
      image: "/timeline/slide1.jpeg",
      title: "Plant III Devas, Madhya Pradesh - Polybond Rubber",
      // description: "Plant III in Dewas, inaugurated in 2017, is Polybond's most advanced facility:",
      points: [
        "Plant III in Dewas was inaugurated in 2017.",
        "It is Polybond's most advanced facility.",
        "The plant integrates extrusion, injection molding, rubber mixing, and silicone hose manufacturing under one roof."
      ],
      date: "2017"
    },
    {
      image: "/timeline/slide8.jpeg",
      title: "Polybond North America",
      // description: "Our newest facility is in Massachusetts, USA, specializing in advanced materials:",
      points: [
        "Founded in 1993 in Massachusetts, specializing in plastic and elastomeric solutions.",
        "Developed DuraFlex® ultra high fatigue-life rubber compounds.",
        "Acquired by Polymer Technologies Inc. in 2014 and became a 100% subsidiary of Polybond India Pvt. Ltd. in January 2023."
      ],
      date: "2023"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customers First',
      description: 'Eversure delivers innovative products prioritizing patient safety and comfort.'
    },
    {
      icon: Shield,
      title: 'Ethical Practices',
      description: 'We uphold integrity, ensuring transparency, accountability, and excellence in manufacturing and service.'
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

  const features = [
    {
      title: "Quality & Safety Assurance",
      icon: "/icons/shield.png"
    },
    {
      title: "Innovative Technology",
      icon: "/icons/machine.png"
    },
    {
      title: "Timely-Delivery",
      icon: "/icons/fast-delivery.png"
    }
  ]

  // Auto-play functionality for timeline carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // For desktop: stop at the last position where we can show 3 items
        const maxIndex = timelineData.length - 3;
        if (prevIndex >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prevIndex + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, timelineData.length]);

  // Pause on hover (desktop only)
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  // Resume on mouse leave
  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Values carousel hover handlers
  const handleValuesMouseEnter = () => {
    setValuesPlaying(false);
  };

  const handleValuesMouseLeave = () => {
    setValuesPlaying(true);
  };

  // Get the three visible items for desktop based on current index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = currentIndex + i;
      if (index < timelineData.length) {
        items.push({ ...timelineData[index], originalIndex: index });
      }
    }
    return items;
  };

  const visibleItems = getVisibleItems();
  const currentItem = timelineData[currentIndex % timelineData.length]; // For mobile, keep circular

  // Calculate max index for desktop navigation dots
  const maxDesktopIndex = Math.max(0, timelineData.length - 3);

  return (
    <>
      <style>{scrollAnimation}</style>
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
            <h1 className="text-5xl font-normal mb-4">
              About Eversure
            </h1>
            <p className="text-lg mb-4 leading-relaxed">
              Eversure, the medical device brand of Pune-based Rathi Group, operates from a state-of-the-art manufacturing facility. Every product is manufactured and sterilized using advanced technologies to ensure the highest standards of safety, quality, and performance. Eversure is dedicated to innovation, reliability, and excellence in patient care.
            </p>
          </div>
        </section>

        {/* Values Carousel Strip - Attached to Hero */}
        <section 
          className="bg-blue-100 py-6 overflow-hidden relative"
          onMouseEnter={handleValuesMouseEnter}
          onMouseLeave={handleValuesMouseLeave}
        >
          <div className="relative">
            {/* Continuously scrolling container */}
            <div 
              className={`flex space-x-8 ${valuesPlaying ? 'animate-scroll' : ''}`}
              style={{
                width: 'calc(200% + 2rem)', // Double width for seamless loop
              }}
            >
              {/* First set of values */}
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center text-blue-800 flex-shrink-0 min-w-max"
                  >
                    <div className="flex items-center space-x-4 px-4">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg whitespace-nowrap">{value.title}</h3>
                        <p className="text-blue-700 text-sm max-w-md">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Duplicate set for seamless loop */}
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={`duplicate-${index}`}
                    className="flex items-center text-blue-800 flex-shrink-0 min-w-max"
                  >
                    <div className="flex items-center space-x-4 px-4">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg whitespace-nowrap">{value.title}</h3>
                        <p className="text-blue-700 text-sm max-w-md">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Gradient overlays for smooth edge effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-100 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-100 to-transparent pointer-events-none"></div>
          </div>
        </section>

        <Counter />

        {/* Our Journey Carousel Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-blue-100 mb-20">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-light text-blue-800 mb-4">
              Our Journey, Route To Success
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Mobile Layout - Single Card */}
          <div
            className="block md:hidden mb-8"
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto max-w-sm border border-blue-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop";
                  }}
                />
                <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentItem.date}
                </div>
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-medium text-blue-800 mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed mb-4">
                  {currentItem.description}
                </p>
                <ul className="space-y-3">
                  {currentItem.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-blue-700 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Three Cards */}
          <div
            className="hidden md:block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                {visibleItems.map((item, index) => (
                  <div
                    key={`${item.originalIndex}-${currentIndex}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[500px] flex flex-col border border-blue-200"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.date}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col bg-blue-50">
                      <h3 className="text-xl font-medium text-blue-800 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-blue-700 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2 flex-1">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-blue-700 text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots - Different for Desktop and Mobile */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {/* Mobile dots - all timeline items */}
            <div className="block md:hidden">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 mr-2 ${index === (currentIndex % timelineData.length)
                    ? 'bg-blue-800 scale-125'
                    : 'bg-blue-300 hover:bg-blue-600'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Desktop dots - only positions where we can show 3 cards */}
            <div className="hidden md:block">
              {Array.from({ length: maxDesktopIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 mr-2 ${index === currentIndex
                    ? 'bg-blue-800 scale-125'
                    : 'bg-blue-300 hover:bg-blue-600'
                    }`}
                  aria-label={`Go to position ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-xs mx-auto mt-4 h-1 bg-blue-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-800 transition-all duration-100 ease-linear"
              style={{
                width: `${((currentIndex + 1) / (maxDesktopIndex + 1)) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Our Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4" style={{ color: '#309ed9' }}>Your Trusted Partner in Quality, Technology & Timeliness</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  // onClick={() => navigate(formatCategoryPath(feature.title))}
                  key={index}
                  className="rounded-lg p-8 shadow-sm hover:shadow-md transition-colors duration-300 group cursor-pointer border bg-white text-gray-900 border-gray-100 hover:bg-[#309ed9] hover:text-white hover:border-[#309ed9]"
                >
                  <div className="flex flex-col items-center text-center h-full min-h-[200px]">
                    <div className="mb-6 w-16 h-16 flex items-center justify-center">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-20 h-20 object-contain filter transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-4 flex-grow flex items-center text-gray-600 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;