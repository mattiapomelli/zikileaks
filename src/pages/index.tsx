import { NextPage } from "next";

import { Button } from "@components/basic/button";
import { useRailgun } from "@contexts/railgun-provider";

const Home: NextPage = () => {
  const { wallet, createWallet } = useRailgun();

  return (
    <div>
      <p>{wallet?.zkAddress}</p>
      <Button onClick={createWallet}>Create Railgun Wallet</Button>
    </div>
  );
};

export default Home;
