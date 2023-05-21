import { useQuery } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

export const useUpvotesCount = (publicationId: string) => {
  const zikiLeaks = useZikiLeaks();

  const mutation = useQuery(["upvotes-count", publicationId], async () => {
    if (!zikiLeaks) return false;

    const eventFilter = zikiLeaks.filters.PublicationUpvoted(publicationId);
    const events = await zikiLeaks.queryFilter(eventFilter);

    return events.length;
  });

  return mutation;
};
