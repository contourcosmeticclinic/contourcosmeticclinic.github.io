"use client";

import React from "react";
import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import LinkedInIcon from "./icons/linkedin";
import WhatsupIcon from "./icons/whatsapp";
import YoutubeIcon from "./icons/youtube";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Clinic Name & Social */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-bg-light font-playfair">
            Contour Cosmetic Clinic
          </h2>
          <p className="text-gray-300">
            Transforming lives, one treatment at a time.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-400 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              className="hover:text-gray-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition"
              aria-label="Whatsapp"
            >
              <WhatsupIcon />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition"
              aria-label="Youtube"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Column 2: Address */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-300">
            123 Forest Avenue
            <br />
            Bhubaneswar, Odisha, India
            <br />
            Phone: +91 98765 43210
            <br />
            Email: info@contourclinic.com
          </p>
        </div>

        {/* Column 3: Menu */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Menu</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Gallery
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-300">Subscribe to get our latest updates</p>
          <form className="flex flex-col flex-wrap sm:flex-row gap-2">
            <input
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
        &copy; {new Date().getFullYear()} Contour Cosmetic Clinic. All rights
        reserved.
      </div>
    </footer>
  );
}
