/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ZikiLeaksInterface extends utils.Interface {
  functions: {
    "downvotePublication(string)": FunctionFragment;
    "downvotes(string)": FunctionFragment;
    "hasDownvoted(address,string)": FunctionFragment;
    "hasUpvoted(address,string)": FunctionFragment;
    "upvotePublication(string)": FunctionFragment;
    "upvotes(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "downvotePublication"
      | "downvotes"
      | "hasDownvoted"
      | "hasUpvoted"
      | "upvotePublication"
      | "upvotes",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "downvotePublication",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "downvotes",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "hasDownvoted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "hasUpvoted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "upvotePublication",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "upvotes",
    values: [PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(
    functionFragment: "downvotePublication",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "downvotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasDownvoted",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "hasUpvoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upvotePublication",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "upvotes", data: BytesLike): Result;

  events: {
    "PublicationDownvoted(string,address)": EventFragment;
    "PublicationUpvoted(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PublicationDownvoted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicationUpvoted"): EventFragment;
}

export interface PublicationDownvotedEventObject {
  publicationId: string;
  voter: string;
}
export type PublicationDownvotedEvent = TypedEvent<
  [string, string],
  PublicationDownvotedEventObject
>;

export type PublicationDownvotedEventFilter =
  TypedEventFilter<PublicationDownvotedEvent>;

export interface PublicationUpvotedEventObject {
  publicationId: string;
  voter: string;
}
export type PublicationUpvotedEvent = TypedEvent<
  [string, string],
  PublicationUpvotedEventObject
>;

export type PublicationUpvotedEventFilter =
  TypedEventFilter<PublicationUpvotedEvent>;

export interface ZikiLeaks extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZikiLeaksInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    downvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    downvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    hasDownvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    hasUpvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    upvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
  };

  downvotePublication(
    _publicationId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  downvotes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  hasDownvoted(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  hasUpvoted(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  upvotePublication(
    _publicationId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upvotes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  callStatic: {
    downvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    downvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    hasDownvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    hasUpvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    upvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    upvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {
    "PublicationDownvoted(string,address)"(
      publicationId?: PromiseOrValue<string> | null,
      voter?: null,
    ): PublicationDownvotedEventFilter;
    PublicationDownvoted(
      publicationId?: PromiseOrValue<string> | null,
      voter?: null,
    ): PublicationDownvotedEventFilter;

    "PublicationUpvoted(string,address)"(
      publicationId?: PromiseOrValue<string> | null,
      voter?: null,
    ): PublicationUpvotedEventFilter;
    PublicationUpvoted(
      publicationId?: PromiseOrValue<string> | null,
      voter?: null,
    ): PublicationUpvotedEventFilter;
  };

  estimateGas: {
    downvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    downvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    hasDownvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    hasUpvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    upvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    downvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    downvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    hasDownvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    hasUpvoted(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    upvotePublication(
      _publicationId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upvotes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
