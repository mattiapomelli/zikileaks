import { useAccount, useQuery } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

export const useHasUpvotedPublication = (publicationId: string) => {
  const zikiLeaks = useZikiLeaks();
  const { address } = useAccount();

  const mutation = useQuery(
    ["has-upvoted-publication", publicationId],
    async () => {
      if (!zikiLeaks || !address) return false;

      return await zikiLeaks.hasUpvoted(address, publicationId);
    },
  );

  return mutation;
};
