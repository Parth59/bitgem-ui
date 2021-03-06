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

interface INFTGemPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "addCustomNFTGemPool(address,string,string)": FunctionFragment;
    "allNFTGemPools(uint256)": FunctionFragment;
    "allNFTGemPoolsLength()": FunctionFragment;
    "createCustomNFTGemPool(bytes,string,string)": FunctionFragment;
    "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "getNFTGemPool(uint256)": FunctionFragment;
    "nftGemPools()": FunctionFragment;
    "removeGemPool(uint256)": FunctionFragment;
    "removeGemPoolAt(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCustomNFTGemPool",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allNFTGemPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allNFTGemPoolsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCustomNFTGemPool",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createNFTGemPool",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTGemPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nftGemPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeGemPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGemPoolAt",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCustomNFTGemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allNFTGemPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allNFTGemPoolsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCustomNFTGemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNFTGemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTGemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftGemPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGemPoolAt",
    data: BytesLike
  ): Result;

  events: {
    "CustomNFTGemPoolCreated(address,string,string)": EventFragment;
    "NFTGemPoolCreated(address,string,string,uint256,uint256,uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CustomNFTGemPoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTGemPoolCreated"): EventFragment;
}

export class INFTGemPoolFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INFTGemPoolFactoryInterface;

  functions: {
    addCustomNFTGemPool(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addCustomNFTGemPool(address,string,string)"(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allNFTGemPools(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allNFTGemPools(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allNFTGemPoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allNFTGemPoolsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    createCustomNFTGemPool(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createCustomNFTGemPool(bytes,string,string)"(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createNFTGemPool(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getNFTGemPool(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getNFTGemPool(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    nftGemPools(overrides?: CallOverrides): Promise<[string[]]>;

    "nftGemPools()"(overrides?: CallOverrides): Promise<[string[]]>;

    removeGemPool(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeGemPool(uint256)"(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeGemPoolAt(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeGemPoolAt(uint256)"(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addCustomNFTGemPool(
    poolAddress: string,
    gemSymbol: string,
    gemName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addCustomNFTGemPool(address,string,string)"(
    poolAddress: string,
    gemSymbol: string,
    gemName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allNFTGemPools(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allNFTGemPools(uint256)"(
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allNFTGemPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allNFTGemPoolsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  createCustomNFTGemPool(
    bytecode: BytesLike,
    gemSymbol: string,
    gemName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createCustomNFTGemPool(bytes,string,string)"(
    bytecode: BytesLike,
    gemSymbol: string,
    gemName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createNFTGemPool(
    gemSymbol: string,
    gemName: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxMint: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
    gemSymbol: string,
    gemName: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxMint: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getNFTGemPool(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getNFTGemPool(uint256)"(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  nftGemPools(overrides?: CallOverrides): Promise<string[]>;

  "nftGemPools()"(overrides?: CallOverrides): Promise<string[]>;

  removeGemPool(
    poolHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeGemPool(uint256)"(
    poolHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeGemPoolAt(
    ndx: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeGemPoolAt(uint256)"(
    ndx: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addCustomNFTGemPool(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "addCustomNFTGemPool(address,string,string)"(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    allNFTGemPools(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "allNFTGemPools(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allNFTGemPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allNFTGemPoolsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createCustomNFTGemPool(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createCustomNFTGemPool(bytes,string,string)"(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createNFTGemPool(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getNFTGemPool(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getNFTGemPool(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    nftGemPools(overrides?: CallOverrides): Promise<string[]>;

    "nftGemPools()"(overrides?: CallOverrides): Promise<string[]>;

    removeGemPool(
      poolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeGemPool(uint256)"(
      poolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeGemPoolAt(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeGemPoolAt(uint256)"(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CustomNFTGemPoolCreated(
      gemPoolAdress: string | null,
      gemSymbol: null,
      gemName: null
    ): EventFilter;

    NFTGemPoolCreated(
      gemPoolAddress: string | null,
      gemSymbol: null,
      gemName: null,
      ethPrice: null,
      minTime: null,
      maxTime: null,
      diffstep: null,
      maxMint: null,
      allowedToken: null
    ): EventFilter;
  };

  estimateGas: {
    addCustomNFTGemPool(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addCustomNFTGemPool(address,string,string)"(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allNFTGemPools(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allNFTGemPools(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allNFTGemPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allNFTGemPoolsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createCustomNFTGemPool(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createCustomNFTGemPool(bytes,string,string)"(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createNFTGemPool(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getNFTGemPool(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNFTGemPool(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftGemPools(overrides?: CallOverrides): Promise<BigNumber>;

    "nftGemPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeGemPool(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeGemPool(uint256)"(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeGemPoolAt(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeGemPoolAt(uint256)"(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCustomNFTGemPool(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addCustomNFTGemPool(address,string,string)"(
      poolAddress: string,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allNFTGemPools(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allNFTGemPools(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allNFTGemPoolsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allNFTGemPoolsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCustomNFTGemPool(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createCustomNFTGemPool(bytes,string,string)"(
      bytecode: BytesLike,
      gemSymbol: string,
      gemName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createNFTGemPool(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createNFTGemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      gemSymbol: string,
      gemName: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxMint: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getNFTGemPool(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNFTGemPool(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftGemPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nftGemPools()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeGemPool(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeGemPool(uint256)"(
      poolHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeGemPoolAt(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeGemPoolAt(uint256)"(
      ndx: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
