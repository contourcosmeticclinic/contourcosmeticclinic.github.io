import { Inter, Montserrat, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "../components/common/footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { seoKeywords } from "../lib/metadata/common";
import FloatingButtons from "../components/common/floatingButtonts";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const OG_IMAGE_URL = `${APP_URL}/images/og-images/og-image.jpg`;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Contour Cosmetic Clinic | Cosmetic, Hair & Skin Treatments in Bengaluru",
  description:
    "Contour Cosmetic Clinic in BTM Layout, Bengaluru offers advanced hair transplant, skin rejuvenation, facial enhancements, and cosmetic treatments. Book your appointment today!",
  keywords: [...seoKeywords],
  authors: [{ name: "Contour Cosmetic Clinic", url: APP_URL }],
  creator: "Contour Cosmetic Clinic",
  publisher: "Contour Cosmetic Clinic",
  // metadataBase: new URL(APP_URL ?? ""),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Contour Cosmetic Clinic | Cosmetic, Hair & Skin Treatments in Bengaluru",
    description:
      "Contour Cosmetic Clinic in BTM Layout, Bengaluru offers advanced hair transplant, skin rejuvenation, facial enhancements, and cosmetic treatments. Book your appointment today!",
    url: APP_URL,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: OG_IMAGE_URL,
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
    images: [OG_IMAGE_URL],
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDC36237');
            `,
          }}
        />
        {/* Google Ads / gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17041035401"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17041035401');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased bg-bg-light`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDC36237"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9ee5d4a7dc28eb312eac81842770150719df078bd77229ff1a59c151e24ea6dc956e87710770e84df354d80f12fa82d7gid5d202dff8d82b9f3db58189ead9c6f79f822dc7371c2dab06fdc6ddc6e094c7egid046cb25b2d23f3f4a2d727931ffcd565693a5363c651d71e88ac16d423efe708gid5b87600ccace1db5fe88558e8b280b85b235e8ddc199c416468223c62977fb11&tw=7bea06a95a55c235be4586f2fd5640cdf4302b907beaa534d434f655509e06e2"
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
