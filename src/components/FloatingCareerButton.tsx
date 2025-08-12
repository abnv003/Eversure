// import { useState } from 'react';
// import { Briefcase } from 'lucide-react';

// const FloatingCareerButton = () => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleCareerClick = () => {
//     window.open('https://docs.google.com/forms/d/e/1FAIpQLScw2TwbtQf55yPQBg9j1RAlRO1MrnP-fqK86qt9RCr8tjDoPw/viewform', '_blank');
//   };

//   return (
//     <div className="fixed bottom-6 right-4 z-[9999]">
//       <div className="relative">
//         {/* Tooltip */}
//         {showTooltip && (
//           <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
//             Career
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
//           </div>
//         )}
        
//         {/* Career Button */}
//         <button
//           onClick={handleCareerClick}
//           onMouseEnter={() => setShowTooltip(true)}
//           onMouseLeave={() => setShowTooltip(false)}
//           className="bg-[#309ed9] text-white w-14 h-14 rounded-full shadow-lg cursor-pointer hover:bg-[#2889c4] transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
//         >
//           <Briefcase size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FloatingCareerButton;



import { useState } from 'react';
import { Briefcase } from 'lucide-react';

const FloatingCareerButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCareerClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScw2TwbtQf55yPQBg9j1RAlRO1MrnP-fqK86qt9RCr8tjDoPw/viewform', '_blank');
  };

  return (
    <div className="fixed bottom-6 left-4 md:left-auto md:right-4 z-[9999]">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
            Career
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}
        
        {/* Career Button */}
        <button
          onClick={handleCareerClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-[#309ed9] text-white w-14 h-14 rounded-full shadow-lg cursor-pointer hover:bg-[#2889c4] transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
        >
          <Briefcase size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingCareerButton;