import React from "react";

interface StepperProps {
  activeStep: number;
}

const Stepper: React.FunctionComponent<StepperProps> = ({ activeStep }) => {
  return (
    <>
      <h3 className="font-bold text-6xl">{activeStep}</h3>
      <p className="my-10 md:my-20 max-w-sm"></p>
      <ul className="steps steps-vertical">
        <li className={`step ${activeStep === 1 ? "step-primary" : ""}`}>
          Verify Account
        </li>
        <li className={`step ${activeStep === 2 ? "step-primary" : ""}`}>
          Upload Information
        </li>
        <li className={`step ${activeStep === 3 ? "step-primary" : ""}`}>
          Complete
        </li>
      </ul>
    </>
  );
};

export { Stepper };
