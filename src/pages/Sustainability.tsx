import React from 'react';
import SustainabilityGoals from '../components/SustainabilityGoals';


interface SustainabilitySectionProps {
  title: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
}

const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
  imageLeft = false,
  backgroundColor = "bg-white",
  textColor = "text-gray-800",
  titleColor = "text-[#309ed9]"
}) => {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imageLeft ? '' : 'lg:grid-flow-col-dense'}`}>
          <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${titleColor}`}>
              {title}
            </h2>
            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className={`text-lg leading-relaxed ${textColor}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Sustainability: React.FC = () => {
  const sustainabilitySections = [
    {
      title: "A Step Towards a Sustainable Future",
      content: [
        "Sustainability is at the heart of everything we do at Eversure. We recognize that our responsibility extends beyond delivering quality healthcare products to ensuring that our operations contribute positively to environmental and social well-being.",
        "Our sustainability journey encompasses three key pillars:",
        "• Environmental stewardship through reduced carbon footprint and waste management",
        "• Social responsibility by supporting communities and ensuring fair labor practices",
        "• Economic sustainability through ethical business practices and long-term value creation"
      ],
      imageUrl: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Plant growing in hands",
      imageLeft: false
    },
    {
      title: "Our Sustainability Journey in Action",
      content: [
        "We have implemented comprehensive sustainability initiatives across our operations to minimize environmental impact while maximizing positive social outcomes.",
        "• Renewable energy adoption with solar installations across manufacturing facilities",
        "• Water conservation programs reducing consumption by 40% over the past five years",
        "• Sustainable supply chain partnerships with environmentally conscious vendors",
        "• Employee engagement programs promoting sustainability awareness and action"
      ],
      imageUrl: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Solar panels installation",
      imageLeft: true,
      backgroundColor: "bg-gradient-to-r from-blue-50 to-green-50"
    }
  ];

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
              <div className="bg-white text-[#309ed9] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-sm">Building a sustainable future through innovation and responsibility</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Hands holding earth with plant" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Dynamic Sections */}
      {sustainabilitySections.map((section, index) => (
        <SustainabilitySection key={index} {...section} />
      ))}
      
      <SustainabilityGoals />
    </div>
  );
};

export default Sustainability;