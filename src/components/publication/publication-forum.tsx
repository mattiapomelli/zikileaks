import { Fragment } from "react";

import { Spinner } from "@components/basic/spinner";
import { LensLogin } from "@components/lens-login";
import { usePublicationComments } from "@lib/use-publication-comments";

import { CreateCommentForm } from "./create-comment-form";
import { PublicationComment } from "./publication-comment";

const PublicationForumInner = ({
  publicationId,
}: {
  publicationId: string;
}) => {
  const { data: comments, loading } = usePublicationComments(publicationId);

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  // if (comments?.length === 0)
  //   return (
  //     <div className="flex flex-col justify-center">
  //       <p>No discussions yet</p>
  //       <CreateCommentForm pubId={publicationId} />
  //     </div>
  //   );

  return (
    <div className="flex flex-col gap-10">
      {comments?.map((comment) => (
        <Fragment key={comment.id}>
          <PublicationComment key={comment.id} comment={comment} />
          {/* <div className="h-px bg-base-300" /> */}
        </Fragment>
      ))}
      <CreateCommentForm pubId={publicationId} />
    </div>
  );
};

interface PublicationForumProps {
  publicationId: string;
  className?: string;
}
export const PublicationForum = ({
  className,
  publicationId,
}: PublicationForumProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between">
        <h4 className="mb-2 text-xl font-bold">Forum</h4>
        <LensLogin />
      </div>
      <PublicationForumInner publicationId={publicationId} />
    </div>
  );
};
