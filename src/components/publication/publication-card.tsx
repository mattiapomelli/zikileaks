import { Post } from "@lens-protocol/react-web";
import Link from "next/link";

import { useDownvotePublicaion } from "@lib/use-downvote-publication";
import { useHasDownvotedPublication } from "@lib/use-has-downvoted-publication";
import { useHasUpvotedPublication } from "@lib/use-has-upvoted-publication";
import { useUpvotePublicaion } from "@lib/use-upvote-publication";

import { Button } from "../basic/button";
import { DislikeComponent } from "../icons/dislike-component";
import { LikeComponent } from "../icons/like-component";

interface PublicationCardProps {
  post: Post;
}

export const PublicationCard = ({
  post: publication,
}: PublicationCardProps) => {
  const { data: hasUpvotedPublication, refetch: refetchHasUpvoted } =
    useHasUpvotedPublication(publication.id);

  const { data: hasDownvotedPublication, refetch: refetchHasDownvoted } =
    useHasDownvotedPublication(publication.id);

  const { mutate: upvotePublication } = useUpvotePublicaion({
    onSuccess() {
      refetchHasUpvoted;
    },
  });
  const { mutate: downvotePublication } = useDownvotePublicaion({
    onSuccess() {
      refetchHasDownvoted;
    },
  });

  const hasVoted = hasUpvotedPublication || hasDownvotedPublication;

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
    <div className="rounded-box flex flex-col justify-between gap-2 bg-base-200 p-4">
      {/* <div className="rounded-box relative h-44 overflow-hidden">
        <Image
          src={post.metadata.imageUrl}
          layout="fill"
          objectFit="cover"
          alt="Publication"
          priority
        />
      </div> */}

      <h4 className="mt-1 block text-xl font-semibold text-accent">
        {publication.metadata.name}
      </h4>

      <p className="text-base-content/70">
        {publication.metadata.content?.substring(0, 100).concat("...")}
      </p>

      <div className="mt-4 flex w-full items-center justify-between">
        <Link href={`/publication/${publication.id}`}>
          <Button size="sm">Read</Button>
        </Link>
        <div className="flex gap-2 text-accent">
          {/* <p className="font-bold"> {vote}</p> */}
          <LikeComponent
            onUpVote={onUpvotePublication}
            isActive={hasUpvotedPublication}
            disabled={hasVoted}
          />
          <DislikeComponent
            onDownVote={onDownvotePublication}
            isActive={hasDownvotedPublication}
            disabled={hasVoted}
          />
        </div>
      </div>
    </div>
  );
};
