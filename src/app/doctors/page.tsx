import Script from "next/script";
import SlideUp from "@/components/animations/slide-up";
import { Metadata } from "next";
import DoctorCard from "../../components/common/doctor-card";

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
  const doctors = [
    {
      id: 1,
      name: "Dr. Saket",
      title: "Facial cosmetic surgeon & Hair transplant Specialist",
      //   experience: "12+ Years of Experience",
      description:
        "Dr. Saket is a renowned facial cosmetic surgeon with specialized expertise in FUE hair transplantation. With a pan-India presence, he performs advanced hair restoration procedures from North to South India and serves as the leading surgeon for several reputed cosmetic chains in Bangalore. A graduate of Rajiv Gandhi University of Health Sciences, Dr. Saket has undergone intensive training and has worked alongside some of the most esteemed doctors in India. His clinical journey spans premier institutions such as Tata Medical Center (Kolkata), RCC Trivandrum, Jubilee Mission Medical College (Thrissur), Karnataka Institute of Medical Sciences (KIMS), and NIMHANS (Bangalore), among others. Known for blending surgical precision with artistic vision, Dr. Saket brings a decade of experience in facial aesthetics, reconstructive surgery, and advanced hair restoration, making him a trusted name in the field of facial transformation and cosmetic excellence.",
      image: "/images/doctors/saket-jha.JPG",
    },
    {
      id: 2,
      name: "Dr. Shambhavi Shukla",
      title: "MS(DNB) ENT Head & Neck oncosurgery (FELLOW)",
      //   experience: "10+ Years of Experience",
      description:
        "Dr. Shambhavi Shukla is a renowned ENT surgeon with specialized fellowship training in Head and Neck Oncology from Tata Medical Center, combining expertise in oncologic surgery with a strong focus on facial reconstruction. Recognized for her ability to provide comprehensive care in complex head and neck cancer cases, she excels in both the surgical management of tumors and the restoration of facial features, enabling patients to regain not only their health but also their appearance and confidence. A graduate of Command Hospital, Kolkata, Dr. Shambhavi completed her postgraduate studies (MS) in ENT, honing her skills in one of India’s most prestigious military healthcare institutions. At Tata Medical Center, she further specialized in head and neck oncology, refining her proficiency in state-of-the-art surgical and reconstructive techniques for facial restoration. Her compassionate approach and dedication to advanced reconstructive methods, including the integration of aesthetic principles, make Dr. Shambhavi a leader in the field of head and neck onco. She combines cutting-edge technologies with a deep understanding of facial anatomy to provide life-changing results for patients undergoing head and neck surgeries.",
      image: "/images/doctors/shambhavi-shukla.PNG",
    },
  ];

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

      <section className="w-full bg-bg-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <SlideUp>
            <h1 className="text-center font-heading font-playfair text-4xl md:text-5xl text-primary mb-6">
              Meet Our Experts
            </h1>
            <p className="text-center text-body-text max-w-2xl mx-auto font-body text-lg mb-16">
              Our doctors combine medical expertise with artistic precision to
              deliver natural, long-lasting, and confidence-boosting results.
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
