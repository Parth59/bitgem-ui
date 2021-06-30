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

interface IChangeFeeProposalDataInterface extends ethers.utils.Interface {
  functions: {
    "data()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "data", values?: undefined): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;

  events: {};
}

export class IChangeFeeProposalData extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IChangeFeeProposalDataInterface;

  functions: {
    data(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;

    "data()"(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;
  };

  data(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;

  "data()"(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;

  callStatic: {
    data(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;

    "data()"(overrides?: CallOverrides): Promise<[string, string, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    data(overrides?: CallOverrides): Promise<BigNumber>;

    "data()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "data()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}