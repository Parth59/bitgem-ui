/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUnigem20Callee } from "../IUnigem20Callee";

export class IUnigem20Callee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUnigem20Callee {
    return new Contract(address, _abi, signerOrProvider) as IUnigem20Callee;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Unigem20Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
