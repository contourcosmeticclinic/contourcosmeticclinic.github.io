"use client";

import { services } from "../../lib/constant";
import ServiceCard from "../../components/common/service-card";

export default function ServicesSection() {
  return (
    <section className="py-6 bg-bg-light">
      <div className="max-w-7xl mx-auto md:px-24 px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-heading  md:text-5xl text-primary tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-color-body-text text-lg md:w-2/3 mx-auto">
            Explore our wide range of advanced hair and skin treatments designed
            to help you look & feel your best.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
