import cx from "classnames";
import React from "react";

import { Button } from "@components/basic/button";

export type HeroProps = {
  title: String;
};
export const NewsFeed = ({ title }: HeroProps) => {
  return (
    <div
      className={cx(
        "min-h-16  grid grid-cols-12 rounded-md bg-secondary py-12 px-24 ",
      )}
    ></div>
  );
};
