import { useState } from "react";
import { Post } from "@lens-protocol/react-web";
import Link from "next/link";

import { Button } from "../basic/button";
import { DislikeComponent } from "../icons/dislike-component";
import { LikeComponent } from "../icons/like-component";

interface PublicationCardProps {
  post: Post;
}

export const PublicationCard = ({ post }: PublicationCardProps) => {
  const [vote, SetVote] = useState(Math.floor(Math.random() * 100));

  const handleUpVote = () => {
    // Handle the button click event here
    SetVote(vote + 1);
  };
  const handleDownVote = () => {
    // Handle the button click event here
    SetVote(vote - 1);
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

      <h4 className="mt-1 block text-xl text-accent font-semibold">
        {post.metadata.name}
      </h4>

      <p className="text-base-content/70">
        {post.metadata.content?.substring(0, 100).concat("...")}
      </p>

      <div className="mt-4 flex w-full items-center justify-between">
        <Link href={`/publication/${post.id}`}>
          <Button size="sm">Read</Button>
        </Link>
        <div className="flex gap-2 text-accent">
          <p className="font-bold"> {vote}</p>
          <LikeComponent onUpVote={handleUpVote} />
          <DislikeComponent onDownVote={handleDownVote} />
        </div>
      </div>
    </div>
  );
};
