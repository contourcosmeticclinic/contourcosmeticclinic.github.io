"use client";

import { motion } from "framer-motion";

import { AnimationProps } from "./fade-in";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export function StaggerContainer({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: AnimationProps) {
  return <motion.div variants={child}>{children}</motion.div>;
}
