import React from "react";

import { Stepper } from "@components/basic/stepper";
import { PublicationForm } from "@components/publication/publication-form";
import { PublicationFormText } from "@components/publication/publication-form-text";
import { RailgunComponent } from "@components/verification/railgun-component";
import { VerificationForm } from "@components/verification/verification-form";
import { VerificationFormText } from "@components/verification/verification-form-text";

import type { NextPage } from "next";

const Verification: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleVerifyClick = () => {
    // Handle the button click event here
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 bg-primary/30  p-8 rounded-xl">
        <Stepper activeStep={activeStep} />
      </div>
      <div className="col-span-1 flex flex-col">
        <div className="flex-1">
          {activeStep === 1 ? (
            <>
              <VerificationFormText
                title={"How it works"}
                description={
                  "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
                }
              />
              <VerificationForm onVerifyClick={handleVerifyClick} />
            </>
          ) : null}
          {activeStep === 2 ? (
            <>
              <RailgunComponent onVerifyClick={handleVerifyClick} />
            </>
          ) : null}
          {activeStep === 3 ? (
            <>
              <PublicationFormText
                title={"Would you like to submit a report?"}
                description={
                  "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
                }
              />
              <PublicationForm />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Verification;
