import { NextPage } from "next";
import { useState } from "react";

import { Button } from "@components/basic/button";
import { FileDropzone } from "@components/basic/file-dropzone";
import { useCreatePublication } from "@lib/use-create-publication";

const CreatePage: NextPage = () => {
  const [file, setFile] = useState<File | undefined>();

  const { mutate: createPublication, isLoading } = useCreatePublication({
    onSuccess() {
      console.log("success");
    },
  });

  const onCreatePage = () => {
    if (!file) return;
    createPublication({
      title: "Title",
      description: "Description 3",
      file,
    });
  };

  return (
    <div className="mt-10 flex justify-center">
      <FileDropzone
        value={file}
        onValueChange={setFile}
        accept={{
          "application/pdf": [".pdf"],
        }}
        label="File"
      />
      <Button onClick={onCreatePage} loading={isLoading} disabled={isLoading}>
        Create
      </Button>
    </div>
  );
};

export default CreatePage;
