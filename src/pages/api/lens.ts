import {
  LensClient,
  production,
  development,
  // PublicationMetadataV2Input,
  // PublicationMainFocus,
  // PublicationMetadataDisplayTypes,
  PublicationTypes,
} from "@lens-protocol/client";
import * as ed from "@noble/ed25519";
import { decodeAddress } from "@railgun-community/engine";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
// import { v4 as uuidv4 } from "uuid";
// import { polygon, polygonMumbai, hardhat } from "wagmi/chains";

import { WMATIC_ADDRESS } from "@constants/addresses";
import { CHAIN } from "@constants/chains";
import { WIKILEAKS_PROFILE_ID } from "@constants/lens";
import { uploadToBundlrWithSigner } from "@utils/bundlr";

// interface Data {
//   metadata: Record<string, any>
// }

interface ReqBody {
  signature: string;
  // data: Data;
  metadata: Record<string, any>;
}

const lensClient = new LensClient({
  environment:
    process.env.NEXT_PUBLIC_CHAIN === "mainnet" ? production : development,
});

// const LENS_PROFILE_ID: Record<number, string> = {
//   [polygon.id]: "0x01a171",
//   [polygonMumbai.id]: "0x804a",
//   [hardhat.id]: "",
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const wallet = new ethers.Wallet(process.env.LENS_ADDRESS_PRIVATE_KEY || "");
  const address = await wallet.getAddress();
  console.log("Address: ", address);

  if (req.method === "GET") {
    // Get All Publications
    const publications = await lensClient.publication.fetchAll({
      profileId: WIKILEAKS_PROFILE_ID[CHAIN.id],
      publicationTypes: [PublicationTypes.Post],
    });
    console.log("Publications: ", publications.items[4]);

    // Get Default Profile
    // const allOwnedProfiles = await lensClient.profile.fetchAll({
    //   ownedBy: [address],
    //   limit: 1,
    // });
    // const defaultProfile = allOwnedProfiles.items[0];

    return res.status(200).send({ message: publications.items.length });
  } else if (req.method === "POST") {
    const { signature: metadataSignature, metadata } = req.body as ReqBody;

    const zkAddress = metadata.attributes.find(
      (attr: any) => attr.traitType === "zkAddress",
    )?.value;
    const pubKey = metadata.attributes.find(
      (attr: any) => attr.traitType === "pubKey",
    )?.value;

    // Verify message
    const message = Buffer.from(JSON.stringify(metadata)).toString("hex");
    const isValid = await ed.verifyAsync(metadataSignature, message, pubKey);

    // Verify address corresponging to the public key is the same as the zkAddress in the data
    const addressData = decodeAddress(zkAddress);

    const pubKeyHex = Buffer.from(addressData.viewingPublicKey).toString("hex");
    const isVerified = isValid && pubKeyHex === pubKey;

    if (!isVerified) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Auhenticate
    const challenge = await lensClient.authentication.generateChallenge(
      address,
    );
    const signature = await wallet.signMessage(challenge);
    await lensClient.authentication.authenticate(address, signature);

    const isAuth = await lensClient.authentication.isAuthenticated();
    console.log("Is Authenticated: ", isAuth);

    // Create and validate Post metadata
    // const metadata: PublicationMetadataV2Input = {
    //   content: data.description,
    //   metadata_id: uuidv4(),
    //   name: data.title,
    //   description: data.description,
    //   version: "2.0.0",
    //   mainContentFocus: PublicationMainFocus.TextOnly,
    //   locale: "en-US",
    //   tags: ["zikileaks"],
    //   // attributes: [],
    //   attributes: [
    //     {
    //       traitType: "zkAddress",
    //       value: data.zkAddress,
    //       displayType: PublicationMetadataDisplayTypes.String,
    //     },
    //     {
    //       traitType: "pubKey",
    //       value: data.pubKey,
    //       displayType: PublicationMetadataDisplayTypes.String,
    //     },
    //   ],
    // };

    // const validateResult = await lensClient.publication.validateMetadata(
    //   metadata,
    // );

    // if (!validateResult.valid) {
    //   throw new Error(`Metadata not valid: ${validateResult.reason}`);
    // }

    // Upload metadata to Bundlr
    const uri = await uploadToBundlrWithSigner(metadata, wallet);
    if (!uri) {
      return res.status(500).send({ message: "Failed to upload metadata" });
    }
    console.log("Uri: ", uri);

    // Create Post
    const result = await lensClient.publication.createPostViaDispatcher({
      profileId: WIKILEAKS_PROFILE_ID[CHAIN.id],
      contentURI: uri,
      collectModule: {
        feeCollectModule: {
          amount: {
            currency: WMATIC_ADDRESS[CHAIN.id],
            value: "1",
          },
          followerOnly: false,
          recipient: address,
          referralFee: 0,
        },
      },
      referenceModule: {
        followerOnlyReferenceModule: false, // anybody can comment or mirror
      },
    });

    if (result.isFailure()) {
      return res.status(500).send({ message: result.error });
    }

    const isSuccess = result.isSuccess();

    console.log("Result: ", result);
    console.log("Is success: ", isSuccess);

    return res.status(200).send({ message: "Ok" });
  } else {
    return res.status(405).send({ message: "Method not allowed" });
  }
}
