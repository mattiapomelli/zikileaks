import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

export const WMATIC_ADDRESS: Record<number, string> = {
  [polygon.id]: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  [polygonMumbai.id]: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
  [hardhat.id]: "",
};

export const ZIKILEAKS_ADDRESS: Record<number, string> = {
  [polygon.id]: "",
  [polygonMumbai.id]: "0x110b2c58ea4621eC417EB6e0F6fBfa7033d6181A",
  [hardhat.id]: "",
};
