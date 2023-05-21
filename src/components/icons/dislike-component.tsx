import { HandThumbDownIcon as HandThumbUpIconOutline } from "@heroicons/react/24/outline";
import { HandThumbDownIcon as HandThumbUpIconSolid } from "@heroicons/react/24/solid";
import cx from "classnames";
import React from "react";

interface DislikeProps {
  onDownVote: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

export function DislikeComponent({
  onDownVote,
  isActive,
  disabled,
}: DislikeProps) {
  return (
    <button onClick={onDownVote} disabled={disabled}>
      {isActive ? (
        <HandThumbUpIconSolid className="h-5 w-5 text-primary" />
      ) : (
        <HandThumbUpIconOutline
          className={cx(
            "h-5 w-5 text-primary",
            {
              "cursor-pointer": !disabled,
            },
            {
              "hover:text-primary-focus": !disabled,
            },
          )}
        />
      )}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={cx(
          "h-5 w-5 fill-primary",
          {
            "cursor-pointer": !disabled,
          },
          {
            "opacity-60": disabled && !isActive,
          },
          {
            "fill-primary": isActive,
          },
        )}
      >
        <path d="M18.905 12.75a1.25 1.25 0 01-2.5 0v-7.5a1.25 1.25 0 112.5 0v7.5zM8.905 17v1.3c0 .268-.14.526-.395.607A2 2 0 015.905 17c0-.995.182-1.948.514-2.826.204-.54-.166-1.174-.744-1.174h-2.52c-1.242 0-2.26-1.01-2.146-2.247.193-2.08.652-4.082 1.341-5.974C2.752 3.678 3.833 3 5.005 3h3.192a3 3 0 011.342.317l2.733 1.366A3 3 0 0013.613 5h1.292v7h-.963c-.684 0-1.258.482-1.612 1.068a4.012 4.012 0 01-2.165 1.73c-.433.143-.854.386-1.012.814-.16.432-.248.9-.248 1.388z" />
      </svg> */}
    </button>
  );
}
