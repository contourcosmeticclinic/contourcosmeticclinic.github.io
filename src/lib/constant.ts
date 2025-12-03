import { DoctorType, ImageType } from "./types";

export const APP_NAME = "Contour Cosmetic Clinic";

export const clientResultImages: {
  src: string;
  alt?: string;
  title?: string;
}[] = [
  { src: "/images/client-results/cr-1.png" },
  { src: "/images/client-results/cr-2.png" },
  { src: "/images/client-results/cr-3.png" },
  { src: "/images/client-results/cr-4.png" },
  { src: "/images/client-results/cr-5.png" },
  { src: "/images/client-results/cr-6.png" },
];

export const interiorImages: ImageType[] = [
  { src: "/images/clinic/contourcosmeticclinic-interior1.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior2.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior3.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior4.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior5.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior6.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior7.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior9.jpg" },
  { src: "/images/clinic/contourcosmeticclinic-interior10.jpg" },
];

export const reelVideos = [
  { src: "/assets/reels/contourcosmeticclinic-acne-care.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-hair-transplant1.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-hair-transplant2.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-hair-transplant3.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-mirco-needling.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-post-hair-transplant.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-hydra-facial.mp4" },
  { src: "/assets/reels/contourcosmeticclinic-hair-removal.mp4" },
];

export const services = [
  {
    id: 1,
    code: "hair-transplant",
    name: "Hair Transplant",
    image: "/images/services/contourcosmeticclinic-hair-transpant-service.png",
  },
  {
    id: 2,
    code: "cosmetic-hair-patch",
    name: "Cosmetic Hair Patch",
    image: "/images/services/contourcosmeticclinic-hair-patch.png",
  },
  {
    id: 3,
    code: "prp-therapy",
    name: "PRP Therapy",
    image: "/images/services/contourcosmeticclinic-prp-therapy.png",
  },
  {
    id: 4,
    code: "gfc-therapy",
    name: "GFC Therapy",
    image: "/images/services/contourcosmeticclinic-gfc-therapy.png",
  },
  {
    id: 5,
    code: "scalp-micropigmentation",
    name: "Scalp Micropigmentation",
    image: "/images/services/contourcosmeticclinic-scalp-micropigmentation.png",
  },
  {
    id: 6,
    code: "receding-hairline-restoration",
    name: "Receding Hairline Restoration",
    image: "/images/services/contourcosmeticclinic-hairline_restoration.png",
  },
  {
    id: 7,
    code: "beard-restoration",
    name: "Beard Restoration",
    image: "/images/services/contourcosmeticclinic-beard-restoration.png",
  },
  {
    id: 8,
    code: "derma-fillers",
    name: "Derma Fillers",
    image: "/images/services/contourcosmeticclinic-derma-filler.jpeg",
  },
  {
    id: 9,
    code: "eyebrow-restoration",
    name: "Eyebrow Restoration",
    image: "/images/services/contourcosmeticclinic-eyebrow-restoration.webp",
  },
  {
    id: 10,
    code: "scar-revision",
    name: "Scar Revision",
    image: "/images/services/contourcosmeticclinic-scar-revision.webp",
  },
  {
    id: 11,
    code: "exosome-hair-therapy",
    name: "Exosome Hair Therapy",
    image: "/images/services/contourcosmeticclinic-exosome-hair-therapy.webp",
  },
  {
    id: 12,
    code: "microdermabrasion",
    name: "Microdermabrasion",
    image: "/images/services/contourcosmeticclinic-microdermabrasion.jpeg",
  },
  {
    id: 13,
    code: "laser-hair-removal",
    name: "Laser Hair Removal",
    image: "/images/services/contourcosmeticclinic-laser-hair-removal.webp",
  },
  {
    id: 14,
    code: "laser-skin-resurfacing",
    name: "Laser Skin Resurfacing",
    image: "/images/services/contourcosmeticclinic-laser-skin-resurfacing.jpeg",
  },
  {
    id: 15,
    code: "intense-pulsed-light-ipl",
    name: "Intense Pulsed Light (IPL)",
    image: "/images/services/contourcosmeticclinic-ipl-pigmentation.webp",
  },
  {
    id: 16,
    code: "microneedling",
    name: "Microneedling",
    image: "/images/services/contourcosmeticclinic-mirconeedling.webp",
  },
  {
    id: 17,
    code: "anti-wrinkle-injection",
    name: "Anti-Wrinkle Injection",
    image: "/images/services/contourcosmeticclinic-anti-wrinkle-Injection.jpeg",
  },
  {
    id: 18,
    code: "collagen-induction-therapy",
    name: "Collagen Induction Therapy",
    image: "/images/services/contourcosmeticclinic-collagen-Induction-therapy.webp",
  },
  {
    id: 19,
    code: "hydrafacial",
    name: "Hydrafacial",
    image: "/images/services/contourcosmeticclinic-hydrafacial.webp",
  },
  {
    id: 20,
    code: "dermaplaning",
    name: "Dermaplaning",
    image: "/images/services/contourcosmeticclinic-dermaplaning.webp",
  },
  {
    id: 21,
    code: "chemical-peels",
    name: "Chemical Peels",
    image: "/images/services/contourcosmeticclinic-chemical-peel.webp",
  },
  {
    id: 22,
    code: "combination-therapy",
    name: "Combination Therapy",
    image: "/images/services/contourcosmeticclinic-combination-therapy.jpeg",
  },
];

