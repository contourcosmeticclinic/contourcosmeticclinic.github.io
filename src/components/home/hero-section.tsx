"use client";

import Image from "next/image";
import Link from "next/link";

import SlideUp from "../animations/slide-up";
import PhoneIconOutlined from "../common/icons/phone";
import { RotatingText } from "../ui/rotating-text";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-light md:py-18">
      {/* Background Soft Glows */}

      <div className="relative mx-auto max-w-6xl px-3 grid grid-cols-1 md:bg-accent/30 rounded-3xl md:grid-cols-2 gap-12 items-center">
        {/* Text + CTA */}
        <div className="relative">
          <div className="relative flex flex-1 flex-col items-center md:items-start space-y-6  md:p-8">
            {/* Heading */}
            <SlideUp>
              <h1 className="font-playfair mt-12 md:px-0 px-8 md:mt-0 text-center sm:text-left font-heading text-4xl md:text-5xl lg:text-6xl text-primary leading-tight whitespace-nowrap">
                Contour Cosmetic Clinic
              </h1>
            </SlideUp>

            {/* Sub Heading */}
            <SlideUp>
              <p className="text-body-text text-center sm:text-left font-body text-sm md:text-md max-w-lg">
                We finish with care, welcome change, and stay centered on your confidence.
                Experience advanced cosmetic, skin & hair treatments designed for timeless beauty.
              </p>
            </SlideUp>

            {/* Accent Line */}
            <SlideUp>
              <p className="text-forest-light whitespace-nowrap hidden md:block text-center sm:text-left text-sm font-body font-semibold tracking-wide">
                Hair Treatment • Skin Rejuvenation • Facial Plastics • Laser Resurfacing
              </p>
              <RotatingText
                className="text-xl font-heading md:hidden block"
                text={[
                  "• Hair Treatment •",
                  "• Skin Rejuvenation •",
                  "• Facial Plastics •",
                  "• Laser Resurfacing •",
                ]}
              />
            </SlideUp>

            <SlideUp>
              <div className="mt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="rounded-full flex gap-2 items-center bg-primary px-8 py-3 text-white font-medium font-inter 
                  shadow-md hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
                >
                  <PhoneIconOutlined className="size-5" /> Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-primary px-8 py-3 text-primary font-medium 
                  font-inter hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Hero Image */}
        <SlideUp>
          <div className="hidden md:block">
            <div className="relative flex justify-center md:justify-end">
              {/* Glow */}
              <div className="absolute inset-0 bg-[--color-beige-light]/30 blur-3xl rounded-full scale-150"></div>

              <div className="relative w-fit -mt-12">
                <Image
                  loading="lazy"
                  src="/images/hero-closeup.png"
                  height={100} // increase from 1020 → 1200 or even 1400
                  width={500}
                  alt="Cosmetic Model"
                  className="rounded-3xl object-contain transform transition-all duration-500 filter drop-shadow-[6px_6px_10px_rgba(0,0,0,0.2)]"
                />
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
