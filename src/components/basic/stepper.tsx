import React from "react";

interface StepperProps {
  activeStep: number;
}

const Stepper = ({ activeStep }: StepperProps) => {
  let stepText = "";
  if (activeStep === 1) {
    stepText = "Step 1: Verify Account";
  } else if (activeStep === 2) {
    stepText = "Step 2: Upload Information";
  } else if (activeStep === 3) {
    stepText = "Step 3: Complete";
  }

  return (
    <>
      <h3 className="text-6xl font-bold">{activeStep}</h3>
      <p className="my-10 max-w-sm md:my-20">{stepText}</p>
      <ul className="steps steps-vertical">
        <li className={`step ${activeStep === 1 ? "step-primary" : ""}`}>
          Verify Account
        </li>
        <li className={`step ${activeStep === 2 ? "step-primary" : ""}`}>
          Railgun Wallet creation
        </li>
        <li className={`step ${activeStep === 3 ? "step-primary" : ""}`}>
          Create publication
        </li>
      </ul>
    </>
  );
};

export { Stepper };
