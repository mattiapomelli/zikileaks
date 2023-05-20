import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export function CustomLink({
  href,
  className,
  target,
  rel,
  children,
}: LinkProps) {
  return (
    <Link href={href} className={className} target={target} rel={rel}>
      {children}
    </Link>
  );
}
