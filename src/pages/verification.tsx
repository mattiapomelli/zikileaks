import React from "react";

import { VerificationForm } from "@components/verification/verification-form";
import { VerificationFormText } from "@components/verification/verification-form-text";

import type { NextPage } from "next";

const Verification: NextPage = () => {
  return (
    <>
      <VerificationFormText
        title={"Lets work Together!"}
        description={
          "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
        }
      />
      <VerificationForm />
    </>
  );
};

export default Verification;
