import React from 'react';
import ScrollSection from '../components/ScrollSection';

// Define the interface outside the component
interface CSRSectionProps {
  title: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

// Individual CSR Section Component
const CSRSection: React.FC<CSRSectionProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
  imageLeft = false,
  backgroundColor = "bg-white",
  textColor = "text-gray-800"
}) => {
  return (
    <ScrollSection imageLeft={imageLeft}>
      <section className={`${backgroundColor} py-16`}>
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${imageLeft ? '' : 'lg:grid-flow-col-dense'}`}>
            <div 
              className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'} transition-transform duration-700 ease-out`}
            >
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div 
              className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'} transition-transform duration-700 ease-out`}
            >
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 text-[#309ed9] ${textColor}`}>
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
    </ScrollSection>
  );
};

// Main CSR Page Component
export const CSR = () => {
  // Sample data for demonstration
  const sampleCSRData = {
    title: "Healthcare Access",
    content: [
      "We are committed to improving healthcare access in underserved communities through various initiatives and partnerships.",
      "Our programs focus on providing medical equipment and support to rural healthcare facilities.",
      "We believe that quality healthcare should be accessible to everyone, regardless of their economic background."
    ],
    imageUrl: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Healthcare workers in action"
  };

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
              <div className="bg-white text-[#309ed9] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Company Profile</h3>
                <p className="text-sm">Corporate Social Responsibility</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Hands protecting globe" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section with sample data */}
      <CSRSection
        title={sampleCSRData.title}
        content={sampleCSRData.content}
        imageUrl={sampleCSRData.imageUrl}
        imageAlt={sampleCSRData.imageAlt}
        imageLeft={false}
        backgroundColor="bg-white"
        textColor="text-gray-800"
      />

      {/* Commitment Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[#309ed9]">
            Our Commitment
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-700">
            Through our comprehensive CSR model, Eversure aims to contribute to societal growth and well-being. We believe that focused efforts towards a healthy world help in giving wellness, sustainability, and comprehensive care to all stakeholders.
          </p>
        </div>
      </section>
    </div>
  );
};