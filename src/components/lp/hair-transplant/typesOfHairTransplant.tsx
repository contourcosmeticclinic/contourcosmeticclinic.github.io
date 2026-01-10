"use client";

import { MainHeading } from "../../ui/mainHeading";
import { ScrollReveal } from "../../ui/scrollReveal";
import { CommonForm } from "./commonForm";

export default function TypeOfHairTransplantSection() {
  const transplantTypes = [
    {
      title: "FUE Technique",
      description:
        "Follicular Unit Extraction - Minimally invasive method with natural results and faster recovery.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      ),
    },
    {
      title: "FUT Technique",
      description:
        "Follicular Unit Transplantation - Strip method ideal for maximum coverage in a single session.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "DHI Technique",
      description:
        "Direct Hair Implantation - Precision implantation without creating recipient sites beforehand.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-4 px-4" id="ht-types-section">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <MainHeading title="Types of Hair Transplant" />

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Transplant Types Cards */}
          <div className="lg:col-span-1 space-y-4">
            {transplantTypes.map((type, index) => (
              <ScrollReveal animation="slideLeft" key={index}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white"
                      style={{
                        background: "linear-gradient(135deg, #4b2e2e 0%, #7b4f4f 100%)",
                      }}
                    >
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#4b2e2e" }}>
                        {type.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{type.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Side - Consultation Form */}
          <ScrollReveal className="lg:col-span-2" animation="blur">
            <div
              className="bg-white rounded-xl p-6 md:p-8 shadow-xl sticky top-4"
              style={{ borderTop: "4px solid #4b2e2e" }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#4b2e2e" }}>
                Consult Now
              </h3>
              <p className="text-gray-600 mb-6 text-sm">Get a free consultation with our experts</p>

              <CommonForm />
              <p className="text-xs text-gray-500 text-center">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
