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

interface INFTGemMultiTokenInterface extends ethers.utils.Interface {
  functions: {
    "addProxyRegistry(address)": FunctionFragment;
    "allHeldTokens(address,uint256)": FunctionFragment;
    "allHeldTokensLength(address)": FunctionFragment;
    "allProxyRegistries(uint256)": FunctionFragment;
    "allProxyRegistriesLength()": FunctionFragment;
    "allTokenHolders(uint256,uint256)": FunctionFragment;
    "allTokenHoldersLength(uint256)": FunctionFragment;
    "burn(address,uint256,uint256)": FunctionFragment;
    "burnBatch(address,uint256[],uint256[])": FunctionFragment;
    "getRegistryManager()": FunctionFragment;
    "getTokenData(uint256)": FunctionFragment;
    "heldTokens(address)": FunctionFragment;
    "lock(uint256,uint256)": FunctionFragment;
    "mint(address,uint256,uint256)": FunctionFragment;
    "mintBatch(address,uint256[],uint256[])": FunctionFragment;
    "removeProxyRegistryAt(uint256)": FunctionFragment;
    "setRegistryManager(address)": FunctionFragment;
    "setTokenData(uint256,uint8,address)": FunctionFragment;
    "tokenHolders(uint256)": FunctionFragment;
    "totalBalances(uint256)": FunctionFragment;
    "unlockTime(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addProxyRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allHeldTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allHeldTokensLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allProxyRegistries",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allProxyRegistriesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allTokenHolders",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allTokenHoldersLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [string, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegistryManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "heldTokens", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBatch",
    values: [string, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeProxyRegistryAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegistryManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenData",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenHolders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBalances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTime",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addProxyRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allHeldTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allHeldTokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allProxyRegistries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allProxyRegistriesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allTokenHolders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allTokenHoldersLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRegistryManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "heldTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeProxyRegistryAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistryManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenHolders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;

  events: {};
}

export class INFTGemMultiToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INFTGemMultiTokenInterface;

  functions: {
    addProxyRegistry(
      registry: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addProxyRegistry(address)"(
      registry: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allHeldTokens(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allHeldTokens(address,uint256)"(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allHeldTokensLength(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allHeldTokensLength(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allProxyRegistries(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allProxyRegistries(uint256)"(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allProxyRegistriesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allProxyRegistriesLength()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allTokenHolders(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allTokenHolders(uint256,uint256)"(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allTokenHoldersLength(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allTokenHoldersLength(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    burnBatch(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burnBatch(address,uint256[],uint256[])"(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRegistryManager(overrides?: CallOverrides): Promise<[string]>;

    "getRegistryManager()"(overrides?: CallOverrides): Promise<[string]>;

    getTokenData(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    "getTokenData(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    heldTokens(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "heldTokens(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    lock(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(uint256,uint256)"(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mintBatch(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintBatch(address,uint256[],uint256[])"(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeProxyRegistryAt(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeProxyRegistryAt(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRegistryManager(
      newManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRegistryManager(address)"(
      newManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTokenData(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTokenData(uint256,uint8,address)"(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenHolders(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "tokenHolders(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    totalBalances(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalBalances(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unlockTime(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "unlockTime(address,uint256)"(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addProxyRegistry(
    registry: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addProxyRegistry(address)"(
    registry: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allHeldTokens(
    holder: string,
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allHeldTokens(address,uint256)"(
    holder: string,
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allHeldTokensLength(
    holder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allHeldTokensLength(address)"(
    holder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allProxyRegistries(
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "allProxyRegistries(uint256)"(
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allProxyRegistriesLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allProxyRegistriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  allTokenHolders(
    _token: BigNumberish,
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "allTokenHolders(uint256,uint256)"(
    _token: BigNumberish,
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allTokenHoldersLength(
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allTokenHoldersLength(uint256)"(
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    account: string,
    tokenHash: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256,uint256)"(
    account: string,
    tokenHash: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  burnBatch(
    account: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burnBatch(address,uint256[],uint256[])"(
    account: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRegistryManager(overrides?: CallOverrides): Promise<string>;

  "getRegistryManager()"(overrides?: CallOverrides): Promise<string>;

  getTokenData(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, string]>;

  "getTokenData(uint256)"(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, string]>;

  heldTokens(holder: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  "heldTokens(address)"(
    holder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  lock(
    token: BigNumberish,
    timeframe: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(uint256,uint256)"(
    token: BigNumberish,
    timeframe: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    account: string,
    tokenHash: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256,uint256)"(
    account: string,
    tokenHash: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mintBatch(
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintBatch(address,uint256[],uint256[])"(
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeProxyRegistryAt(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeProxyRegistryAt(uint256)"(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRegistryManager(
    newManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRegistryManager(address)"(
    newManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTokenData(
    tokenHash: BigNumberish,
    tokenType: BigNumberish,
    tokenPool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTokenData(uint256,uint8,address)"(
    tokenHash: BigNumberish,
    tokenType: BigNumberish,
    tokenPool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenHolders(
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "tokenHolders(uint256)"(
    _token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  totalBalances(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalBalances(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unlockTime(
    account: string,
    token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "unlockTime(address,uint256)"(
    account: string,
    token: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addProxyRegistry(
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addProxyRegistry(address)"(
      registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allHeldTokens(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allHeldTokens(address,uint256)"(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allHeldTokensLength(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allHeldTokensLength(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allProxyRegistries(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "allProxyRegistries(uint256)"(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allProxyRegistriesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allProxyRegistriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    allTokenHolders(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "allTokenHolders(uint256,uint256)"(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allTokenHoldersLength(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allTokenHoldersLength(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnBatch(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "burnBatch(address,uint256[],uint256[])"(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getRegistryManager(overrides?: CallOverrides): Promise<string>;

    "getRegistryManager()"(overrides?: CallOverrides): Promise<string>;

    getTokenData(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    "getTokenData(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, string]>;

    heldTokens(holder: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    "heldTokens(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    lock(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(uint256,uint256)"(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintBatch(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "mintBatch(address,uint256[],uint256[])"(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeProxyRegistryAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeProxyRegistryAt(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistryManager(
      newManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRegistryManager(address)"(
      newManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenData(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTokenData(uint256,uint8,address)"(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenHolders(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "tokenHolders(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    totalBalances(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalBalances(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockTime(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unlockTime(address,uint256)"(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addProxyRegistry(
      registry: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addProxyRegistry(address)"(
      registry: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allHeldTokens(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allHeldTokens(address,uint256)"(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allHeldTokensLength(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allHeldTokensLength(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allProxyRegistries(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allProxyRegistries(uint256)"(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allProxyRegistriesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allProxyRegistriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    allTokenHolders(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allTokenHolders(uint256,uint256)"(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allTokenHoldersLength(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allTokenHoldersLength(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    burnBatch(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burnBatch(address,uint256[],uint256[])"(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRegistryManager(overrides?: CallOverrides): Promise<BigNumber>;

    "getRegistryManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenData(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenData(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    heldTokens(holder: string, overrides?: CallOverrides): Promise<BigNumber>;

    "heldTokens(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lock(uint256,uint256)"(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mintBatch(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintBatch(address,uint256[],uint256[])"(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeProxyRegistryAt(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeProxyRegistryAt(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRegistryManager(
      newManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRegistryManager(address)"(
      newManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTokenData(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTokenData(uint256,uint8,address)"(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenHolders(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenHolders(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBalances(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalBalances(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockTime(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unlockTime(address,uint256)"(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProxyRegistry(
      registry: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addProxyRegistry(address)"(
      registry: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allHeldTokens(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allHeldTokens(address,uint256)"(
      holder: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allHeldTokensLength(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allHeldTokensLength(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allProxyRegistries(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allProxyRegistries(uint256)"(
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allProxyRegistriesLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allProxyRegistriesLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokenHolders(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allTokenHolders(uint256,uint256)"(
      _token: BigNumberish,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokenHoldersLength(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allTokenHoldersLength(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    burnBatch(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burnBatch(address,uint256[],uint256[])"(
      account: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRegistryManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRegistryManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenData(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenData(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    heldTokens(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "heldTokens(address)"(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(uint256,uint256)"(
      token: BigNumberish,
      timeframe: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256,uint256)"(
      account: string,
      tokenHash: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mintBatch(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintBatch(address,uint256[],uint256[])"(
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeProxyRegistryAt(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeProxyRegistryAt(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRegistryManager(
      newManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRegistryManager(address)"(
      newManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTokenData(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTokenData(uint256,uint8,address)"(
      tokenHash: BigNumberish,
      tokenType: BigNumberish,
      tokenPool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenHolders(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenHolders(uint256)"(
      _token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBalances(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalBalances(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockTime(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unlockTime(address,uint256)"(
      account: string,
      token: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
