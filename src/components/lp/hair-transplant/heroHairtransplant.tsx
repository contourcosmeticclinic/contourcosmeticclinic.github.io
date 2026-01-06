"use client";

import SlideUp from "../../animations/slide-up";
import Button from "../../ui/button";
import { BaldnessForm } from "./baldnessLevelForm";

export default function HeroHairTransplant() {
  return (
    <section id="hair-transplant-hero" className="relative w-full overflow-hidden py-2 md:bg-none">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 rounded-3xl">
        {/* Text + CTA */}
        <div className="relative flex flex-col px-3 space-y-4 md:p-8">
          <SlideUp>
            <h1 className="font-playfair font-semibold mt-12 sm:text-left text-primary text-5xl lg:text-6xl">
              Bangalore&apos;s first choice for <br></br>
              <span className="text-subheading"> Hair Transplant</span>
            </h1>
          </SlideUp>

          <SlideUp className="space-y-2">
            <h3 className="text-xl text-secondary font-medium">
              Hair Trasnplant Starting from Only <span className="font-bold">₹45,000!</span>
            </h3>
            <h3 className="text-xl text-secondary font-medium">50+ awards & achievements</h3>
            <h3 className="text-xl text-secondary font-medium">Easy EMI available</h3>
          </SlideUp>

          <SlideUp>
            <Button className="uppercase rounded-full">Get Consulation Now</Button>
          </SlideUp>
        </div>

        {/* Hero Image */}
        <SlideUp>
          <BaldnessForm />
        </SlideUp>
      </div>
    </section>
  );
}
