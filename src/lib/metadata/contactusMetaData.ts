import { Metadata } from "next";
import { keyWords } from "./common";
import { OG_IMAGE_URL } from "../../app/layout";

export const contactUsMetaData: Metadata = {
  title: "Contact Us | Contour Cosmetic Clinic BTM Layout",
  description:
    "Get in touch with Contour Cosmetic Clinic in BTM Layout for expert skin, hair, and cosmetic treatments. Book appointments, ask questions, or visit our clinic for personalized consultation.",
  keywords: [
    ...keyWords,
    "Contour Cosmetic Clinic contact",
    "contact cosmetic clinic BTM Layout",
    "skin clinic contact BTM Layout",
    "hair clinic contact BTM Layout",
    "book appointment Contour Cosmetic Clinic",
    "cosmetic dermatologist BTM Layout",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Contour Cosmetic Clinic",
    description:
      "Reach out to us for appointments, inquiries, and expert consultation for skin and hair treatments in BTM Layout.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Contact Contour Cosmetic Clinic",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Contour Cosmetic Clinic",
    description:
      "Connect with our cosmetic specialists for appointments and queries at our BTM Layout clinic.",
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};
