"use client";

import SlideUp from "../../animations/slide-up";
import Button from "../../ui/button";
import { BaldnessForm } from "./baldnessLevelForm";

export default function HeroHairTransplant() {
  return (
    <section id="hair-transplant-hero" className="relative w-full overflow-hidden py-12 md:bg-none">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* Text + CTA */}
        <div className="relative flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">
          <SlideUp>
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:text-left text-primary">
              Bangalore&apos;s first choice for <br></br>
              <span className="text-subheading">Hair Transplant</span>
            </h1>
          </SlideUp>

          <SlideUp className="space-y-3 pt-2">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg sm:text-xl  text-secondary font-medium">
                Hair Trasnplant Starting from Only <span className="font-bold">₹45,000!</span>
              </h3>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg sm:text-xl text-secondary font-medium">
                50+ awards & achievements
              </h3>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg sm:text-xl text-secondary font-medium">Easy EMI available</h3>
            </div>
          </SlideUp>

          <SlideUp className="pt-2">
            <Button className="uppercase rounded-full px-8 py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              Get Consulation Now
            </Button>
          </SlideUp>

          {/* Trust indicators */}
          <SlideUp className="pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-secondary">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-sm font-semibold text-secondary">2,000+ Happy Patients</span>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Hero Image */}
        <div className="order-2 lg:order-2">
          <SlideUp>
            <BaldnessForm />
          </SlideUp>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-5 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-subheading opacity-5 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
