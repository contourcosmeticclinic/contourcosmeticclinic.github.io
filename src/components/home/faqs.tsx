"use client";
import React from "react";
import FAQDisclosure from "../common/faq-disclosure";

const Faqs = () => {
  return (
    <div className="py-8 bg-bg-light">
      <h2 className="font-playfair font-heading text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-center mb-8">
        Frequently Asked Questions
      </h2>
      <FAQDisclosure />
    </div>
  );
};

export default Faqs;
