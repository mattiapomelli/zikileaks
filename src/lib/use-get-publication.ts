import { publicationId, usePublication } from "@lens-protocol/react-web";

export const useGetPublication = (pubId: string) => {
  return usePublication({
    publicationId: publicationId(pubId),
  });
};
