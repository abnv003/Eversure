    import React, { useState } from 'react';
    import { ChevronLeft, ChevronRight } from 'lucide-react';

    const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sustainabilityData = [
        {
        image: "/heroimages/energy_emission.jpeg",
        title: "Energy Emission",
        description: "We actively reduce energy emissions by adopting renewable energy sources like solar, implementing energy-efficient systems, and optimizing production workflows. Regular audits help us track and minimize our carbon footprint, supporting a cleaner and greener future."
        },
        {
        image: "/heroimages/waste_management.jpeg",
        title: "Waste Management",
        description: "Strategies aimed at reducing, reusing and recycling various waste such as electronics, paper, cardboard, metal, plastic and glass. Hazardous waste is meticulously disposed of through authorised vendors. To minimise waste generation, we have embraced paperless manufacturing through digital drawings in production and assembly."
        },
        {
        image: "/heroimages/water_conservation.jpeg",
        title: "Water Conservation",
        description: "At multiple manufacturing sites, we have embraced practices such as rainwater harvesting and sewage treatment plants for water recycling and reuse. We have also employed smart metering to monitor water usage and identify opportunities for further efficiency improvements."
        },
        {
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
        title: "Packaging",
        description: "We focus on incorporating innovative yet recyclable materials from renewable in our product packaging. By collaborating with suppliers, we source recycled/recyclable materials. Our packaging material complies with regulations such as ISO 13485, ISO 9001, ISO 14001, and OHSAS 18001 as well as directive 94/62/EC on packaging and..."
        }
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? sustainabilityData.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === sustainabilityData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-50">
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-teal-600 mb-4">
            Our Sustainability Journey in Action
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Cards Container */}
        <div className="relative">
            <div className="overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {sustainabilityData.map((item, index) => (
                <div key={index} className="min-w-full flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    {/* Show current item and next two items */}
                    {[0, 1, 2].map((offset) => {
                        const itemIndex = (index + offset) % sustainabilityData.length;
                        const currentItem = sustainabilityData[itemIndex];
                        return (
                        <div key={`${index}-${offset}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                            <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            </div>
                            <div className="p-6">
                            <h3 className="text-xl font-medium text-teal-600 mb-4">
                                {currentItem.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {currentItem.description}
                            </p>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Navigation Buttons */}
            <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-10"
            aria-label="Previous"
            >
            <ChevronLeft size={20} />
            </button>

            <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-10"
            aria-label="Next"
            >
            <ChevronRight size={20} />
            </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
            {sustainabilityData.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                    ? 'bg-teal-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
        </div>
    );
    };

    export default Carousel;