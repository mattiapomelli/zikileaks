import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components/basic/button";
import { FileDropzone } from "@components/basic/file-dropzone";
import { Input } from "@components/basic/input";

interface uploadFormFields {
  title: string;
  price: string;
  referral: string;
  description: string;
  keywords: string;
}

export const PublicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<uploadFormFields>();

  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileChange = (selectedFile: File | undefined) => {
    setFile(selectedFile);
  };

  const onSubmit = handleSubmit(async () => {
    // if (!asset) {
    //   await uploadVideo();
    // } else {
    //   if (!asset.playbackId || !image) return;
    //   const { title, description, price, referral, keywords } = data;
    //   createCourse({
    //     title,
    //     description,
    //     price: ethers.utils.parseEther(price),
    //     referral: Number(referral),
    //     image,
    //     // image: new File([], ""),
    //     videoPlaybackId: asset.playbackId,
    //     // videoPlaybackId: "1806vd0wgt1rmgmo",
    //     keywords: keywords.split(",").map((value) => value.trim()),
    //   });
    // }
  });

  return (
    <>
      <form
        className="flex flex-col gap-6 col-start-2 col-span-6"
        onSubmit={onSubmit}
      >
        <Input
          label="Wallet address to be confirmed - can not be changed"
          block
          {...register("keywords", { required: "Category is required" })}
          error={errors.keywords?.message}
          disabled={true}
        />
        <Input
          label="Name of organisation"
          block
          {...register("keywords", { required: "Category is required" })}
          error={errors.keywords?.message}
          disabled={true}
        />
        <FileDropzone
          value={file}
          onValueChange={handleFileChange}
          accept=".pdf, image/*"
          label="Upload File (PDF or Image)"
        />
        <Button
          className="mt-2"
          block
          type="submit"
          // loading={isLoading || uploadIsLoading}
          // disabled={isLoading || uploadIsLoading}
        >
          Upload File
        </Button>
      </form>
    </>
  );
};
