import cx from "classnames";
import React from "react";

import { Button } from "@components/basic/button";

export type HeroProps = {
  title: String;
};
export const Hero = ({ title }: HeroProps) => {
  return (
    <div
      className={cx(
        "min-h-16  grid grid-cols-12 rounded-md bg-secondary py-12 px-24 ",
      )}
    >
      <h3 className=" col-start-2 col-span-6 font-white text-3xl pb-6 text-wrap">
        {title}
      </h3>
      <div className="col-start-2 col-span-1 pt-2">
        <Button>
          <span className=" font-medium text-white"> Donate</span>
        </Button>
      </div>
    </div>
  );
};
