/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { INFTGemPoolFactory } from "../INFTGemPoolFactory";

export class INFTGemPoolFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTGemPoolFactory {
    return new Contract(address, _abi, signerOrProvider) as INFTGemPoolFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "gemSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "gemName",
        type: "string",
      },
    ],
    name: "CustomNFTGemPoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "gemSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "gemName",
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
        name: "mintTime",
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
        name: "diffstep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxMint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "NFTGemPoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "allNFTGemPools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allNFTGemPoolsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "gemSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "gemName",
        type: "string",
      },
    ],
    name: "createCustomNFTGemPool",
    outputs: [
      {
        internalType: "address payable",
        name: "",
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
        name: "gemSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "gemName",
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
        name: "maxMint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createNFTGemPool",
    outputs: [
      {
        internalType: "address payable",
        name: "",
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
        name: "_symbolHash",
        type: "uint256",
      },
    ],
    name: "getNFTGemPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
