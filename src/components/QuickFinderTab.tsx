import { useState } from 'react';
import { Search } from 'lucide-react';
import QuickFinder from './QuickFinder';

const QuickFinderTab = () => {
  const [showQuickFinder, setShowQuickFinder] = useState(false);

  return (
    <>
      {/* Mobile floating button - bottom right */}
      <div className="md:hidden fixed bottom-6 right-4 z-[9999]">
        <button
          onClick={() => setShowQuickFinder(true)}
          className="bg-yellow-400 text-black w-14 h-14 rounded-full shadow-lg cursor-pointer hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
        >
          <Search size={24} />
        </button>
      </div>

      {/* Desktop vertical tab - right side */}
      <div className="hidden md:block fixed right-0 top-2/3 transform -translate-y-1/2 z-[9999]">
        <div
          onClick={() => setShowQuickFinder(true)}
          className="bg-yellow-400 text-black w-12 h-40 rounded-l-lg shadow-lg cursor-pointer hover:bg-yellow-300 transition-colors flex items-center justify-center"
        >
          <div className="-rotate-90 text-sm font-semibold whitespace-nowrap">
            Quick Product Finder
          </div>
        </div>
      </div>

      {/* Alternative Mobile Design - Bottom Tab (commented out, use if preferred) */}
      {/* 
      <div className="md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[9999]">
        <button
          onClick={() => setShowQuickFinder(true)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-t-lg shadow-lg cursor-pointer hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
        >
          <Search size={18} />
          <span className="text-sm font-semibold">Quick Finder</span>
        </button>
      </div>
      */}

      {/* Modal component */}
      {showQuickFinder && (
        <QuickFinder onClose={() => setShowQuickFinder(false)} />
      )}
    </>
  );
};

export default QuickFinderTab;