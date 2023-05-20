import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components/basic/button";
import { Input } from "@components/basic/input";
import { Select } from "@components/basic/select";

interface VerificationFormProps {
  onVerifyClick: () => void;
}

interface verificationFormFields {
  title: string;
  price: string;
  referral: string;
  description: string;
  keywords: string;
}

const options = [
  "I own a nft to verify this",
  "I have commited to the repository to verify this",
];

export const VerificationForm = ({ onVerifyClick }: VerificationFormProps) => {
  const [selected, setSelected] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<verificationFormFields>();

  const onSubmit = handleSubmit(async () => {
    await onVerifyClick();
  });

  return (
    <>
      <form className="flex flex-col gap-6 " onSubmit={onSubmit}>
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
        <Select
          label="I can verify I am part of this organisation because"
          value={selected}
          onValueChange={setSelected}
          items={options}
        />

        <Button
          className="mt-2"
          block
          type="submit"

          // loading={isLoading || uploadIsLoading}
          // disabled={isLoading || uploadIsLoading}
        >
          Verify Me
        </Button>
      </form>
    </>
  );
};
