import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type Prop = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any;
};
const ServiceCard: FC<Prop> = ({ service }) => {
  return (
    <Link key={service.id} href={`services/${service.code}`}>
      <div
        className="
    group bg-white/60 
    overflow-hidden shadow-sm hover:shadow-xl 
    transition-all duration-300 border border-gray-100 rounded-xl
  "
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
        <div className="p-4">
          <h3 className="text-xl font-semibold text-color-primary group-hover:text-color-secondary transition-colors duration-300">
            {service.name}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Learn more about our latest {service.name.toLowerCase()} procedure by exploring full
            details.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-6">
            <Link
              onClick={() =>
                sendGAEvent({ event: `service_${service.name} Clicked`, value: service.name })
              }
              href="/appointment"
              className="bg-color-primary border rounded-full  text-sm px-4 py-2  bg-primary text-white transition-colors duration-300"
            >
              Book Now
            </Link>
            <Link
              onClick={() =>
                sendGAEvent({ event: "service_read_more_clicked", value: service.name })
              }
              href={`/services/${service.code}`}
              className="text-body-text text-sm font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
