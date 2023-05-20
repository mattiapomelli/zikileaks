import { NodeBundlr, WebBundlr } from "@bundlr-network/client";
import { Signer } from "ethers";
import { fetchSigner } from "wagmi/actions";

import { CHAIN } from "@constants/chains";
import { RPC_URL } from "@constants/urls";

const TOP_UP = "200000000000000000"; // 0.2 MATIC
const MIN_FUNDS = 0.05;

export const uploadToBundlrWithSigner = async (data: any, signer: Signer) => {
  // create a WebBundlr object
  const bundlrNode =
    process.env.NEXT_PUBLIC_CHAIN?.toLowerCase() === "mainnet"
      ? "https://node1.bundlr.network"
      : "https://devnet.bundlr.network";

  const bundlr = new NodeBundlr(
    bundlrNode,
    "matic",
    process.env.LENS_ADDRESS_PRIVATE_KEY,
    {
      providerUrl: RPC_URL[CHAIN.id],
    },
  );

  await bundlr.ready();

  const address = await signer?.getAddress();
  let url = "";
  if (address) {
    const balance = await bundlr.getBalance(address);

    if (bundlr.utils.unitConverter(balance).toNumber() < MIN_FUNDS) {
      await bundlr.fund(TOP_UP);
    }

    const serialized = JSON.stringify(data);
    const tx = await bundlr.upload(serialized, {
      tags: [{ name: "Content-Type", value: "application/json" }],
    });

    url = `https://arweave.net/${tx.id}`;
    console.log(`Upload success content URI=${url}`);
  }
  return url;
};

export const uploadToBundlr = async (data: any) => {
  const signer = await fetchSigner();
  const provider = signer?.provider;
  // use method injection to add the missing function
  // @ts-ignore
  provider.getSigner = () => signer;

  // create a WebBundlr object
  const bundlrNode =
    process.env.NEXT_PUBLIC_CHAIN?.toLowerCase() === "mainnet"
      ? "https://node1.bundlr.network"
      : "https://devnet.bundlr.network";
  const bundlr = new WebBundlr(bundlrNode, "matic", signer?.provider);

  await bundlr.ready();

  const address = await signer?.getAddress();
  let url = "";
  if (address) {
    const balance = await bundlr.getBalance(address);

    if (bundlr.utils.unitConverter(balance).toNumber() < MIN_FUNDS) {
      await bundlr.fund(TOP_UP);
    }

    const serialized = JSON.stringify(data);
    const tx = await bundlr.upload(serialized, {
      tags: [{ name: "Content-Type", value: "application/json" }],
    });

    url = `https://arweave.net/${tx.id}`;
    console.log(`Upload success content URI=${url}`);
  }
  return url;
};
