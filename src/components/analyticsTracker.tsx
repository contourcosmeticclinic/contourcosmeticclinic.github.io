"use client";

import { useEffect } from "react";
import { pageview } from "@/lib/gtag";

export default function AnalyticsTracker() {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return null;
}
