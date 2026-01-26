"use client";
import React from "react";
import FAQDisclosure, { MAIN_FAQs } from "../common/faq-disclosure";
import { MainHeading } from "../ui/mainHeading";

const Faqs = () => {
  return (
    <div className="py-8 bg-bg-light">
      <MainHeading title="Frequently Asked Questions" />

      <FAQDisclosure faqs={MAIN_FAQs} open={true} />
    </div>
  );
};

export default Faqs;
