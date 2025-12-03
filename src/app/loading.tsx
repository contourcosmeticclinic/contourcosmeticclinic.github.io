"use client";

import Image from "next/image";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center gap-4">
      {/* Logo */}
      <Image
        src="/images/loader-logo.png" // <-- change to your logo path (PNG/SVG)
        alt="Contour Cosmetic Clinic Logo"
        width={80}
        height={80}
      />

      {/* Loading Text */}
      <p className="text-primary text-sm font-medium tracking-wide animate-fade animate-pulse">
        Please wait, loading...
      </p>
    </div>
  );
}
