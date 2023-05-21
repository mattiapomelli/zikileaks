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

export const ShieldForm = ({}: ShieldFormProps) => {
  const { loading, wallet } = useRailgun();
  const { shield, isLoading } = useShield();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
      reset();
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
    </div>
  );
};
