"use client";
import Image from "next/image";
import { CommonForm } from "./commonForm";
import { StageSelector } from "./stageSelector";

export const BaldnessForm = () => {
  return (
    <div className="max-w-md border border-accent rounded-2xl  mx-auto">
      {/* Header - More Compact */}
      <div className="text-center mb-3  bg-accent rounded-tl-2xl rounded-tr-2xl  py-2 text-white">
        <h3 className="text-2xl">
          Get <span className="text-white animate-pulse font-extrabold">FREE</span> Consultation Now
        </h3>
        <p className="text-lg italic underline underline-offset-1 text-primary font-semibold">
          Upto 50% OFF T&C<sup>*</sup>
        </p>
        <div className="mb-3">
          <Image
            loading="lazy"
            src="/images/lp/hair-transplant/baldness-level.png"
            alt="Baldness level"
            height={100}
            width={600}
          />
        </div>
      </div>

      {/* Baldness Level Image - Smaller */}

      <div className="p-4">
        <StageSelector />
        <CommonForm />
      </div>
    </div>
  );
};
