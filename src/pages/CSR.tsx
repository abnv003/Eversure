import { useEffect, useState, useRef } from 'react';

const renderImage = [
  {
    title: "Education",
    desc: "Education is the cornerstone of progress, and we are dedicated to fostering a brighter future through:",
    content: [
      "Providing essential learning materials such as notebooks, school bags, and stationery to underprivileged students.",
      "Supporting schools through infrastructure development and maintenance to ensure a conducive learning environment.",
      "Encouraging young minds by facilitating scholarships and skill-building programs."
    ],
    imageUrl: "/heroimages/education.jpeg",
    imageAlt: "education support",
    imageLeft: true
  },
  {
    title: "Health",
    desc: "Health is at the core of our mission, and we strive to improve healthcare access and awareness through:",
    content: [
      "Organizing regular eye check-ups and facilitating cataract surgeries.",
      "Organizing medical camps and health check-ups.",
      "Conducting blood donation camps.",
      "Promoting preventive healthcare and wellness programs."
    ],
    imageUrl: "/heroimages/health.jpeg",
    imageAlt: "health support",
    imageLeft: false
  }    
];

export const CSR = () => {
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
        rootMargin: '0px 0px -100px 0px'
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
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-24 md:py-48 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/heroimages/csr.jpeg')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Corporate Social Responsibility
          </h1>
          <p className="text-base md:text-lg mb-4 leading-relaxed">
              At Eversure, our Corporate Social Responsibility commitment demonstrates our dedication to contributing towards the welfare of society and the environment.
            </p>
        </div>
      </section>
      
      <section className="mt-20">
        {renderImage.map((item, key) => {
          const isCurrentVisible = visibleSections.has(key);
          const isImageLeft = item.imageLeft;
          
          return (
            <div 
              key={key} 
              ref={el => sectionRefs.current[key] = el}
              data-index={key}
              className="relative px-4 md:px-60 pt-20 mb-20"
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Image */}
                <div 
                  className={`w-full h-64 mb-6 transition-all duration-1000 ease-out ${
                    isCurrentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.imageAlt} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div 
                  className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 ease-out delay-300 ${
                    isCurrentVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Title with underline */}
                  <div className="mb-6">
                    <h2 
                      className={`text-2xl md:text-3xl font-light text-[#309ed9] mb-3 transition-all duration-1000 ease-out delay-500 ${
                        isCurrentVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-10'
                      }`}
                    >
                      {item.title}
                    </h2>
                    <div 
                      className={`w-20 h-1 bg-yellow-400 transition-all duration-800 ease-out delay-700 ${
                        isCurrentVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
                      }`}
                    ></div>
                  </div>

                  {/* Description */}
                  <p 
                    className={`text-gray-700 text-base leading-relaxed mb-6 transition-all duration-1000 ease-out delay-600 ${
                      isCurrentVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-5'
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {item.content.map((contentItem, index) => (
                      <div 
                        key={index} 
                        className={`flex items-start gap-3 transition-all duration-1000 ease-out ${
                          isCurrentVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8'
                        }`}
                        style={{
                          transitionDelay: `${800 + (index * 150)}ms`
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div 
                            className={`w-4 h-4 rounded-full bg-[#309ed9] flex items-center justify-center transition-all duration-500 ease-out ${
                              isCurrentVisible ? 'scale-100' : 'scale-0'
                            }`}
                            style={{
                              transitionDelay: `${900 + (index * 150)}ms`
                            }}
                          >
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {contentItem}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Image Container - Full Width Background */}
                <div 
                  className={`absolute inset-0 flex items-center transition-all duration-1000 ease-out ${
                    isCurrentVisible 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${isImageLeft ? '-translate-x-20' : 'translate-x-20'}`
                  } ${isImageLeft ? 'justify-start pl-48' : 'justify-end pr-48'}`}
                >
                  <div className="w-3/5 h-full">
                    <img 
                      src={item.imageUrl} 
                      alt={item.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Content - Overlapping Image */}
                <div className={`relative z-20 flex ${isImageLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-3/5 ${isImageLeft ? 'ml-auto' : 'mr-auto'}`}>
                    <div 
                      className={`bg-white p-12 transition-all duration-1000 ease-out delay-300 ${
                        isCurrentVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      {/* Title with underline */}
                      <div className="mb-8">
                        <h2 
                          className={`text-3xl sm:text-4xl lg:text-5xl font-light text-[#309ed9] mb-3 transition-all duration-1000 ease-out delay-500 ${
                            isCurrentVisible 
                              ? 'opacity-100 translate-x-0' 
                              : `opacity-0 ${isImageLeft ? 'translate-x-10' : '-translate-x-10'}`
                          }`}
                        >
                          {item.title}
                        </h2>
                        <div 
                          className={`w-20 h-1 bg-yellow-400 transition-all duration-800 ease-out delay-700 ${
                            isCurrentVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
                          }`}
                        ></div>
                      </div>

                      {/* Description */}
                      <p 
                        className={`text-gray-700 text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out delay-600 ${
                          isCurrentVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-5'
                        }`}
                      >
                        {item.desc}
                      </p>

                      {/* Features List */}
                      <div className="space-y-6">
                        {item.content.map((contentItem, index) => (
                          <div 
                            key={index} 
                            className={`flex items-start gap-4 transition-all duration-1000 ease-out ${
                              isCurrentVisible 
                                ? 'opacity-100 translate-x-0' 
                                : `opacity-0 ${isImageLeft ? 'translate-x-8' : '-translate-x-8'}`
                            }`}
                            style={{
                              transitionDelay: `${800 + (index * 150)}ms`
                            }}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div 
                                className={`w-5 h-5 rounded-full bg-[#309ed9] flex items-center justify-center transition-all duration-500 ease-out ${
                                  isCurrentVisible ? 'scale-100' : 'scale-0'
                                }`}
                                style={{
                                  transitionDelay: `${900 + (index * 150)}ms`
                                }}
                              >
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                              </div>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed">
                              {contentItem}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};