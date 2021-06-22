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

interface NFTGemWrapperFeeManagerInterface extends ethers.utils.Interface {
  functions: {
    "addController(address)": FunctionFragment;
    "balanceOfERC1155(address,uint256)": FunctionFragment;
    "balanceOfERC20(address)": FunctionFragment;
    "ethBalanceOf()": FunctionFragment;
    "feeDivisor(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "relinquishControl()": FunctionFragment;
    "setFeeDivisor(address,uint256)": FunctionFragment;
    "transferERC1155Token(address,uint256,address,uint256)": FunctionFragment;
    "transferERC20Token(address,address,uint256)": FunctionFragment;
    "transferEth(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC1155",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC20",
    values: [string]
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
  encodeFunctionData(
    functionFragment: "relinquishControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDivisor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC1155Token",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20Token",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferEth",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC20",
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
  decodeFunctionResult(
    functionFragment: "relinquishControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDivisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC1155Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferEth",
    data: BytesLike
  ): Result;

  events: {
    "ControllerAdded(address,address)": EventFragment;
    "ControllerRemoved(address,address)": EventFragment;
    "DefaultFeeDivisorChanged(address,uint256,uint256)": EventFragment;
    "ETHReceived(address,address,uint256)": EventFragment;
    "FeeDivisorChanged(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DefaultFeeDivisorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeDivisorChanged"): EventFragment;
}

export class NFTGemWrapperFeeManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFTGemWrapperFeeManagerInterface;

  functions: {
    addController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOfERC1155(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC1155(address,uint256)"(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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

    relinquishControl(overrides?: Overrides): Promise<ContractTransaction>;

    "relinquishControl()"(overrides?: Overrides): Promise<ContractTransaction>;

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

    transferERC1155Token(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferERC1155Token(address,uint256,address,uint256)"(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferERC20Token(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferERC20Token(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
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
  };

  addController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOfERC1155(
    token: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOfERC1155(address,uint256)"(
    token: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfERC20(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOfERC20(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  relinquishControl(overrides?: Overrides): Promise<ContractTransaction>;

  "relinquishControl()"(overrides?: Overrides): Promise<ContractTransaction>;

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

  transferERC1155Token(
    token: string,
    id: BigNumberish,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferERC1155Token(address,uint256,address,uint256)"(
    token: string,
    id: BigNumberish,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferERC20Token(
    token: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferERC20Token(address,address,uint256)"(
    token: string,
    recipient: string,
    amount: BigNumberish,
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

  callStatic: {
    addController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOfERC1155(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC1155(address,uint256)"(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    relinquishControl(overrides?: CallOverrides): Promise<void>;

    "relinquishControl()"(overrides?: CallOverrides): Promise<void>;

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

    transferERC1155Token(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC1155Token(address,uint256,address,uint256)"(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC20Token(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC20Token(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

    balanceOfERC1155(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC1155(address,uint256)"(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    relinquishControl(overrides?: Overrides): Promise<BigNumber>;

    "relinquishControl()"(overrides?: Overrides): Promise<BigNumber>;

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

    transferERC1155Token(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferERC1155Token(address,uint256,address,uint256)"(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferERC20Token(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferERC20Token(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
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

    balanceOfERC1155(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC1155(address,uint256)"(
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC20(address)"(
      token: string,
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

    relinquishControl(overrides?: Overrides): Promise<PopulatedTransaction>;

    "relinquishControl()"(overrides?: Overrides): Promise<PopulatedTransaction>;

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

    transferERC1155Token(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferERC1155Token(address,uint256,address,uint256)"(
      token: string,
      id: BigNumberish,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferERC20Token(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferERC20Token(address,address,uint256)"(
      token: string,
      recipient: string,
      amount: BigNumberish,
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
  };
}
