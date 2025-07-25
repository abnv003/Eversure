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
    title: "Food Support",
    desc: "Food is a fundamental human right, and we are committed to building a healthier future through:",
    content: [
      "Providing nutritious meals and essential food supplies to underprivileged families and communities in need.",
      "Supporting community kitchens and food banks through infrastructure development and regular maintenance to ensure consistent food distribution.",
      "Encouraging long-term food security by facilitating awareness programs, nutrition education, and sustainable livelihood initiatives."
    ],
    imageUrl: "/heroimages/food_support.jpeg",
    imageAlt: "food support",
    imageLeft: true
  },
  {
    title: "Animal Welfare",
    desc: "Compassion for animals reflects the health of our society, and we are committed to a kinder world through:",
    content: [
      "Providing food, shelter, and medical care to stray and abandoned animals to ensure their well-being and survival.",
      "Supporting animal shelters and rescue centers through infrastructure development, equipment, and operational support.",
      "Encouraging responsible pet ownership and awareness by organizing adoption drives, sterilization programs, and community education initiatives."
    ],
    imageUrl: "/heroimages/animal_welfare.jpeg",
    imageAlt: "animal welfare",
    imageLeft: false
  },
  {
    title: "Social Welfare",
    desc: "A just and inclusive society is built on care and support, and we are dedicated to empowering communities through:",
    content: [
      "Providing essential resources and services such as clothing, hygiene kits, and shelter support to individuals and families in need.",
      "Supporting community centers and outreach programs by improving infrastructure and facilitating access to health, education, and legal aid.",
      "Encouraging self-reliance and dignity through skill development initiatives, employment assistance, and awareness campaigns for marginalized groups."
    ],
    imageUrl: "/heroimages/social_welfare.jpeg",
    imageAlt: "social welfare",
    imageLeft: true
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
              <p className="text-lg mb-6 leading-relaxed">
                These pillars guide our efforts to creating meaningful and sustainable impact:
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
        <div key={key} className='relative px-60 py-20 mb-20 ml-40'>
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
