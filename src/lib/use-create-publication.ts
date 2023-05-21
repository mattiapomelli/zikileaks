import {
  useActiveProfile,
  useCreatePost,
  CollectPolicyType,
  ContentFocus,
  ProfileOwnedByMe,
  Amount,
  useCurrencies,
  Erc20,
  // NftAttributeDisplayType,
} from "@lens-protocol/react-web";
import * as ed from "@noble/ed25519";
import { getRailgunWalletPrivateViewingKey } from "@railgun-community/quickstart";
import { BigNumber, ethers } from "ethers";
import { useMutation } from "wagmi";

import { useRailgun } from "@contexts/railgun-provider";
import { uploadToBundlr } from "@utils/bundlr";
import { uploadFileToIPFS } from "@utils/ipfs";

const COLLECT_PRICE = BigNumber.from("1000000000000000000"); // 1 MATIC

export interface CreatePublicationData {
  title: string;
  description: string;
  file: File;
}

interface UseCreateCourseOptions {
  onSuccess?: () => void;
}

export const useCreatePublication = (options?: UseCreateCourseOptions) => {
  const { wallet } = useRailgun();

  const { data: profile } = useActiveProfile();
  const { data: currencies } = useCurrencies();
  // @ts-ignore
  const { execute: create } = useCreatePost({
    publisher: profile as ProfileOwnedByMe,
    upload: uploadToBundlr,
  });

  const mutation = useMutation(
    async ({ title, description, file }: CreatePublicationData) => {
      if (!wallet) return;

      // Get public key from private viewing key
      const privateViewingKey = getRailgunWalletPrivateViewingKey(wallet.id);
      const pubKey = await ed.getPublicKeyAsync(privateViewingKey);
      const pubKeyHex = Buffer.from(pubKey).toString("hex");

      const fileUri = await uploadFileToIPFS(file);
      if (!fileUri) return;

      const res = await create({
        content: description,
        contentFocus: ContentFocus.TEXT,
        locale: "en",
        collect: {
          type: CollectPolicyType.CHARGE,
          fee: Amount.erc20(
            currencies?.find((c) => c.symbol === "WMATIC") as Erc20,
            ethers.utils.formatEther(COLLECT_PRICE),
          ),
          mirrorReward: 0,
          timeLimited: false,
          followersOnly: false,
          recipient: profile?.ownedBy as string,
          metadata: {
            name: title,
            description,
            attributes: [
              {
                // @ts-ignore
                displayType: "String",
                value: wallet.zkAddress,
                traitType: "zkAddress",
              },
              {
                // @ts-ignore
                displayType: "String",
                value: pubKeyHex,
                traitType: "pubKey",
              },
              {
                // @ts-ignore
                displayType: "String",
                value: fileUri,
                traitType: "fileUri",
              },
            ],
          },
        },
      });

      console.log("result: ", res.unwrap());

      const unwrapped = res.unwrap();
      console.log("Unwrapped: ", unwrapped);

      if (res.isFailure()) {
        console.log("Error: ", res.error);
        throw res.error;
      }
    },
    {
      onSuccess: options?.onSuccess,
    },
  );

  return mutation;
};
