import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

export const LENS_TAG = "wikileaks";

export const WIKILEAKS_PROFILE_ID: Record<number, string> = {
  [polygon.id]: "0x01a171",
  [polygonMumbai.id]: "0x827a",
  [hardhat.id]: "",
};
