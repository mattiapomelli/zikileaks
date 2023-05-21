import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

export const WMATIC_ADDRESS: Record<number, string> = {
  [polygon.id]: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  [polygonMumbai.id]: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
  [hardhat.id]: "",
};
