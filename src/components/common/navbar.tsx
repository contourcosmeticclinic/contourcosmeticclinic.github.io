"use client";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavLink from "./navlink";
import SlideDown from "../animations/slide-down";
import { StaggerContainer, StaggerItem } from "../animations/stagger";
import Button from "../ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <SlideDown delay={0.1}>
          <Link
            href="/"
            className="text-2xl flex items-center font-heading text-forest font-semibold"
          >
            <Image
              src="/images/brand-logo.png"
              alt="Clinic Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <Image
              src="/images/brand-name.png"
              alt="Clinic Text Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </SlideDown>
        {/* Desktop Menu */}
        <StaggerContainer className="hidden md:flex items-center gap-10 text-base text-charcoal">
          <StaggerItem>
            <NavLink href="/about" className="hover:text-forest transition">
              About
            </NavLink>
          </StaggerItem>

          {/* SERVICES DROPDOWN */}
          <StaggerItem>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-4 hover:text-forest transition">
                Services
                <ChevronDownIcon className="w-3 h-3" />
              </div>

              {/* DROPDOWN PANEL */}
              <div
                className="
                absolute left-0 mt-3 w-52 bg-white border border-gray-200 
                rounded-xl shadow-lg opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible 
                translate-y-2 group-hover:translate-y-0 
                transition-all duration-200 p-2
              "
              >
                <Link
                  href="/services/hair-transplant"
                  className="block px-4 py-2 rounded-lg hover:bg-bg-light hover:text-forest transition"
                >
                  Hair Transplant
                </Link>

                <Link
                  href="/services/skin-treatment"
                  className="block px-4 py-2 rounded-lg hover:bg-bg-light hover:text-forest transition"
                >
                  Skin Treatments
                </Link>

                <Link
                  href="/services/laser"
                  className="block px-4 py-2 rounded-lg hover:bg-bg-light hover:text-forest transition"
                >
                  Laser Procedures
                </Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <NavLink href="/gallery" className="hover:text-forest transition">
              Gallery
            </NavLink>
          </StaggerItem>

          <StaggerItem>
            <NavLink href="/contact" className="hover:text-forest transition">
              Contact
            </NavLink>
          </StaggerItem>
        </StaggerContainer>

        {/* Right: Book Now */}
        <SlideDown>
          <div className="hidden md:block">
            <Button className="rounded" size="md" variant="primary">
              Book Now
            </Button>
          </div>
        </SlideDown>
        {/* Mobile Menu Button */}
        <SlideDown>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </SlideDown>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <SlideDown>
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 transition">
            <SlideDown>
              <NavLink href="/about" className="block py-2 hover:text-forest">
                About
              </NavLink>
            </SlideDown>

            <SlideDown>
              <details className="py-2 group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-forest">
                  Services
                  <ChevronDownIcon className="w-4 h-4 transition group-open:rotate-180" />
                </summary>

                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    href="/services/hair-transplant"
                    className="hover:text-forest"
                  >
                    Hair Transplant
                  </Link>
                  <Link
                    href="/services/skin-treatment"
                    className="hover:text-forest"
                  >
                    Skin Treatments
                  </Link>
                  <Link href="/services/laser" className="hover:text-forest">
                    Laser Procedures
                  </Link>
                </div>
              </details>
            </SlideDown>

            <SlideDown>
              <NavLink href="/gallery" className="block py-2 hover:text-forest">
                Gallery
              </NavLink>
            </SlideDown>
            <SlideDown>
              <NavLink href="/contact" className="block py-2 hover:text-forest">
                Contact
              </NavLink>
            </SlideDown>

            <SlideDown>
              <Button fullWidth className="mt-3">
                Book Now
              </Button>
            </SlideDown>
          </div>
        </SlideDown>
      )}
    </nav>
  );
}
