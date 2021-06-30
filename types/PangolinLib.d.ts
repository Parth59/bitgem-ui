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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PangolinLibInterface extends ethers.utils.Interface {
  functions: {
    "FUJI_PANGOLIN_ROUTER_ADDRESS()": FunctionFragment;
    "PANGOLIN_ROUTER_ADDRESS()": FunctionFragment;
    "WAVAX()": FunctionFragment;
    "avaxQuote(address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getPair(address,address,address)": FunctionFragment;
    "getPathForAVAXoToken(address)": FunctionFragment;
    "getReserves(address)": FunctionFragment;
    "hasPool(address)": FunctionFragment;
    "pairFor(address,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FUJI_PANGOLIN_ROUTER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PANGOLIN_ROUTER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WAVAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "avaxQuote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPathForAVAXoToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getReserves", values: [string]): string;
  encodeFunctionData(functionFragment: "hasPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pairFor",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "FUJI_PANGOLIN_ROUTER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PANGOLIN_ROUTER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WAVAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "avaxQuote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPathForAVAXoToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;

  events: {};
}

export class PangolinLib extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PangolinLibInterface;

  functions: {
    FUJI_PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    "FUJI_PANGOLIN_ROUTER_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    "PANGOLIN_ROUTER_ADDRESS()"(overrides?: CallOverrides): Promise<[string]>;

    WAVAX(overrides?: CallOverrides): Promise<[string] & { wavax: string }>;

    "WAVAX()"(overrides?: CallOverrides): Promise<[string] & { wavax: string }>;

    avaxQuote(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        avalanche: BigNumber;
        tokenReserve: BigNumber;
        avaxReserve: BigNumber;
      }
    >;

    "avaxQuote(address,uint256)"(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        avalanche: BigNumber;
        tokenReserve: BigNumber;
        avaxReserve: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<[string] & { fac: string }>;

    "factory()"(overrides?: CallOverrides): Promise<[string] & { fac: string }>;

    getPair(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    "getPair(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    getPathForAVAXoToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "getPathForAVAXoToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getReserves(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    "getReserves(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    hasPool(token: string, overrides?: CallOverrides): Promise<[boolean]>;

    "hasPool(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pairFor(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    "pairFor(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;
  };

  FUJI_PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<string>;

  "FUJI_PANGOLIN_ROUTER_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

  PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<string>;

  "PANGOLIN_ROUTER_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

  WAVAX(overrides?: CallOverrides): Promise<string>;

  "WAVAX()"(overrides?: CallOverrides): Promise<string>;

  avaxQuote(
    token: string,
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      avalanche: BigNumber;
      tokenReserve: BigNumber;
      avaxReserve: BigNumber;
    }
  >;

  "avaxQuote(address,uint256)"(
    token: string,
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      avalanche: BigNumber;
      tokenReserve: BigNumber;
      avaxReserve: BigNumber;
    }
  >;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  getPair(
    _factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPair(address,address,address)"(
    _factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPathForAVAXoToken(
    token: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getPathForAVAXoToken(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getReserves(
    pair: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
  >;

  "getReserves(address)"(
    pair: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
  >;

  hasPool(token: string, overrides?: CallOverrides): Promise<boolean>;

  "hasPool(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  pairFor(
    _factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "pairFor(address,address,address)"(
    _factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    FUJI_PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<string>;

    "FUJI_PANGOLIN_ROUTER_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<string>;

    PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<string>;

    "PANGOLIN_ROUTER_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

    WAVAX(overrides?: CallOverrides): Promise<string>;

    "WAVAX()"(overrides?: CallOverrides): Promise<string>;

    avaxQuote(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        avalanche: BigNumber;
        tokenReserve: BigNumber;
        avaxReserve: BigNumber;
      }
    >;

    "avaxQuote(address,uint256)"(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        avalanche: BigNumber;
        tokenReserve: BigNumber;
        avaxReserve: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    getPair(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPair(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPathForAVAXoToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getPathForAVAXoToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getReserves(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    "getReserves(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    hasPool(token: string, overrides?: CallOverrides): Promise<boolean>;

    "hasPool(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pairFor(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "pairFor(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    FUJI_PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    "FUJI_PANGOLIN_ROUTER_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    PANGOLIN_ROUTER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    "PANGOLIN_ROUTER_ADDRESS()"(overrides?: CallOverrides): Promise<BigNumber>;

    WAVAX(overrides?: CallOverrides): Promise<BigNumber>;

    "WAVAX()"(overrides?: CallOverrides): Promise<BigNumber>;

    avaxQuote(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "avaxQuote(address,uint256)"(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPair(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPathForAVAXoToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPathForAVAXoToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserves(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getReserves(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPool(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hasPool(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairFor(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pairFor(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FUJI_PANGOLIN_ROUTER_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "FUJI_PANGOLIN_ROUTER_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PANGOLIN_ROUTER_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "PANGOLIN_ROUTER_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WAVAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WAVAX()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    avaxQuote(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "avaxQuote(address,uint256)"(
      token: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPair(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPathForAVAXoToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPathForAVAXoToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserves(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserves(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPool(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasPool(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairFor(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairFor(address,address,address)"(
      _factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}