"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="py-36 flex flex-col items-center justify-center bg-white px-6 text-center relative overflow-hidden">
      {/* Floating Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-60 h-60 bg-amber-200/40 blur-3xl rounded-full"
      />
      <Image
        src="/images/loader-logo.png"
        alt="Clinic Logo"
        width={120}
        height={120}
        className="object-contain"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-primary mb-4 font-playfair"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-8"
        >
          We’ve received your submission. Our team will get back to you shortly. Your journey to
          enhanced beauty begins now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition"
          >
            Go Back Home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Floating Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/40 blur-3xl rounded-full"
      />
    </div>
  );
}
