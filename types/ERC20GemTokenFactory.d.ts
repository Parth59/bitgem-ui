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

interface ERC20GemTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "addController(address)": FunctionFragment;
    "allItems(uint256)": FunctionFragment;
    "allItemsLength()": FunctionFragment;
    "createItem(string,string,address,address,uint8)": FunctionFragment;
    "getItem(uint256)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "relinquishControl()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allItems",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allItemsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createItem",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "relinquishControl",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allItems", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allItemsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relinquishControl",
    data: BytesLike
  ): Result;

  events: {
    "ControllerAdded(address,address)": EventFragment;
    "ControllerRemoved(address,address)": EventFragment;
    "ERC20GemTokenCreated(address,address,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20GemTokenCreated"): EventFragment;
}

export class ERC20GemTokenFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC20GemTokenFactoryInterface;

  functions: {
    addController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allItems(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { gemPool: string }>;

    "allItems(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { gemPool: string }>;

    allItemsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allItemsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    createItem(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createItem(string,string,address,address,uint8)"(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getItem(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { gemPool: string }>;

    "getItem(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { gemPool: string }>;

    isController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { allowed: boolean }>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { allowed: boolean }>;

    relinquishControl(overrides?: CallOverrides): Promise<[void]>;

    "relinquishControl()"(overrides?: CallOverrides): Promise<[void]>;
  };

  addController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allItems(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allItems(uint256)"(
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allItemsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allItemsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  createItem(
    tokenSymbol: string,
    tokenName: string,
    poolAddress: string,
    tokenAddress: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createItem(string,string,address,address,uint8)"(
    tokenSymbol: string,
    tokenName: string,
    poolAddress: string,
    tokenAddress: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getItem(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getItem(uint256)"(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isController(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isController(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  relinquishControl(overrides?: CallOverrides): Promise<void>;

  "relinquishControl()"(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    addController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allItems(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allItems(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allItemsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allItemsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createItem(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createItem(string,string,address,address,uint8)"(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getItem(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getItem(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isController(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    relinquishControl(overrides?: CallOverrides): Promise<void>;

    "relinquishControl()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ControllerAdded(
      contractAddress: string | null,
      controllerAddress: string | null
    ): EventFilter;

    ControllerRemoved(
      contractAddress: string | null,
      controllerAddress: string | null
    ): EventFilter;

    ERC20GemTokenCreated(
      tokenAddress: null,
      poolAddress: null,
      tokenSymbol: null,
      poolSymbol: null
    ): EventFilter;
  };

  estimateGas: {
    addController(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allItems(idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allItems(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allItemsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allItemsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createItem(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createItem(string,string,address,address,uint8)"(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getItem(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getItem(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relinquishControl(overrides?: CallOverrides): Promise<BigNumber>;

    "relinquishControl()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addController(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allItems(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allItems(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allItemsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allItemsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createItem(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createItem(string,string,address,address,uint8)"(
      tokenSymbol: string,
      tokenName: string,
      poolAddress: string,
      tokenAddress: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getItem(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getItem(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relinquishControl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "relinquishControl()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
