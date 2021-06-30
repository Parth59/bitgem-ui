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

interface INFTGemPoolDataInterface extends ethers.utils.Interface {
  functions: {
    "addAllowedToken(address)": FunctionFragment;
    "allTokenHashes(uint256)": FunctionFragment;
    "allTokenHashesLength()": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "allowedTokensLength()": FunctionFragment;
    "claimAmount(uint256)": FunctionFragment;
    "claimQuantity(uint256)": FunctionFragment;
    "claimTokenAmount(uint256)": FunctionFragment;
    "claimUnlockTime(uint256)": FunctionFragment;
    "claimedCount()": FunctionFragment;
    "difficultyStep()": FunctionFragment;
    "ethPrice()": FunctionFragment;
    "isTokenAllowed(address)": FunctionFragment;
    "maxClaims()": FunctionFragment;
    "maxTime()": FunctionFragment;
    "minTime()": FunctionFragment;
    "mintedCount()": FunctionFragment;
    "name()": FunctionFragment;
    "nextClaimHash()": FunctionFragment;
    "nextClaimId()": FunctionFragment;
    "nextGemHash()": FunctionFragment;
    "nextGemId()": FunctionFragment;
    "removeAllowedToken(address)": FunctionFragment;
    "stakedToken(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenId(uint256)": FunctionFragment;
    "tokenType(uint256)": FunctionFragment;
    "totalStakedEth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAllowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allTokenHashes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allTokenHashesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokensLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimQuantity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTokenAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimUnlockTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimedCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "difficultyStep",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ethPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isTokenAllowed",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "maxClaims", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "minTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintedCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextClaimHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextClaimId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextGemHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nextGemId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAllowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedEth",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allTokenHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allTokenHashesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimUnlockTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "difficultyStep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ethPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxClaims", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextClaimHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextClaimId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextGemHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextGemId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedEth",
    data: BytesLike
  ): Result;

  events: {};
}

