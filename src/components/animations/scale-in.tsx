"use client";

import { motion } from "framer-motion";

import { AnimationProps } from "./fade-in";

export default function ScaleIn({
  children,
  delay = 0,
  className = "",
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
