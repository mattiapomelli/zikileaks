import { useTransition, animated } from "@react-spring/web";
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

  const transition = useTransition(activeStep, {
    key: activeStep,
    from: { opacity: 0, transform: "translateX(-10px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-10px)" },
  });

  return (
    <>
      <h3 className="text-6xl font-bold">{activeStep}</h3>
      <p className="my-10 max-w-sm md:my-20">{stepText}</p>
      <ul className="steps steps-vertical">
        {transition((style, step) => (
          <animated.li
            className={`step ${step === activeStep ? "step-primary" : ""}`}
            style={style}
            key={step}
          >
            {step === 1 && "Verify Account"}
            {step === 2 && "Railgun Wallet creation"}
            {step === 3 && "Upload Information"}
          </animated.li>
        ))}
      </ul>
    </>
  );
};

export { Stepper };
