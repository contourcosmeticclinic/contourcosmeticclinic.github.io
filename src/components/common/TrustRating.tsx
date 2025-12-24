import Link from "next/link";
import React from "react";

const TrustRating = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.google.com/maps/place/Contour+Cosmetic+Clinic/@12.8813824,77.6098557,17z/data=!4m8!3m7!1s0x3bae15d7fb43d6bb:0xfb657e8296bf16f2!8m2!3d12.8813824!4d77.6098557!9m1!1b1!16s%2Fg%2F11x930dypq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
    >
      <div className="mx-auto mt-6 w-full max-w-sm rounded-xl bg-accent-light/20 px-4 py-2 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-lg">⭐</span>
          <p className="text-sm font-medium text-primary">
            <span className="font-semibold">4.8</span> Rated on Google by{" "}
            <span className="font-semibold">5,000+</span> Happy Patients
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TrustRating;
