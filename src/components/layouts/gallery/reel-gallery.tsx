"use client";
import { useRef } from "react";
import { VideoType } from "../../../lib/types";

type ReelsGalleryProps = {
  videos: VideoType[];
};

export default function ReelsGallery({ videos }: ReelsGalleryProps) {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleEnableSound = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.play();
    } else {
      video.muted = true;
      video.play();
    }
  };

  return (
    <section className="w-full py-12 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading  md:text-5xl text-primary tracking-tight py-8 text-center">
          Clinic Reel Showcase
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              onClick={() => handleEnableSound(index)}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={video.src}
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-500"
              />

              {/* Tap to unmute badge */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Tap for Sound 🔊
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
