import * as ed from "@noble/ed25519";
import { getRailgunWalletPrivateViewingKey } from "@railgun-community/quickstart";
import axios from "axios";
import { NextPage } from "next";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { useRailgun } from "@contexts/railgun-provider";

const SignPage: NextPage = () => {
  const { loading, wallet } = useRailgun();

  const onSign = async () => {
    if (!wallet) return;

    // Get private viewing key
    const privateViewingKey = getRailgunWalletPrivateViewingKey(wallet?.id);

    // Get public key from private viewing key
    const pubKey = await ed.getPublicKeyAsync(privateViewingKey);
    const pubKeyHex = Buffer.from(pubKey).toString("hex");

    // Sign message
    const data = {
      title: "Title",
      description: "Description",
      zkAddress: wallet.zkAddress,
      pubKey: pubKeyHex,
    };
    const messageToSign = Buffer.from(JSON.stringify(data)).toString("hex");
    const signature = await ed.signAsync(messageToSign, privateViewingKey);
    const signatureHex = Buffer.from(signature).toString("hex");

    // Send message and signature to server to verify
    const res = await axios.post("/api/verify", {
      data: {
        title: "Title",
        description: "Description",
        zkAddress: wallet,
        pubKey: pubKeyHex,
      },
      signature: `${signatureHex}`,
    });

    console.log("Reponse: ", res.data);
  };

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!wallet) return null;

  return (
    <div className="mt-10 flex justify-center">
      <Address address={wallet.zkAddress as `0x${string}`} />
      <Button onClick={onSign}>Sign</Button>
    </div>
  );
};

export default SignPage;
