"use client";

import React, { useState } from "react";
import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import LinkedInIcon from "./icons/linkedin";
import WhatsupIcon from "./icons/whatsapp";
import YoutubeIcon from "./icons/youtube";
import Link from "next/link";
import { services, socialLinks } from "../../lib/constant";
import { sendToAnalytics } from "../../lib/gtag";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const handleSocialLinkClick = (linkSource: string) => {
    sendToAnalytics(`social_${linkSource}_visit`);
  };

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const res = await fetch("https://formsubmit.co/contact@contourcosmeticclinic.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Subscribed successfully!");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.log(err);

      alert("Network error.");
    }
  };
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Column 1: Clinic Name & Social */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-bg-light font-playfair">
            Contour Cosmetic Clinic
          </h2>
          <p className="text-gray-300">Transforming lives, one treatment at a time.</p>
          <div className="flex space-x-4 mt-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialLinkClick("facebook")}
              href={socialLinks.facebook}
              className="hover:text-gray-400 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.instagram}
              onClick={() => handleSocialLinkClick("instagram")}
              className="hover:text-gray-400 transition"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.linkedin}
              onClick={() => handleSocialLinkClick("linkedin")}
              className="hover:text-gray-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.whatsapp}
              onClick={() => handleSocialLinkClick("whatsapp")}
              className="hover:text-gray-400 transition"
              aria-label="Whatsapp"
            >
              <WhatsupIcon />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks.youtube}
              onClick={() => handleSocialLinkClick("youtube")}
              className="hover:text-gray-400 transition"
              aria-label="Youtube"
            >
              <YoutubeIcon />
            </Link>
          </div>
        </div>

        {/* Column 2: Address */}
        <div className="space-y-2 text-gray-300">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://maps.app.goo.gl/A2KoWS7rxQWHtMRw7?g_st=com.google.maps.preview.copy"
          >
            <p className="hover:text-white">
              2nd Floor, Lakshmidevi Complex, 80 Ft Road, Vishweshwaraiah Road, 6th Stage, Phase 2,
              BTM Layout
              <br />
              Bengaluru, Karnataka 560076
            </p>
          </Link>
          <p className="mt-2 hover:text-white ">
            <a href="tel:+918660432589">+91-8660432589</a>
          </p>
          <p className="hover:text-white">
            <a href="mailto:contact@contourcosmeticclinic.com">contact@contourcosmeticclinic.com</a>
          </p>
        </div>

        {/* Column 3: Menu */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Menu</h3>
          <ul className="space-y-1 text-gray-300">
            <Link href={"/"}>
              <li className="hover:text-white transition cursor-pointer">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-white transition cursor-pointer">About</li>
            </Link>
            <Link href={"/services"}>
              <li className="hover:text-white transition cursor-pointer">Services</li>
            </Link>
            <Link href={"/gallery"}>
              <li className="hover:text-white transition cursor-pointer">Gallery</li>
            </Link>
            <Link href="/appointment">
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </Link>
            <Link href="/faq">
              <li className="hover:text-white transition cursor-pointer">FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">List of services</h3>
          <ul className="space-y-1 text-gray-300">
            {services.map((service) => (
              <Link href={`/services/${service.code}`} key={service.id}>
                <li className="hover:text-white transition cursor-pointer mb-1">{service.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-300">Subscribe to get our latest updates</p>
          <form
            className="flex flex-col flex-wrap sm:flex-row gap-2"
            onSubmit={(e) => handleSubscribe(e)}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-light-gray transition w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-light-gray text-primary bg-white font-semibold px-4 py-2 rounded-lg hover:bg-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-bg-light/30 mt-10 pt-6 text-bg-light text-sm text-center">
        &copy; {new Date().getFullYear()} Contour Cosmetic Clinic. All rights reserved.
      </div>
    </footer>
  );
}
