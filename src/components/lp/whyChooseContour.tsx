"use client";
import React from "react";
import { CheckIcon } from "../common/icons/checkIcon";
import { MainHeading } from "../ui/mainHeading";
import Image from "next/image";
import Button from "../ui/button";
import { scrollToElement } from "../../lib/util";
import { HT_HERO_SECTION } from "../../lib/constant";
import { ScrollReveal } from "../ui/scrollReveal";
import { FeaturesCards } from "./hair-transplant/featureCards";

export default function WhyChooseUs() {
  const reasons = [
    "Expert dermatologists specializing in hair transplants.",
    "Utilization of advanced FUE and FUT techniques.",
    "Personalized treatment plans tailored to your needs.",
    "Focus on achieving natural and undetectable results.",
    "Modern and well-equipped facilities ensuring safety.",
    "Detailed consultations to manage expectations.",
    "Comprehensive post-procedure care and follow-ups.",
  ];

  return (
    <section className="py-8 px-4" id="ht-why-choose-contour">
      <div className="max-w-7xl mx-auto">
        <MainHeading title="Why Choose Contour?" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <ScrollReveal animation="slideLeft">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic/contourcosmeticclinic-interior9.jpg"
                  alt="Contour interior image"
                  className="w-full h-full object-cover"
                  height={50}
                  width={300}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="shrink-0 mt-1">
                  <ScrollReveal animation="slideUp">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center transition-colors">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal animation="blur">
                  <p className="text-gray-700 text-md leading-relaxed">{reason}</p>
                </ScrollReveal>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="rounded-full" onClick={() => scrollToElement(HT_HERO_SECTION)}>
                GET CONSULTATION NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FeaturesCards />
    </section>
  );
}