export class INFTGemPoolData extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INFTGemPoolDataInterface;

  functions: {
    addAllowedToken(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allTokenHashes(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allTokenHashes(uint256)"(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allTokenHashesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allTokenHashesLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedTokens(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allowedTokens(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedTokensLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allowedTokensLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimQuantity(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimQuantity(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimTokenAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimTokenAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimUnlockTime(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimUnlockTime(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "claimedCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    difficultyStep(overrides?: CallOverrides): Promise<[BigNumber]>;

    "difficultyStep()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ethPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ethPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxClaims(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxClaims()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mintedCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    nextClaimHash(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextClaimHash()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextClaimId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextClaimId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextGemHash(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextGemHash()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextGemId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextGemId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeAllowedToken(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakedToken(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "stakedToken(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    tokenId(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenId(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenType(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "tokenType(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    totalStakedEth(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalStakedEth()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addAllowedToken(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAllowedToken(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allTokenHashes(
    ndx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allTokenHashes(uint256)"(
    ndx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allTokenHashesLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allTokenHashesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  allowedTokens(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allowedTokens(uint256)"(
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allowedTokensLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  claimAmount(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimAmount(uint256)"(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimQuantity(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimQuantity(uint256)"(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimTokenAmount(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimTokenAmount(uint256)"(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimUnlockTime(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimUnlockTime(uint256)"(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimedCount(overrides?: CallOverrides): Promise<BigNumber>;

  "claimedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  difficultyStep(overrides?: CallOverrides): Promise<BigNumber>;

  "difficultyStep()"(overrides?: CallOverrides): Promise<BigNumber>;

  ethPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "ethPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

  "isTokenAllowed(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxClaims(overrides?: CallOverrides): Promise<BigNumber>;

  "maxClaims()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxTime(overrides?: CallOverrides): Promise<BigNumber>;

  "maxTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  minTime(overrides?: CallOverrides): Promise<BigNumber>;

  "minTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintedCount(overrides?: CallOverrides): Promise<BigNumber>;

  "mintedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  nextClaimHash(overrides?: CallOverrides): Promise<BigNumber>;

  "nextClaimHash()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextClaimId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextClaimId()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextGemHash(overrides?: CallOverrides): Promise<BigNumber>;

  "nextGemHash()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextGemId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextGemId()"(overrides?: CallOverrides): Promise<BigNumber>;

  removeAllowedToken(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAllowedToken(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakedToken(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "stakedToken(uint256)"(
    claimId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  tokenId(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenId(uint256)"(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenType(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "tokenType(uint256)"(
    tokenHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  totalStakedEth(overrides?: CallOverrides): Promise<BigNumber>;

  "totalStakedEth()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addAllowedToken(token: string, overrides?: CallOverrides): Promise<void>;

    "addAllowedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allTokenHashes(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allTokenHashes(uint256)"(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allTokenHashesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allTokenHashesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "allowedTokens(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedTokensLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimQuantity(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimQuantity(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimTokenAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimTokenAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimUnlockTime(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimUnlockTime(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedCount(overrides?: CallOverrides): Promise<BigNumber>;

    "claimedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    difficultyStep(overrides?: CallOverrides): Promise<BigNumber>;

    "difficultyStep()"(overrides?: CallOverrides): Promise<BigNumber>;

    ethPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "ethPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxClaims(overrides?: CallOverrides): Promise<BigNumber>;

    "maxClaims()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxTime(overrides?: CallOverrides): Promise<BigNumber>;

    "maxTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    minTime(overrides?: CallOverrides): Promise<BigNumber>;

    "minTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintedCount(overrides?: CallOverrides): Promise<BigNumber>;

    "mintedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    nextClaimHash(overrides?: CallOverrides): Promise<BigNumber>;

    "nextClaimHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextClaimId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextClaimId()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextGemHash(overrides?: CallOverrides): Promise<BigNumber>;

    "nextGemHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextGemId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextGemId()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeAllowedToken(token: string, overrides?: CallOverrides): Promise<void>;

    "removeAllowedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedToken(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "stakedToken(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    tokenId(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenId(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenType(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "tokenType(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    totalStakedEth(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStakedEth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addAllowedToken(token: string, overrides?: Overrides): Promise<BigNumber>;

    "addAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allTokenHashes(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allTokenHashes(uint256)"(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allTokenHashesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allTokenHashesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowedTokens(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allowedTokensLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimQuantity(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimQuantity(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimTokenAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimTokenAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimUnlockTime(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimUnlockTime(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedCount(overrides?: CallOverrides): Promise<BigNumber>;

    "claimedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    difficultyStep(overrides?: CallOverrides): Promise<BigNumber>;

    "difficultyStep()"(overrides?: CallOverrides): Promise<BigNumber>;

    ethPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "ethPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxClaims(overrides?: CallOverrides): Promise<BigNumber>;

    "maxClaims()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxTime(overrides?: CallOverrides): Promise<BigNumber>;

    "maxTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    minTime(overrides?: CallOverrides): Promise<BigNumber>;

    "minTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintedCount(overrides?: CallOverrides): Promise<BigNumber>;

    "mintedCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextClaimHash(overrides?: CallOverrides): Promise<BigNumber>;

    "nextClaimHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextClaimId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextClaimId()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextGemHash(overrides?: CallOverrides): Promise<BigNumber>;

    "nextGemHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextGemId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextGemId()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeAllowedToken(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakedToken(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "stakedToken(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenId(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenId(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenType(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenType(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStakedEth(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStakedEth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addAllowedToken(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allTokenHashes(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allTokenHashes(uint256)"(
      ndx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokenHashesLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allTokenHashesLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedTokens(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokensLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedTokensLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimQuantity(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimQuantity(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimTokenAmount(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimTokenAmount(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimUnlockTime(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimUnlockTime(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "claimedCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    difficultyStep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "difficultyStep()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ethPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTokenAllowed(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxClaims(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxClaims()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintedCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintedCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextClaimHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextClaimHash()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextClaimId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextClaimId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextGemHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextGemHash()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextGemId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextGemId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAllowedToken(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAllowedToken(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakedToken(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakedToken(uint256)"(
      claimId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenId(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenId(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenType(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenType(uint256)"(
      tokenHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStakedEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalStakedEth()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}