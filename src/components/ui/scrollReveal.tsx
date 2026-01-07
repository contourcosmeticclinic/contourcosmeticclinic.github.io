"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type AnimationType =
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "slideUp"
  | "slideDown"
  | "scaleUp"
  | "scaleDown"
  | "rotateIn"
  | "blur"
  | "flipX"
  | "flipY";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  const animations: Record<AnimationType, Variants> = {
    fadeIn: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    scaleDown: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -15 },
      visible: { opacity: 1, rotate: 0 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
    flipX: {
      hidden: { opacity: 0, rotateX: 90 },
      visible: { opacity: 1, rotateX: 0 },
    },
    flipY: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};
