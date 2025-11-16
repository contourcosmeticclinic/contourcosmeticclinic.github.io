"use client";

import Image from "next/image";
import Link from "next/link";

import SlideUp from "../animations/slide-up";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-beige-light py-2 md:py-28">
      {/* Background Soft Glows */}

      <div className="relative mx-auto max-w-7xl px-3 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text + CTA */}
        <div className="relative">
          <div className="relative flex flex-col items-start space-y-6 p-6 md:p-10">
            {/* Heading */}
            <SlideUp>
              <h1 className="font-playfair font-heading text-4xl md:text-5xl lg:text-6xl text-forest-dark leading-tight">
                Contour Cosmetic Clinic
              </h1>
            </SlideUp>

            {/* Sub Heading */}
            <SlideUp>
              <p className="text-charcol-wood font-body text-md md:text-lg max-w-lg">
                We finish with care, welcome change, and stay centered on your
                confidence. Experience advanced cosmetic, skin & hair treatments
                designed for timeless beauty.
              </p>
            </SlideUp>

            {/* Accent Line */}
            <SlideUp>
              <p className="text-forest-light text-sm font-body font-semibold tracking-wide">
                Hair Treatment • Skin Rejuvenation • Facial Plastics • Laser
                Resurfacing
              </p>
            </SlideUp>

            <SlideUp>
              <div className="mt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="rounded bg-forest-dark px-8 py-3 text-white font-medium font-inter 
                  shadow-md hover:shadow-xl hover:bg-[#1F3A3A] transition-all duration-300"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded border border-forest-dark px-8 py-3 text-forest-dark font-medium 
                  font-inter hover:bg-forest-dark hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Hero Image */}
        <SlideUp>
          <div className="relative flex justify-center">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#2E4F4F]/10 blur-3xl rounded-full scale-110"></div>

            <Image
              loading="lazy"
              src="/images/hero-image.webp"
              height={600}
              width={500}
              alt="Cosmetic Model"
              className="relative rounded-3xl shadow-lg object-cover"
            />
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
