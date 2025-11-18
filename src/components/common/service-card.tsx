import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Prop = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any;
};
const ServiceCard: FC<Prop> = ({ service }) => {
  return (
    <div
      key={service.id}
      className="group bg-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mt-4 text-xl font-semibold text-color-primary group-hover:text-color-secondary transition-colors duration-300">
          {service.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Learn more about our latest {service.name.toLowerCase()} procedure by
          exploring full details.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-6">
          <a
            href="/book-appointment"
            className="bg-color-primary border rounded-full  text-sm px-4 py-2  bg-primary text-white transition-colors duration-300"
          >
            Book Now
          </a>
          <Link
            href={`/services/${service.code}`}
            className="text-body-text text-sm font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
