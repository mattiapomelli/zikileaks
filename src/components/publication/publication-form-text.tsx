/* eslint-disable unicorn/filename-case */
import React from "react";

interface publicationFormTextValues {
  title: string;
  description: string;
}

export const PublicationFormText = ({
  title,
  description,
}: publicationFormTextValues) => {
  return (
    <>
      <div className="grid grid-cols-12 text-secondary ">
        <h3 className="font-bold col-start-1 col-span-8 text-2xl  ">{title}</h3>
        <p className="my-10  col-start-1 col-span-8 md-4">{description}</p>
      </div>
    </>
  );
};
