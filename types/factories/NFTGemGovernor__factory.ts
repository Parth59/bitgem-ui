/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NFTGemGovernor } from "../NFTGemGovernor";

export class NFTGemGovernor__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: NFTGemGovernorLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      NFTGemGovernor__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: NFTGemGovernorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$415eb1c69eabc622d82690315fa0e33bfb\\$__", "g"),
      linkLibraryAddresses["__$415eb1c69eabc622d82690315fa0e33bfb$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c2cf3eebb563d155e336d59c40be15cffe\\$__", "g"),
      linkLibraryAddresses["__$c2cf3eebb563d155e336d59c40be15cffe$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<NFTGemGovernor> {
    return super.deploy(overrides || {}) as Promise<NFTGemGovernor>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTGemGovernor {
    return super.attach(address) as NFTGemGovernor;
  }
  connect(signer: Signer): NFTGemGovernor__factory {
    return super.connect(signer) as NFTGemGovernor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTGemGovernor {
    return new Contract(address, _abi, signerOrProvider) as NFTGemGovernor;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBanned",
        type: "bool",
      },
    ],
    name: "AllowList",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "controllerAddress",
        type: "address",
      },
    ],
    name: "ControllerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "controllerAddress",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FuelTokenIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "GovernanceTokenIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "ProjectFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "diffStep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "alllowedToken",
        type: "address",
      },
    ],
    name: "StakingPoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeDivisor",
        type: "uint256",
      },
    ],
    name: "createChangeFeeProposal",
    outputs: [
      {
        internalType: "address",
        name: "proposal",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "descriptionUrl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "createFundProjectProposal",
    outputs: [
      {
        internalType: "address",
        name: "proposal",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTIme",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diffStep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createNewPoolProposal",
    outputs: [
      {
        internalType: "address",
        name: "proposal",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diffstep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalHash",
        type: "uint256",
      },
    ],
    name: "createProposalVoteTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diffstep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createSystemPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "createUpdateAllowlistProposal",
    outputs: [
      {
        internalType: "address",
        name: "proposal",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalHash",
        type: "uint256",
      },
    ],
    name: "destroyProposalVoteTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "propAddress",
        type: "address",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_multitoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeTracker",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposalFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapHelper",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isController",
    outputs: [
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "issueFuelToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "issueInitialFuelTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "issueInitialGovernanceTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "maybeIssueGovernanceToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "relinquishControl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setFeeTracker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setMultitoken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setProposalFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setSwapHelper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610043565b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b612875806100526000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80639277a185116100e3578063dac7f24d1161008c578063e443978511610066578063e443978514610b2d578063ea40a7a414610b53578063fb54cc4014610b7f5761018d565b8063dac7f24d14610a38578063e143194514610a55578063e1c28bef14610b255761018d565b8063afc93505116100bd578063afc935051461089c578063b429afeb146109ec578063d73cd47f14610a125761018d565b80639277a1851461082a578063a67a03ab14610850578063a7fc7a07146108765761018d565b80635bb47808116101455780636e3c7c7f1161011f5780636e3c7c7f1461041d57806377fa7d98146104eb5780638dbf88c81461063f5761018d565b80635bb47808146103ab578063634b5b7d146103d15780636c7c402f146103f75761018d565b8063158ef93e11610176578063158ef93e146102025780631e4ad6a21461021e5780632866519d1461023b5761018d565b806310fbe8a0146101925780631459457a146101ba575b600080fd5b6101b8600480360360208110156101a857600080fd5b50356001600160a01b0316610ba5565b005b6101b8600480360360a08110156101d057600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610cf0565b61020a610dd2565b604080519115158252519081900360200190f35b6101b86004803603602081101561023457600080fd5b5035610de2565b61038f600480360361010081101561025257600080fd5b81019060208101813564010000000081111561026d57600080fd5b82018360208201111561027f57600080fd5b803590602001918460018302840111640100000000831117156102a157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156102f457600080fd5b82018360208201111561030657600080fd5b8035906020019184600183028401116401000000008311171561032857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505082359350505060208101359060408101359060608101359060808101359060a001356001600160a01b0316610ed7565b604080516001600160a01b039092168252519081900360200190f35b6101b8600480360360208110156103c157600080fd5b50356001600160a01b03166110f0565b6101b8600480360360208110156103e757600080fd5b50356001600160a01b031661116f565b6101b86004803603602081101561040d57600080fd5b50356001600160a01b031661132a565b61038f600480360360a081101561043357600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561045e57600080fd5b82018360208201111561047057600080fd5b8035906020019184600183028401116401000000008311171561049257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550506001600160a01b03833581169450602084013516926040013591506113a99050565b61038f600480360361010081101561050257600080fd5b81019060208101813564010000000081111561051d57600080fd5b82018360208201111561052f57600080fd5b8035906020019184600183028401116401000000008311171561055157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105a457600080fd5b8201836020820111156105b657600080fd5b803590602001918460018302840111640100000000831117156105d857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505082359350505060208101359060408101359060608101359060808101359060a001356001600160a01b0316611478565b61038f600480360361014081101561065657600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561068157600080fd5b82018360208201111561069357600080fd5b803590602001918460018302840111640100000000831117156106b557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561070857600080fd5b82018360208201111561071a57600080fd5b8035906020019184600183028401116401000000008311171561073c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561078f57600080fd5b8201836020820111156107a157600080fd5b803590602001918460018302840111640100000000831117156107c357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505082359350505060208101359060408101359060608101359060808101359060a001356001600160a01b031661178f565b6101b86004803603602081101561084057600080fd5b50356001600160a01b0316611943565b6101b86004803603602081101561086657600080fd5b50356001600160a01b03166119c2565b6101b86004803603602081101561088c57600080fd5b50356001600160a01b0316611ac4565b61038f600480360360a08110156108b257600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156108dd57600080fd5b8201836020820111156108ef57600080fd5b8035906020019184600183028401116401000000008311171561091157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092956001600160a01b0385351695909490935060408101925060200135905064010000000081111561097557600080fd5b82018360208201111561098757600080fd5b803590602001918460018302840111640100000000831117156109a957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250611b45915050565b61020a60048036036020811015610a0257600080fd5b50356001600160a01b0316611c66565b6101b860048036036020811015610a2857600080fd5b50356001600160a01b0316611c84565b6101b860048036036020811015610a4e57600080fd5b5035611d03565b61038f600480360360a0811015610a6b57600080fd5b6001600160a01b038235169190810190604081016020820135640100000000811115610a9657600080fd5b820183602082011115610aa857600080fd5b80359060200191846001830284011164010000000083111715610aca57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550506001600160a01b03833581169450602084013516926040013515159150611ddd9050565b6101b8611eb6565b6101b860048036036020811015610b4357600080fd5b50356001600160a01b0316611f2c565b6101b860048036036040811015610b6957600080fd5b506001600160a01b038135169060200135612072565b6101b860048036036020811015610b9557600080fd5b50356001600160a01b031661214a565b600554600160b01b900460ff1615610c04576040805162461bcd60e51b815260206004820152600e60248201527f414c52454144595f495353554544000000000000000000000000000000000000604482015290519081900360640190fd5b6001805460408051630ab714fb60e11b81526001600160a01b0385811660048301526024820194909452620f424060448201529051929091169163156e29f69160648082019260009290919082900301818387803b158015610c6557600080fd5b505af1158015610c79573d6000803e3d6000fd5b5050600580547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16600160b01b179055505060408051620f4240815290516001600160a01b038316917fd3b35edb38a682f96e511f1d436c7b690071bb8a37a40ad9fce8a13afea591c4919081900360200190a250565b3360009081526020819052604090205460ff16151560011480610d1257503033145b610d4d5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600180546001600160a01b03199081166001600160a01b0397881617909155600280548216958716959095179094556003805485169386169390931790925560048054841691851691909117905560058054600160a01b931691909316177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16179055565b600554600160a01b900460ff1690565b3360009081526020819052604090205460ff16151560011480610e0457503033145b610e3f5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600154604080517f85efa54c0000000000000000000000000000000000000000000000000000000081526001600160a01b039092166004830152602482018390525173__$415eb1c69eabc622d82690315fa0e33bfb$__916385efa54c916044808301926000929190829003018186803b158015610ebc57600080fd5b505af4158015610ed0573d6000803e3d6000fd5b5050505050565b3360009081526020819052604081205460ff16151560011480610ef957503033145b610f345760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b73__$415eb1c69eabc622d82690315fa0e33bfb$__631500cfba600260009054906101000a90046001600160a01b03168b8b8b8b8b8b8b8b6040518a63ffffffff1660e01b8152600401808a6001600160a01b031681526020018060200180602001898152602001888152602001878152602001868152602001858152602001846001600160a01b0316815260200183810383528b818151815260200191508051906020019080838360005b83811015610ff8578181015183820152602001610fe0565b50505050905090810190601f1680156110255780820380516001836020036101000a031916815260200191505b5083810382528a5181528a516020918201918c019080838360005b83811015611058578181015183820152602001611040565b50505050905090810190601f1680156110855780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060206040518083038186803b1580156110ab57600080fd5b505af41580156110bf573d6000803e3d6000fd5b505050506040513d60208110156110d557600080fd5b505190506110e43380836121c9565b98975050505050505050565b3360009081526020819052604090205460ff1615156001148061111257503033145b61114d5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526020819052604090205460ff1615156001148061119157503033145b6111cc5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600154604080517fed7aae2b000000000000000000000000000000000000000000000000000000008152600060048201819052915191926001600160a01b03169163ed7aae2b91602480820192602092909190829003018186803b15801561123357600080fd5b505afa158015611247573d6000803e3d6000fd5b505050506040513d602081101561125d57600080fd5b50519050620f424081106112715750611327565b6001805460408051630ab714fb60e11b81526001600160a01b03868116600483015260006024830181905260448301959095529151919092169263156e29f6926064808201939182900301818387803b1580156112cd57600080fd5b505af11580156112e1573d6000803e3d6000fd5b5050604080516001815290516001600160a01b03861693507f1b9ddf8f7c45e0567932349c127951357a3f9b5a821eeeec6e44d771debbb49092509081900360200190a2505b50565b3360009081526020819052604090205460ff1615156001148061134c57503033145b6113875760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600073__$c2cf3eebb563d155e336d59c40be15cffe$__63f87924d08585856040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b03168152602001828152602001935050505060206040518083038186803b15801561141c57600080fd5b505af4158015611430573d6000803e3d6000fd5b505050506040513d602081101561144657600080fd5b505160015460045491925061146e9130916001600160a01b0390811691168960028a87612566565b5095945050505050565b3360009081526020819052604081205460ff1615156001148061149a57503033145b6114d55760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b73__$415eb1c69eabc622d82690315fa0e33bfb$__631500cfba600260009054906101000a90046001600160a01b03168b8b8b8b8b8b8b8b6040518a63ffffffff1660e01b8152600401808a6001600160a01b031681526020018060200180602001898152602001888152602001878152602001868152602001858152602001846001600160a01b0316815260200183810383528b818151815260200191508051906020019080838360005b83811015611599578181015183820152602001611581565b50505050905090810190601f1680156115c65780820380516001836020036101000a031916815260200191505b5083810382528a5181528a516020918201918c019080838360005b838110156115f95781810151838201526020016115e1565b50505050905090810190601f1680156116265780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060206040518083038186803b15801561164c57600080fd5b505af4158015611660573d6000803e3d6000fd5b505050506040513d602081101561167657600080fd5b5051604080517f02d05d3f00000000000000000000000000000000000000000000000000000000815290519192506110e4916001600160a01b038416916302d05d3f916004808301926020929190829003018186803b1580156116d857600080fd5b505afa1580156116ec573d6000803e3d6000fd5b505050506040513d602081101561170257600080fd5b5051604080517f041ae88000000000000000000000000000000000000000000000000000000000815290516001600160a01b0385169163041ae880916004808301926020929190829003018186803b15801561175d57600080fd5b505afa158015611771573d6000803e3d6000fd5b505050506040513d602081101561178757600080fd5b5051836121c9565b600073__$c2cf3eebb563d155e336d59c40be15cffe$__6367083d6c8a8a8a8a8a8a8a8a6040518963ffffffff1660e01b8152600401808060200180602001898152602001888152602001878152602001868152602001858152602001846001600160a01b0316815260200183810383528b818151815260200191508051906020019080838360005b83811015611830578181015183820152602001611818565b50505050905090810190601f16801561185d5780820380516001836020036101000a031916815260200191505b5083810382528a5181528a516020918201918c019080838360005b83811015611890578181015183820152602001611878565b50505050905090810190601f1680156118bd5780820380516001836020036101000a031916815260200191505b509a505050505050505050505060206040518083038186803b1580156118e257600080fd5b505af41580156118f6573d6000803e3d6000fd5b505050506040513d602081101561190c57600080fd5b50516001546004549192506119349130916001600160a01b0390811691168e60008f87612566565b509a9950505050505050505050565b3360009081526020819052604090205460ff1615156001148061196557503033145b6119a05760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526020819052604090205460ff161515600114806119e457503033145b611a1f5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600154600254600354600554604080517f192ca8e90000000000000000000000000000000000000000000000000000000081526001600160a01b039586166004820152938516602485015230604485015291841660648401528316608483015291831660a4820152905173__$c2cf3eebb563d155e336d59c40be15cffe$__9163192ca8e99160c4808301926000929190829003018186803b158015610ebc57600080fd5b3360009081526020819052604090205460ff16151560011480611ae657503033145b611b215760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b600073__$c2cf3eebb563d155e336d59c40be15cffe$__63c9ceb9518585856040518463ffffffff1660e01b815260040180846001600160a01b0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015611bc5578181015183820152602001611bad565b50505050905090810190601f168015611bf25780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b158015611c1157600080fd5b505af4158015611c25573d6000803e3d6000fd5b505050506040513d6020811015611c3b57600080fd5b50516001805460045492935061146e9230926001600160a01b0392831692909116908a908a87612566565b6001600160a01b031660009081526020819052604090205460ff1690565b3360009081526020819052604090205460ff16151560011480611ca657503033145b611ce15760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526020819052604090205460ff16151560011480611d2557503033145b611d605760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600154604080517f8851debd0000000000000000000000000000000000000000000000000000000081526001600160a01b039092166004830152602482018390525173__$415eb1c69eabc622d82690315fa0e33bfb$__91638851debd916044808301926000929190829003018186803b158015610ebc57600080fd5b604080517fd6c49d760000000000000000000000000000000000000000000000000000000081526001600160a01b038086166004830152841660248201528215156044820152905160009173__$c2cf3eebb563d155e336d59c40be15cffe$__9163d6c49d7691606480820192602092909190829003018186803b158015611e6457600080fd5b505af4158015611e78573d6000803e3d6000fd5b505050506040513d6020811015611e8e57600080fd5b505160015460045491925061146e9130916001600160a01b0390811691168960038a87612566565b3360009081526020819052604090205460ff16151560011480611ed857503033145b611f135760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b336000908152602081905260409020805460ff19169055565b600554600160a81b900460ff1615611f8b576040805162461bcd60e51b815260206004820152600e60248201527f414c52454144595f495353554544000000000000000000000000000000000000604482015290519081900360640190fd5b60015460408051630ab714fb60e11b81526001600160a01b0384811660048301526000602483018190526207a1206044840152925193169263156e29f69260648084019391929182900301818387803b158015611fe757600080fd5b505af1158015611ffb573d6000803e3d6000fd5b5050600580547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff16600160a81b1790555050604080516207a120815290516001600160a01b038316917f1b9ddf8f7c45e0567932349c127951357a3f9b5a821eeeec6e44d771debbb490919081900360200190a250565b3360009081526020819052604090205460ff1615156001148061209457503033145b6120cf5760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b6001805460408051630ab714fb60e11b81526001600160a01b0386811660048301526024820194909452604481018590529051929091169163156e29f69160648082019260009290919082900301818387803b15801561212e57600080fd5b505af1158015612142573d6000803e3d6000fd5b505050505050565b3360009081526020819052604090205460ff1615156001148061216c57503033145b6121a75760405162461bcd60e51b81526004018080602001828103825260288152602001806128186028913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546040805163a7fc7a0760e01b81526001600160a01b0384811660048301529151919092169163a7fc7a0791602480830192600092919082900301818387803b15801561221757600080fd5b505af115801561222b573d6000803e3d6000fd5b5050600154604080517fef72f2760000000000000000000000000000000000000000000000000000000081526001600160a01b038681166004830152915191909216935063ef72f2769250602480830192600092919082900301818387803b15801561229657600080fd5b505af11580156122aa573d6000803e3d6000fd5b50506040805163a7fc7a0760e01b81526001600160a01b0385166004820152905130935063a7fc7a079250602480830192600092919082900301818387803b1580156122f557600080fd5b505af1158015612309573d6000803e3d6000fd5b50506001546040805163d104f8f560e01b81526001600160a01b0392831660048201529051918516935063d104f8f5925060248082019260009290919082900301818387803b15801561235b57600080fd5b505af115801561236f573d6000803e3d6000fd5b5050600554604080517fd73cd47f0000000000000000000000000000000000000000000000000000000081526001600160a01b0392831660048201529051918516935063d73cd47f925060248082019260009290919082900301818387803b1580156123da57600080fd5b505af11580156123ee573d6000803e3d6000fd5b5050604080517fc42cf53500000000000000000000000000000000000000000000000000000000815230600482015290516001600160a01b038516935063c42cf5359250602480830192600092919082900301818387803b15801561245257600080fd5b505af1158015612466573d6000803e3d6000fd5b5050600354604080517f9277a1850000000000000000000000000000000000000000000000000000000081526001600160a01b03928316600482015290519185169350639277a185925060248082019260009290919082900301818387803b1580156124d157600080fd5b505af11580156124e5573d6000803e3d6000fd5b50505050806001600160a01b0316632449ef5184846040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b15801561254957600080fd5b505af115801561255d573d6000803e3d6000fd5b50505050505050565b6000856001600160a01b0316634c300076868585886040518563ffffffff1660e01b815260040180856001600160a01b0316815260200180602001846001600160a01b031681526020018360038111156125bc57fe5b8152602001828103825285818151815260200191508051906020019080838360005b838110156125f65781810151838201526020016125de565b50505050905090810190601f1680156126235780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561264557600080fd5b505af1158015612659573d6000803e3d6000fd5b505050506040513d602081101561266f57600080fd5b50516040805163d104f8f560e01b81526001600160a01b038a8116600483015291519293509083169163d104f8f59160248082019260009290919082900301818387803b1580156126bf57600080fd5b505af11580156126d3573d6000803e3d6000fd5b50505050806001600160a01b031663c42cf535896040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561272657600080fd5b505af115801561273a573d6000803e3d6000fd5b50505050866001600160a01b031663a7fc7a07826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561278d57600080fd5b505af11580156127a1573d6000803e3d6000fd5b50505050876001600160a01b031663a7fc7a07826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156127f457600080fd5b505af1158015612808573d6000803e3d6000fd5b5050505097965050505050505056fe436f6e74726f6c6c61626c653a2063616c6c6572206973206e6f74206120636f6e74726f6c6c6572a26469706673582212208f3549fceefe520e8b890281e30ef5c308785d222da47fe6850fd7ef9827bfb064736f6c63430007030033";

export interface NFTGemGovernorLibraryAddresses {
  ["__$415eb1c69eabc622d82690315fa0e33bfb$__"]: string;
  ["__$c2cf3eebb563d155e336d59c40be15cffe$__"]: string;
}