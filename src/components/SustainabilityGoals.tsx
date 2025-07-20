import React from 'react';
import { Leaf, Recycle, Users, Target, Globe, Heart } from 'lucide-react';

const SustainabilityGoals: React.FC = () => {
  const goals = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Neutral by 2030",
      description: "Achieving net-zero carbon emissions across all operations"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "100% Recyclable Packaging",
      description: "Transitioning to fully sustainable packaging solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Well-being",
      description: "Ensuring safe and healthy working environments"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Zero Waste to Landfill",
      description: "Implementing circular economy principles"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Contributing to UN Sustainable Development Goals"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Health",
      description: "Improving healthcare access in underserved communities"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#309ed9] to-[#2a8bc4] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Sustainability Goals
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            We have set ambitious targets to drive meaningful change and create lasting impact for our planet and communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-white mb-4">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-white/90 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;