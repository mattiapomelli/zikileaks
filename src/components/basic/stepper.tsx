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
  const stepsDescription = [
    "Verify your account to get started",
    "Create a Railgun Wallet to store your information",
    "Upload your information to the ZikiLeaks database",
  ];

  return (
    <>
      <h3 className="font-bold text-6xl">{activeStep}</h3>
      <p className="max-w-sm my-4 font-bold text-lg">
        {stepsDescription[0 + activeStep]}
      </p>
      <ul className="steps steps-vertical  mb-2 text-sm md:text-md">
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
