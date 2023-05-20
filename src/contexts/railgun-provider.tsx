import {
  ArtifactStore,
  createRailgunWallet,
  loadWalletByID,
  startRailgunEngine,
} from "@railgun-community/quickstart";
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

interface RailgunWallet {
  zkAddress: string;
  id: string;
}

interface RailgunContextValue {
  wallet: RailgunWallet | null;
  createWallet: () => void;
}

const RailgunContext = createContext<RailgunContextValue | undefined>(
  undefined,
);

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

  const [wallet, setWallet] = useState<RailgunWallet | null>(null);

  useEffect(() => {
    const initialize = async () => {
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

      startRailgunEngine(
        walletSource,
        db,
        shouldDebug,
        artifactStore,
        useNativeArtifacts,
        skipMerkletreeScans,
      );

      const connectedRailgunWallet = localStorage.getItem("railgun-wallet");
      if (!connectedRailgunWallet) {
        setWallet(null);
        return;
      }

      const { encryptionKey, id } = JSON.parse(connectedRailgunWallet);
      const railgunWallet = await loadWalletByID(encryptionKey, id, false);

      if (!railgunWallet.railgunWalletInfo?.railgunAddress) {
        return;
      }

      setWallet({
        id,
        zkAddress: railgunWallet.railgunWalletInfo?.railgunAddress,
      });

      console.log("Connected Railgun wallet: ", railgunWallet);
    };

    initialize();
  }, []);

  const createWallet = async () => {
    const mnemonic = entropyToMnemonic(randomBytes(16));
    console.log("Mnemonic: ", mnemonic);

    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log("Wallet: ", wallet);
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

    localStorage.setItem(
      "railgun-wallet",
      JSON.stringify({
        encryptionKey,
        id: railgunWallet.railgunWalletInfo?.id,
      }),
    );

    return {
      mnemonic,
      address: wallet.address,
      zkAddress: railgunWallet.railgunWalletInfo?.railgunAddress,
    };
  };

  return (
    <RailgunContext.Provider
      value={{
        wallet,
        createWallet,
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
