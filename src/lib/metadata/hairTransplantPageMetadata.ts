import type { Metadata } from "next";

export const hairTransplantMetadata: Metadata = {
  title: {
    default: "Hair Transplant in Bangalore | Dr. Saket Jha | Contour Cosmetic Clinic",
    template: "%s | Contour Cosmetic Clinic Bangalore",
  },

  description:
    "Get advanced hair transplant treatment in Bangalore by Dr. Saket Jha at Contour Cosmetic Clinic, BTM Layout. Trusted clinic for natural and permanent hair restoration.",

  keywords: [
    "hair transplant in Bangalore",
    "hair transplant clinic in Bangalore",
    "best hair transplant doctor in Bangalore",
    "Dr Saket Jha hair transplant",
    "Contour Cosmetic Clinic Bangalore",
    "hair transplant BTM Layout",
    "hair transplant near BTM Layout",
    "hair transplant near me Bangalore",
    "FUE hair transplant Bangalore",
    "FUT hair transplant Bangalore",
    "advanced hair transplant Bangalore",
    "permanent hair transplant Bangalore",
    "natural hair transplant results",
    "hair loss treatment Bangalore",
    "male hair transplant Bangalore",
    "female hair transplant Bangalore",
    "beard transplant Bangalore",
    "eyebrow transplant Bangalore",
    "hair restoration clinic Bangalore",
    "best cosmetic clinic Bangalore",
    "cosmetic clinic BTM Layout",
    "hair fall treatment Bangalore",
    "baldness treatment Bangalore",
    "alopecia treatment Bangalore",
    "PRP hair treatment Bangalore",
    "hair transplant cost Bangalore",
    "affordable hair transplant Bangalore",
    "top hair transplant surgeon Bangalore",
    "hair regrowth treatment Bangalore",
    "hair thinning treatment Bangalore",
    "hairline correction Bangalore",
    "scalp treatment Bangalore",
    "hair transplant specialist Bangalore",
    "hair transplant consultation Bangalore",
    "safe hair transplant Bangalore",
    "modern hair transplant Bangalore",
    "laser hair therapy Bangalore",
    "non surgical hair treatment Bangalore",
    "hair transplant clinic near me",
    "trusted hair transplant clinic Bangalore",
    "BTM Layout cosmetic clinic",
    "BTM Layout hair transplant clinic",
    "hair transplant surgery Bangalore",
    "best FUE hair transplant Bangalore",
    "experienced hair transplant doctor Bangalore",
    "medical aesthetic clinic Bangalore",
    "Contour Cosmetic Clinic hair transplant",
    "Dr Saket Jha cosmetic surgeon Bangalore",
  ],

  authors: [{ name: "Dr. Saket Jha" }],

  metadataBase: new URL("https://www.contourcosmeticclinic.com"),

  openGraph: {
    title: "Hair Transplant in Bangalore | Dr. Saket Jha",
    description:
      "Contour Cosmetic Clinic in BTM Layout, Bangalore offers advanced hair transplant procedures by Dr. Saket Jha for natural-looking results.",
    url: "https://www.contourcosmeticclinic.com/lp/hair-transplant-in-bangalore",
    siteName: "Contour Cosmetic Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/og-image-hair-transplant-contour.png`,
        width: 1200,
        height: 630,
        alt: "Hair Transplant in Bangalore | Dr. Saket Jha | Contour Cosmetic Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hair Transplant in Bangalore | Dr. Saket Jha",
    description:
      "Expert hair transplant treatments at Contour Cosmetic Clinic, BTM Layout, Bangalore.",
    images: [
      `${process.env.NEXT_PUBLIC_APP_URL}/images/og-images/og-image-hair-transplant-contour.png`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.contourcosmeticclinic.com/lp/hair-transplant-in-bangalore",
  },
};
