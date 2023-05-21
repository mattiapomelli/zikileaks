import { Transition } from "@headlessui/react";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

import { Logo } from "@components/basic/logo";
// import { ThemeToggle } from "@components/basic/theme-toggle";
// import { LensLogin } from "@components/lens-login";
import { WalletStatus } from "@components/wallet/wallet-status";
import { useTransitionControl } from "@hooks/use-transition-control";

import { Container } from "./container";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cx("rounded-btn py-2 px-4 font-medium hover:bg-base-200", {
        "bg-base-200": router.pathname.startsWith(href),
      })}
    >
      {text}
    </Link>
  );
};

export const Navbar = () => {
  const { isConnecting, isReconnecting } = useAccount();

  const [show] = useTransitionControl(isReconnecting || isConnecting);

  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <Transition
          show={show}
          enter="transition-opacity duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <NavItem text="Feed" href="/feed" />
              <NavItem text="Create publication" href="/verification" />
            </div>
            {/* <ThemeToggle /> */}
            <WalletStatus />
            {/* <LensLogin /> */}
          </div>
        </Transition>
      </Container>
    </header>
  );
};
