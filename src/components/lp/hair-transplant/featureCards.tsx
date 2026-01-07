import React from "react";
import { ScrollReveal } from "../../ui/scrollReveal";

export const FeaturesCards = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: "Expert Surgeons",
      description: "Advanced Techniques",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 16a9.065 9.065 0 0 1-6.23-.693L5 15.3m14.8 0 .356-.866a8.964 8.964 0 0 1 .464-3.302 11.39 11.39 0 0 0-1.02-4.26l-.234-.468m-14.8 8.896.356-.866c.185-.45.39-.887.619-1.31a11.39 11.39 0 0 1-1.02-4.26l-.234-.468"
          />
        </svg>
      ),
      title: "Personalized Treatment",
      description: "Plans Tailored for You",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      title: "Natural Looking",
      description: "Results That Impress",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "No Hidden Costs",
    },
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            return (
              <ScrollReveal key={index} animation="blur">
                <div className="group bg-white/40 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "linear-gradient(135deg, #4b2e2e 0%, #7b4f4f 100%)",
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-base md:text-xl font-bold mb-1 md:mb-2 transition-colors"
                      style={{ color: "#4b2e2e" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div
                      className="h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                      style={{
                        background: "linear-gradient(90deg, #4b2e2e 0%, #7b4f4f 100%)",
                      }}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
