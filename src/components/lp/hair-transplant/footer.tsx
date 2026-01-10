"use client";
import React from "react";
import {
  HT_BEFORE_AFTER_RESULTS_SECTION,
  HT_benefits_SECTION,
  HT_CONSULTATION_PROCESS_SECTION,
  HT_HERO_SECTION,
  HT_TESTIMONIALS,
  HT_WHY_CHOOSE_CONTOUR_SECTION,
  socialLinks,
} from "../../../lib/constant";
import Link from "next/link";
import InstagramIcon from "../../common/icons/instagram";
import FacebookIcon from "../../common/icons/facebook";
import LinkedInIcon from "../../common/icons/linkedin";
import WhatsupIcon from "../../common/icons/whatsapp";
import YoutubeIcon from "../../common/icons/youtube";
import { scrollToElement } from "../../../lib/util";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: HT_HERO_SECTION },
    { name: "Why choose contour", href: HT_WHY_CHOOSE_CONTOUR_SECTION },
    { name: "Before & After", href: HT_BEFORE_AFTER_RESULTS_SECTION },
    { name: "Testimonials", href: HT_TESTIMONIALS },
    { name: "benefits", href: HT_benefits_SECTION },
    { name: "Consultation Process", href: HT_CONSULTATION_PROCESS_SECTION },
  ];

  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{
        background: "linear-gradient(135deg, #3a2323 0%, #5a3838 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About / Logo Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contour Cosmetic Clinic</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Leading experts in hair restoration with over 10 years of experience. Helping you
              regain your confidence with natural-looking results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <div
                    role="button"
                    onClick={() => scrollToElement(link.href)}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/60 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <div>
                  <p className="text-white/80">
                    {" "}
                    <a href="tel:+918660432589">+91-8660432589</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <p className="text-white/80">
                  <a href="mailto:contact@contourcosmeticclinic.com">
                    contact@contourcosmeticclinic.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/A2KoWS7rxQWHtMRw7?g_st=com.google.maps.preview.copy"
                >
                  <p className="text-white/80">
                    2nd Floor, Lakshmidevi Complex, 80 Ft Road, Vishweshwaraiah Road, 6th Stage,
                    Phase 2, BTM Layout
                    <br />
                    Bengaluru, Karnataka 560076
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
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
                className="hover:text-gray-400 transition"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks.linkedin}
                className="hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks.whatsapp}
                className="hover:text-gray-400 transition"
                aria-label="Whatsapp"
              >
                <WhatsupIcon />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={socialLinks.youtube}
                className="hover:text-gray-400 transition"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </Link>
            </div>
            <p className="text-white/80 text-sm">
              Stay connected for updates, tips, and success stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/50 text-center">
            © {new Date().getFullYear()} Contour Cosmetic Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
