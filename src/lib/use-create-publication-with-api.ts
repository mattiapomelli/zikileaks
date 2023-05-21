import * as ed from "@noble/ed25519";
import { getRailgunWalletPrivateViewingKey } from "@railgun-community/quickstart";
import axios from "axios";
import { useMutation } from "wagmi";

import { useRailgun } from "@contexts/railgun-provider";
import { uploadFileToIPFS } from "@utils/ipfs";

export interface CreatePublicationData {
  title: string;
  description: string;
  file: File;
}

interface UseCreateCourseOptions {
  onSuccess?: () => void;
}

export const useCreatePublicationWithApi = (
  options?: UseCreateCourseOptions,
) => {
  const { wallet } = useRailgun();

  const mutation = useMutation(
    async ({ title, description, file }: CreatePublicationData) => {
      if (!wallet) return;

      // Get public key from private viewing key
      const privateViewingKey = getRailgunWalletPrivateViewingKey(wallet.id);
      const pubKey = await ed.getPublicKeyAsync(privateViewingKey);
      const pubKeyHex = Buffer.from(pubKey).toString("hex");

      const fileUri = await uploadFileToIPFS(file);
      if (!fileUri) return;

      const res = await axios.get(
        "/api/lens-metadata?title=" +
          title +
          "&description=" +
          description +
          "&zkAddress=" +
          wallet?.zkAddress +
          "&pubKey=" +
          pubKeyHex +
          "&fileUri=" +
          fileUri,
      );
      const metadata = res.data.metadata;
      console.log("Metadata: ", metadata);

      const messageToSign = Buffer.from(JSON.stringify(metadata)).toString(
        "hex",
      );
      const signature = await ed.signAsync(messageToSign, privateViewingKey);
      const signatureHex = Buffer.from(signature).toString("hex");

      // Send message and signature to server to verify
      const res2 = await axios.post("/api/lens", {
        metadata,
        signature: signatureHex,
      });

      console.log("res: ", res2);
    },
    {
      onSuccess: options?.onSuccess,
    },
  );

  return mutation;
};
