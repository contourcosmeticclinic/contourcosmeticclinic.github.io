"use client";
import React, { useState } from "react";
import { services, serviceWithCategories } from "../lib/constant";
import ServiceCard from "./common/service-card";

const ServicesWithFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : serviceWithCategories.find((s) => s.name.toLocaleLowerCase() === activeFilter)?.services;

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex gap-4 items-center">
        {["all", "hair", "skin"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full cursor-pointer border text-sm font-medium transition ${
              cat === activeFilter ? "bg-primary text-white" : ""
            }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
        {activeFilter !== "all" && (
          <p className="text-xs">{filteredServices && filteredServices.length} services found</p>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices &&
          filteredServices.map((service) => <ServiceCard service={service} key={service.id} />)}
      </div>
    </div>
  );
};

export default ServicesWithFilter;
