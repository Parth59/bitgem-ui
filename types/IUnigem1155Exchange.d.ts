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

interface IUnigem1155ExchangeInterface extends ethers.utils.Interface {
  functions: {
    "getBuyPrice(uint256,uint256,uint256)": FunctionFragment;
    "getCurrencyInfo()": FunctionFragment;
    "getCurrencyReserves(uint256[])": FunctionFragment;
    "getFactoryAddress()": FunctionFragment;
    "getPrice_currencyToToken(uint256[],uint256[])": FunctionFragment;
    "getPrice_tokenToCurrency(uint256[],uint256[])": FunctionFragment;
    "getSellPrice(uint256,uint256,uint256)": FunctionFragment;
    "getTokenAddress()": FunctionFragment;
    "getTotalSupply(uint256[])": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBuyPrice",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyReserves",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFactoryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice_currencyToToken",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice_tokenToCurrency",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPrice",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupply",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBuyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFactoryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrice_currencyToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrice_tokenToCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;

  events: {
    "CurrencyPurchase(address,address,uint256[],uint256[],uint256[])": EventFragment;
    "LiquidityAdded(address,uint256[],uint256[],uint256[])": EventFragment;
    "LiquidityRemoved(address,uint256[],uint256[],uint256[])": EventFragment;
    "TokensPurchase(address,address,uint256[],uint256[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CurrencyPurchase"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchase"): EventFragment;
}

export class IUnigem1155Exchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUnigem1155ExchangeInterface;

  functions: {
    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBuyPrice(uint256,uint256,uint256)"(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrencyInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;

    "getCurrencyInfo()"(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getCurrencyReserves(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getCurrencyReserves(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFactoryAddress(overrides?: CallOverrides): Promise<[string]>;

    "getFactoryAddress()"(overrides?: CallOverrides): Promise<[string]>;

    getPrice_currencyToToken(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getPrice_currencyToToken(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getPrice_tokenToCurrency(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getPrice_tokenToCurrency(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getSellPrice(uint256,uint256,uint256)"(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<[string]>;

    getTotalSupply(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getTotalSupply(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getBuyPrice(
    _assetBoughtAmount: BigNumberish,
    _assetSoldReserve: BigNumberish,
    _assetBoughtReserve: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBuyPrice(uint256,uint256,uint256)"(
    _assetBoughtAmount: BigNumberish,
    _assetSoldReserve: BigNumberish,
    _assetBoughtReserve: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrencyInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;

  "getCurrencyInfo()"(overrides?: CallOverrides): Promise<[string, BigNumber]>;

  getCurrencyReserves(
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getCurrencyReserves(uint256[])"(
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFactoryAddress(overrides?: CallOverrides): Promise<string>;

  "getFactoryAddress()"(overrides?: CallOverrides): Promise<string>;

  getPrice_currencyToToken(
    _ids: BigNumberish[],
    _tokensBought: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getPrice_currencyToToken(uint256[],uint256[])"(
    _ids: BigNumberish[],
    _tokensBought: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getPrice_tokenToCurrency(
    _ids: BigNumberish[],
    _tokensSold: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getPrice_tokenToCurrency(uint256[],uint256[])"(
    _ids: BigNumberish[],
    _tokensSold: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getSellPrice(
    _assetSoldAmount: BigNumberish,
    _assetSoldReserve: BigNumberish,
    _assetBoughtReserve: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSellPrice(uint256,uint256,uint256)"(
    _assetSoldAmount: BigNumberish,
    _assetSoldReserve: BigNumberish,
    _assetBoughtReserve: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenAddress(overrides?: CallOverrides): Promise<string>;

  "getTokenAddress()"(overrides?: CallOverrides): Promise<string>;

  getTotalSupply(
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getTotalSupply(uint256[])"(
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  onERC1155BatchReceived(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPrice(uint256,uint256,uint256)"(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrencyInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;

    "getCurrencyInfo()"(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getCurrencyReserves(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getCurrencyReserves(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFactoryAddress(overrides?: CallOverrides): Promise<string>;

    "getFactoryAddress()"(overrides?: CallOverrides): Promise<string>;

    getPrice_currencyToToken(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getPrice_currencyToToken(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getPrice_tokenToCurrency(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getPrice_tokenToCurrency(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPrice(uint256,uint256,uint256)"(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenAddress(overrides?: CallOverrides): Promise<string>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    getTotalSupply(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getTotalSupply(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    CurrencyPurchase(
      buyer: string | null,
      recipient: string | null,
      tokensSoldIds: null,
      tokensSoldAmounts: null,
      currencyBoughtAmounts: null
    ): EventFilter;

    LiquidityAdded(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      currencyAmounts: null
    ): EventFilter;

    LiquidityRemoved(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      currencyAmounts: null
    ): EventFilter;

    TokensPurchase(
      buyer: string | null,
      recipient: string | null,
      tokensBoughtIds: null,
      tokensBoughtAmounts: null,
      currencySoldAmounts: null
    ): EventFilter;
  };

  estimateGas: {
    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPrice(uint256,uint256,uint256)"(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrencyInfo(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrencyInfo()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrencyReserves(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurrencyReserves(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getFactoryAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice_currencyToToken(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPrice_currencyToToken(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice_tokenToCurrency(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPrice_tokenToCurrency(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPrice(uint256,uint256,uint256)"(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalSupply(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalSupply(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBuyPrice(uint256,uint256,uint256)"(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrencyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCurrencyInfo()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrencyReserves(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrencyReserves(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getFactoryAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice_currencyToToken(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPrice_currencyToToken(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensBought: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice_tokenToCurrency(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPrice_tokenToCurrency(uint256[],uint256[])"(
      _ids: BigNumberish[],
      _tokensSold: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSellPrice(uint256,uint256,uint256)"(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupply(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalSupply(uint256[])"(
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
