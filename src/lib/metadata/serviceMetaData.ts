import { Metadata } from "next";
import { keyWords } from "./common";
import { OG_IMAGE_URL } from "../../app/layout";

export const metadata: Metadata = {
  title: "Our Services | Contour Cosmetic Clinic BTM Layout",
  description:
    "Explore a wide range of cosmetic treatments at Contour Cosmetic Clinic, BTM Layout. We offer hair transplant, PRP, GFC therapy, skin rejuvenation, laser treatments, derma fillers, and advanced aesthetic procedures.",
  keywords: [
    ...keyWords,
    "Contour Cosmetic Clinic services",
    "cosmetic treatments BTM Layout",
    "hair transplant BTM Layout",
    "PRP treatment BTM Layout",
    "GFC therapy BTM Layout",
    "laser skin treatment BTM Layout",
    "skin rejuvenation BTM Layout",
    "derma fillers BTM Layout",
    "aesthetic clinic BTM Layout",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
  },
  openGraph: {
    title: "Our Services | Contour Cosmetic Clinic",
    description:
      "Discover our cosmetic and dermatology services including skin, hair, and facial enhancement treatments in BTM Layout.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Contour Cosmetic Clinic Services",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Contour Cosmetic Clinic",
    description: "Explore our complete range of cosmetic skin and hair treatments in BTM Layout.",
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};
