"use client";
import Image from "next/image";
import React, { useState } from "react";
import { inputClass } from "../../common/connect-form";
import { StageSelector } from "./stageSelector";
import PhoneIconOutlined from "../../common/icons/phone";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import { LANDING_PAGE_THANK_YOU } from "../../../lib/constant";

export const BaldnessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [loading] = useState(false);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="m-6 rounded-md">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl">
          Get <span className="font-extrabold text-secondary">FREE</span> Consulation Now
        </h3>
        <p className="underline italic text-secondary font-semibold">
          Get Upto 50% OFF T&C<sup>*</sup>
        </p>
      </div>

      <div className="py-2">
        <Image
          loading="lazy"
          src="/images/lp/hair-transplant/baldness-level.png"
          alt="Baldness level"
          height={100}
          width={600}
        />
      </div>

      <form
        className="p-4"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(LANDING_PAGE_THANK_YOU);
        }}
      >
        <StageSelector />
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Query</label>
            <textarea
              name="query"
              required
              value={formData.query}
              onChange={handleChange}
              className={inputClass + " resize-none h-full"}
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <Button type="submit" className="w-full rounded-full uppercase" disabled={loading}>
            <PhoneIconOutlined className="animate-pulse h-6" />{" "}
            {loading ? "Submitting..." : "Request a call back"}
          </Button>
        </div>
      </form>
    </div>
  );
};
