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
      lottieUrl: "https://lottie.host/e60762dc-411b-4ded-bc4f-fc20c05c96d5/sPXivvregb.lottie",
      title: 'Customers First',
      description: 'Every product we create is designed with patient safety and comfort as our top priority.'
    },
    {
      lottieUrl: "https://lottie.host/41f6cf46-fe95-45b4-860f-db3b9b8ba5e4/YUMXtoA7hp.lottie",
      title: 'Ethical Practices',
      description: 'We strive for perfection in every aspect of our manufacturing and service delivery.'
    },
    {
      lottieUrl: "https://lottie.host/10bd637e-4856-403a-b8fc-649acabff9c3/kN37TGp11c.lottie",
      title: 'Honest Communication',
      description: 'Working closely with healthcare professionals to develop innovative solutions.'
    },
    {
      lottieUrl: "https://lottie.host/4dcbddd6-7b02-4233-9cbd-b6913f12929e/CLQD5cANC2.lottie",
      title: 'Respect Employees',
      description: 'Making quality healthcare accessible to communities worldwide.'
    },
    {
      lottieUrl: "https://lottie.host/1f1a28a3-2163-40a5-ae9d-7271d537da7b/RT0IyjSNhM.lottie",
      title: 'Environment Care',
      description: 'Making quality healthcare accessible to communities worldwide.'
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
          backgroundImage: `url('/heroimages/about-section.png')`,
          backgroundPosition: 'center 40%'
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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              <span className="italic font-serif">Our values</span> lead the way
            </h2>
          </div>

          {/* Values Grid */}
          <div className="space-y-28">
            {/* First Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.slice(0, 3).map((value, index) => (
                <div key={index} className="text-left space-y-4">
                  <div className="flex justify-left">
                    <div className="w-20 h-20">
                      <DotLottieReact
                        src={value.lottieUrl}
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
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

            {/* Second Row - 2 Columns Centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.slice(3, 5).map((value, index) => (
                <div key={index + 3} className="text-left space-y-4">
                  <div className="flex justify-left">
                    <div className="w-20 h-20">
                      <DotLottieReact
                        src={value.lottieUrl}
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
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