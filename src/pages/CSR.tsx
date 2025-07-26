import React from 'react';
import ScrollSection from '../components/ScrollSection';

// Define the interface outside the component
interface CSRSectionProps {
  title: string;
  desc: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
}

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
    imageAlt: "food support",
    imageLeft: true
  },
  {
    title: "Health",
    desc: "Health is at the core of our mission, and we strive to improve healthcare access and awareness through:",
    content: [
      "Organizing medical camps and health check-ups for underserved communities.",
      "Providing medical supplies and equipment to healthcare facilities in need.",
      "Promoting preventive healthcare and wellness programs."
    ],
    imageUrl: "/heroimages/health.jpeg",
    imageAlt: "animal welfare",
    imageLeft: false
  }    
];

export const CSR = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#309ed9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Corporate Social Responsibility
              </h1>
              <p className="text-lg mb-4 leading-relaxed">
                At Eversure, our Corporate Social Responsibility commitment demonstrates our dedication to contributing towards the welfare of society and the environment.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/heroimages/CSR_head.jpeg"
                alt="Hands protecting globe"
                className="w-full max-w-md "
              />
            </div>
          </div>
        </div>
      </section>
      

      <section className='mt-20'>
      {renderImage.map((item, key) => (
        <div key={key} className='relative px-60 pt-20 mb-20 ml-40'>
          {/* Image Container - Full Width Background */}
          <div className='absolute inset-0 flex items-center justify-start pl-20'>
            <div className='w-3/5 h-full'>
              <img 
                src={item.imageUrl} 
                alt={item.imageAlt} 
                className='w-full h-full object-cover '
              />
            </div>
          </div>
          
          {/* Text Content - Overlapping Image */}
          <div className="relative z-20 flex justify-end">
            <div className="w-3/5 ml-auto">
              <div className="bg-white p-12">
                {/* Title with underline */}
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#309ed9] mb-3">
                    {item.title}
                  </h2>
                  <div className="w-16 h-1 bg-orange-400 rounded"></div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Features List */}
                <div className="space-y-6">
                  {item.content.map((contentItem, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-[#309ed9]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
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
      ))}
    </section>

    </div>
  );
};
