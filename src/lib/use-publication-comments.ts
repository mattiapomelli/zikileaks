import { publicationId, useComments } from "@lens-protocol/react-web";

export const usePublicationComments = (pubId: string) => {
  return useComments({
    commentsOf: publicationId(pubId),
  });
};
