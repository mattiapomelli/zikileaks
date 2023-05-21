import { Post } from "@lens-protocol/react-web";
import React from "react";

import { Spinner } from "@components/basic/spinner";
import { PublicationCard } from "@components/publication/publication-card";
import { useGetPublications } from "@lib/use-get-publications";

import type { NextPage } from "next";

const FeedPageInner = () => {
  const { data: publications, loading } = useGetPublications();

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  const postPublications = publications?.filter(
    (publication) => publication.__typename === "Post",
  ) as Post[];

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-autofill">
        {postPublications.map((post) => (
          <PublicationCard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

const FeedPage: NextPage = () => {
  return (
    <div>
      <h4 className="mb-6 text-xl text-accent font-bold">Last Publications</h4>
      <FeedPageInner />
    </div>
  );
};

export default FeedPage;
