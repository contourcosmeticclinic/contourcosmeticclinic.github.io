"use client";
import React, { useState, useEffect, useRef } from "react";

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 10, label: "Year of experience", suffix: "+" },
    { number: 100, label: "Happy Patients", suffix: "+" },
    { number: 500, label: "Treatments", suffix: "+" },
    { number: 50, label: "Awards", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-white"
      style={{
        borderTop: "3px solid #8B6F47",
        borderBottom: "3px solid #8B6F47",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${index * 0.15}s`,
              }}
            >
              {/* Vertical divider - hidden on mobile for first item, hidden on desktop for last item */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-gray-300" />
              )}
              {index === 1 && (
                <div className="lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-gray-300" />
              )}

              {/* Counter */}
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
                style={{ color: "#8B6F47" }}
              >
                {isVisible ? (
                  <CountUp end={stat.number} suffix={stat.suffix} delay={index * 150} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              {/* Label */}
              <p className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix, delay }: { end: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [end, delay]);

  return (
    <span
      style={{
        display: "inline-block",
        transform: count > 0 ? "scale(1)" : "scale(0.8)",
        transition: "transform 0.3s ease",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}
