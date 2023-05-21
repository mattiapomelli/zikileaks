import { ethers } from "ethers";

import { useRailgun } from "@contexts/railgun-provider";

import { ShieldForm } from "./shield-form";
import { TransferForm } from "./transfer-form";

interface DonateFormProps {
  onSuccess: () => void;
  zkAddress: string;
}

export const DonateForm = ({ onSuccess, zkAddress }: DonateFormProps) => {
  const { balance } = useRailgun();

  return (
    <div>
      <h1 className="text-2xl font-bold">Donate</h1>
      <p>
        In order to donate anonimously, you need to first shield your tokens
        (make them private). If then amount that you want to donate is more than
        your current private balance, please shield more tokens first.
      </p>
      <p className="mt-4">
        <b>Your Private Balance: </b>
        {ethers.utils.formatEther(balance)} wMATIC
      </p>
      <ShieldForm onSuccess={onSuccess} />
      <TransferForm zkAddress={zkAddress} onSuccess={onSuccess} />
    </div>
  );
};
