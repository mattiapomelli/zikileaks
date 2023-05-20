import { recoverPersonalSignature } from "@metamask/eth-sig-util";
import * as ed from "@noble/ed25519";
import {
  getRailgunWalletPrivateViewingKey,
  viewOnlyWalletForID,
  getRailgunAddress,
  signWithWalletViewingKey,
  getWalletShareableViewingKey,
} from "@railgun-community/quickstart";
import { Wallet } from "ethers";
import { NextPage } from "next";
import { useProvider } from "wagmi";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { useRailgun } from "@contexts/railgun-provider";
import { useRailgunTx } from "@hooks/use-railgun-tx";

const SignPage: NextPage = () => {
  const provider = useProvider();
  const { loading, wallet } = useRailgun();
  const { shield, isLoading } = useRailgunTx();

  const onSign = async () => {
    if (!wallet) return;
    const privateViewingKey = getRailgunWalletPrivateViewingKey(wallet?.id);
    console.log(
      "Private viewing key: ",
      Buffer.from(privateViewingKey).toString("hex"),
    );

    // ------------------------------------------------------------

    const message = Buffer.from("Hello world").toString("hex");
    const signature = await signWithWalletViewingKey(wallet.id, message);
    const sharableViewingKey = await getWalletShareableViewingKey(wallet.id);
    console.log("Signature: ", signature);
    console.log("Shareable viewing key: ", sharableViewingKey);

    const pubKey = await ed.getPublicKeyAsync(privateViewingKey); // Sync methods below
    console.log("Pub key: ", Buffer.from(pubKey).toString("hex"));

    const isValid = await ed.verifyAsync(signature, message, pubKey);
    console.log("Is valid: ", isValid);

    // ------------------------------------------------------------
    // const viewOnlyWallet = viewOnlyWalletForID(wallet.id);
    // console.log("View only wallet: ", viewOnlyWallet);

    // const privKey = ed.utils.randomPrivateKey(); // Secure random private key
    // const message = Uint8Array.from([0xab, 0xbc, 0xcd, 0xde]);
    // const pubKey = await ed.getPublicKeyAsync(privateViewingKey); // Sync methods below
    // console.log("Public key: ", Buffer.from(pubKey).toString("hex"));

    // const signature = await ed.signAsync(message, privateViewingKey);
    // console.log("Signature: ", Buffer.from(signature).toString("hex"));
    // const isValid = await ed.verifyAsync(signature, message, pubKey);

    // ------------------------------------------------------------
    // const signer = new Wallet(privateViewingKey);
    // console.log("Signer: ", signer);
    // console.log("Signer address: ", await signer.getAddress());

    // const message = "Hello world";
    // const sig = await signer.signMessage(message);
    // console.log("Signature: ", sig);

    // // Verify signature
    // const recoveredAddress = recoverPersonalSignature({
    //   data: message,
    //   signature: sig,
    // });
    // console.log("Recovered address: ", recoveredAddress);
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
      <Button onClick={onSign} loading={isLoading}>
        Sign
      </Button>
    </div>
  );
};

export default SignPage;
