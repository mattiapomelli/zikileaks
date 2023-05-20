/* eslint-disable unicorn/filename-case */
import React from "react";

interface verificationFormTextValues {
  title: string;
  description: string;
}

export const VerificationFormText = ({
  title,
  description,
}: verificationFormTextValues) => {
  return (
    <>
      <div className="grid grid-cols-12  text-base-100">
        <h3 className="font-bold col-start-1 col-span-10 text-accent text-4xl ">
          {title}
        </h3>
        <p className="my-10  col-start-1 col-span-10 md:my-20 text-accent ">
          {description}
        </p>
      </div>
    </>
  );
};
