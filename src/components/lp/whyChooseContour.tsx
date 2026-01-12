"use client";
import React from "react";
import { CheckIcon } from "../common/icons/checkIcon";
import { MainHeading } from "../ui/mainHeading";
import Image from "next/image";
import Button from "../ui/button";
import { PHONE_NUMBER } from "../../lib/constant";
import { ScrollReveal } from "../ui/scrollReveal";
import { FeaturesCards } from "./hair-transplant/featureCards";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    "Expert Hair Restoration Surgeon / Oral Maxillofacial Surgeon specializing in hair transplants.",
    "Utilization of advanced FUE and Sapphire techniques.",
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
                  src="/images/doctors/ot-image-doctor-saket.JPG"
                  alt="Dr Saket Performing Hair Transplant OT image"
                  className="w-full h-[600px] object-cover"
                  height={500}
                  width={300}
                />
                <p className="text-gray-600 text-sm p-2 italic">
                  Dr. Saket Jha, 2× Gold Medalist, Maxillofacial & Facial Plastic Surgeon,
                  specializes in advanced hair restoration and hair transplant procedures, with
                  2,000+ successful hair transplants and 100+ scientific publications.
                  <span className="text-gray-600 font-extrabold text-sm justify-center py-2 flex items-center italic">
                    <Link href="/assets/MAOS-D-25-00742_R1.pdf" target="_blank" className="flex">
                      Featured Across Publications
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
                  </span>
                </p>
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
              <a href={`tel:+${PHONE_NUMBER}`}>
                <Button className="rounded-full">GET CONSULTATION NOW</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FeaturesCards />
    </section>
  );
}
