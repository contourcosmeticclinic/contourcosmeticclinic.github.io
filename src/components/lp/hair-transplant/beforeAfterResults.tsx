"use client";
import React from "react";
import { HTResultVideos, PHONE_NUMBER } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";
import { ScrollReveal } from "../../ui/scrollReveal";
import Button from "../../ui/button";

import CardCarousel from "../../ui/cardSlider";
import VideoStorySlider from "../../ui/videoSlider";

type Props = {
  isReelGalleryEnabled?: boolean;
  bookNowButton?: boolean;
};
export const BookNow = () => (
  <div className="mt-4 flex items-center justify-center">
    <a href={`tel:+${PHONE_NUMBER}`}>
      <Button className="uppercase rounded-full">Book your appointment now</Button>
    </a>
  </div>
);

export const BeforeAfterResult = ({ isReelGalleryEnabled = true, bookNowButton = true }: Props) => {
  return (
    <ScrollReveal animation="fadeIn">
      <section id="ht-before-after-result" className="flex items-center flex-col py-12">
        <div className="py-4">
          <MainHeading title="Before After Results" />
          <CardCarousel />
          {bookNowButton && <BookNow />}
        </div>

        {isReelGalleryEnabled && (
          <div className="py-4">
            <MainHeading title="Client Success Stories" />
            <VideoStorySlider videos={HTResultVideos} />
            {bookNowButton && <BookNow />}
          </div>
        )}
      </section>
    </ScrollReveal>
  );
};
