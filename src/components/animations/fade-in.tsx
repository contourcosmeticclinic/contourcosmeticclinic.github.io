"use client";
import { motion } from "framer-motion";
import React from "react";

export type AnimationProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};
export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
