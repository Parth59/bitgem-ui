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

interface NFTGemFeeManagerInterface extends ethers.utils.Interface {
  functions: {
    "addController(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "defaultFeeDivisor()": FunctionFragment;
    "defaultLiquidity()": FunctionFragment;
    "ethBalanceOf()": FunctionFragment;
    "feeDivisor(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "liquidity(address)": FunctionFragment;
    "relinquishControl()": FunctionFragment;
    "setDefaultFeeDivisor(uint256)": FunctionFragment;
    "setDefaultLiquidity(uint256)": FunctionFragment;
    "setFeeDivisor(address,uint256)": FunctionFragment;
    "transferEth(address,uint256)": FunctionFragment;
    "transferToken(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addController",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "defaultFeeDivisor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethBalanceOf",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeDivisor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isController",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values: [string]): string;
  encodeFunctionData(
    functionFragment: "relinquishControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultFeeDivisor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDivisor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferEth",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToken",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultFeeDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeDivisor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "relinquishControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultFeeDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToken",
    data: BytesLike
  ): Result;

  events: {
    "ControllerAdded(address,address)": EventFragment;
    "ControllerRemoved(address,address)": EventFragment;
    "DefaultFeeDivisorChanged(address,uint256,uint256)": EventFragment;
    "ETHReceived(address,address,uint256)": EventFragment;
    "FeeDivisorChanged(address,address,uint256,uint256)": EventFragment;
    "LiquidityChanged(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DefaultFeeDivisorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeDivisorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityChanged"): EventFragment;
}

export class NFTGemFeeManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFTGemFeeManagerInterface;

  functions: {
    addController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    defaultFeeDivisor(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { multiplier: BigNumber }>;

    "defaultFeeDivisor()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { multiplier: BigNumber }>;

    defaultLiquidity(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { multiplier: BigNumber }>;

    "defaultLiquidity()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { multiplier: BigNumber }>;

    ethBalanceOf(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ethBalanceOf()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeDivisor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { divisor: BigNumber }>;

    "feeDivisor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { divisor: BigNumber }>;

    isController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { allowed: boolean }>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { allowed: boolean }>;

    liquidity(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "liquidity(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    relinquishControl(overrides?: Overrides): Promise<ContractTransaction>;

    "relinquishControl()"(overrides?: Overrides): Promise<ContractTransaction>;

    setDefaultFeeDivisor(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDefaultFeeDivisor(uint256)"(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDefaultLiquidity(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDefaultLiquidity(uint256)"(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeDivisor(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeDivisor(address,uint256)"(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferEth(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferEth(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferToken(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferToken(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  defaultFeeDivisor(overrides?: CallOverrides): Promise<BigNumber>;

  "defaultFeeDivisor()"(overrides?: CallOverrides): Promise<BigNumber>;

  defaultLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "defaultLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  ethBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

  "ethBalanceOf()"(overrides?: CallOverrides): Promise<BigNumber>;

  feeDivisor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "feeDivisor(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isController(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isController(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidity(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "liquidity(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  relinquishControl(overrides?: Overrides): Promise<ContractTransaction>;

  "relinquishControl()"(overrides?: Overrides): Promise<ContractTransaction>;

  setDefaultFeeDivisor(
    _feeDivisor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDefaultFeeDivisor(uint256)"(
    _feeDivisor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDefaultLiquidity(
    _liquidityMult: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDefaultLiquidity(uint256)"(
    _liquidityMult: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeDivisor(
    token: string,
    _feeDivisor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeDivisor(address,uint256)"(
    token: string,
    _feeDivisor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferEth(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferEth(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferToken(
    token: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferToken(address,address,uint256)"(
    token: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    defaultFeeDivisor(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultFeeDivisor()"(overrides?: CallOverrides): Promise<BigNumber>;

    defaultLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    ethBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    "ethBalanceOf()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeDivisor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "feeDivisor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isController(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isController(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidity(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "liquidity(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relinquishControl(overrides?: CallOverrides): Promise<void>;

    "relinquishControl()"(overrides?: CallOverrides): Promise<void>;

    setDefaultFeeDivisor(
      _feeDivisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setDefaultFeeDivisor(uint256)"(
      _feeDivisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDefaultLiquidity(
      _liquidityMult: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setDefaultLiquidity(uint256)"(
      _liquidityMult: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeDivisor(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "setFeeDivisor(address,uint256)"(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferEth(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferEth(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferToken(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferToken(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
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

    DefaultFeeDivisorChanged(
      operator: string | null,
      oldValue: null,
      value: null
    ): EventFilter;

    ETHReceived(manager: string | null, sender: null, value: null): EventFilter;

    FeeDivisorChanged(
      operator: string | null,
      token: string | null,
      oldValue: null,
      value: null
    ): EventFilter;

    LiquidityChanged(
      manager: string | null,
      oldValue: null,
      value: null
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

    balanceOf(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    defaultFeeDivisor(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultFeeDivisor()"(overrides?: CallOverrides): Promise<BigNumber>;

    defaultLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    ethBalanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    "ethBalanceOf()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeDivisor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "feeDivisor(address)"(
      token: string,
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

    liquidity(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "liquidity(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relinquishControl(overrides?: Overrides): Promise<BigNumber>;

    "relinquishControl()"(overrides?: Overrides): Promise<BigNumber>;

    setDefaultFeeDivisor(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDefaultFeeDivisor(uint256)"(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDefaultLiquidity(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDefaultLiquidity(uint256)"(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeDivisor(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFeeDivisor(address,uint256)"(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferEth(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferEth(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferToken(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferToken(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
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

    balanceOf(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    defaultFeeDivisor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "defaultFeeDivisor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    defaultLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "defaultLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethBalanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ethBalanceOf()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeDivisor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeDivisor(address)"(
      token: string,
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

    liquidity(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "liquidity(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relinquishControl(overrides?: Overrides): Promise<PopulatedTransaction>;

    "relinquishControl()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setDefaultFeeDivisor(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDefaultFeeDivisor(uint256)"(
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDefaultLiquidity(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDefaultLiquidity(uint256)"(
      _liquidityMult: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeDivisor(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeDivisor(address,uint256)"(
      token: string,
      _feeDivisor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferEth(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferEth(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferToken(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferToken(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
