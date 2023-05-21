import { useContract, useProvider, useSigner } from "wagmi";

import { ZikiLeaks } from "@abis/types/zikileaks";
import { ZikiLeaksAbi } from "@abis/zikileaks";
import { ZIKILEAKS_ADDRESS } from "@constants/addresses";
import { CHAIN } from "@constants/chains";

export const useZikiLeaks = (withSigner = false) => {
  const provider = useProvider();
  const { data: signer } = useSigner();

  return useContract({
    address: ZIKILEAKS_ADDRESS[CHAIN.id],
    abi: ZikiLeaksAbi,
    signerOrProvider: withSigner ? signer : provider,
  }) as ZikiLeaks | null;
};
