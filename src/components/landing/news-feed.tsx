import cx from "classnames";
import React from "react";

import { NewsFeedRow } from "./news-row";

export type HeroProps = {
  title: String;
};
export const NewsFeed = ({ title }: HeroProps) => {
  return (
    <div className="col-span-6 space-y-4">
      <NewsFeedRow title={"Title"} />
      <NewsFeedRow title={"Title"} />
      <NewsFeedRow title={"Title"} />
    </div>
  );
};
