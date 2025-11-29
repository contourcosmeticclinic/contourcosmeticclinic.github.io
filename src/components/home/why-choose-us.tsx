"use client";

import Image from "next/image";

import SlideUp from "../animations/slide-up";
import DownloadIcon from "../common/icons/download";
import { sendToAnalytics } from "../../lib/gtag";

const features = [
  {
    title: "Totally Safe",
    description: "Strict protocols ensure 100% safety across all procedures.",
    image: "/images/why-choose-us-images/safe.png",
  },
  {
    title: "Natural Result",
    description: "Meticulous graft placement for a 100% natural appearance.",
    image: "/images/why-choose-us-images/natural.png",
  },
  {
    title: "Painless",
    description: "Ultra-fine tools (≤1mm) for a pain-free experience.",
    image: "/images/why-choose-us-images/painless.png",
  },
  {
    title: "Maximum Viability",
    description: "Over 90% graft survival – above industry average.",
    image: "/images/why-choose-us-images/visibility.png",
  },
  {
    title: "Only by Doctors",
    description: "All procedures by certified medical professionals.",
    image: "/images/why-choose-us-images/doctor.png",
  },
  {
    title: "Growth for Lifetime",
    description: "Only healthy follicles chosen for lifelong results.",
    image: "/images/why-choose-us-images/growth.png",
  },
];

export default function WhyChooseClinic() {
  return (
    <section className="relative w-full py-12 bg-bg-light">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Section Heading */}
        <SlideUp>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary font-heading leading-tight">
            Why Choose Our Clinic?
          </h2>
        </SlideUp>

        {/* Subheading */}
        <SlideUp className="mt-4">
          <p className="mx-auto md:max-w-4xl md:mx-auto text-body-text text-sm md:text-lg leading-relaxed font-body">
            Indulge in bespoke facial aesthetics and premium cosmetic surgery, expertly crafted by
            renowned specialists — all at surprisingly affordable rates. Discover the gold standard
            in hair restoration, featuring certified doctors, cutting-edge techniques, and
            effortlessly natural results.
          </p>
        </SlideUp>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <SlideUp key={idx}>
              <div className="flex items-center gap-4 bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-20 h-20 relative shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-primary font-semibold font-playfair text-xl md:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-text text-sm font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            onClick={() => sendToAnalytics("service_download_button_clicked")}
            href="/assets/contour-brochure.pdf"
            target="_blank"
            className="bg-primary rounded-full flex items-center gap-4 text-white px-8 py-3 hover:bg-forest-light transition-all duration-300"
          >
            <DownloadIcon className="size-5" /> Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
