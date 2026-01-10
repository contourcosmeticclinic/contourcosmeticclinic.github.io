/* eslint-disable react-hooks/purity */
"use client";

import React, { useState, useEffect } from "react";

interface AnimatedOfferBannerProps {
  rotationInterval?: number;
}

const AnimatedOfferBanner: React.FC<AnimatedOfferBannerProps> = ({ rotationInterval = 5000 }) => {
  const [isVisible] = useState<boolean>(true);
  const [currentOffer, setCurrentOffer] = useState<number>(0);

  const offers = [
    "🎉Best Hair Transplant Offer in Bangalore – Limited Time.",
    "✅ Hair Transplant @ ₹12 per Graft – Affordable & Natural Results",
    "✅ Free Doctor Consultation & Hair Analysis",
    "✅ 5 Sessions of GFC + Laser Hair Therapy FREE",
    "✅ Hair Transplant Packages Starting from ₹45,000 Only",
    "🔑👨🏻Performed by Dr. Saket Jha using FUE, Sapphire and DHI techniques",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [offers.length, rotationInterval]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(201, 169, 97, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(201, 169, 97, 0.6);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite ease-in-out;
        }

        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
      `}</style>

      <div className="relative overflow-hidden bg-gradient-to-r from-[#4b2e2e] via-[#5d3838] to-[#4b2e2e] text-white py-2 px-4">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a961]/20 to-transparent animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#c9a961]/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Limited Time Badge */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <span className="bg-[#ffb507] text-[#2d1a1a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide animate-glow">
              Limited Time
            </span>
          </div>

          {/* Offer text with slide animation */}
          <div className="flex-1 text-center overflow-hidden px-2">
            <div className="relative h-7">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center font-semibold text-xs sm:text-sm md:text-base transition-all duration-700 ${
                    currentOffer === index
                      ? "opacity-100 translate-y-0"
                      : index < currentOffer
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  <span className="animate-pulse-subtle">{offer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-0.5 left-0 right-0 flex justify-center gap-1.5">
          {offers.map((_, index) => (
            <div
              key={index}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                currentOffer === index ? "w-8 bg-[#c9a961]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimatedOfferBanner;
