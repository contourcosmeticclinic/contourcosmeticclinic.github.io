import React from "react";
import FAQDisclosure from "../../common/faq-disclosure";
import { HairTransplantFaqData } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";

export const HairTransplantFAQs = () => {
  return (
    <div className="py-8 bg-bg-light">
      <MainHeading title="Frequently Asked Questions" />
      <FAQDisclosure faqs={HairTransplantFaqData} />
    </div>
  );
};
