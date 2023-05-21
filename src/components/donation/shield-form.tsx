import { ethers } from "ethers";
import { useForm } from "react-hook-form";

import { Button } from "@components/basic/button";
import { Input } from "@components/basic/input";
import { Spinner } from "@components/basic/spinner";
import { ethAddress } from "@constants/common";
import { useRailgun } from "@contexts/railgun-provider";
import { useShield } from "@hooks/use-shield";

interface ShieldFormProps {
  onSuccess: () => void;
}

interface ShieldFields {
  amount: string;
}

export const ShieldForm = ({ onSuccess }: ShieldFormProps) => {
  const { loading, wallet, balance } = useRailgun();
  const { shield, isLoading } = useShield();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShieldFields>();

  const onSubmit = handleSubmit(async (data) => {
    if (!wallet) return;

    try {
      await shield({
        tokenAddress: ethAddress,
        tokenAmount: data.amount,
        tokenDecimals: 18,
        recipient: wallet.zkAddress as `0x${string}`,
      });
    } catch (e) {
      console.error(e);
    }
  });

  if (loading) {
    return (
      <div className="my-14 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!wallet) return null;

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <p className="text-center">
        Before making an anonimous donation, you need to make your tokens
        private. If you want to donate more than your current private balance,
        convert more tokens to private.
      </p>
      <p className="mt-2">
        Your Private Balance: {ethers.utils.formatEther(balance)} wMATIC
      </p>

      <h4 className="text-lg font-bold">Get more private tokens</h4>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          label="Amount"
          block
          type="number"
          step={0.0001}
          {...register("amount", { required: "Amount is required" })}
          error={errors.amount?.message}
          disabled={loading}
        />

        <Button type="submit" loading={isLoading} disabled={isLoading}>
          Shield
        </Button>
      </form>

      <h4 className="mt-4 text-lg font-bold">Process to donation</h4>
      <Button onClick={onSuccess} disabled={balance.eq(0)}>
        Next
      </Button>
    </div>
  );
};
