import { useAccount, useQuery } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

export const useHasDownvotedPublication = (publicationId: string) => {
  const zikiLeaks = useZikiLeaks();
  const { address } = useAccount();

  const mutation = useQuery(
    ["has-downvoted-publication", publicationId],
    async () => {
      if (!zikiLeaks || !address) return false;

      return await zikiLeaks.hasDownvoted(address, publicationId);
    },
  );

  return mutation;
};
