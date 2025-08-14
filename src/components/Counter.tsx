import { Users, Calendar, Globe } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

function Counter() {
  const statistics = [
    {
      icon: Users,
      number: 1000,
      suffix: "+",
      label: "Team Size"
    },
    {
      icon: Calendar,
      number: 12,
      suffix: "+",
      label: "Years of Service"
    },
    {
      icon: Globe,
      number: 50,
      suffix: "+",
      label: "Countries Served"
    }
  ];

  return (
    <section 
      className="py-20 mb-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/heroimages/counter_img.jpeg')`
      }}
    >
      {/* Black tint overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-white">Global Expertise, Decades of Trust, Thousands of Minds</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Statistics Counter Section - Split into 3 divs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-95 rounded-lg shadow-sm p-8 border-blue-100 border-2 backdrop-blur-sm text-center group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#309ed9] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-[#309ed9] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Number */}
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2500}
                />
                
                {/* Label */}
                <div className="text-lg font-medium text-gray-600 mt-2">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Counter;