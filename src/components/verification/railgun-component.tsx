/* eslint-disable unicorn/filename-case */
import { useState } from "react";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { CopyButton } from "@components/basic/copy-button";
import { Spinner } from "@components/basic/spinner";
import { CreateWalletResponse, useRailgun } from "@contexts/railgun-provider";

interface RailGunFormProps {
  onVerifyClick: () => void;
  showConnectMessage?: boolean;
}

export const RailgunComponent = ({
  onVerifyClick,
  showConnectMessage,
}: RailGunFormProps) => {
  const { loading, wallet, createWallet, setWallet } = useRailgun();
  const [walletInfo, setWalletInfo] = useState<CreateWalletResponse>();

  const createRailgunWallet = async () => {
    const res = await createWallet();
    console.log("here: ", res);
    if (!res) return;
    setWalletInfo(res);
  };

  const connectWallet = async () => {
    if (!walletInfo) return;

    setWallet({
      id: walletInfo.id,
      zkAddress: walletInfo.zkAddress,
      encryptionKey: walletInfo.encryptionKey,
      address: walletInfo.address,
    });
    onVerifyClick();
  };

  console.log("Loading: ", loading);

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!wallet) {
    return (
      <div className="mt-10 flex justify-center">
        {walletInfo ? (
          <div className="max-w-md">
            <h2 className="mb-4 text-xl font-bold">
              Success created a new wallet!
            </h2>
            <p className="mb-4">
              Make sure to copy your mnemonic and store it in a safe place.
            </p>
            <div className="flex flex-col gap-2">
              <div className="rounded-box flex items-center justify-between bg-base-200 px-4 py-3">
                <div className="font-bold">
                  Your public address: <Address address={walletInfo.address} />
                </div>
                <CopyButton
                  label="Copy"
                  text={walletInfo.address}
                  size="sm"
                  color="neutral"
                />
              </div>
              <div className="rounded-box flex items-center justify-between bg-base-200 px-4 py-3">
                <div className="font-bold">
                  Your ZK Address:{" "}
                  <Address address={walletInfo.zkAddress as `0x${string}`} />
                </div>
                <CopyButton
                  label="Copy"
                  text={walletInfo.zkAddress}
                  size="sm"
                  color="neutral"
                />
              </div>
              <div className="rounded-box flex items-center justify-between bg-base-200 px-4 py-3">
                <div>
                  <span className="font-bold">Your Mnemonic:</span>
                  <p>{walletInfo.mnemonic}</p>
                </div>
                <CopyButton
                  label="Copy"
                  text={walletInfo.mnemonic}
                  size="sm"
                  color="neutral"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="mt-4" onClick={connectWallet}>
                Next
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={createRailgunWallet}>Create Railgun Wallet</Button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center">
        <h4 className="mb-2 text-lg font-bold text-accent">
          You have a Railgun wallet!
        </h4>

        <div className="flex flex-col gap-2">
          <div className="rounded-box flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
            <div className="mb-6 font-bold text-accent">
              Your public address: <Address address={wallet.address} />
            </div>
            <CopyButton
              label="Copy"
              text={wallet.address}
              size="sm"
              color="neutral"
            />
          </div>
          <div className="rounded-box flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
            <div className="font-bold text-accent">
              Your ZK Address:{" "}
              <Address address={wallet.zkAddress as `0x${string}`} />
            </div>
            <CopyButton
              label="Copy"
              text={wallet.zkAddress}
              size="sm"
              color="neutral"
            />
          </div>
          {showConnectMessage && (
            <div className="text-medium rounded-box mt-2 bg-warning/20 p-4 text-center text-white">
              Please make sure to be connected with your Railgun public address
              in your wallet. You might need to import it.
            </div>
          )}
        </div>

        <Button className="mt-4" onClick={onVerifyClick}>
          Next
        </Button>
      </div>
    </>
  );
};
