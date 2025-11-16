"use client";

import { motion } from "framer-motion";

import { AnimationProps } from "./fade-in";

export default function SlideUp({
  children,
  delay = 0,
  className = "",
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
