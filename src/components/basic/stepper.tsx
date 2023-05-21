import React from "react";

interface StepperProps {
  activeStep: number;
}

const Stepper = ({ activeStep }: StepperProps) => {
  const steps = [
    "Verify Account",
    "Railgun Wallet creation",
    "Upload Information",
  ];

  return (
    <>
      <h3 className="font-bold text-6xl">{activeStep}</h3>
      <ul className="steps steps-vertical mb-2">
        {steps.map((step, index) => (
          <li
            className={`step ${
              index + 1 === activeStep ? "step-primary" : ""
            } transition-opacity duration-500 mb-4 ${
              index + 1 <= activeStep ? "opacity-100" : "opacity-50"
            }`}
            key={index + 1}
          >
            {step}
          </li>
        ))}
      </ul>
    </>
  );
};

export { Stepper };
