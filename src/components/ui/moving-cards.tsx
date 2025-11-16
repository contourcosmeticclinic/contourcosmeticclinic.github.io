"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export type ReviewType = {
  quote: string;
  name: string;
  title?: string;
  imageUrl?: string;
  date?: string;
  rating: number;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ReviewType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    addAnimation();
  }, []);

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    const initials =
      parts.length === 1
        ? parts[0][0]
        : parts[0][0] + parts[parts.length - 1][0];
    return initials.toUpperCase();
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-[#E5E7EB] bg-[linear-gradient(180deg,#FAFAFA,#F5F5F5)] px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <blockquote className="flex flex-col justify-between h-full">
              {/* Rating */}
              {typeof item.rating === "number" && (
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      {i < item.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              )}

              {/* Quote */}
              <span className="flex-1 text-sm leading-[1.6] font-normal text-[#1F2937]">
                {item.quote}
              </span>

              {/* Footer: Name, Date, Avatar */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-[#1F2937]">
                    {item.name}
                  </span>
                  {item.date && (
                    <span className="text-xs leading-[1.4] font-normal text-[#6B7280]">
                      {item.date}
                    </span>
                  )}
                </div>

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#6B7280] text-white font-semibold text-sm overflow-hidden">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    getInitials(item.name)
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
