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

interface IProposalFactoryInterface extends ethers.utils.Interface {
  functions: {
    "allProposals(uint256)": FunctionFragment;
    "allProposalsLength()": FunctionFragment;
    "createProposal(address,string,address,uint8)": FunctionFragment;
    "getProposal(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allProposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allProposalsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createProposal",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "allProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allProposalsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;

  events: {
    "ProposalClosed(uint256,address)": EventFragment;
    "ProposalCreated(address,uint256,address)": EventFragment;
    "ProposalExecuted(uint256,address)": EventFragment;
    "ProposalFunded(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalFunded"): EventFragment;
}

export class IProposalFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IProposalFactoryInterface;

  functions: {
    allProposals(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "allProposals(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allProposalsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allProposalsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    createProposal(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createProposal(address,string,address,uint8)"(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getProposal(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getProposal(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  allProposals(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allProposals(uint256)"(
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allProposalsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allProposalsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  createProposal(
    submitter: string,
    title: string,
    proposalData: string,
    proposalType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createProposal(address,string,address,uint8)"(
    submitter: string,
    title: string,
    proposalData: string,
    proposalType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getProposal(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getProposal(uint256)"(
    _symbolHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    allProposals(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allProposals(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allProposalsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allProposalsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createProposal(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createProposal(address,string,address,uint8)"(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getProposal(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getProposal(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    ProposalClosed(proposalHash: BigNumberish | null, pool: null): EventFilter;

    ProposalCreated(
      creator: null,
      proposalType: null,
      proposal: null
    ): EventFilter;

    ProposalExecuted(
      proposalHash: BigNumberish | null,
      pool: null
    ): EventFilter;

    ProposalFunded(
      proposalHash: BigNumberish | null,
      funder: string | null,
      expDate: null
    ): EventFilter;
  };

  estimateGas: {
    allProposals(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allProposals(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allProposalsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allProposalsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    createProposal(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createProposal(address,string,address,uint8)"(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getProposal(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposal(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allProposals(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allProposals(uint256)"(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allProposalsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allProposalsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createProposal(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createProposal(address,string,address,uint8)"(
      submitter: string,
      title: string,
      proposalData: string,
      proposalType: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getProposal(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposal(uint256)"(
      _symbolHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
