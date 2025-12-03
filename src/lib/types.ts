export type ImageType = {
  src: string;
  alt?: string;
};

export type VideoType = {
  src: string;
};

export type DoctorType = {
  id: number | string;
  name: string;
  title: string;
  image: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socialLinks?: any[];
};

export type ServiceCode =
  | "hair-transplant"
  | "cosmetic-hair-patch"
  | "prp-therapy"
  | "gfc-therapy"
  | "scalp-micropigmentation"
  | "receding-hairline-restoration"
  | "beard-restoration"
  | "derma-fillers"
  | "eyebrow-restoration"
  | "scar-revision"
  | "exosome-hair-therapy"
  | "microdermabrasion"
  | "laser-hair-removal"
  | "laser-skin-resurfacing"
  | "intense-pulsed-light-ipl"
  | "microneedling"
  | "anti-wrinkle-injection"
  | "collagen-induction-therapy"
  | "hydrafacial"
  | "dermaplaning"
  | "chemical-peels"
  | "combination-therapy";