export const doctors: DoctorType[] = [
  {
    id: 1,
    name: "Dr. Saket",
    title: "Facial cosmetic surgeon & Hair transplant Specialist",
    socialLinks: [
      { type: "instagram", link: "https://www.instagram.com/drsaket.jha/?igsh=OWJ5czN4NmdhYnd0" },
    ],
    //   experience: "12+ Years of Experience",
    description:
      "Dr. Saket is a renowned facial cosmetic surgeon with specialized expertise in FUE hair transplantation. With a pan-India presence, he performs advanced hair restoration procedures from North to South India and serves as the leading surgeon for several reputed cosmetic chains in Bangalore. A graduate of Rajiv Gandhi University of Health Sciences, Dr. Saket has undergone intensive training and has worked alongside some of the most esteemed doctors in India. His clinical journey spans premier institutions such as Tata Medical Center (Kolkata), RCC Trivandrum, Jubilee Mission Medical College (Thrissur), Karnataka Institute of Medical Sciences (KIMS), and NIMHANS (Bangalore), among others. Known for blending surgical precision with artistic vision, Dr. Saket brings a decade of experience in facial aesthetics, reconstructive surgery, and advanced hair restoration, making him a trusted name in the field of facial transformation and cosmetic excellence.",
    image: "/images/doctors/saket-jha.JPG",
  },
  // {
  //   id: 2,
  //   name: "Dr. Shambhavi Shukla",
  //   title: "MS(DNB) ENT Head & Neck oncosurgery (FELLOW)",
  //   //   experience: "10+ Years of Experience",
  //   description:
  //     "Dr. Shambhavi Shukla is a renowned ENT surgeon with specialized fellowship training in Head and Neck Oncology from Tata Medical Center, combining expertise in oncologic surgery with a strong focus on facial reconstruction. Recognized for her ability to provide comprehensive care in complex head and neck cancer cases, she excels in both the surgical management of tumors and the restoration of facial features, enabling patients to regain not only their health but also their appearance and confidence. A graduate of Command Hospital, Kolkata, Dr. Shambhavi completed her postgraduate studies (MS) in ENT, honing her skills in one of India’s most prestigious military healthcare institutions. At Tata Medical Center, she further specialized in head and neck oncology, refining her proficiency in state-of-the-art surgical and reconstructive techniques for facial restoration. Her compassionate approach and dedication to advanced reconstructive methods, including the integration of aesthetic principles, make Dr. Shambhavi a leader in the field of head and neck onco. She combines cutting-edge technologies with a deep understanding of facial anatomy to provide life-changing results for patients undergoing head and neck surgeries.",
  //   image: "/images/doctors/shambhavi-shukla.PNG",
  // },
  {
    id: 3,
    name: "Dr. Akanksha Thakur",
    title: "MBBS, MS (ENT – Ongoing)",
    image: "/images/doctors/akanksha-thakur.JPG",
    description:
      "Dr. Akanksha Thakur is a skilled ENT specialist with 7 years of extensive clinical and surgical experience and advanced training in Facial Plastic and Aesthetic Surgery. She completed her MBBS from Muzaffarnagar Medical College and Hospital, Uttar Pradesh, affiliated with Chaudhary Charan Singh University, Meerut. She has served as a Junior Resident under the Government of Delhi at Rao Tula Ram Memorial Hospital and Indira Gandhi Hospital, gaining valuable exposure in ENT and facial procedures. Currently pursuing her MS in ENT, Dr. Thakur combines medical precision with aesthetic expertise, delivering exceptional reconstructive and cosmetic care.",
  },
];

