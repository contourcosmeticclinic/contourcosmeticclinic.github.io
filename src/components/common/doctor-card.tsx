"use client";

import Image from "next/image";
import { FC } from "react";
import SlideUp from "../animations/slide-up";
import InstagramIcon from "./icons/instagram";
import Link from "next/link";

type Props = {
  name: string;
  title: string;
  image: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socialLinks: any[];
};

const getSocialLink = (type: string, link: string) => {
  switch (type) {
    case "instagram":
      return (
        <Link key={type} href={link}>
          <InstagramIcon className="mt-1" />
        </Link>
      );

    default:
      break;
  }
};
const DoctorCard: FC<Props> = ({ name, title, image, description, socialLinks }) => {
  return (
    <SlideUp>
      <div className="w-full bg-accent/15 my-12 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl gap-5 flex items-center font-heading font-semibold text-primary">
            {name}
            <span>
              {socialLinks && socialLinks.map((soc) => getSocialLink(soc.type, soc.link))}
            </span>
          </h2>

          <h3 className="text-lg font-medium mb-2 text-secondary tracking-wide">{title}</h3>

          <p className="text-gray-700 leading-relaxed text-[15px]">{description}</p>
        </div>
      </div>
    </SlideUp>
  );
};

export default DoctorCard;
