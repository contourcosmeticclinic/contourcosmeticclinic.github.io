"use client";

import Image from "next/image";
import { FC } from "react";
import SlideUp from "../animations/slide-up";

type Props = {
  name: string;
  title: string;
  image: string;
  description: string;
};

const DoctorCard: FC<Props> = ({ name, title, image, description }) => {
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
          <h2 className="text-3xl font-heading font-semibold text-primary mb-2">{name}</h2>
          <h3 className="text-lg font-medium text-secondary tracking-wide mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">{description}</p>
        </div>
      </div>
    </SlideUp>
  );
};

export default DoctorCard;
