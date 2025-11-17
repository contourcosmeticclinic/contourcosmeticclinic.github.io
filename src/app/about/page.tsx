import { Metadata } from "next";
import React from "react";

import { APP_NAME } from "@/lib/constant";
import Image from "next/image";
import SlideUp from "../../components/animations/slide-up";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${APP_NAME} | About`,
  description:
    "Learn more about Contour Cosmetic Clinic, our doctors, experience, and mission.",
};

export default function AboutPage() {
  return (
    <section className="w-full bg-bg-light py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Logo Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative">
            <Image
              src="/assets/cqube.gif"
              alt="Contour Cosmetic Clinic Logo"
              width={180}
              height={180}
              className="drop-shadow-lg rounded-full"
            />
          </div>

          <SlideUp>
            <h2 className="font-playfair font-heading text-3xl md:text-4xl text-primary mt-6">
              Enhancing Natural Beauty with Science & Art
            </h2>
          </SlideUp>

          <p className="text-body-text font-body text-base md:text-lg max-w-2xl mt-4">
            At Contour, every transformation begins with trust, comfort, and a
            deep understanding of your individuality.
          </p>
        </div>

        {/* Vision + Mission Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-accent/20 p-10 rounded-3xl shadow-md backdrop-blur-md">
          {/* Vision */}
          <SlideUp>
            <div className="space-y-4">
              <h3 className="font-heading text-3xl text-primary">Our Vision</h3>

              <p className="text-body-text leading-relaxed font-body text-base md:text-md">
                To be the preeminent and most trusted name in cosmetic and
                aesthetic care across India, renowned for our unwavering
                commitment to client-centric excellence, innovative treatments,
                and the harmonious blend of luxury experiences with accessible
                affordability.
              </p>

              <p className="text-body-text leading-relaxed font-body text-base md:text-md">
                We envision a future where every individual can confidently
                embrace their unique beauty potential through our compassionate
                expertise and cutting-edge solutions, setting new benchmarks for
                quality and client satisfaction in the industry.
              </p>
            </div>
          </SlideUp>

          {/* Mission */}
          <SlideUp>
            <div className="space-y-4">
              <h3 className="font-heading text-3xl text-primary">
                Our Mission
              </h3>

              <p className="text-body-text leading-relaxed font-body text-base md:text-md">
                At Contour Cosmetic Clinic, our mission is to empower
                individuals to achieve their aesthetic aspirations through
                personalized, ethical, and results-driven treatments.
              </p>

              <p className="text-body-text leading-relaxed font-body text-base md:text-md">
                We are dedicated to delivering unparalleled care through a
                synergistic team of highly experienced and continuously evolving
                aestheticians, doctors, and stylists.
              </p>

              <p className="text-body-text leading-relaxed font-body text-base md:text-md">
                By fostering an environment of trust, innovation, and
                affordability, we provide luxury treatments that consistently
                yield stunning and lasting results—ensuring every client feels
                valued, understood, and beautifully confident.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
      {/* CTA Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
        <Link
          href="/doctors"
          className="text-primary font-medium text-lg underline-offset-4 hover:underline hover:text-primary/80 transition-all"
        >
          Meet Our Experts →
        </Link>

        <Link
          href="/services"
          className="text-primary font-medium text-lg underline-offset-4 hover:underline hover:text-primary/80 transition-all"
        >
          Explore Our Services →
        </Link>
      </div>
    </section>
  );
}