export const serviceWithCategories = [
  {
    name: "Hair",
    services: [
      {
        id: 1,
        code: "hair-transplant",
        name: "Hair Transplant",
        image: "/images/services/contourcosmeticclinic-hair-transpant-service.png",
      },
      {
        id: 2,
        code: "cosmetic-hair-patch",
        name: "Cosmetic Hair Patch",
        image: "/images/services/contourcosmeticclinic-hair-patch.png",
      },
      {
        id: 3,
        code: "prp-therapy",
        name: "PRP Therapy",
        image: "/images/services/contourcosmeticclinic-prp-therapy.png",
      },
      {
        id: 4,
        code: "gfc-therapy",
        name: "GFC Therapy",
        image: "/images/services/contourcosmeticclinic-gfc-therapy.png",
      },
      {
        id: 5,
        code: "scalp-micropigmentation",
        name: "Scalp Micropigmentation",
        image: "/images/services/contourcosmeticclinic-scalp-micropigmentation.png",
      },
      {
        id: 6,
        code: "receding-hairline-restoration",
        name: "Receding Hairline Restoration",
        image: "/images/services/contourcosmeticclinic-hairline_restoration.png",
      },
      {
        id: 7,
        code: "beard-restoration",
        name: "Beard Restoration",
        image: "/images/services/contourcosmeticclinic-beard-restoration.png",
      },
      {
        id: 9,
        code: "eyebrow-restoration",
        name: "Eyebrow Restoration",
        image: "/images/services/contourcosmeticclinic-eyebrow-restoration.webp",
      },
      {
        id: 11,
        code: "exosome-hair-therapy",
        name: "Exosome Hair Therapy",
        image: "/images/services/contourcosmeticclinic-exosome-hair-therapy.webp",
      },
    ],
  },
  {
    name: "Skin",
    services: [
      {
        id: 8,
        code: "derma-fillers",
        name: "Derma Fillers",
        image: "/images/services/contourcosmeticclinic-derma-filler.jpeg",
      },
      {
        id: 10,
        code: "scar-revision",
        name: "Scar Revision",
        image: "/images/services/contourcosmeticclinic-scar-revision.webp",
      },
      {
        id: 12,
        code: "microdermabrasion",
        name: "Microdermabrasion",
        image: "/images/services/contourcosmeticclinic-microdermabrasion.jpeg",
      },
      {
        id: 13,
        code: "laser-hair-removal",
        name: "Laser Hair Removal",
        image: "/images/services/contourcosmeticclinic-laser-hair-removal.webp",
      },
      {
        id: 14,
        code: "laser-skin-resurfacing",
        name: "Laser Skin Resurfacing",
        image: "/images/services/contourcosmeticclinic-laser-skin-resurfacing.jpeg",
      },
      {
        id: 15,
        code: "intense-pulsed-light-ipl",
        name: "Intense Pulsed Light (IPL)",
        image: "/images/services/contourcosmeticclinic-ipl-pigmentation.webp",
      },
      {
        id: 16,
        code: "microneedling",
        name: "Microneedling",
        image: "/images/services/contourcosmeticclinic-mirconeedling.webp",
      },
      {
        id: 17,
        code: "anti-wrinkle-injection",
        name: "Anti-Wrinkle Injection",
        image: "/images/services/contourcosmeticclinic-anti-wrinkle-Injection.jpeg",
      },
      {
        id: 18,
        code: "collagen-induction-therapy",
        name: "Collagen Induction Therapy",
        image: "/images/services/contourcosmeticclinic-collagen-Induction-therapy.webp",
      },
      {
        id: 19,
        code: "hydrafacial",
        name: "Hydrafacial",
        image: "/images/services/contourcosmeticclinic-hydrafacial.webp",
      },
      {
        id: 20,
        code: "dermaplaning",
        name: "Dermaplaning",
        image: "/images/services/contourcosmeticclinic-dermaplaning.webp",
      },
      {
        id: 21,
        code: "chemical-peels",
        name: "Chemical Peels",
        image: "/images/services/contourcosmeticclinic-chemical-peel.webp",
      },
      {
        id: 22,
        code: "combination-therapy",
        name: "Combination Therapy",
        image: "/images/services/contourcosmeticclinic-combination-therapy.jpeg",
      },
    ],
  },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/share/1AiswEWwo9/?mibextid=wwXIfr",
  linkedin: "https://www.linkedin.com/company/contour-cosmetic-clinic/",
  instagram: "https://www.instagram.com/contour_bengaluru?igsh=Nzh4MXRzbTdwejdy",
  youtube: "https://youtube.com/@shapeyourstory?si=szaqr58VYWUBpQBV",
  whatsapp: "https://api.whatsapp.com/send/?phone=918660432589&text&type=phone_number&app_absent=0",
};
