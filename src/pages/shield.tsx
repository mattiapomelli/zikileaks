import { ethers } from "ethers";
import { NextPage } from "next";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { ethAddress } from "@constants/common";
import { useRailgun } from "@contexts/railgun-provider";
import { useShield } from "@hooks/use-shield";

const DonatePage: NextPage = () => {
  const { loading, wallet, balance } = useRailgun();
  const { shield, isLoading } = useShield();

  const onDonate = async () => {
    if (!wallet) return;

    try {
      await shield({
        tokenAddress: ethAddress,
        tokenAmount: "0.1",
        tokenDecimals: 18,
        recipient: wallet.zkAddress as `0x${string}`,
      });
    } catch (e) {
      console.error(e);
    }
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
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <Address address={wallet.zkAddress as `0x${string}`} />
      <p>Private Balance: {ethers.utils.formatEther(balance)}</p>
      <Button onClick={onDonate} loading={isLoading} disabled={isLoading}>
        Shield
      </Button>
    </div>
  );
};

export default DonatePage;
