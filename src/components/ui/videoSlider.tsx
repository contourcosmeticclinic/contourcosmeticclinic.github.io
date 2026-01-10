import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./scrollReveal";

/* Icons */
const LeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10 text-white"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
      clipRule="evenodd"
    />
  </svg>
);

const MuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
  </svg>
);

const UnmuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
  </svg>
);

export type VideoItem = {
  id: number;
  url: string;
  quote?: string;
};

export default function VideoStorySlider({ videos }: { videos: VideoItem[] }) {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [mutedIndex, setMutedIndex] = useState<number | null>(null);

  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  /* Measure card width */
  useEffect(() => {
    const updateWidth = () => {
      if (firstCardRef.current) {
        const style = window.getComputedStyle(firstCardRef.current);
        setCardWidth(
          firstCardRef.current.offsetWidth +
            parseFloat(style.marginLeft) +
            parseFloat(style.marginRight)
        );
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* Navigation */
  const next = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const maxIndex = Math.max(videos.length - Math.floor(containerWidth / cardWidth), 0);
    setIndex((i) => Math.min(i + 1, maxIndex));
  };

  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  /* Play / Pause / Sound */
  const handleTap = async (i: number) => {
    const video = videoRefs.current[i];
    if (!video) return;

    // Pause others
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== i) {
        v.pause();
        v.muted = true;
      }
    });

    if (playingIndex !== i) {
      video.muted = false;
      try {
        await video.play();
        setPlayingIndex(i);
        setMutedIndex(null);
      } catch (e) {
        console.error("Play blocked", e);
      }
      return;
    }

    if (!video.paused) {
      video.pause();
      setPlayingIndex(null);
    } else {
      await video.play();
      setPlayingIndex(i);
    }
  };

  const toggleSound = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    const video = videoRefs.current[i];
    if (!video) return;

    video.muted = !video.muted;
    setMutedIndex(video.muted ? i : null);
  };

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Left / Right Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 rounded-full text-white"
      >
        <LeftIcon />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 rounded-full text-white"
      >
        <RightIcon />
      </button>

      {/* Slider */}
      <motion.div
        className="flex"
        animate={{ x: -index * cardWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
      >
        {videos.map((video, i) => {
          const isPlaying = playingIndex === i;
          const isMuted = mutedIndex === i;

          return (
            <div
              key={video.id}
              ref={i === 0 ? firstCardRef : null}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
            >
              <ScrollReveal animation="blur">
                <div
                  className="relative h-[32rem] rounded-xl overflow-hidden bg-black"
                  onClick={() => handleTap(i)}
                >
                  {/* Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={video.url}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                  />

                  {/* Play Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <PlayIcon />
                    </div>
                  )}

                  {/* Sound Toggle */}
                  {isPlaying && (
                    <button
                      onClick={(e) => toggleSound(e, i)}
                      className="absolute top-3 right-3 bg-black/60 p-2 rounded-full text-white"
                    >
                      {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                    </button>
                  )}

                  {/* Quote */}
                  {video.quote && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white">
                      <q className="text-sm italic text-center py-3 px-4 flex justify-center">
                        {video.quote}
                      </q>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
