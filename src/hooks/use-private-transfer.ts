import {
  gasEstimateForUnprovenTransfer,
  generateTransferProof,
  populateProvedTransfer,
} from "@railgun-community/quickstart";
import {
  EVMGasType,
  // FeeTokenDetails,
  NETWORK_CONFIG,
  RailgunERC20AmountRecipient,
  TransactionGasDetailsSerialized,
  deserializeTransaction,
} from "@railgun-community/shared-models";
import { ethers } from "ethers";
import { useAccount, useMutation, useSigner } from "wagmi";

import { CHAIN } from "@constants/chains";
import { getNetwork } from "@constants/networks";
import { useRailgun } from "@contexts/railgun-provider";

interface UsePrivateTransferData {
  tokenAddress: string;
  tokenAmount: string;
  tokenDecimals: number;
  recipient: string;
}

export const usePrivateTransfer = () => {
  const { data: signer } = useSigner();
  const { wallet } = useRailgun();
  const { address } = useAccount();
  const { railgunNetworkName: network } = getNetwork(CHAIN.id);

  return useMutation(
    async ({
      tokenAddress,
      tokenAmount,
      tokenDecimals,
      recipient,
    }: UsePrivateTransferData) => {
      if (!wallet || !signer) return;

      // ----------------------- Transaction Details -----------------------
      const encryptionKey = wallet.encryptionKey;
      const memoText = "";
      const showSenderAddressToRecipient = false;
      const sendWithPublicWallet = true; // Whether to use a Relayer or self-signing wallet. true for self-signing, false for Relayer.

      // Formatted token amounts to transfer.
      const erc20AmountRecipients: RailgunERC20AmountRecipient[] = [
        {
          tokenAddress,
          amountString: ethers.utils
            .parseUnits(tokenAmount, tokenDecimals)
            .toHexString(), // must be hex
          recipientAddress: recipient,
        },
      ];

      // Minimum gas price, only required for relayed transaction.
      // const overallBatchMinGasPrice = "0x10000";

      // Token fee to pay Relayer.
      // const relayerFeeERC20Recipient: RailgunERC20AmountRecipient = {
      //   tokenAddress: "...",
      //   amountString: "0x10000000",
      //   recipientAddress: selectedRelayer.railgunAddress,
      // };

      const progressCallback = (progress: number) => {
        console.log("Progress: ", progress);
        // Handle proof progress (show in UI).
        // Proofs can take 20-30 seconds on slower devices.
      };

      console.log("Here");

      // Proof generated successfully.

      // ----------------------- Get Gas Estimate -----------------------
      const {
        maxFeePerGas: originalMaxFeePerGas,
        maxPriorityFeePerGas: originalMaxPriorityFeePerGas,
      } = await signer.getFeeData();
      if (!originalMaxFeePerGas || !originalMaxPriorityFeePerGas) {
        throw new Error("No gas prices");
      }

      const originalGasDetailsSerialized: TransactionGasDetailsSerialized = {
        evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
        gasEstimateString: "0x00", // Always 0, we don't have this yet.
        maxFeePerGasString: originalMaxFeePerGas.toHexString(), // Current gas Max Fee
        maxPriorityFeePerGasString: originalMaxPriorityFeePerGas.toHexString(), // Current gas Max Priority Fee
      };

      console.log("Original Gas Details: ", originalGasDetailsSerialized);

      // Gas price, used to calculate Relayer Fee iteratively.
      // const originalGasDetailsSerialized: TransactionGasDetailsSerialized = {
      //   evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
      //   gasEstimateString: "0x00", // Always 0, we don't have this yet.
      //   maxFeePerGasString: "0x100000", // Current gas Max Fee
      //   maxPriorityFeePerGasString: "0x010000", // Current gas Max Priority Fee
      // };

      // Token Fee for selected Relayer.
      // const feeTokenDetails: FeeTokenDetails = {
      //   tokenAddress: selectedTokenFeeAddress,
      //   feePerUnitGas: selectedRelayer.feePerUnitGas,
      // };

      // Whether to use a Relayer or self-signing wallet.
      // true for self-signing, false for Relayer.

      const { gasEstimateString, error } = await gasEstimateForUnprovenTransfer(
        network,
        wallet.id,
        encryptionKey,
        memoText,
        erc20AmountRecipients,
        [], // nftAmountRecipients
        originalGasDetailsSerialized,
        undefined,
        sendWithPublicWallet,
      );
      if (error) {
        // Handle gas estimate error.
        throw error;
      }

      // const gasEstimate = BigNumber.from(gasEstimateString);

      // ----------------------- Generate Proof -----------------------
      const { error: proofError } = await generateTransferProof(
        network,
        wallet.id,
        encryptionKey,
        showSenderAddressToRecipient,
        memoText,
        erc20AmountRecipients,
        [], // nftAmountRecipients
        undefined,
        sendWithPublicWallet,
        undefined,
        progressCallback,
      );
      if (proofError) {
        throw proofError;
      }

      // ----------------------- Get Gas Prices -----------------------
      const { maxFeePerGas, maxPriorityFeePerGas: maxPriorityFeePerGas } =
        await signer.getFeeData();
      if (!maxFeePerGas || !maxPriorityFeePerGas || !gasEstimateString) {
        throw new Error("No gas prices");
      }

      const gasDetailsSerialized: TransactionGasDetailsSerialized = {
        evmGasType: EVMGasType.Type2, // Depends on the chain (BNB uses type 0)
        gasEstimateString, // Output from gasEstimateForDeposit
        maxFeePerGasString: maxFeePerGas.toHexString(), // Current gas Max Fee
        maxPriorityFeePerGasString: maxPriorityFeePerGas.toHexString(), // Current gas Max Priority Fee
      };

      // ----------------------- Populate Transaction -----------------------
      const { serializedTransaction, error: transferError } =
        await populateProvedTransfer(
          network,
          wallet.id,
          showSenderAddressToRecipient,
          memoText,
          erc20AmountRecipients,
          [], // nftAmountRecipients
          undefined,
          sendWithPublicWallet,
          undefined,
          gasDetailsSerialized,
        );
      if (transferError) {
        throw transferError;
      }

      // ----------------------- Send Transaction -----------------------
      const nonce = await signer.getTransactionCount("latest");
      console.log("Nonce: ", nonce);

      const { chain } = NETWORK_CONFIG[network];
      const transactionRequest: ethers.providers.TransactionRequest =
        deserializeTransaction(
          serializedTransaction!,
          undefined, // nonce (optional)
          chain.id,
        );

      // Public wallet to shield from.
      transactionRequest.from = address;

      console.log("Transaction Request: ", transactionRequest);

      const tx = await signer.sendTransaction(transactionRequest);
      const receipt = tx.wait();

      return receipt;
    },
  );
};
