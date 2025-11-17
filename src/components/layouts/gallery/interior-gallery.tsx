"use client";

import React, { useState } from "react";
import { ImageType } from "../../../lib/types";
import Image from "next/image";
import { APP_NAME, interiorImages } from "../../../lib/constant";
import XmarkIcon from "../../common/icons/x-mark";
import SlideUp from "../../animations/slide-up";

const InteriorGallery = () => {
  const [openImage, setOpenImage] = useState<ImageType | null>(null);

  const handleOpenModal = (img: ImageType) => setOpenImage(img);
  const handleCloseModal = () => setOpenImage(null);

  return (
    <div className="bg-bg-light">
      <div className="bg-bg-light flex flex-col items-center">
        <SlideUp>
          <h2 className="font-playfair font-heading px-6 mt-6 text-xl md:text-3xl text-primary">
            A Space Designed for Comfort, Luxury & Care
          </h2>
        </SlideUp>
      </div>

      <div className="mx-auto max-w-5xl py-12 px-4">
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-14 [&>div]:mb-4
                  "
        >
          {interiorImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition transform hover:scale-[1.01]"
            >
              <SlideUp>
                <button className="w-full text-left block focus:outline-none">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "75%" }}
                  >
                    <Image
                      onClick={() => handleOpenModal(img)}
                      src={img.src}
                      alt={img.alt ?? `${APP_NAME} - Interior Image`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* caption */}
                </button>
              </SlideUp>
            </div>
          ))}
          {openImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity"
              onClick={handleCloseModal}
            >
              <div
                className="relative max-w-4xl w-[90%] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh]">
                  <Image
                    src={openImage?.src}
                    alt={openImage?.alt ?? ""}
                    fill
                    className="object-contain rounded-xl"
                    sizes="100vw"
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                  className="absolute top-3 right-3 cursor-pointer bg-white/90 text-gray-800 rounded-full p-2 shadow hover:bg-white transition hover:scale-110"
                >
                  <XmarkIcon className="size-5" />
                </button>

                {/* Caption (optional) */}
                {/* {openImage?.title && (
                  <div className="p-3 text-center text-white text-sm bg-black/30 backdrop-blur-sm">
                    {openImage.title}
                  </div>
                )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteriorGallery;
