import cx from "classnames";
import React from "react";

import { CustomLink } from "@components/basic/link";
import { DislikeComponent } from "@components/icons/dislike-component";
import { LikeComponent } from "@components/icons/like-component";

export type NewsFeedRowProps = {
  title: String;
};
export const NewsFeedRow = ({ title }: NewsFeedRowProps) => {
  return (
    <article
      className={cx(
        "min-h-24  w-full rounded-md border-2 border-solid-primary p-4",
      )}
    >
      <p className="font-normal">{title}</p>
      <p className="font-bold">Title</p>
      <p className="my-6 line-clamp-2">
        Here a block of text from a blog post that isn conveniently three lines
        long like you designed for originally. Its probably like 6 lines on
        mobile or even on desktop depending on how you have things laid out.
      </p>
      <div className="flex w-full justify-between">
        <CustomLink href="/blog"> Read More </CustomLink>
        <div className="flex">
          <LikeComponent />
          <DislikeComponent />
        </div>
      </div>
    </article>
  );
};
