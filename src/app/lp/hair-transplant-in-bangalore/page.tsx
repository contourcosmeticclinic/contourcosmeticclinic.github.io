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

const HairTransplantLandingPage = () => {
  return (
    <div>
      <HeroHairTransplant />
      <BeforeAfterResult />
      {/* <StepperForm /> */}
      <WhyChooseUs />
      <TypeOfHairTransplantSection />
      <BenefitsSection />
      <StatsCounter />
      <AppointmentProcess />
      <WhatOurClientSays />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HairTransplantLandingPage;
