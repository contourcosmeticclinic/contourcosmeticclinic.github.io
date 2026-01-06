"use client";
import React from "react";

import { Slider } from "../../ui/slider";
import { HT_HERO_SECTION, HTResultsImages } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";
import { ScrollReveal } from "../../ui/scrollReveal";
import Button from "../../ui/button";
import { scrollToElement } from "../../../lib/util";

export const BeforeAfterResult = () => {
  return (
    <ScrollReveal animation="fadeIn">
      <section id="ht-before-after-result" className="flex items-center flex-col py-12">
        <MainHeading title="Before After Results" />
        <div className="mb-12">
          <Slider
            items={HTResultsImages}
            cardsPerView={3}
            autoPlay={true}
            autoPlayInterval={2000}
          />
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
