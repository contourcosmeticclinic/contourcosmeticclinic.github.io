/* eslint-disable curly */
// components/MasonryGallery.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type ImageItem = {
  src: string;
  alt?: string;
  title?: string;
  width?: number; // optional hint for next/image
  height?: number;
};

export default function MasonryGallery({ images }: { images: ImageItem[] }) {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const open = (index: number) => setOpenedIndex(index);
  const close = () => setOpenedIndex(null);

  const prev = useCallback(() => {
    setOpenedIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const next = useCallback(() => {
    setOpenedIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  // keyboard handlers
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openedIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openedIndex, prev, next]);

  // trap focus in modal (basic)
  useEffect(() => {
    if (openedIndex === null) return;
    const prevActive = document.activeElement as HTMLElement | null;
    if (modalRef.current) modalRef.current.focus();
    return () => prevActive?.focus();
  }, [openedIndex]);

  // simple touch swipe detection for modal
  useEffect(() => {
    if (openedIndex === null) return;
    let startX = 0;
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
    }
    function onTouchEnd(e: TouchEvent) {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (diff > 50) prev();
      if (diff < -50) next();
    }
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [openedIndex, prev, next]);

  return (
    <>
      {/* Masonry grid using CSS columns */}
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            columns-1 sm:columns-2 md:columns-3 lg:columns-4
            gap-4
            [&>div]:mb-4
            "
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition transform hover:scale-[1.01]"
            >
              <button
                onClick={() => open(idx)}
                aria-label={`Open image ${img.title ?? img.alt ?? idx + 1}`}
                className="w-full text-left block focus:outline-none"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "75%" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt ?? `Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* caption */}
                {img.title && (
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {img.title}
                    </h4>
                    {img.alt && (
                      <p className="text-xs text-gray-500 mt-1">{img.alt}</p>
                    )}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {openedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative z-10 max-w-5xl w-full mx-auto"
            aria-label="Image viewer"
          >
            {/* close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 bg-white/90 text-gray-800 rounded-full p-2 shadow hover:scale-105 transition"
            >
              ✕
            </button>

            {/* prev */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-gray-800 rounded-full p-2 shadow hover:scale-105 transition"
            >
              ‹
            </button>

            {/* next */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-gray-800 rounded-full p-2 shadow hover:scale-105 transition"
            >
              ›
            </button>

            <div className="w-full cursor-pointer bg-transparent rounded-xl overflow-hidden">
              <div
                className="relative w-full"
                style={{ paddingBottom: "66.66%" }}
              >
                <Image
                  src={images[openedIndex].src}
                  alt={images[openedIndex].alt ?? `Image ${openedIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-contain rounded-xl cursor-pointer"
                />
              </div>

              {/* caption area */}
              <div className="mt-4 bg-white/90 rounded-b-xl p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {images[openedIndex].title ?? ""}
                </h3>
                {images[openedIndex].alt && (
                  <p className="text-sm text-gray-600 mt-1">
                    {images[openedIndex].alt}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
