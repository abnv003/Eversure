import React, { useEffect, useState } from 'react';
import { Users, Target, Heart, Globe } from 'lucide-react';
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
      main: "PUT PATIENTS FIRST",
      title: "We design every product with patient safety and comfort as our top priority.",
      description: "We focus on building solutions that directly enhance patient care. Everything we do—from R&D to deployment—is guided by empathy and trust.",
      lottieUrl: "https://lottie.host/e60762dc-411b-4ded-bc4f-fc20c05c96d5/sPXivvregb.lottie"
    },
    {
      main: "ACT ETHICALLY",
      title: "We uphold the highest standards in every aspect of our work.",
      description: "Integrity drives our decisions. We ensure ethical manufacturing, sourcing, and service delivery in every process we adopt.",
      lottieUrl: "https://lottie.host/41f6cf46-fe95-45b4-860f-db3b9b8ba5e4/YUMXtoA7hp.lottie"
    },
    {
      main: "COMMUNICATE HONESTLY",
      title: "We collaborate closely with healthcare professionals to innovate with transparency.",
      description: "Open dialogue and mutual respect help us shape cutting-edge, practical solutions that matter in real clinical settings.",
      lottieUrl: "https://lottie.host/10bd637e-4856-403a-b8fc-649acabff9c3/kN37TGp11c.lottie"
    },
    {
      main: "RESPECT OUR PEOPLE",
      title: "We value and empower our employees to grow professionally and personally.",
      description: "A culture of support, diversity, and inclusion is at the heart of our mission. We invest in people, not just roles.",
      lottieUrl: "https://lottie.host/4dcbddd6-7b02-4233-9cbd-b6913f12929e/CLQD5cANC2.lottie"
    },
    {
      main: "PROTECT THE PLANET",
      title: "We strive to make sustainable, accessible healthcare available worldwide.",
      description: "Our commitment to environmental stewardship means adopting eco-friendly practices while expanding access to quality care globally.",
      lottieUrl: "https://lottie.host/1f1a28a3-2163-40a5-ae9d-7271d537da7b/RT0IyjSNhM.lottie"
    }
  ];

  const timeline = [
    {
      year: '1995',
      title: 'Company Founded',
      description: 'PolyMedicure was established with a vision to revolutionize medical device manufacturing.'
    },
    {
      year: '2001',
      title: 'FDA Approval',
      description: 'Received our first FDA approval for surgical instruments, marking a major milestone.'
    },
    {
      year: '2008',
      title: 'International Expansion',
      description: 'Expanded operations to serve markets in Europe and Asia-Pacific regions.'
    },
    {
      year: '2015',
      title: 'R&D Center',
      description: 'Opened our state-of-the-art research and development facility.'
    },
    {
      year: '2024',
      title: 'Leading Innovation',
      description: 'Continues to lead the industry with cutting-edge medical device solutions.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Curved Design */}
      <section
        className="text-white py-48 relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/heroimages/about_section.jpeg')`,
          backgroundPosition: 'center 20%' 
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">DRIVEN BY PRINCIPLE</p>
              <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                <span className="italic font-serif">Our values</span> lead the way
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              This is what makes us who we are: embracing diversity, practicing empathy, and empowering our people to
              be autonomous and agile.
            </p>

            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() => navigate('/contact')} 
                className="bg-[#309ed9] text-white px-6 py-3 rounded-full hover:bg-[#2889c4] transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-16">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20">
                  <DotLottieReact
                    src={value.lottieUrl}
                    autoplay
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                    {value.main}
                  </p>
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

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones that have shaped our company's growth and success.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-teal-600 font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;