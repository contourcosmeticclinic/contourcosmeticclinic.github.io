import React, { useState } from "react";
import Button from "../../ui/button";
import { submitToZohoCRM } from "../../../lib/util";
import { LANDING_PAGE_THANK_YOU } from "../../../lib/constant";

const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm";

export const CommonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // router.push(LANDING_PAGE_THANK_YOU);
    await submitToZohoCRM(formData, LANDING_PAGE_THANK_YOU).then(() => {
      setLoading(false);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Compact Form Fields */}
      <div className="space-y-2">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Query</label>
          <textarea
            name="query"
            required
            value={formData.query}
            onChange={handleChange}
            className={inputClass + " resize-none h-16"}
            placeholder="Your query..."
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="py-2">
        <Button type="submit" className=" w-full  rounded-full" disabled={loading}>
          <svg
            className="w-5 h-5 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {loading ? "Submitting..." : "Request a call back"}
        </Button>
      </div>
    </form>
  );
};
