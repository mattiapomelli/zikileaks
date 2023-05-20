import React from "react";

import { NewsFeed } from "@components/landing/news-feed";

import type { NextPage } from "next";

const News: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-20">
        <div className="col-span-1">
          <NewsFeed />
        </div>
      </div>
    </>
  );
};

export default News;
