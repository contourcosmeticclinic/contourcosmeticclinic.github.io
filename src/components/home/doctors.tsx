import React from "react";
import { doctors } from "../../lib/constant";
import Image from "next/image";
import { ScrollReveal } from "../ui/scrollReveal";
import Button from "../ui/button";
import Link from "next/link";

export const DoctorsHomeSection = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Expert Doctors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <ScrollReveal animation="blur">
                <div className="relative overflow-hidden h-80">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </ScrollReveal>

              {/* Doctor Info */}
              <ScrollReveal animation="fadeIn">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-accent font-semibold text-lg mb-1">{doctor.title}</p>

                  {/* Read More Button */}
                  <Link href="/doctors">
                    <Button className="w-full bg-gradient-to-r bg-primary text-white font-semibold py-3 px-6 rounded-xl  transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                      <span>Read More</span>
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
