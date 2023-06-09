import { isHexString } from "@ethersproject/bytes";
import { NetworkName } from "@railgun-community/shared-models";
import { EVMGasType } from "@railgun-community/shared-models";
import { FallbackProviderJsonConfig } from "@railgun-community/shared-models";
import { BigNumber } from "ethers";
import { polygon, polygonMumbai } from "wagmi/chains";

import { ethAddress } from "@constants/common";

import { WMATIC_ADDRESS } from "./addresses";
import { RPC_URL } from "./urls";

type BaseToken = { symbol: string; name: string; logoURI: string };
export type NetworkConfig = {
  blockExplorerUrl: string;
  railgunNetworkName: NetworkName;
  chainId: number;
  wethAddress: string;
  evmGasType: EVMGasType;
  baseToken: BaseToken;
  fallbackProviders: FallbackProviderJsonConfig;
};

type Networks = { [key: number]: NetworkConfig };

export const networks: Networks = {
  [polygon.id]: {
    blockExplorerUrl: "https://polygonscan.com/",
    railgunNetworkName: NetworkName.Polygon,
    chainId: polygon.id,
    wethAddress: WMATIC_ADDRESS[polygon.id],
    evmGasType: EVMGasType.Type2,
    baseToken: {
      symbol: "MATIC",
      name: "MATIC",
      logoURI: "",
    },
    fallbackProviders: {
      chainId: polygon.id,
      providers: [{ provider: RPC_URL[polygon.id], priority: 1, weight: 1 }],
    },
  },
  [polygonMumbai.id]: {
    blockExplorerUrl: "https://mumbai.polygonscan.com",
    railgunNetworkName: NetworkName.PolygonMumbai,
    chainId: polygonMumbai.id,
    wethAddress: WMATIC_ADDRESS[polygonMumbai.id],
    evmGasType: EVMGasType.Type2,
    baseToken: {
      symbol: "MATIC",
      name: "MATIC",
      logoURI: "",
    },
    fallbackProviders: {
      chainId: polygonMumbai.id,
      providers: [
        { provider: RPC_URL[polygonMumbai.id], priority: 1, weight: 1 },
      ],
    },
  },
};

export const getEtherscanUrl = (txHashOrAddress: string, chainId: number) => {
  const group = isHexString(txHashOrAddress)
    ? txHashOrAddress.length === 42
      ? "address"
      : "tx"
    : "ens";
  const chain = getNetwork(chainId);
  const networkPrefix = chain?.blockExplorerUrl
    ? chain?.blockExplorerUrl
    : "https://etherscan.io";
  if (group === "ens") {
    return `${networkPrefix}`;
  } else {
    return `${networkPrefix}/${group}/${txHashOrAddress}`;
  }
};

export const buildBaseToken = (baseToken: BaseToken, chainId: number) => {
  return {
    chainId,
    symbol: baseToken.symbol,
    address: ethAddress,
    decimals: 18,
    name: baseToken.name,
    logoURI: baseToken.logoURI,
    balance: BigNumber.from(0),
  };
};

export const getNetwork = (chainId: number | undefined) => {
  return networks[chainId || 1] || networks[1];
};
