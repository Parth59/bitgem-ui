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

interface INFTGemGovernorInterface extends ethers.utils.Interface {
  functions: {
    "createChangeFeeProposal(address,string,address,address,uint256)": FunctionFragment;
    "createFundProjectProposal(address,string,address,string,uint256)": FunctionFragment;
    "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "createProposalVoteTokens(uint256)": FunctionFragment;
    "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "createUpdateAllowlistProposal(address,string,address,address,bool)": FunctionFragment;
    "destroyProposalVoteTokens(uint256)": FunctionFragment;
    "executeProposal(address)": FunctionFragment;
    "initialize(address,address,address,address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "issueFuelToken(address,uint256)": FunctionFragment;
    "issueInitialGovernanceTokens(address)": FunctionFragment;
    "maybeIssueGovernanceToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createChangeFeeProposal",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createFundProjectProposal",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewPoolProposal",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createProposalVoteTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSystemPool",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createUpdateAllowlistProposal",
    values: [string, string, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyProposalVoteTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issueFuelToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueInitialGovernanceTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maybeIssueGovernanceToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createChangeFeeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFundProjectProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewPoolProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProposalVoteTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSystemPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createUpdateAllowlistProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyProposalVoteTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueFuelToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueInitialGovernanceTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maybeIssueGovernanceToken",
    data: BytesLike
  ): Result;

  events: {
    "AllowList(address,address,bool)": EventFragment;
    "FeeUpdated(address,address,uint256)": EventFragment;
    "GovernanceTokenIssued(address,uint256)": EventFragment;
    "ProjectFunded(address,address,uint256)": EventFragment;
    "StakingPoolCreated(address,address,string,string,uint256,uint256,uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowList"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceTokenIssued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProjectFunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakingPoolCreated"): EventFragment;
}

export class INFTGemGovernor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: INFTGemGovernorInterface;

  functions: {
    createChangeFeeProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createChangeFeeProposal(address,string,address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createFundProjectProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createFundProjectProposal(address,string,address,string,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createNewPoolProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createSystemPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createUpdateAllowlistProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createUpdateAllowlistProposal(address,string,address,address,bool)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    destroyProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "destroyProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    executeProposal(
      propAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeProposal(address)"(
      propAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,address,address)"(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialized(overrides?: Overrides): Promise<ContractTransaction>;

    "initialized()"(overrides?: Overrides): Promise<ContractTransaction>;

    issueFuelToken(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "issueFuelToken(address,uint256)"(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    issueInitialGovernanceTokens(
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "issueInitialGovernanceTokens(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    maybeIssueGovernanceToken(
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "maybeIssueGovernanceToken(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  createChangeFeeProposal(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createChangeFeeProposal(address,string,address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createFundProjectProposal(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createFundProjectProposal(address,string,address,string,uint256)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createNewPoolProposal(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    arg7: BigNumberish,
    arg8: BigNumberish,
    arg9: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: BigNumberish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    arg7: BigNumberish,
    arg8: BigNumberish,
    arg9: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createPool(
    symbol: string,
    name: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxClaims: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
    symbol: string,
    name: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxClaims: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createProposalVoteTokens(
    proposalHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createProposalVoteTokens(uint256)"(
    proposalHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createSystemPool(
    symbol: string,
    name: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxClaims: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
    symbol: string,
    name: string,
    ethPrice: BigNumberish,
    minTime: BigNumberish,
    maxTime: BigNumberish,
    diffstep: BigNumberish,
    maxClaims: BigNumberish,
    allowedToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createUpdateAllowlistProposal(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createUpdateAllowlistProposal(address,string,address,address,bool)"(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  destroyProposalVoteTokens(
    proposalHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "destroyProposalVoteTokens(uint256)"(
    proposalHash: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  executeProposal(
    propAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeProposal(address)"(
    propAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    _multitoken: string,
    _factory: string,
    _feeTracker: string,
    _proposalFactory: string,
    _swapHelper: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,address,address)"(
    _multitoken: string,
    _factory: string,
    _feeTracker: string,
    _proposalFactory: string,
    _swapHelper: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialized(overrides?: Overrides): Promise<ContractTransaction>;

  "initialized()"(overrides?: Overrides): Promise<ContractTransaction>;

  issueFuelToken(
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "issueFuelToken(address,uint256)"(
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  issueInitialGovernanceTokens(
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "issueInitialGovernanceTokens(address)"(
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  maybeIssueGovernanceToken(
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "maybeIssueGovernanceToken(address)"(
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    createChangeFeeProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createChangeFeeProposal(address,string,address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createFundProjectProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createFundProjectProposal(address,string,address,string,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createNewPoolProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createSystemPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createUpdateAllowlistProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    "createUpdateAllowlistProposal(address,string,address,address,bool)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    destroyProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "destroyProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeProposal(
      propAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeProposal(address)"(
      propAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,address,address)"(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    "initialized()"(overrides?: CallOverrides): Promise<boolean>;

    issueFuelToken(
      receiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "issueFuelToken(address,uint256)"(
      receiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueInitialGovernanceTokens(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "issueInitialGovernanceTokens(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maybeIssueGovernanceToken(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maybeIssueGovernanceToken(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    AllowList(
      proposal: string | null,
      token: string | null,
      isBanned: null
    ): EventFilter;

    FeeUpdated(
      proposal: string | null,
      token: string | null,
      newFee: null
    ): EventFilter;

    GovernanceTokenIssued(receiver: string | null, amount: null): EventFilter;

    ProjectFunded(
      proposal: string | null,
      receiver: string | null,
      received: null
    ): EventFilter;

    StakingPoolCreated(
      proposal: string | null,
      pool: string | null,
      symbol: null,
      name: null,
      ethPrice: null,
      minTime: null,
      maxTime: null,
      diffStep: null,
      maxClaims: null,
      alllowedToken: null
    ): EventFilter;
  };

  estimateGas: {
    createChangeFeeProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createChangeFeeProposal(address,string,address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createFundProjectProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createFundProjectProposal(address,string,address,string,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createNewPoolProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createSystemPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createUpdateAllowlistProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createUpdateAllowlistProposal(address,string,address,address,bool)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    destroyProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "destroyProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    executeProposal(
      propAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeProposal(address)"(
      propAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address,address,address)"(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialized(overrides?: Overrides): Promise<BigNumber>;

    "initialized()"(overrides?: Overrides): Promise<BigNumber>;

    issueFuelToken(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "issueFuelToken(address,uint256)"(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    issueInitialGovernanceTokens(
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "issueInitialGovernanceTokens(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    maybeIssueGovernanceToken(
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "maybeIssueGovernanceToken(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createChangeFeeProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createChangeFeeProposal(address,string,address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createFundProjectProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createFundProjectProposal(address,string,address,string,uint256)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createNewPoolProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createNewPoolProposal(address,string,string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: BigNumberish,
      arg8: BigNumberish,
      arg9: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createSystemPool(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createSystemPool(string,string,uint256,uint256,uint256,uint256,uint256,address)"(
      symbol: string,
      name: string,
      ethPrice: BigNumberish,
      minTime: BigNumberish,
      maxTime: BigNumberish,
      diffstep: BigNumberish,
      maxClaims: BigNumberish,
      allowedToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createUpdateAllowlistProposal(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createUpdateAllowlistProposal(address,string,address,address,bool)"(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    destroyProposalVoteTokens(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "destroyProposalVoteTokens(uint256)"(
      proposalHash: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      propAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeProposal(address)"(
      propAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,address,address)"(
      _multitoken: string,
      _factory: string,
      _feeTracker: string,
      _proposalFactory: string,
      _swapHelper: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialized()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    issueFuelToken(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "issueFuelToken(address,uint256)"(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    issueInitialGovernanceTokens(
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "issueInitialGovernanceTokens(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    maybeIssueGovernanceToken(
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "maybeIssueGovernanceToken(address)"(
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
