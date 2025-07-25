import React from 'react';
import SustainabilityGoals from '../components/SustainabilityGoals';
import Carousel from '../components/Carousel';

const renderImage = [
  {
    title: "Social Impact",
    desc: "Creating lasting change begins with empowering communities, and we are committed to making a meaningful social impact through:",
    content: [
      "Supporting inclusive programs that uplift underprivileged groups through education, healthcare, and basic necessities.",
      "Building resilient community infrastructure by investing in development projects, skill training, and local entrepreneurship.",
      "Encouraging civic engagement and social responsibility through awareness drives, volunteer initiatives, and partnerships with grassroots organizations."
    ],
    imageUrl: "/heroimages/social_impact.jpeg",
    imageAlt: "social impact",
    imageLeft: true
  },
  {
    title: "Corporate Governance",
    desc: "Strong corporate governance fosters trust, transparency, and long-term success, and we are committed to ethical leadership through:",
    content: [
      "Establishing clear policies and accountability frameworks to ensure compliance, fairness, and integrity in all operations.",
      "Strengthening oversight and risk management systems through robust internal controls, audits, and board effectiveness.",
      "Encouraging a culture of transparency and ethical decision-making by promoting stakeholder engagement and responsible business conduct."
    ],
    imageUrl: "/heroimages/corporate_governance.jpeg",
    imageAlt: "corporate governance",
    imageLeft: false
  }  
];




export const Sustainability: React.FC = () => {

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#309ed9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Sustainability
              </h1>
              <p className="text-lg mb-4 leading-relaxed">
                At Eversure, sustainability is not just a commitment but a core value that drives our operations and innovations. We believe in creating a healthier world for future generations through responsible business practices.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our comprehensive sustainability framework encompasses environmental stewardship, social responsibility, and economic viability, ensuring that our growth contributes positively to society and the planet.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/heroimages/sustain_head.jpeg" 
                alt="Hands holding earth with plant" 
                className="w-full max-w-md rounded-lg shadow-lg"
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
        
      <div className='mb-20'>
        <Carousel />
      </div>
      
      <SustainabilityGoals />
    </div>
  );
};

export default Sustainability;