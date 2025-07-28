// import React, { useEffect, useState } from 'react';
// import SustainabilityGoals from '../components/SustainabilityGoals';
// import Carousel from '../components/Carousel';

// const renderImage = [
//   {
//     title: "Environmental Impact",
//     desc: "Preserving the environment is integral to our mission, and we are committed to sustainable practices through:",
//     content: [
//       "Reducing our ecological footprint by optimizing energy usage, water conservation, and promoting eco-friendly production methods.",
//       "Implementing responsible resource management that prioritizes renewable materials, minimal waste generation, and efficient consumption.",
//       "Fostering environmental awareness and compliance by adhering to environmental standards and encouraging green initiatives across all levels."
//     ],
//     imageUrl: "/heroimages/environmental.jpeg",
//     imageAlt: "social impact",
//     imageLeft: true
//   } 
// ];




// export const Sustainability: React.FC = () => {

//   const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//       // Trigger animation after component mounts
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, 100);

//       return () => clearTimeout(timer);
//     }, []);

//   return (
//     <div className="min-h-screen">

//       {/* Hero Section */}
//       <section className="relative w-full h-[576px] bg-[#309ed9] flex items-center overflow-hidden">
//         <div className="relative w-full h-full flex items-center">
//           {/* Text Content */}
//           <div
//             className={`relative z-10 text-white transition-all ml-48 duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
//               }`}
//             style={{
//               padding: '60px 80px',
//               maxWidth: '800px'
//             }}
//           >
//             <h1
//               className="text-4xl lg:text-5xl font-bold mb-6"
//               style={{
//                 letterSpacing: '-2px'
//               }}
//             >
//               Sustainability
//             </h1>
//             <p className="text-lg mb-4 leading-relaxed">
//                 At Eversure, sustainability is not just a commitment but a core value that drives our operations and innovations. We believe in creating a healthier world for future generations through responsible business practices.
//               </p>
//               <p className="text-lg mb-6 leading-relaxed">
//                 Our comprehensive sustainability framework encompasses environmental stewardship, social responsibility, and economic viability, ensuring that our growth contributes positively to society and the planet.
//               </p>
//           </div>

//           {/* Image Container */}
//           <div className="absolute right-0 top-0 w-3/5 h-full overflow-hidden">
//             <div
//               className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-x-[5%]' : 'opacity-0 translate-x-12'
//                 }`}
//               style={{
//                 backgroundImage: 'url(/heroimages/sustain_head.jpeg)',

//                 clipPath: 'ellipse(75% 100% at 100% 50%)',
//                 borderLeft: '3px solid rgba(255,255,255,0.3)'
//               }}
//             >
//               {/* Gradient overlay */}
//               <div
//                 className="absolute left-0 top-0 w-full h-full"
//                 style={{
//                   background: 'linear-gradient(90deg, rgba(32,178,170,0.1) 0%, transparent 30%)',
//                   clipPath: 'ellipse(75% 100% at 100% 50%)'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='mt-20'>
//       {renderImage.map((item, key) => (
//         <div key={key} className='relative px-60 pt-20 mb-20 ml-40'>
//           {/* Image Container - Full Width Background */}
//           <div className='absolute inset-0 flex items-center justify-start pl-20'>
//             <div className='w-3/5 h-full'>
//               <img 
//                 src={item.imageUrl} 
//                 alt={item.imageAlt} 
//                 className='w-full h-full object-cover '
//               />
//             </div>
//           </div>

//           {/* Text Content - Overlapping Image */}
//           <div className="relative z-20 flex justify-end">
//             <div className="w-3/5 ml-auto">
//               <div className="bg-white p-12">
//                 {/* Title with underline */}
//                 <div className="mb-8">
//                   <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#309ed9] mb-3">
//                     {item.title}
//                   </h2>
//                   <div className="w-20 h-1 bg-yellow-400"></div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                   {item.desc}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-6">
//                   {item.content.map((contentItem, index) => (
//                     <div key={index} className="flex items-start gap-4">
//                       <div className="flex-shrink-0 mt-1">
//                         <svg className="w-5 h-5 text-[#309ed9]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                         </svg>
//                       </div>
//                       <p className="text-gray-700 text-base leading-relaxed">
//                         {contentItem}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>

//       <div className='mb-20'>
//         <Carousel />
//       </div>

//       {/* <SustainabilityGoals /> */}
//     </div>
//   );
// };

// export default Sustainability;



import React, { useEffect, useState, useRef } from 'react';
import SustainabilityGoals from '../components/SustainabilityGoals';
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
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="text-white py-48 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/heroimages/sustain_head.jpeg')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Sustainability
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            At Polybond, sustainability isn’t a checkbox; it’s our legacy. Together, we’re shaping a future where progress and preservation go hand in hand. Let’s build a greener tomorrow—today.
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
              className="relative px-60 pt-20 mb-20"
            >
              {/* Image Container - Full Width Background */}
              <div
                className={`absolute inset-0 flex items-center transition-all duration-1000 ease-out ${isCurrentVisible
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
                    className={`bg-white p-12 transition-all duration-1000 ease-out delay-300 ${isCurrentVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                      }`}
                  >
                    {/* Title with underline */}
                    <div className="mb-8">
                      <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-light text-[#309ed9] mb-3 transition-all duration-1000 ease-out delay-500 ${isCurrentVisible
                            ? 'opacity-100 translate-x-0'
                            : `opacity-0 ${isImageLeft ? 'translate-x-10' : '-translate-x-10'}`
                          }`}
                      >
                        {item.title}
                      </h2>
                      <div
                        className={`w-20 h-1 bg-yellow-400 transition-all duration-800 ease-out delay-700 ${isCurrentVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
                          }`}
                      ></div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-gray-700 text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out delay-600 ${isCurrentVisible
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
                          className={`flex items-start gap-4 transition-all duration-1000 ease-out ${isCurrentVisible
                              ? 'opacity-100 translate-x-0'
                              : `opacity-0 ${isImageLeft ? 'translate-x-8' : '-translate-x-8'}`
                            }`}
                          style={{
                            transitionDelay: `${800 + (index * 150)}ms`
                          }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div
                              className={`w-5 h-5 rounded-full bg-[#309ed9] flex items-center justify-center transition-all duration-500 ease-out ${isCurrentVisible ? 'scale-100' : 'scale-0'
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
          );
        })}
      </section>

      <div className="mb-20">
        <Carousel />
      </div>

      {/* <SustainabilityGoals /> */}
    </div>
  );
};

export default Sustainability;