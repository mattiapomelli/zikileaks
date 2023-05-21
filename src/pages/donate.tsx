import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Button } from "@components/basic/button";
import { DonateStepper } from "@components/basic/donate-stepper";
import { DonateForm } from "@components/donation/donate-form";
import { RailgunComponent } from "@components/verification/railgun-component";

const DonatePageInner = ({ zkAddress }: { zkAddress: string }) => {
  const [activeStep, setActiveStep] = React.useState(1);

  const goToNextStep = () => {
    // Handle the button click event here
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 rounded-xl  bg-primary/30 p-8">
        <DonateStepper activeStep={activeStep} />
      </div>
      <div className="col-span-1 flex flex-col">
        <div className="flex-1">
          {activeStep === 1 && (
            <RailgunComponent onVerifyClick={goToNextStep} showConnectMessage />
          )}
          {activeStep === 2 && (
            <DonateForm onSuccess={goToNextStep} zkAddress={zkAddress} />
          )}
          {activeStep === 3 && (
            <div>
              <p className="text-2xl font-bold">Thank you for donating!</p>
              <Link href="/feed">
                <Button>Go to feed</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DonatePage = () => {
  const router = useRouter();
  const zkAddress = router.query["zkAddress"]?.toString();

  if (!zkAddress) return null;

  return <DonatePageInner zkAddress={zkAddress} />;
};

export default DonatePage;
