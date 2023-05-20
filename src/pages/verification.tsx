import React from "react";

import { VerificationForm } from "@components/verification/verification-form";
import { VerificationFormText } from "@components/verification/verification-form-text";

import type { NextPage } from "next";
import { Stepper } from "@components/basic/stepper";

const Verification: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-primary/30 col-span-1 mt-20 md:mt-40 p-8 rounded-xl ">
        {/* <h3 className="font-bold text-6xl  ">Step 1</h3>
        <p className="my-10 md:my-20 max-w-sm">
          {" "}
          verification process for us to confirm you are who you say you are
        </p>
        <ul className="steps steps-vertical ">
          <li className="step step-primary">Verify Account</li>
          <li className="step step-primary">Upload Information</li>
          <li className="step">Complete</li>
        </ul> */}
        <Stepper activeStep={activeStep} />
      </div>
      <div className="col-span-1">
        <VerificationFormText
          title={"How it works"}
          description={
            "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
          }
        />
        <button onClick={() => setActiveStep(2)}>Next</button>
        {/* <VerificationForm /> */}
      </div>
    </div>
  );
};

export default Verification;
