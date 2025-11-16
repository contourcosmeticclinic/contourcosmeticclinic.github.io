import clsx from "clsx";
import React, { JSX } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const sizeMap = {
  1: "text-4xl md:text-5xl font-bold",
  2: "text-3xl md:text-4xl font-semibold",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg md:text-xl font-medium",
  6: "text-base md:text-lg font-medium",
};

export default function Heading({
  level = 1,
  children,
  className,
  align = "left",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        sizeMap[level],
        "font-heading text-forest-dark ",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}
