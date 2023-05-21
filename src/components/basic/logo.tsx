import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/" }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        className={"block"}
        src={"/ziki_sml.svg"}
        width={200}
        height={100}
        alt={"logo"}
      />
    </Link>
  );
};
