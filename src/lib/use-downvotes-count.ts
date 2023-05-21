import { useQuery } from "wagmi";

import { useZikiLeaks } from "@hooks/use-zikileaks";

export const useDownvotesCount = (publicationId: string) => {
  const zikiLeaks = useZikiLeaks();

  const mutation = useQuery(["downvotes-count", publicationId], async () => {
    if (!zikiLeaks) return false;

    const eventFilter = zikiLeaks.filters.PublicationDownvoted(publicationId);
    const events = await zikiLeaks.queryFilter(eventFilter);

    return events.length;
  });

  return mutation;
};
