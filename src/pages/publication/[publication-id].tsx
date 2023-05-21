import { DocumentIcon } from "@heroicons/react/24/outline";
import { Post } from "@lens-protocol/react-web";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { DislikeComponent } from "@components/icons/dislike-component";
import { LikeComponent } from "@components/icons/like-component";
import { PublicationForum } from "@components/publication/publication-forum";
import { useDownvotePublicaion } from "@lib/use-downvote-publication";
import { useDownvotesCount } from "@lib/use-downvotes-count";
import { useGetPublication } from "@lib/use-get-publication";
import { useHasDownvotedPublication } from "@lib/use-has-downvoted-publication";
import { useHasUpvotedPublication } from "@lib/use-has-upvoted-publication";
import { useUpvotePublicaion } from "@lib/use-upvote-publication";
import { useUpvotesCount } from "@lib/use-upvotes-count";
import { getIpfsUrl } from "@utils/ipfs";

const CourseInfo = ({ publication }: { publication: Post }) => {
  const { data: hasUpvotedPublication, refetch: refetchHasUpvoted } =
    useHasUpvotedPublication(publication.id);

  const { data: hasDownvotedPublication, refetch: refetchHasDownvoted } =
    useHasDownvotedPublication(publication.id);

  const { data: upvotesCount, refetch: refetchUpvotesCount } = useUpvotesCount(
    publication.id,
  );
  const { data: downvotesCount, refetch: refetchDownvotesCount } =
    useDownvotesCount(publication.id);

  const { mutate: upvotePublication, isLoading: isLoadingUpvote } =
    useUpvotePublicaion({
      onSuccess() {
        refetchHasUpvoted();
        refetchUpvotesCount();
      },
    });
  const { mutate: downvotePublication, isLoading: isLoadingDownvote } =
    useDownvotePublicaion({
      onSuccess() {
        refetchHasDownvoted();
        refetchDownvotesCount();
      },
    });

  const hasVoted = hasUpvotedPublication || hasDownvotedPublication;

  const fileUri = publication.metadata.attributes.find(
    (attr) => attr.traitType === "fileUri",
  )?.value;

  const zkAddress = publication.metadata.attributes.find(
    (attr) => attr.traitType === "zkAddress",
  )?.value;

  const onUpvotePublication = () => {
    upvotePublication({
      publicationId: publication.id,
    });
  };

  const onDownvotePublication = () => {
    downvotePublication({
      publicationId: publication.id,
    });
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2">
      <h1 className="my-4 text-3xl font-bold">{publication.metadata.name}</h1>
      <div className="flex items-center justify-between">
        {fileUri && (
          <a
            className="rounded-btn flex items-center gap-2 bg-base-200 p-3 hover:bg-base-300"
            href={getIpfsUrl(fileUri)}
            target="_blank"
            rel="nofererrer noreferrer"
          >
            <DocumentIcon className="h-5 w-5" />
            Leaked Document
          </a>
        )}
        <div className="flex items-center gap-3">
          <p className="font-bold">{upvotesCount}</p>

          {isLoadingUpvote ? (
            <Spinner className="block h-5 w-5" />
          ) : (
            <LikeComponent
              onUpVote={onUpvotePublication}
              isActive={hasUpvotedPublication}
              disabled={hasVoted}
            />
          )}
          <p className="font-bold">{downvotesCount}</p>

          {isLoadingDownvote ? (
            <Spinner className="h-5 w-5" />
          ) : (
            <DislikeComponent
              onDownVote={onDownvotePublication}
              isActive={hasDownvotedPublication}
              disabled={hasVoted}
            />
          )}
          <Link href={`/donate?zkAddress=${zkAddress}`}>
            <Button>Donate</Button>
          </Link>
        </div>
      </div>
      <p className="mt-4">{publication.metadata.content}</p>
      <PublicationForum publicationId={publication.id} className="mt-10" />
    </div>
  );
};

const PublicationPageInner = ({ publicationId }: { publicationId: string }) => {
  const { data: publication, loading } = useGetPublication(publicationId);

  if (loading || !publication) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return <CourseInfo publication={publication as Post} />;
};

const PublicationPage = () => {
  const router = useRouter();
  const publicationId = router.query["publication-id"]?.toString();

  if (!publicationId) return null;

  return <PublicationPageInner publicationId={publicationId} />;
};

export default PublicationPage;
