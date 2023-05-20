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
      <div className="grid grid-cols-12 text-secondary ">
        <h3 className="font-bold col-start-1 col-span-8 text-6xl  ">{title}</h3>
        <p className="my-10  col-start-1 col-span-8 md-4">{description}</p>
      </div>
    </>
  );
};
