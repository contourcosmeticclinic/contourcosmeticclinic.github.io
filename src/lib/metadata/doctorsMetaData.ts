import { Metadata } from "next";
import { keyWords } from "./common";

export const doctorsMetadata: Metadata = {
  title:
    "Meet Our Doctors | Best Dermatologists & Hair Specialists in BTM Layout | Contour Cosmetic Clinic",
  description:
    "Meet our expert dermatologists, trichologists, and cosmetic specialists offering hair transplant, PRP, GFC therapy, laser treatments, skin rejuvenation, fillers, and advanced aesthetic care in BTM Layout.",
  keywords: [...keyWords],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/doctors`,
  },
  openGraph: {
    title: "Meet Our Expert Doctors | Contour Cosmetic Clinic",
    description:
      "Consult with experienced dermatologists, trichologists, and aesthetic surgeons for advanced skin and hair treatments in BTM Layout.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/doctors`,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-images/doctors-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Contour Cosmetic Clinic Doctors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Doctors | Contour Cosmetic Clinic",
    description:
      "Experienced dermatologists, trichologists, and cosmetic specialists in BTM Layout.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/doctors-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
