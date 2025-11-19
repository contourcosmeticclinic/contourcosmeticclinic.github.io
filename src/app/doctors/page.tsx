import Script from "next/script";
import SlideUp from "@/components/animations/slide-up";
import { Metadata } from "next";
import DoctorCard from "../../components/common/doctor-card";
import { doctors } from "../../lib/constant";

export const metadata: Metadata = {
  title: "Meet Our Experts | Contour Cosmetic Clinic",
  description:
    "Meet our experienced cosmetic doctors specializing in dermatology, aesthetics, skin rejuvenation, hair treatments, and facial enhancements at Contour Cosmetic Clinic.",
  openGraph: {
    title: "Meet Our Experts | Contour Cosmetic Clinic",
    description:
      "Highly skilled dermatologists and cosmetic surgeons dedicated to natural, beautiful, and lasting results.",
    url: "https://your-website.com/doctors",
    siteName: "Contour Cosmetic Clinic",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function DoctorsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Contour Cosmetic Clinic",
    url: "https://your-website.com/doctors",
    medicalSpecialty: "Dermatology, Cosmetic Surgery, Aesthetics",
    member: doctors.map((doc) => ({
      "@type": "Person",
      name: doc.name,
      jobTitle: doc.title,
      description: doc.description,
      image: `https://your-website.com${doc.image}`,
    })),
  };

  return (
    <>
      {/* JSON-LD via next/script */}
      <Script
        id="doctors-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="w-full bg-bg-light">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <SlideUp>
            <h1 className="text-center font-heading font-playfair text-4xl md:text-5xl text-primary mb-6">
              Meet Our Experts
            </h1>
            <p className="text-center text-body-text max-w-2xl mx-auto font-body text-lg">
              Our doctors combine medical expertise with artistic precision to deliver natural,
              long-lasting, and confidence-boosting results.
            </p>
          </SlideUp>

          {/* Doctors Grid */}
          <div className="">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
