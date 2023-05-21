import React from "react";

interface DonateStepperProps {
  activeStep: number;
}

const DonateStepper = ({ activeStep }: DonateStepperProps) => {
  let stepText = "";
  if (activeStep === 1) {
    stepText = "Step 1: Create Railgun Wallet";
  } else if (activeStep === 2) {
    stepText = "Step 2: Shield Tokens";
  } else if (activeStep === 3) {
    stepText = "Step 3: Donate";
  }

  return (
    <>
      <h3 className="text-6xl font-bold">{activeStep}</h3>
      <p className="my-10 max-w-sm md:my-20">{stepText}</p>
      <ul className="steps steps-vertical">
        <li className={`step ${activeStep === 1 ? "step-primary" : ""}`}>
          Create Railgun Wallet
        </li>
        <li className={`step ${activeStep === 2 ? "step-primary" : ""}`}>
          Shield Tokens
        </li>
        <li className={`step ${activeStep === 3 ? "step-primary" : ""}`}>
          Donate
        </li>
      </ul>
    </>
  );
};

export { DonateStepper };
