import { Metadata } from "next";

export const galleryMetadata: Metadata = {
  title: "Clinic Gallery | Contour Cosmetic Clinic",
  description:
    "Explore the Contour Cosmetic Clinic gallery featuring real clinic photos, advanced cosmetic equipment, patient care rooms, and treatment facilities. Get a glimpse of our modern and premium aesthetic environment.",
  openGraph: {
    title: "Clinic Gallery | Contour Cosmetic Clinic",
    description:
      "View our clinic gallery showcasing advanced cosmetic treatment rooms, modern aesthetic equipment, and a premium patient experience.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/gallery`,
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/og-gallery.jpg`, // place the file under /public/og
        width: 1200,
        height: 630,
        alt: "Contour Cosmetic Clinic - Gallery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Gallery | Contour Cosmetic Clinic",
    description:
      "Explore real photos of our clinic, treatment areas, and advanced cosmetic equipment.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/og-gallery.jpg`],
  },
};
