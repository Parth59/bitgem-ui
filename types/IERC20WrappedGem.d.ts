/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IERC20WrappedGemInterface extends ethers.utils.Interface {
  functions: {
    "getReserves()": FunctionFragment;
    "getTokenAddress()": FunctionFragment;
    "getTokenId()": FunctionFragment;
    "initialize(string,string,address,address,uint8,address)": FunctionFragment;
    "unwrap(uint256)": FunctionFragment;
    "wrap(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "wrap", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;

  events: {
    "Unwrap(address,uint256)": EventFragment;
    "Wrap(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Unwrap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Wrap"): EventFragment;
}

export class IERC20WrappedGem extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC20WrappedGemInterface;

  functions: {
    getReserves(overrides?: Overrides): Promise<ContractTransaction>;

    "getReserves()"(overrides?: Overrides): Promise<ContractTransaction>;

    getTokenAddress(overrides?: Overrides): Promise<ContractTransaction>;

    "getTokenAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

    getTokenId(overrides?: Overrides): Promise<ContractTransaction>;

    "getTokenId()"(overrides?: Overrides): Promise<ContractTransaction>;

    initialize(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(string,string,address,address,uint8,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unwrap(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unwrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    wrap(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "wrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getReserves(overrides?: Overrides): Promise<ContractTransaction>;

  "getReserves()"(overrides?: Overrides): Promise<ContractTransaction>;

  getTokenAddress(overrides?: Overrides): Promise<ContractTransaction>;

  "getTokenAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

  getTokenId(overrides?: Overrides): Promise<ContractTransaction>;

  "getTokenId()"(overrides?: Overrides): Promise<ContractTransaction>;

  initialize(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    arg5: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(string,string,address,address,uint8,address)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    arg5: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unwrap(
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unwrap(uint256)"(
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  wrap(
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "wrap(uint256)"(
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserves()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAddress(overrides?: CallOverrides): Promise<string>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    getTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(string,string,address,address,uint8,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrap(quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "unwrap(uint256)"(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wrap(quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "wrap(uint256)"(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Unwrap(account: string | null, quantity: null): EventFilter;

    Wrap(account: string | null, quantity: null): EventFilter;
  };

  estimateGas: {
    getReserves(overrides?: Overrides): Promise<BigNumber>;

    "getReserves()"(overrides?: Overrides): Promise<BigNumber>;

    getTokenAddress(overrides?: Overrides): Promise<BigNumber>;

    "getTokenAddress()"(overrides?: Overrides): Promise<BigNumber>;

    getTokenId(overrides?: Overrides): Promise<BigNumber>;

    "getTokenId()"(overrides?: Overrides): Promise<BigNumber>;

    initialize(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(string,string,address,address,uint8,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unwrap(quantity: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "unwrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    wrap(quantity: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "wrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReserves(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getReserves()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getTokenAddress(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getTokenAddress()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getTokenId(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getTokenId()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    initialize(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(string,string,address,address,uint8,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unwrap(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unwrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    wrap(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "wrap(uint256)"(
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
