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

interface WrapAndUnigem1155Interface extends ethers.utils.Interface {
  functions: {
    "erc1155()": FunctionFragment;
    "erc20()": FunctionFragment;
    "exchange()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "tokenWrapper()": FunctionFragment;
    "wrapAndSwap(uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "erc1155", values?: undefined): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "exchange", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrapAndSwap",
    values: [BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "erc1155", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapAndSwap",
    data: BytesLike
  ): Result;

  events: {};
}

export class WrapAndUnigem1155 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WrapAndUnigem1155Interface;

  functions: {
    erc1155(overrides?: CallOverrides): Promise<[string]>;

    "erc1155()"(overrides?: CallOverrides): Promise<[string]>;

    erc20(overrides?: CallOverrides): Promise<[string]>;

    "erc20()"(overrides?: CallOverrides): Promise<[string]>;

    exchange(overrides?: CallOverrides): Promise<[string]>;

    "exchange()"(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenWrapper(overrides?: CallOverrides): Promise<[string]>;

    "tokenWrapper()"(overrides?: CallOverrides): Promise<[string]>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "wrapAndSwap(uint256,address,bytes)"(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  erc1155(overrides?: CallOverrides): Promise<string>;

  "erc1155()"(overrides?: CallOverrides): Promise<string>;

  erc20(overrides?: CallOverrides): Promise<string>;

  "erc20()"(overrides?: CallOverrides): Promise<string>;

  exchange(overrides?: CallOverrides): Promise<string>;

  "exchange()"(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _unigemOrder: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _unigemOrder: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenWrapper(overrides?: CallOverrides): Promise<string>;

  "tokenWrapper()"(overrides?: CallOverrides): Promise<string>;

  wrapAndSwap(
    _maxAmount: BigNumberish,
    _recipient: string,
    _unigemOrder: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "wrapAndSwap(uint256,address,bytes)"(
    _maxAmount: BigNumberish,
    _recipient: string,
    _unigemOrder: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    erc1155(overrides?: CallOverrides): Promise<string>;

    "erc1155()"(overrides?: CallOverrides): Promise<string>;

    erc20(overrides?: CallOverrides): Promise<string>;

    "erc20()"(overrides?: CallOverrides): Promise<string>;

    exchange(overrides?: CallOverrides): Promise<string>;

    "exchange()"(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenWrapper(overrides?: CallOverrides): Promise<string>;

    "tokenWrapper()"(overrides?: CallOverrides): Promise<string>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "wrapAndSwap(uint256,address,bytes)"(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    erc1155(overrides?: CallOverrides): Promise<BigNumber>;

    "erc1155()"(overrides?: CallOverrides): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    "erc20()"(overrides?: CallOverrides): Promise<BigNumber>;

    exchange(overrides?: CallOverrides): Promise<BigNumber>;

    "exchange()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenWrapper(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenWrapper()"(overrides?: CallOverrides): Promise<BigNumber>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "wrapAndSwap(uint256,address,bytes)"(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    erc1155(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc1155()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc20()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "exchange()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenWrapper()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "wrapAndSwap(uint256,address,bytes)"(
      _maxAmount: BigNumberish,
      _recipient: string,
      _unigemOrder: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
