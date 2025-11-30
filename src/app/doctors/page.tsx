import Script from "next/script";
import SlideUp from "@/components/animations/slide-up";
import { Metadata } from "next";
import DoctorCard from "../../components/common/doctor-card";
import { doctors } from "../../lib/constant";
import { doctorsMetadata } from "../../lib/metadata/doctorsMetaData";

export const metadata: Metadata = {
  ...doctorsMetadata,
};

export default function DoctorsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Contour Cosmetic Clinic",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/doctors`,
    medicalSpecialty: "Dermatology, Cosmetic Surgery, Aesthetics",
    member: doctors.map((doc) => ({
      "@type": "Person",
      name: doc.name,
      jobTitle: doc.title,
      description: doc.description,
      image: "/images/og-image/og-image.png",
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
