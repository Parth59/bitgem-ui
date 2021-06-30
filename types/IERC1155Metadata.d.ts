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

interface IERC1155MetadataInterface extends ethers.utils.Interface {
  functions: {
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class IERC1155Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC1155MetadataInterface;

  functions: {
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    uri(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
