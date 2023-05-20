import cx from "classnames";
import { twMerge } from "tailwind-merge";

interface AddressProps {
  address: `0x${string}`;
  className?: string;
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const Address = ({ address, className }: AddressProps) => {
  return (
    <span className={twMerge(cx("font-medium", className))}>
      {formatAddress(address)}
    </span>
  );
};
