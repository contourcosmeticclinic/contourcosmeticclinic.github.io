"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Type definitions
export interface SliderItem {
  id: number;
  imageUrl: string;
  title?: string;
  description?: string;
}

interface SliderProps {
  items: SliderItem[];
  cardsPerView?: number;
  showDots?: boolean;
  showCounter?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onCardClick?: (item: SliderItem) => void;
  renderCard?: (item: SliderItem) => React.ReactNode;
}

// Default Card Component
const DefaultCard: React.FC<{ item: SliderItem; onClick?: () => void }> = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
    >
      <div className="relative overflow-hidden bg-gray-200">
        <Image width={600} height={200} alt={item.title || "HT Result image"} src={item.imageUrl} />
      </div>

      {(item.title || item.description) && (
        <div className="p-4">
          {item.title && (
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{item.title}</h3>
          )}
          {item.description && (
            <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Main Slider Component
export const Slider: React.FC<SliderProps> = ({
  items,
  cardsPerView = 4,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  onCardClick,
  renderCard,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = Math.max(0, items.length - cardsPerView);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(Math.max(0, index), maxSlide));
  };

  const handleCardClick = (item: SliderItem) => {
    if (onCardClick) {
      onCardClick(item);
    }
  };

  if (items.length === 0) {
    return <div className="text-center py-12 text-gray-500">No items to display</div>;
  }

  return (
    <div className="w-full">
      {/* Slider Container */}
      <div className="relative">
        {/* Left Navigation Button */}

        {/* Cards Container */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${currentSlide * (100 / cardsPerView)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-4 md:gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / cardsPerView}% - ${
                    ((cardsPerView - 1) * 16) / cardsPerView
                  }px)`,
                }}
              >
                {renderCard ? (
                  renderCard(item)
                ) : (
                  <DefaultCard item={item} onClick={() => handleCardClick(item)} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      {items.length > cardsPerView && (
        <div className="mt-6 md:mt-8 space-y-3">
          {/* Dots Indicator */}
          {showDots && (
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-primary"
                        : "w-2 bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// // Demo Usage
// const SliderDemo: React.FC = () => {
//   // Sample data
//   const sampleItems: SliderItem[] = [
//     {
//       id: 1,
//       imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
//       title: "Mountain Vista",
//       description: "Breathtaking mountain landscape",
//     },
//     {
//       id: 2,
//       imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
//       title: "Forest Path",
//       description: "Serene forest walkway",
//     },
//     {
//       id: 3,
//       imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
//       title: "Ocean Sunset",
//       description: "Golden hour by the sea",
//     },
//     {
//       id: 4,
//       imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop",
//       title: "Desert Dunes",
//       description: "Endless sand formations",
//     },
//     {
//       id: 5,
//       imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
//       title: "Woodland Trail",
//       description: "Nature escape",
//     },
//     {
//       id: 6,
//       imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
//       title: "Misty Mountains",
//       description: "Foggy valleys",
//     },
//   ];

//   const handleCardClick = (item: SliderItem) => {
//     alert(`Clicked on: ${item.title}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Reusable TypeScript Slider</h1>
//           <p className="text-gray-600">A flexible, type-safe slider component for React</p>
//         </div>

//         {/* Example 1: Default usage */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Default Slider (4 cards)</h2>
//           <Slider items={sampleItems} cardsPerView={4} onCardClick={handleCardClick} />
//         </div>

//         {/* Example 2: 3 cards with auto-play */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Auto-play Slider (3 cards)</h2>
//           <Slider items={sampleItems} cardsPerView={3} autoPlay={true} autoPlayInterval={2000} />
//         </div>

//         {/* Example 3: Custom card renderer */}
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Card Design</h2>
//           <Slider
//             items={sampleItems}
//             cardsPerView={4}
//             showDots={false}
//             renderCard={(item) => (
//               <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm opacity-90">{item.description}</p>
//               </div>
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderDemo;
