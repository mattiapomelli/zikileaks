import {
  ArtifactStore,
  // BalancesUpdatedCallback,
  createRailgunWallet,
  loadProvider,
  loadWalletByID,
  // setOnMerkletreeScanCallback,
  startRailgunEngine,
} from "@railgun-community/quickstart";
// import { setOnBalanceUpdateCallback } from "@railgun-community/quickstart";
import { ethers } from "ethers";
import { entropyToMnemonic, randomBytes } from "ethers/lib/utils";
import LevelDB from "level-js";
import localforage from "localforage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useProvider } from "wagmi";
import { polygon } from "wagmi/chains";

import { getNetwork, networks } from "@constants/networks";

interface RailgunWallet {
  zkAddress: string;
  id: string;
}

export interface CreateWalletResponse {
  id: string;
  mnemonic: string;
  address: `0x${string}`;
  zkAddress: string;
}

interface RailgunContextValue {
  wallet: RailgunWallet | null;
  setWallet: (wallet: RailgunWallet) => void;
  createWallet: () => Promise<CreateWalletResponse | null>;
  loading: boolean;
}

const RailgunContext = createContext<RailgunContextValue | undefined>(
  undefined,
);

export const loadProviders = async () => {
  // Whether to forward debug logs from Fallback Provider.
  const shouldDebug = true;
  return Promise.all(
    Object.keys(networks).map(async (chainIdString) => {
      const chainId = Number(chainIdString);
      const { railgunNetworkName, fallbackProviders } = getNetwork(chainId);
      return {
        chainId,
        providerInfo: await loadProvider(
          fallbackProviders,
          railgunNetworkName,
          shouldDebug,
        ),
      };
    }),
  );
};

const artifactStore = new ArtifactStore(
  async (path: string) => {
    return localforage.getItem(path);
  },
  async (dir: string, path: string, item: string | Buffer) => {
    await localforage.setItem(path, item);
  },
  async (path: string) => (await localforage.getItem(path)) != null,
);

export const RailgunProvider = ({ children }: { children: ReactNode }) => {
  const provider = useProvider();

  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState<RailgunWallet | null>(null);

  useEffect(() => {
    const initialize = async () => {
      // --- Initialize Railgun Engine ---
      // Name for your wallet implementation.
      // Encrypted and viewable in private transaction history.
      // Maximum of 16 characters, lowercase.
      const walletSource = "zikileaks";

      // LevelDOWN compatible database for storing encrypted wallets.
      const db = new LevelDB("zikileaks");

      // Whether to forward Engine debug logs to Logger.
      const shouldDebug = true;

      // Persistent store for downloading large artifact files.
      // See Quickstart Developer Guide for platform implementations.
      // const artifactStore = new ArtifactStore();

      // Whether to download native C++ or web-assembly artifacts.
      // True for mobile. False for nodejs and browser.
      const useNativeArtifacts = false;

      // Whether to skip merkletree syncs and private balance scans.
      // Only set to TRUE in shield-only applications that don't
      //  load private wallets or balances.
      const skipMerkletreeScans = false;

      const response = startRailgunEngine(
        walletSource,
        db,
        shouldDebug,
        artifactStore,
        useNativeArtifacts,
        skipMerkletreeScans,
      );
      console.log("Response: ", response);

      // --- Load providers ---
      const res = await loadProviders();
      console.log("Providers res: ", res);

      // --- Get Connected Railgun Wallet ---
      const connectedRailgunWallet = localStorage.getItem("railgun-wallet");
      console.log("Connected Railgun wallet: ", connectedRailgunWallet);
      if (!connectedRailgunWallet) {
        setWallet(null);
        setLoading(false);
        return;
      }

      const { encryptionKey, id } = JSON.parse(connectedRailgunWallet);
      const railgunWallet = await loadWalletByID(encryptionKey, id, false);

      if (!railgunWallet.railgunWalletInfo?.railgunAddress) {
        return;
      }

      console.log("Heree");
      setWallet({
        id,
        zkAddress: railgunWallet.railgunWalletInfo?.railgunAddress,
      });
      setLoading(false);

      console.log("Connected Railgun wallet: ", railgunWallet);

      // const onBalanceUpdateCallback: BalancesUpdatedCallback = (event) => {
      //   console.log(">>> Balance Event: ", event);
      //   // Do something with the private token balances.
      // };

      // setOnBalanceUpdateCallback(onBalanceUpdateCallback);

      // const onMerkletreeScanCallback = (event: any) => {
      //   // Show scan progress in UI with progress bar or loading indicator.
      //   console.log(">>> Merkle TreeEvent: ", event);
      // };

      // setOnMerkletreeScanCallback(onMerkletreeScanCallback);
    };

    initialize();
  }, []);

  const createWallet = async (): Promise<CreateWalletResponse | null> => {
    const mnemonic = entropyToMnemonic(randomBytes(16));
    console.log("Mnemonic: ", mnemonic);

    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log("Wallet address: ", wallet.address);

    const block = await provider.getBlock("latest");
    console.log("Block: ", block);

    const encryptionKey = Buffer.from(randomBytes(32)).toString("hex");

    // Current block numbers for each chain when wallet was first created.
    // If unknown, provide undefined.
    const creationBlockNumberMap = {
      [polygon.name]: block.number,
    };

    const railgunWallet = await createRailgunWallet(
      encryptionKey,
      mnemonic,
      creationBlockNumberMap,
    );
    console.log("Railgun wallet: ", railgunWallet);

    if (
      railgunWallet.error ||
      !railgunWallet.railgunWalletInfo?.id ||
      !railgunWallet.railgunWalletInfo?.railgunAddress
    )
      return null;

    localStorage.setItem(
      "railgun-wallet",
      JSON.stringify({
        encryptionKey,
        id: railgunWallet.railgunWalletInfo.id,
      }),
    );

    return {
      id: railgunWallet.railgunWalletInfo.id,
      mnemonic,
      address: wallet.address as `0x${string}`,
      zkAddress: railgunWallet.railgunWalletInfo.railgunAddress,
    };
  };

  return (
    <RailgunContext.Provider
      value={{
        wallet,
        setWallet,
        createWallet,
        loading,
      }}
    >
      {children}
    </RailgunContext.Provider>
  );
};

export const useRailgun = () => {
  const context = useContext(RailgunContext);

  if (context === undefined) {
    throw new Error("useApiClient must be used within an AuthProvider");
  }

  return context;
};
