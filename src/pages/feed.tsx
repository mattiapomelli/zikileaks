import React from "react";

import { NewsFeed } from "@components/landing/news-feed";

import type { NextPage } from "next";

const Publication: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <NewsFeed />
        </div>
      </div>
    </>
  );
};

export default Publication;
