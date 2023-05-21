import { useMutation } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

import type { ContractReceipt } from "ethers";

export interface DownvotePublicationData {
  publicationId: string;
}

interface UseBuyCourseOptions {
  onSuccess?: (data: ContractReceipt | undefined) => void;
}

export const useDownvotePublicaion = (options?: UseBuyCourseOptions) => {
  const zikiLeaks = useZikiLeaks(true);

  const mutation = useMutation(
    async ({ publicationId }: DownvotePublicationData) => {
      if (!zikiLeaks) return;

      const tx = await zikiLeaks.downvotePublication(publicationId);
      return await tx.wait();
    },
    {
      onSuccess: options?.onSuccess,
    },
  );

  return mutation;
};
