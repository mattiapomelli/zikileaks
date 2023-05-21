import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components/basic/button";
import { FileDropzone } from "@components/basic/file-dropzone";
import { Input } from "@components/basic/input";
import { TextArea } from "@components/basic/textarea";
import { useCreatePublicationWithApi } from "@lib/use-create-publication-with-api";

interface PublicationFormFields {
  title: string;
  description: string;
}

export const PublicationForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublicationFormFields>();

  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileChange = (selectedFile: File | undefined) => {
    setFile(selectedFile);
  };

  const { mutate: createPublication, isLoading } = useCreatePublicationWithApi({
    onSuccess() {
      router.push("/feed");
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const { title, description } = data;
    if (!file) return;

    createPublication({
      title,
      description,
      file,
    });
  });

  return (
    <>
      <form
        className="col-span-6 col-start-2 flex flex-col gap-6"
        onSubmit={onSubmit}
      >
        <Input
          label="Title"
          block
          {...register("title", { required: "Title is required" })}
          error={errors.title?.message}
        />
        <TextArea
          label="Description"
          block
          {...register("description", { required: "Description is required" })}
          error={errors.description?.message}
        />
        <FileDropzone
          value={file}
          onValueChange={handleFileChange}
          accept=".pdf, image/*"
          label="Leaked document"
        />
        <Button
          className="mt-2"
          block
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Create publication
        </Button>
      </form>
    </>
  );
};
