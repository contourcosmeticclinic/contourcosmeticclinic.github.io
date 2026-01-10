"use client";
import React from "react";
import { HT_HERO_SECTION } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";
import { ScrollReveal } from "../../ui/scrollReveal";
import Button from "../../ui/button";
import { scrollToElement } from "../../../lib/util";
import CardCarousel from "../../ui/cardSlider";

export const BeforeAfterResult = () => {
  return (
    <ScrollReveal animation="fadeIn">
      <section id="ht-before-after-result" className="flex items-center flex-col py-12">
        <MainHeading title="Before After Results" />
        <div className="mb-12">
          <CardCarousel />
        </div>

        <div>
          <Button
            className="uppercase rounded-full"
            onClick={() => scrollToElement(HT_HERO_SECTION)}
          >
            Book your appointment now
          </Button>
        </div>
      </section>
    </ScrollReveal>
  );
};
