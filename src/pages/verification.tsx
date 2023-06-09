import React from "react";

import { Stepper } from "@components/basic/stepper";
import { PublicationForm } from "@components/publication/publication-form";
import { PublicationFormText } from "@components/publication/publication-form-text";
import { RailgunComponent } from "@components/verification/railgun-component";
import { VerificationForm } from "@components/verification/verification-form";
import { VerificationFormText } from "@components/verification/verification-form-text";
import { useRailgun } from "@contexts/railgun-provider";

import type { NextPage } from "next";

const Verification: NextPage = () => {
  const { wallet } = useRailgun();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleVerifyClick = () => {
    // Handle the button click event here
    setActiveStep(activeStep + 1);
  };

  const onVerificationComplete = () => {
    if (wallet) {
      setActiveStep(3);
    } else {
      setActiveStep(2);
    }
  };

  return (
    <div className="cols-1 mt-20 grid gap-4 md:grid-cols-2">
      <div className=" 0 col-span-1 hidden rounded-xl bg-accent px-2 pt-4 text-secondary md:block md:p-8">
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
              <VerificationForm
                onVerifyClick={() => onVerificationComplete()}
              />
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
