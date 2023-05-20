import { LensClient, development, production } from "@lens-protocol/client";

export const lensClient = new LensClient({
  environment:
    process.env.NEXT_PUBLIC_CHAIN === "mainnet" ? production : development,
});
