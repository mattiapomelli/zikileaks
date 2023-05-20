import {
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
  AuthType,
} from "@sismo-core/sismo-connect-react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@components/basic/input";

import { devGroups } from "../../../config";

export const sismoConnectConfig: SismoConnectClientConfig = {
  // You can create a new Sismo Connect app at https://factory.sismo.io
  appId: "0x72c0abd705e4be124adc0b9fe1f67a11",
  devMode: {
    // Enable or disable dev mode here to create development groups and use the development vault.
    enabled: false,
    devGroups: [devGroups[0]],
  },
};

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

export const VerificationForm = ({ onVerifyClick }: VerificationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [verifiedUser, setVerifiedUser] = useState<UserType | null>(null);

  const {
    register,

    formState: { errors },
  } = useForm<verificationFormFields>();

  // const onSubmit = handleSubmit(async () => {
  //   await onVerifyClick();
  // });

  async function verify(response: SismoConnectResponse) {
    // First we update the react state to show the loading state
    setLoading(true);
    try {
      // We send the response to our backend to verify the proof
      const res = await axios.post(`../api/level-1-verify-user`, {
        response,
      });
      console.log(res);

      const user = res.data;

      // If the proof is valid, we update the user react state to show the user profile
      setVerifiedUser({
        id: user.id,
        name: user.name,
      });
    } catch (e) {
      // Else if the proof is invalid, we show an error message
      setError("Invalid response");
      console.error(e);
    } finally {
      // We set the loading state to false to show the user profile
      onVerifyClick();
      setLoading(false);
    }
  }

  // On text input change, we update the userInput react state variable
  function onUserInput(e: any) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col gap-6 ">
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
          value={userInput}
          onChange={onUserInput}
          disabled={loading}
        />

        <SismoConnectButton
          config={sismoConnectConfig}
          auths={[{ authType: AuthType.GITHUB }]}
          claims={[{ groupId: "0x1ca383268ca46c64587dd4ef9bd1261d" }]}
          onResponse={(response: SismoConnectResponse) => verify(response)}
          loading={loading}
          text="Register with Sismo"
        />
        <>{error}</>
      </div>
    </>
  );
};
