import React, { useState, ReactNode } from "react";
import { CheckIcon } from "../common/icons/checkIcon";

// Types
export interface Step {
  title: string;
  description?: string;
  content: ReactNode;
  validate?: () => boolean;
}

interface StepperProps {
  steps: Step[];
  onComplete: () => void;
  onStepChange?: (step: number) => void;
  className?: string;
}

// Main Stepper Component
export function Stepper({ steps, onComplete, onStepChange, className = "" }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const handleComplete = () => {
    onComplete();
  };

  const isStepValid = () => {
    const currentStepData = steps[currentStep - 1];
    return currentStepData.validate ? currentStepData.validate() : true;
  };

  return (
    <div className={`flex items-center justify-center p-2 ${className}`}>
      <div className="w-full max-w-2xl">
        {/* Stepper Header */}
        <div className="bg-accent/10 rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                      currentStep > index + 1
                        ? "bg-green-500 text-white"
                        : currentStep === index + 1
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-subheading"
                    }`}
                  >
                    {currentStep > index + 1 ? <CheckIcon className="w-6 h-6" /> : index + 1}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium text-center ${
                      currentStep >= index + 1 ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded transition-all duration-300 ${
                      currentStep > index + 1 ? "bg-green-500" : "bg-gray-100"
                    }`}
                    style={{ maxWidth: "80px" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-accent/20 rounded-2xl shadow-xl p-4">
          <div className="">
            <div className="animate-fade-in">
              {steps[currentStep - 1].description && (
                <p className="text-primary mb-6">{steps[currentStep - 1].description}</p>
              )}
              {steps[currentStep - 1].content}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-primary">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? "bg-primary text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  isStepValid()
                    ? "bg-primary text-white shadow-indigo-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleComplete}
                disabled={!isStepValid()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  isStepValid()
                    ? "bg-primary text-white shadow-green-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <CheckIcon className="w-5 h-5 mr-1" />
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
