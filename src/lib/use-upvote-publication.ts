import { useMutation } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

import type { ContractReceipt } from "ethers";

export interface UpvotePublicationData {
  publicationId: string;
}

interface UseBuyCourseOptions {
  onSuccess?: (data: ContractReceipt | undefined) => void;
}

export const useUpvotePublicaion = (options?: UseBuyCourseOptions) => {
  const zikiLeaks = useZikiLeaks(true);

  const mutation = useMutation(
    async ({ publicationId }: UpvotePublicationData) => {
      if (!zikiLeaks) return;

      const tx = await zikiLeaks.upvotePublication(publicationId);
      return await tx.wait();
    },
    {
      onSuccess: options?.onSuccess,
    },
  );

  return mutation;
};
