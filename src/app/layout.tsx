import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "../components/common/footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { seoKeywords } from "../lib/metadata/common";
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

const APP_URL = "https://www.contourcosmeticclinic.com";

export const metadata: Metadata = {
  title: "Contour Cosmetic Clinic | Cosmetic, Hair & Skin Treatments in Bengaluru",
  description:
    "Contour Cosmetic Clinic in BTM Layout, Bengaluru offers advanced hair transplant, skin rejuvenation, facial enhancements, and cosmetic treatments. Book your appointment today!",
  keywords: [...seoKeywords],
  authors: [{ name: "Contour Cosmetic Clinic", url: APP_URL }],
  creator: "Contour Cosmetic Clinic",
  publisher: "Contour Cosmetic Clinic",
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: APP_URL,
  },
  openGraph: {
    title: "Contour Cosmetic Clinic | Cosmetic, Hair & Skin Treatments in Bengaluru",
    description:
      "Contour Cosmetic Clinic in BTM Layout, Bengaluru offers advanced hair transplant, skin rejuvenation, facial enhancements, and cosmetic treatments. Book your appointment today!",
    url: APP_URL,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: "images/og-image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contour Cosmetic Clinic Bangalore",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contour Cosmetic Clinic | Cosmetic, Hair & Skin Treatments in Bengaluru",
    description:
      "Contour Cosmetic Clinic in BTM Layout, Bengaluru offers advanced hair transplant, skin rejuvenation, facial enhancements, and cosmetic treatments. Book your appointment today!",
    images: ["images/og-image/og-image.jpg"],
    creator: "@ContourClinic",
  },
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
