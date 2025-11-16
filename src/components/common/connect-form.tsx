"use client";

import React, { useState } from "react";

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", query: "" });
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

  return (
    <div className="w-full bg-bg-light" id="contact-section">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="font-playfair font-heading text-4xl md:text-5xl text-primary text-center mb-8">
          Connect With Us
        </h2>

        <p className="text-body-text font-body text-sm text-center md:text-lg pb-4">
          Got questions or ready to start your transformation journey? Our
          friendly team will be in touch soon. Let’s shape your story together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/60 shadow-xl rounded-2xl p-8 md:p-12 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium text-gray-700">
              Query
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows={10}
              className={inputClass + " resize-none h-full"}
            />
          </div>

          {/* Submit Button Full Width */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
