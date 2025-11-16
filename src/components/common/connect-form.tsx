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
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-dark focus:border-forest-dark transition";

  return (
    <div className="w-full bg-beige-light" id="contact-section">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="font-playfair font-heading text-4xl md:text-5xl text-forest-dark text-center mb-8">
          Connect With Us
        </h2>

        <p className="text-charcol-wood font-body text-sm text-center md:text-lg pb-4">
          Got questions or ready to start your transformation journey? Our
          friendly team will be in touch soon. Let’s shape your story together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 grid gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
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

          {/* Query */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Query
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows={5}
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-forest-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-forest-dark/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
