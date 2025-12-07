"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowUp from "./icons/arrowUp";
import WpAnimated from "./icons/whatsAppAnimated";
import { socialLinks } from "../../lib/constant";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={socialLinks.whatsapp}
          target="_blank"
          className="bg-white shadow-xl p-2 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300"
        >
          <WpAnimated />
        </Link>
      </motion.div>

      {/* Scroll to Top Button */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-accent shadow-xl p-2 rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </div>
  );
}
