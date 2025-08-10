import React, { useEffect, useState, useRef } from 'react';
import Carousel from '../components/Carousel';

const renderImage = [
  {
    title: "Environmental Impact",
    desc: "Preserving the environment is integral to our mission, and we are committed to sustainable practices through:",
    content: [
      "Reducing our ecological footprint by optimizing energy usage, water conservation, and promoting eco-friendly production methods.",
      "Implementing responsible resource management that prioritizes renewable materials, minimal waste generation, and efficient consumption.",
      "Fostering environmental awareness and compliance by adhering to environmental standards and encouraging green initiatives across all levels."
    ],
    imageUrl: "/heroimages/environmental.jpeg",
    imageAlt: "environmental impact",
    imageLeft: true
  }
];

export const Sustainability: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Trigger hero animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Create intersection observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => new Set([...prev, sectionIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px' // Reduced for mobile
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="text-white py-24 sm:py-32 md:py-40 lg:py-48 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/heroimages/sustain_head.jpeg')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sustainability
          </h1>
          <p className="text-base sm:text-lg mb-4 leading-relaxed max-w-4xl mx-auto">
            At Polybond, sustainability isn't a checkbox; it's our legacy. Together, we're shaping a future where progress and preservation go hand in hand. Let's build a greener tomorrow—today.
          </p>
        </div>
      </section>

      <section className="mt-10 sm:mt-16 lg:mt-20">
        {renderImage.map((item, key) => {
          const isCurrentVisible = visibleSections.has(key);
          const isImageLeft = item.imageLeft;

          return (
            <div
              key={key}
              ref={el => sectionRefs.current[key] = el}
              data-index={key}
              className="relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-10 sm:pt-16 lg:pt-20 mb-10 sm:mb-16 lg:mb-20"
            >
              {/* Desktop Layout - Image Container */}
              <div
                className={`hidden lg:block absolute inset-0 flex items-center transition-all duration-1000 ease-out ${isCurrentVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isImageLeft ? '-translate-x-20' : 'translate-x-20'}`
                  } ${isImageLeft ? 'justify-start pl-24 xl:pl-48' : 'justify-end pr-24 xl:pr-48'}`}
              >
                <div className="w-3/5 h-full">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile Layout - Image Above Text */}
              <div className="lg:hidden mb-6">
                <div
                  className={`transition-all duration-1000 ease-out ${isCurrentVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className={`relative z-20 lg:flex ${isImageLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <div className={`w-full lg:w-3/5 ${isImageLeft ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                  <div
                    className={`bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg lg:shadow-none transition-all duration-1000 ease-out delay-300 ${isCurrentVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                      }`}
                  >
                    {/* Title with underline */}
                    <div className="mb-6 sm:mb-8">
                      <h2
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#309ed9] mb-3 transition-all duration-1000 ease-out delay-500 ${isCurrentVisible
                            ? 'opacity-100 translate-x-0'
                            : `opacity-0 ${isImageLeft ? 'translate-x-10' : '-translate-x-10'}`
                          }`}
                      >
                        {item.title}
                      </h2>
                      <div
                        className={`h-1 bg-yellow-400 transition-all duration-800 ease-out delay-700 ${isCurrentVisible ? 'w-16 sm:w-20 opacity-100' : 'w-0 opacity-0'
                          }`}
                      ></div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-1000 ease-out delay-600 ${isCurrentVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-5'
                        }`}
                    >
                      {item.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4 sm:space-y-6">
                      {item.content.map((contentItem, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-3 sm:gap-4 transition-all duration-1000 ease-out ${isCurrentVisible
                              ? 'opacity-100 translate-x-0'
                              : `opacity-0 ${isImageLeft ? 'translate-x-8' : '-translate-x-8'}`
                            }`}
                          style={{
                            transitionDelay: `${800 + (index * 150)}ms`
                          }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#309ed9] flex items-center justify-center transition-all duration-500 ease-out ${isCurrentVisible ? 'scale-100' : 'scale-0'
                                }`}
                              style={{
                                transitionDelay: `${900 + (index * 150)}ms`
                              }}
                            >
                              <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {contentItem}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="mb-10 sm:mb-16 lg:mb-20">
        <Carousel />
      </div>

      {/* <SustainabilityGoals /> */}
    </div>
  );
};

export default Sustainability;