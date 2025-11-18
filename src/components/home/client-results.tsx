"use client";

import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt?: string;
    title?: string;
  }[];
}

export default function ClientResults({ images }: ImageGridProps) {
  return (
    <div className="bg-bg-light w-full">
      <div className="w-full max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-heading  md:text-5xl text-primary tracking-tight py-8 text-center">
          Transformation Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-64">
                <Image src={img.src} alt={img.alt || `Image ${idx + 1}`} fill />
              </div>
              {img.title && (
                <div className="text-center py-2 font-medium text-gray-800">
                  {img.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
