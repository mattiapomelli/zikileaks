/* eslint-disable unicorn/filename-case */
import React from "react";

interface uploadFormTextValues {
  title: string;
  description: string;
}

export const UploadFormText = ({
  title,
  description,
}: uploadFormTextValues) => {
  return (
    <>
      <div className="grid grid-cols-12 text-secondary mt-20 md:mt-40">
        <h3 className="font-bold col-start-2 col-span-3 text-6xl  ">{title}</h3>
        <p className="my-10  col-start-2 col-span-6 md:my-20">{description}</p>
      </div>
    </>
  );
};
