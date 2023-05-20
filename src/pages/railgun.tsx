import { NextPage } from "next";
import { useState } from "react";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { CreateWalletResponse, useRailgun } from "@contexts/railgun-provider";

const RailgunPage: NextPage = () => {
  const { loading, wallet, createWallet, setWallet } = useRailgun();
  const [walletInfo, setWalletInfo] = useState<CreateWalletResponse>();

  const createRailgunWallet = async () => {
    const res = await createWallet();
    if (!res) return;
    setWalletInfo(res);
  };

  const connectWallet = async () => {
    if (!walletInfo) return;

    setWallet({
      id: walletInfo.id,
      zkAddress: walletInfo.zkAddress,
    });
  };

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
          <div>
            <h2 className="text-xl font-bold">Created new wallet!</h2>
            <p>Make sure you save your mnemonic phrase somewhere safe.</p>
            <p>
              Address:
              <Address address={walletInfo.address} />
            </p>
            <p>
              ZK Address:{" "}
              <Address address={walletInfo.zkAddress as `0x${string}`} />
            </p>
            <p>Mnemonic: {walletInfo?.mnemonic}</p>
            <Button onClick={connectWallet}>Next</Button>
          </div>
        ) : (
          <Button onClick={createRailgunWallet}>Create Railgun Wallet</Button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-10 flex justify-center">
      <Address address={wallet.zkAddress as `0x${string}`} />
    </div>
  );
};

export default RailgunPage;
