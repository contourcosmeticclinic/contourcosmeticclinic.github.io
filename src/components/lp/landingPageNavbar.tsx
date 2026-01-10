"use client";

import { useState } from "react";

import SlideDown from "../animations/slide-down";
import { StaggerContainer, StaggerItem } from "../animations/stagger";
import Button from "../ui/button";

import XmarkIcon from "../common/icons/x-mark";
import Bar3Icon from "../common/icons/bar3-icon";
import AppLogo from "../home/appLogo";
import { usePathname } from "next/navigation";
import { scrollToElement } from "../../lib/util";
import NavbarButton from "../ui/navbarButton";
import {
  HT_BEFORE_AFTER_RESULTS_SECTION,
  HT_HERO_SECTION,
  HT_TESTIMONIALS,
  HT_TYPES_SECTION,
  HT_WHY_CHOOSE_CONTOUR_SECTION,
} from "../../lib/constant";

export const LandingPageNavbar = () => {
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
        {/* Logo */}
        <AppLogo href={pathName} />
        <StaggerContainer className="hidden md:flex items-center gap-2 text-sm">
          <StaggerItem>
            <NavbarButton
              onClick={() => scrollToElement(HT_WHY_CHOOSE_CONTOUR_SECTION)}
              className="hover:text-forest transition"
            >
              Why Contour
            </NavbarButton>
          </StaggerItem>

          <StaggerItem>
            <NavbarButton
              onClick={() => scrollToElement(HT_HERO_SECTION)}
              className="hover:text-forest transition"
            >
              Contact
            </NavbarButton>
          </StaggerItem>
          <StaggerItem>
            <NavbarButton
              onClick={() => scrollToElement(HT_TYPES_SECTION)}
              className="hover:text-forest transition"
            >
              Hair Transplant
            </NavbarButton>
          </StaggerItem>
          <StaggerItem>
            <NavbarButton
              onClick={() => scrollToElement(HT_BEFORE_AFTER_RESULTS_SECTION)}
              className="hover:text-forest transition"
            >
              Results
            </NavbarButton>
          </StaggerItem>
          <StaggerItem>
            <NavbarButton
              onClick={() => scrollToElement(HT_TESTIMONIALS)}
              className="hover:text-forest transition"
            >
              Testimonials
            </NavbarButton>
          </StaggerItem>
        </StaggerContainer>

        {/* Right: Book Now */}
        <SlideDown>
          <div className="hidden md:block">
            <div className="items-center flex flex-row gap-12">
              <Button
                onClick={() => scrollToElement(HT_HERO_SECTION)}
                className="rounded-full"
                size="md"
                variant="primary"
              >
                Book Now
              </Button>
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
            <StaggerItem>
              <NavbarButton
                onClick={() => scrollToElement(HT_WHY_CHOOSE_CONTOUR_SECTION)}
                className="hover:text-forest transition"
              >
                Why Contour
              </NavbarButton>
            </StaggerItem>

            <StaggerItem>
              <NavbarButton
                onClick={() => scrollToElement(HT_HERO_SECTION)}
                className="hover:text-forest transition"
              >
                Contact
              </NavbarButton>
            </StaggerItem>
            <StaggerItem>
              <NavbarButton
                onClick={() => scrollToElement(HT_TYPES_SECTION)}
                className="hover:text-forest transition"
              >
                Hair Transplant
              </NavbarButton>
            </StaggerItem>
            <StaggerItem>
              <NavbarButton
                onClick={() => scrollToElement(HT_BEFORE_AFTER_RESULTS_SECTION)}
                className="hover:text-forest transition"
              >
                Results
              </NavbarButton>
            </StaggerItem>
            <StaggerItem>
              <NavbarButton
                onClick={() => scrollToElement(HT_TESTIMONIALS)}
                className="hover:text-forest transition"
              >
                Testimonials
              </NavbarButton>
            </StaggerItem>
          </div>
        </SlideDown>
      )}
    </nav>
  );
};
