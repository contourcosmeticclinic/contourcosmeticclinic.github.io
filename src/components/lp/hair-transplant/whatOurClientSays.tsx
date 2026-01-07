import React from "react";
import { InfiniteMovingCards } from "../../ui/moving-cards";
import { HTReviews } from "../../../lib/constant";
import { MainHeading } from "../../ui/mainHeading";

export const WhatOurClientSays = () => {
  return (
    <section className="py-8" id="ht-testimonials">
      <div className="rounded-md flex flex-col antialiased bg-bg-light items-center justify-center relative overflow-hidden">
        {/* Heading */}
        <MainHeading title="What Our Clients Says" />

        <InfiniteMovingCards items={HTReviews} direction="right" speed="slow" />
      </div>
    </section>
  );
};
