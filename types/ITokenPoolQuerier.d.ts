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

interface ITokenPoolQuerierInterface extends ethers.utils.Interface {
  functions: {
    "getOwnedTokens(address,address,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getOwnedTokens",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getOwnedTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITokenPoolQuerier extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITokenPoolQuerierInterface;

  functions: {
    getOwnedTokens(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
    >;

    "getOwnedTokens(address,address,address,uint256,uint256)"(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
    >;
  };

  getOwnedTokens(
    gemPool: string,
    multitoken: string,
    account: string,
    page: BigNumberish,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
  >;

  "getOwnedTokens(address,address,address,uint256,uint256)"(
    gemPool: string,
    multitoken: string,
    account: string,
    page: BigNumberish,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
  >;

  callStatic: {
    getOwnedTokens(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
    >;

    "getOwnedTokens(address,address,address,uint256,uint256)"(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & { claims: BigNumber[]; gems: BigNumber[] }
    >;
  };

  filters: {};

  estimateGas: {
    getOwnedTokens(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOwnedTokens(address,address,address,uint256,uint256)"(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getOwnedTokens(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOwnedTokens(address,address,address,uint256,uint256)"(
      gemPool: string,
      multitoken: string,
      account: string,
      page: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}