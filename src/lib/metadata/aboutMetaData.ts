import { Metadata } from "next";
import { APP_NAME } from "../constant";
import { keyWords } from "./common";
import { OG_IMAGE_URL } from "../../app/layout";

export const aboutMetadata: Metadata = {
  title: `${APP_NAME} | About Us – Best Hair & Skin Clinic in Bangalore`,
  description:
    "Contour Cosmetic Clinic is a leading hair and skin treatment clinic in Bangalore, offering advanced hair transplant, PRP, GFC therapy, laser skin treatments, anti-aging solutions, and personalized cosmetic dermatology. Learn about our expert doctors, mission, experience, and why patients across Bangalore trust us for natural-looking results.",
  keywords: [...keyWords],
  alternates: {
    canonical: "https://contourcosmeticclinic.com/about",
  },
  openGraph: {
    title: "About Contour Cosmetic Clinic | Leading Hair & Skin Clinic in Bangalore",
    description:
      "Meet our expert team and learn about our mission and experience. Contour Cosmetic Clinic in BTM Layout, Bangalore specializes in hair transplant, PRP, GFC, laser therapies, anti-aging treatments, and holistic cosmetic care.",
    url: "https://contourcosmeticclinic.com/about",
    type: "website",
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "Contour Cosmetic Clinic | About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contour Cosmetic Clinic | About Us",
    description:
      "Get to know the expert doctors behind Bangalore’s most trusted hair and skin clinic, located in BTM Layout. Learn about our treatments, mission, and commitment to excellence.",
    images: [OG_IMAGE_URL],
  },
};
