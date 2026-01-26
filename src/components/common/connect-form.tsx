"use client";

import React, { useState } from "react";
import { MainHeading } from "../ui/mainHeading";
export const inputClass =
  "w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);

  const ZOHO_URL = "https://crm.zoho.in/crm/WebToLeadForm";

  // Hidden Zoho fields
  const hiddenInputs = {
    xnQsjsdp: "ba9b751c06e0f79492850e34fefa58e48b27ca6e26c120bcc5f7c2e44038e3c7",
    xmIwtLD:
      "f8a60c91d1294b374bddc29f052ae733ff3628159ab4259ea1d80decd099ae7b5e778218d67433195d32b78890ed7149",
    actionType: "TGVhZHM=",
    returnURL: `${process.env.NEXT_PUBLIC_APP_URL}/thankyou`,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit to Zoho
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    // Map your fields → Zoho field names
    data.append("Last Name", formData.name);
    data.append("Phone", formData.phone);
    data.append("Email", formData.email);
    data.append("Description", formData.query);
    data.append("aG9uZXlwb3Q", "");

    // Append hidden Zoho keys
    Object.entries(hiddenInputs).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Send to Zoho
    try {
      await fetch(ZOHO_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      window.location.href = hiddenInputs.returnURL;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-bg-light" id="contact-section">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <MainHeading title="Connect with us!" />

        <p className="text-body-text font-body text-sm text-center md:text-lg pb-4">
          Got questions or ready to start your transformation journey? Our friendly team will be in
          touch soon. Let’s shape your story together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/60 shadow-xl rounded-2xl p-8 md:p-12 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
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
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium text-gray-700">Query</label>
            <textarea
              name="query"
              required
              value={formData.query}
              onChange={handleChange}
              rows={10}
              className={inputClass + " resize-none h-full"}
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
