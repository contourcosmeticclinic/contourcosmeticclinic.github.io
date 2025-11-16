"use client";

import React from "react";

import { InfiniteMovingCards, ReviewType } from "../ui/moving-cards";

export function ReviewCards() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-bg-light items-center justify-center relative overflow-hidden py-12">
      {/* Heading */}
      <h2 className="font-playfair font-heading pb-4 text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
        Trusted By Thousands
      </h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials: ReviewType[] = [
  {
    quote:
      "Got qr 678 for my hair fall issue treatment worked well I was able to see the results in 6 sessions thankyou doctor and team and happy Diwali.",
    name: "Mithila Reddy",
    date: "16-09-2025",
    rating: 5,
  },
  {
    quote:
      "My brother went for hair transplant via sapphire method from this clinic 7 months back now his hair is very good has volume very happy with the results thankyou team.",
    name: "Gowthami Pokuri",
    date: "16-09-2025",
    rating: 5,
  },
  {
    quote:
      "Had a great experience at Contour Cosmetic Clinic. The team was kind and really listened to what I was hoping to achieve. I went in for laser treatment by Dr. Saket and the whole process felt smooth and professional. The results are subtle but noticeable—just what I was looking for. The clinic has a calming vibe, and everything felt clean and well-organized. I’ll definitely be back and would recommend them to anyone looking for a trusted place for cosmetic treatments.",
    name: "Richa Kumari",
    date: "10-01-2025",
    rating: 5,
  },
  {
    quote:
      "I recently visited Contour Cosmetic Clinic for a hair treatment and had a really good experience. The staff was friendly, explained everything clearly, and made sure I was comfortable throughout. The clinic is clean and well-maintained. I’m already seeing great results and would definitely recommend it for anyone thinking about hair or cosmetic treatments.",
    name: "Nikita Kishor",
    title: "04-09-2025",
    rating: 5,
  },
  {
    quote:
      "Finally took a minute from my hectic schedule to drop this review — I’ve been getting laser hair reduction at Contour Cosmetic Clinic, BTM Layout, and it’s been a great experience so far. Dr. Saket Jha is super professional and made me feel comfortable from day one. The clinic is clean, staff is friendly, and I’ve already started seeing results after a couple of sessions. Highly recommend if you’re considering laser treatment!",
    name: "Kajal Rrivastava",
    title: "07-05-2025",
    rating: 5,
  },
];
