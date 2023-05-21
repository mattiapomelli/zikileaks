import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { LensProvider } from "@lens-protocol/react-web";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { DefaultSeo } from "next-seo";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CHAIN } from "@constants/chains";
import { RailgunProvider } from "@contexts/railgun-provider";
import { DefaultLayout } from "@layouts/default-layout";
import { lensConfig } from "@utils/lens-provider";
import { env } from "env.mjs";

import SEO from "../../next-seo.config";

import type { ExtendedPage } from "@types";
import type { AppProps } from "next/app";

const { chains, provider } = configureChains(
  [CHAIN],
  [
    alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Web3 Boilerplate",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  persister: null,
});

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as ExtendedPage).getLayout ||
    ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <RailgunProvider>
          <LensProvider config={lensConfig}>
            <DefaultSeo {...SEO} />
            {getLayout(<Component {...pageProps} />)}
          </LensProvider>
        </RailgunProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
