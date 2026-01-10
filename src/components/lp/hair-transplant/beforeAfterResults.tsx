"use client";
import React from "react";
import { HT_HERO_SECTION, HTResultVideos } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";
import { ScrollReveal } from "../../ui/scrollReveal";
import Button from "../../ui/button";
import { scrollToElement } from "../../../lib/util";
import CardCarousel from "../../ui/cardSlider";
import VideoStorySlider from "../../ui/videoSlider";

const BookNow = () => (
  <div className="mt-4 flex items-center justify-center">
    <Button className="uppercase rounded-full" onClick={() => scrollToElement(HT_HERO_SECTION)}>
      Book your appointment now
    </Button>
  </div>
);

export const BeforeAfterResult = () => {
  return (
    <ScrollReveal animation="fadeIn">
      <section id="ht-before-after-result" className="flex items-center flex-col py-12">
        <div className="py-4">
          <MainHeading title="Before After Results" />
          <CardCarousel />
          <BookNow />
        </div>

        <div className="py-4">
          <MainHeading title="Client Success Stories" />
          <VideoStorySlider videos={HTResultVideos} />
          <BookNow />
        </div>
      </section>
    </ScrollReveal>
  );
};
