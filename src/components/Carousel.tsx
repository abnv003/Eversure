// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const sustainabilityData = [
//         {
//             image: "/heroimages/energy_emission.jpeg",
//             title: "Clean Energy",
//             description: "Powering a brighter future, we're reimagining energy consumption with a shift to renewables:",
//             points: [
//                 "Solar panels blanket our rooftops, delivering 1.4 MWp of solar energy",
//                 "56% of our energy needs are already met by biomass (2023)",
//                 "By March 2025, our new 4.5 MWp Captive Solar Plant will slash conventional electricity usage by an incredible 70%"
//             ]
//         },
//         {
//             image: "/heroimages/waste_management.jpeg",
//             title: "Waste Management",
//             description: "Redefining Waste for us, waste isn't just discarded; it's an opportunity:",
//             points: [
//                 "Smarter Engineering Designs ensure higher manufacturing yields, minimizing waste from the start.",
//                 "Innovative strategies repurpose materials, drastically reducing what ends up in landfills."
//             ]
//         },
//         {
//             image: "/heroimages/water_conservation.jpeg",
//             title: "Low-Emission Materials",
//             description: "Creating Responsibly:",
//             points: [
//                 "We're continuously innovating to develop products with a minimal carbon footprint.",
//                 "Every material we craft is designed with sustainability in mind, aligning performance with purpose."
//             ]
//         },
//         {
//             image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
//             title: "Packaging",
//             description: "Packaging Responsibly:",
//             points: [
//                 "We focus on using innovative, recyclable materials sourced from renewable origins.",
//                 "Our packaging complies with standards like ISO 13485, ISO 9001."
//             ]
//         }
//     ];

//     const goToPrevious = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? sustainabilityData.length - 1 : prevIndex - 1
//         );
//     };

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === sustainabilityData.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     // Get the three visible items based on current index
//     const getVisibleItems = () => {
//         const items = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % sustainabilityData.length;
//             items.push({ ...sustainabilityData[index], originalIndex: index });
//         }
//         return items;
//     };

//     const visibleItems = getVisibleItems();

//     return (
//         <div className="max-w-7xl mx-auto p-8 bg-gray-50">
//             {/* Header */}
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl font-light text-[#309ed9] mb-4">
//                     Our Sustainability Journey in Action
//                 </h2>
//                 <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
//             </div>

//             {/* Cards Container */}
//             <div className="relative">
//                 <div className="overflow-hidden">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                         {visibleItems.map((item, index) => (
//                             <div 
//                                 key={`${item.originalIndex}-${currentIndex}`} 
//                                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[500px] flex flex-col"
//                             >
//                                 <div className="h-48 overflow-hidden">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                                         onError={(e) => {
//                                             e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop";
//                                         }}
//                                     />
//                                 </div>
//                                 <div className="p-6 flex-1 flex flex-col">
//                                     <h3 className="text-xl font-medium text-[#309ed9] mb-4">
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                                         {item.description}
//                                     </p>
//                                     <ul className="space-y-2 flex-1">
//                                         {item.points.map((point, pointIndex) => (
//                                             <li key={pointIndex} className="flex items-start">
//                                                 <span className="inline-block w-2 h-2 bg-[#309ed9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                                 <span className="text-gray-700 text-sm leading-relaxed">
//                                                     {point}
//                                                 </span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <button
//                     onClick={goToPrevious}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#309ed9] text-white rounded-full flex items-center justify-center hover:bg-[#2889c4] transition-colors duration-200 shadow-lg z-10"
//                     aria-label="Previous"
//                 >
//                     <ChevronLeft size={20} />
//                 </button>

//                 <button
//                     onClick={goToNext}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#309ed9] text-white rounded-full flex items-center justify-center hover:bg-[#2889c4] transition-colors duration-200 shadow-lg z-10"
//                 >
//                     <ChevronRight size={20} />
//                 </button>
//             </div>

//             {/* Dot Indicators */}
//             <div className="flex justify-center mt-8 space-x-2">
//                 {sustainabilityData.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
//                                 ? 'bg-[#309ed9] scale-125'
//                                 : 'bg-gray-300 hover:bg-gray-400'
//                             }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;


import { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const sustainabilityData = [
        {
            image: "/heroimages/energy_emission.jpeg",
            title: "Clean Energy",
            description: "Powering a brighter future, we're reimagining energy consumption with a shift to renewables:",
            points: [
                "Solar panels blanket our rooftops, delivering 1.4 MWp of solar energy",
                "56% of our energy needs are already met by biomass (2023)",
                "By March 2025, our new 4.5 MWp Captive Solar Plant will slash conventional electricity usage by an incredible 70%"
            ]
        },
        {
            image: "/heroimages/waste_management.jpeg",
            title: "Waste Management",
            description: "Redefining Waste for us, waste isn't just discarded; it's an opportunity:",
            points: [
                "Smarter Engineering Designs ensure higher manufacturing yields, minimizing waste from the start.",
                "Innovative strategies repurpose materials, drastically reducing what ends up in landfills."
            ]
        },
        {
            image: "/heroimages/water_conservation.jpeg",
            title: "Low-Emission Materials",
            description: "Creating Responsibly:",
            points: [
                "We're continuously innovating to develop products with a minimal carbon footprint.",
                "Every material we craft is designed with sustainability in mind, aligning performance with purpose."
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
            title: "Packaging",
            description: "Packaging Responsibly:",
            points: [
                "We focus on using innovative, recyclable materials sourced from renewable origins.",
                "Our packaging complies with standards like ISO 13485, ISO 9001."
            ]
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === sustainabilityData.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isPlaying]);

    // Pause on hover (desktop only)
    const handleMouseEnter = () => {
        setIsPlaying(false);
    };

    // Resume on mouse leave
    const handleMouseLeave = () => {
        setIsPlaying(true);
    };

    // Get the three visible items for desktop based on current index
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % sustainabilityData.length;
            items.push({ ...sustainabilityData[index], originalIndex: index });
        }
        return items;
    };

    const visibleItems = getVisibleItems();
    const currentItem = sustainabilityData[currentIndex];

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-4xl font-light text-[#309ed9] mb-4">
                    Our Sustainability Journey in Action
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Mobile Layout - Single Card */}
            <div 
                className="block md:hidden mb-8"
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto max-w-sm">
                    <div className="h-48 overflow-hidden">
                        <img
                            src={currentItem.image}
                            alt={currentItem.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop";
                            }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-medium text-[#309ed9] mb-4">
                            {currentItem.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {currentItem.description}
                        </p>
                        <ul className="space-y-3">
                            {currentItem.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-[#309ed9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Three Cards */}
            <div 
                className="hidden md:block relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="overflow-hidden">
                    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {visibleItems.map((item, index) => (
                            <div 
                                key={`${item.originalIndex}-${currentIndex}`} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[500px] flex flex-col"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop";
                                        }}
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-medium text-[#309ed9] mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-2 flex-1">
                                        {item.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-[#309ed9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 text-sm leading-relaxed">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {sustainabilityData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-[#309ed9] scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Indicator (optional) */}
            <div className="w-full max-w-xs mx-auto mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#309ed9] transition-all duration-100 ease-linear"
                    style={{ 
                        width: `${((currentIndex + 1) / sustainabilityData.length) * 100}%`
                    }}
                />
            </div>
        </div>
    );
};

export default Carousel;