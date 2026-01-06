"use client";

import React from "react";

import { motion } from "framer-motion";
import { ScrollReveal } from "../../ui/scrollReveal";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Success Icon */}
        <ScrollReveal animation="scaleUp">
          <motion.div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-200"
            animate={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-4xl">🌱</span>
          </motion.div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="fadeIn" delay={0.1}>
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">
            Thank You for Taking the First Step
          </h1>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal animation="slideUp" delay={0.2}>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Your hair restoration journey has officially begun. Our medical team will review your
            details and reach out to you shortly with the next steps.
          </p>
        </ScrollReveal>

        {/* Quote Card */}
        <ScrollReveal animation="blur" delay={0.35}>
          <div className="relative mt-6 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <span className="absolute -top-3 left-6 bg-white px-2 text-gray-400 text-xl">❝</span>
            <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed">
              A hair transplant isn’t just about regrowth —
              <br className="hidden md:block" />
              it’s about restoring confidence, identity, and self-belief.
            </p>
            <p className="mt-4 text-sm text-gray-500">— Your transformation starts here</p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="slideUp" delay={0.5}>
          <div className="pt-4">
            <Link
              href="/lp/hair-transplant-in-bangalore"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition"
            >
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
