/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { randomQuote } from "../../lib/util";

const LeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const IMAGE_URL = "https://template.canva.com/EAGFaPNlvsU/3/0/1600w-s566ULkHlkQ.jpg";
const cards = Array.from({ length: 8 });

export default function CardCarousel() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Measure first card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (firstCardRef.current) {
        const style = window.getComputedStyle(firstCardRef.current);
        const width =
          firstCardRef.current?.offsetWidth +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight);
        setCardWidth(width);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () => {
    // Maximum index to show last card fully
    const offsetWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const maxIndex = Math.max(cards.length - Math.floor(offsetWidth / cardWidth), 0);
    setIndex((i) => Math.min(i + 1, maxIndex));
  };

  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Controls */}
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2">
        <LeftIcon />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2">
        <RightIcon />
      </button>

      {/* Slider */}
      <motion.div
        className="flex"
        animate={{ x: -index * cardWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
      >
        {cards.map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstCardRef : null} // measure first card
            className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
          >
            <div className="h-96 flex flex-col rounded-xl overflow-hidden">
              <div className="flex-1 flex items-center justify-center relative group overflow-hidden">
                <img src={IMAGE_URL} alt="Card" className="max-w-full max-h-full object-contain" />
                <div className="absolute bottom-0 left-0 right-0 bg-primary text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <q className="text-sm text-center flex italic py-4 px-3">{randomQuote(i)}</q>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
