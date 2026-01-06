"use client";
import { useState } from "react";
import { Step, Stepper } from "../../ui/stepper";
import { inputClass } from "../../common/connect-form";
import Image from "next/image";
import { MainHeading } from "../../ui/mainHeading";
import { useRouter } from "next/navigation";
import { LANDING_PAGE_THANK_YOU } from "../../../lib/constant";
import { ScrollReveal } from "../../ui/scrollReveal";

export const StepperForm = () => {
  const [formData, setFormData] = useState({
    dropdown: "",
    name: "",
    phone: "",
    query: "",
  });
  const router = useRouter();
  const handleComplete = () => {
    console.log("Form submitted:", formData);
    router.push(LANDING_PAGE_THANK_YOU);
  };

  const handleStepChange = (step: number) => {
    console.log("Changed to step:", step);
  };
  const steps: Step[] = [
    {
      title: "Baldness level",
      content: (
        <div className="space-y-6">
          <div className="py-2">
            <Image
              loading="lazy"
              src="/images/lp/hair-transplant/baldness-level.png"
              alt="Baldness level"
              height={10}
              width={600}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select an Option</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Option</label>
            <select
              value={formData.dropdown}
              onChange={(e) => setFormData({ ...formData, dropdown: e.target.value })}
              className={inputClass}
            >
              <option value="">Choose an option</option>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <option key={num} value={num}>
                  Option {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      ),
      validate: () => formData.dropdown !== "",
    },
    {
      title: "Your fullname",
      description: "Please enter your full name",
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What&apos;s Your Name?</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
        </div>
      ),
      validate: () => formData.name.trim() !== "",
    },
    {
      title: "Phone Number",
      description: "How can we reach you?",
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Phone Number</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className={inputClass}
            />
          </div>
        </div>
      ),
      validate: () => formData.phone.trim() !== "",
    },
    {
      title: "Your Query",
      description: "Tell us what you need help with",
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Query</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              placeholder="Type your query here..."
              rows={6}
              className={inputClass}
            />
          </div>
        </div>
      ),
      validate: () => formData.query.trim() !== "",
    },
  ];

  return (
    <section className="py-12">
      <ScrollReveal animation="blur">
        <MainHeading title="New Hair Transplant – Restore Your Confidence" />
      </ScrollReveal>
      <ScrollReveal animation="fadeIn">
        <Stepper steps={steps} onComplete={handleComplete} onStepChange={handleStepChange} />
      </ScrollReveal>
    </section>
  );
};
