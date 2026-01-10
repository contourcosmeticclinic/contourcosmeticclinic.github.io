import React from "react";
import HeroHairTransplant from "../../../components/lp/hair-transplant/heroHairtransplant";
import { BeforeAfterResult } from "../../../components/lp/hair-transplant/beforeAfterResults";
// import { StepperForm } from "../../../components/lp/hair-transplant/stepperForm";
import WhyChooseUs from "../../../components/lp/whyChooseContour";
import TypeOfHairTransplantSection from "../../../components/lp/hair-transplant/typesOfHairTransplant";
import BenefitsSection from "../../../components/lp/hair-transplant/benifits";
import StatsCounter from "../../../components/lp/hair-transplant/statsCounter";
import AppointmentProcess from "../../../components/lp/hair-transplant/bookingProcess";
import { WhatOurClientSays } from "../../../components/lp/hair-transplant/whatOurClientSays";
import CTASection from "../../../components/lp/hair-transplant/ctaSection";
import Footer from "../../../components/lp/hair-transplant/footer";
import { hairTransplantMetadata } from "../../../lib/metadata/hairTransplantPageMetadata";
import { Metadata } from "next";
import { HairTransplantFAQs } from "../../../components/lp/hair-transplant/faqSection";

export const metadata: Metadata = {
  ...hairTransplantMetadata,
};

const HairTransplantLandingPage = () => {
  return (
    <div>
      <HeroHairTransplant />
      <BeforeAfterResult />
      {/* <StepperForm /> */}
      <WhyChooseUs />
      {/* <DoctroSection /> */}
      <TypeOfHairTransplantSection />
      <BenefitsSection />
      <StatsCounter />
      <AppointmentProcess />
      <HairTransplantFAQs />
      <WhatOurClientSays />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HairTransplantLandingPage;
