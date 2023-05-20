import React from "react";

import { UploadFormText } from "@components/upload/uploadFormText";
import { UploadForm } from "@components/upload/uploadForm";

import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <>
      <div className="col-start-2 cols-span-6">
        <UploadFormText
          title={"lets work together"}
          description={
            "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
          }
        />
        <UploadForm />
      </div>
    </>
  );
};

export default Upload;
