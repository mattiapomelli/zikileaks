import { Post } from "@lens-protocol/react-web";
import Link from "next/link";

import { Button } from "../basic/button";
import { DislikeComponent } from "../icons/dislike-component";
import { LikeComponent } from "../icons/like-component";

interface PublicationCardProps {
  post: Post;
}

export const PublicationCard = ({ post }: PublicationCardProps) => {
  return (
    <div className="rounded-box flex flex-col gap-2 bg-base-200 p-4">
      {/* <div className="rounded-box relative h-44 overflow-hidden">
        <Image
          src={post.metadata.imageUrl}
          layout="fill"
          objectFit="cover"
          alt="Publication"
          priority
        />
      </div> */}

      <h4 className="mt-1 block text-xl font-semibold">{post.metadata.name}</h4>

      <p className="text-base-content/70">
        {post.metadata.content?.substring(0, 100).concat("...")}
      </p>

      <div className="flex w-full items-center justify-between">
        <Link href={`/publication/${post.id}`}>
          <Button size="sm">Read more</Button>
        </Link>
        <div className="flex gap-2">
          <LikeComponent />
          <DislikeComponent />
        </div>
      </div>
    </div>
  );
};
