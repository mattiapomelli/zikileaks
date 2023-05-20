import { hardhat, polygon, polygonMumbai } from "wagmi/dist/chains";

export const STORAGE_ADDRESS: Record<number, string> = {
  [polygon.id]: "",
  [polygonMumbai.id]: "'",
  [hardhat.id]: "",
};
