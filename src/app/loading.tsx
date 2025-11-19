"use client";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-9999 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
