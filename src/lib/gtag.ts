export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Log pageview
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_ID) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// Track general events
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendToAnalytics = (action: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  if (!window.gtag) return;

  window.gtag("event", action, {
    ...params,
  });
};
