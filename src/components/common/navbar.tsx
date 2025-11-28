"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavLink from "./navlink";
import SlideDown from "../animations/slide-down";
import { StaggerContainer, StaggerItem } from "../animations/stagger";
import Button from "../ui/button";
import PhoneIconOutlined from "./icons/phone";
import ChevronDownIcon from "./icons/chevron-down";
import Bar3Icon from "./icons/bar3-icon";
import XmarkIcon from "./icons/x-mark";
import { serviceWithCategories } from "../../lib/constant";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMobileClick = () => {
    setMobileOpen((prev) => !prev);
  };
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
              <div className="flex items-center gap-2 hover:text-forest transition">
                {serviceWithCategories[0].name}
                <ChevronDownIcon className="w-3 h-3" />
              </div>
              <div
                className="
        absolute left-0 mt-3 w-[400px] bg-white border border-gray-200 
        rounded-xl shadow-lg opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible 
        translate-y-2 group-hover:translate-y-0 
        transition-all duration-200 p-4
      "
              >
                <Link href={"/services"}>
                  <Button className="w-full my-2 rounded-full">Explore All Services</Button>
                </Link>
                <div className="grid grid-cols-1 gap-3 items-center">
                  {serviceWithCategories[0].services.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.code}`}
                      className="
              block px-3 py-2 rounded-lg 
              hover:bg-bg-light hover:text-forest 
              transition text-sm
            "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2 hover:text-forest transition">
                {serviceWithCategories[1].name}
                <ChevronDownIcon className="w-3 h-3" />
              </div>
              <div
                className="
        absolute left-0 mt-3 w-[500px] bg-white border border-gray-200 
        rounded-xl shadow-lg opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible 
        translate-y-2 group-hover:translate-y-0 
        transition-all duration-200 p-4
      "
              >
                <Link href={"/services"}>
                  <Button className="w-full my-2 rounded-full">Explore All Services</Button>
                </Link>
                <div className="grid grid-cols-2 gap-3 items-center">
                  {serviceWithCategories[1].services.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.code}`}
                      className="
              block px-3 py-2 rounded-lg 
              hover:bg-bg-light hover:text-forest 
              transition text-sm
            "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <NavLink href="/doctors" className="hover:text-forest transition">
              Doctros
            </NavLink>
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
            <div className="items-center flex flex-row gap-12">
              <Link href={"/appointment"}>
                <Button className="rounded-full" size="md" variant="primary">
                  Book Now
                </Button>
              </Link>

              <a href="tel:+918660432589" className="flex gap-3 items-center text-sm">
                <PhoneIconOutlined className="size-4" /> 866-043-2589
              </a>
            </div>
          </div>
        </SlideDown>

        {/* Mobile Menu Button */}
        <SlideDown>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XmarkIcon className="w-7 h-7" /> : <Bar3Icon className="w-7 h-7" />}
          </button>
        </SlideDown>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <SlideDown>
          <div
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 
      transition max-h-[80vh] overflow-y-auto flex flex-col gap-6"
          >
            <SlideDown>
              <NavLink
                onClick={handleMobileClick}
                href="/about"
                className="block hover:text-forest"
              >
                About
              </NavLink>
            </SlideDown>

            <SlideDown>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-forest">
                  {serviceWithCategories[0].name}
                  <ChevronDownIcon className="w-4 h-4 transition group-open:rotate-180" />
                </summary>

                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link onClick={handleMobileClick} href={"/services"}>
                    <Button className="w-full my-2 rounded-full">Explore All Services</Button>
                  </Link>

                  {/* GRID 2 COLUMNS */}
                  <div className="grid grid-cols-2 gap-3 items-center">
                    {serviceWithCategories[0].services.map((item) => (
                      <Link
                        onClick={handleMobileClick}
                        key={item.id}
                        href={`/services/${item.code}`}
                        className="block px-3 py-2 rounded-lg hover:bg-bg-light hover:text-forest transition text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            </SlideDown>

            <SlideDown>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-forest">
                  {serviceWithCategories[1].name}
                  <ChevronDownIcon className="w-4 h-4 transition group-open:rotate-180" />
                </summary>

                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link onClick={handleMobileClick} href={"/services"}>
                    <Button className="w-full my-2 rounded-full">Explore All Services</Button>
                  </Link>

                  {/* GRID 2 COLUMNS */}
                  <div className="grid grid-cols-2 gap-3 items-center">
                    {serviceWithCategories[1].services.map((item) => (
                      <Link
                        onClick={handleMobileClick}
                        key={item.id}
                        href={`/services/${item.code}`}
                        className="block px-3 py-2 rounded-lg hover:bg-bg-light hover:text-forest transition text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            </SlideDown>

            <StaggerItem>
              <NavLink
                onClick={handleMobileClick}
                href="/doctors"
                className="hover:text-forest transition"
              >
                Doctros
              </NavLink>
            </StaggerItem>

            <SlideDown>
              <NavLink
                onClick={handleMobileClick}
                href="/gallery"
                className="block hover:text-forest"
              >
                Gallery
              </NavLink>
            </SlideDown>
            <SlideDown>
              <NavLink
                href="/contact"
                onClick={handleMobileClick}
                className="block hover:text-forest"
              >
                Contact
              </NavLink>
            </SlideDown>

            <SlideDown>
              <a href="tel:+918660432589" className="flex gap-3 items-center text-sm">
                <PhoneIconOutlined className="size-4" /> 866-043-2589
              </a>
            </SlideDown>

            <SlideDown>
              <Link href={"/appointment"}>
                <Button className="rounded-full w-full" size="md" variant="primary">
                  Book Now
                </Button>
              </Link>
            </SlideDown>
          </div>
        </SlideDown>
      )}
    </nav>
  );
}
