import { useForm } from "react-hook-form";

import { Button } from "@components/basic/button";
import { Input } from "@components/basic/input";
import { Spinner } from "@components/basic/spinner";
import { WMATIC_ADDRESS } from "@constants/addresses";
import { CHAIN } from "@constants/chains";
import { useRailgun } from "@contexts/railgun-provider";
import { usePrivateTransfer } from "@hooks/use-private-transfer";

interface TransferFields {
  amount: string;
}

interface TransferProps {
  onSuccess: () => void;
  zkAddress: string;
}

export const TransferForm = ({ onSuccess, zkAddress }: TransferProps) => {
  const { loading, wallet, balance } = useRailgun();
  const { mutate: transfer, isLoading } = usePrivateTransfer({
    onSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferFields>();

  const onSubmit = handleSubmit(async (data) => {
    if (!wallet) return;

    try {
      transfer({
        tokenAddress: WMATIC_ADDRESS[CHAIN.id],
        tokenAmount: data.amount,
        tokenDecimals: 18,
        recipient: zkAddress,
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
      <h4 className="text-lg font-bold">Donate</h4>
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

        <Button
          type="submit"
          loading={isLoading}
          disabled={isLoading || balance.eq(0)}
        >
          Donate
        </Button>
      </form>
    </div>
  );
};
