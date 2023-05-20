import { ethers } from "ethers";
import { NextPage } from "next";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { wethAddress } from "@constants/common";
import { useRailgun } from "@contexts/railgun-provider";
import { usePrivateTransfer } from "@hooks/use-private-transfer";

const TransferPage: NextPage = () => {
  const { loading, wallet, balance } = useRailgun();
  const { mutate: transfer, isLoading } = usePrivateTransfer();

  const onTransfer = async () => {
    if (!wallet) return;

    try {
      transfer({
        tokenAddress: wethAddress,
        tokenAmount: "0.01",
        tokenDecimals: 18,
        recipient:
          "0zk1qy8n2jl97x4wmjzfn9cewx2ckq62tzdekupxa0vyttn0m5tt64hnhrv7j6fe3z53l7s3n8dq8scck5ma0cwjevhf8p877l6ryh84c88s5ld8avm75mkpvwtz0q5",
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
      <Button onClick={onTransfer} loading={isLoading} disabled={isLoading}>
        Transfer
      </Button>
    </div>
  );
};

export default TransferPage;
