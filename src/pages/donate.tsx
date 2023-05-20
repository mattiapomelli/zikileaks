import { NextPage } from "next";

import { Address } from "@components/address";
import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { ethAddress } from "@constants/common";
import { useRailgun } from "@contexts/railgun-provider";
import { useShield } from "@hooks/use-shield";

const DonatePage: NextPage = () => {
  const { loading, wallet } = useRailgun();
  const { shield, isLoading } = useShield();

  const onDonate = async () => {
    try {
      await shield({
        tokenAddress: ethAddress,
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
    <div className="mt-10 flex justify-center">
      <Address address={wallet.zkAddress as `0x${string}`} />
      <Button onClick={onDonate} loading={isLoading}>
        Donate
      </Button>
    </div>
  );
};

export default DonatePage;
