/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUpdateAllowlistProposalData } from "../IUpdateAllowlistProposalData";

export class IUpdateAllowlistProposalData__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUpdateAllowlistProposalData {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUpdateAllowlistProposalData;
  }
}

const _abi = [
  {
    inputs: [],
    name: "data",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];