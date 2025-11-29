import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "../components/common/footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contour Cosmetic Clinic",
  description: "Luxury cosmetic and skin treatment clinic",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-bg-light`}>
        {/* <AnalyticsTracker /> */}
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-4473WR4EGH" />
      </body>
    </html>
  );
}
