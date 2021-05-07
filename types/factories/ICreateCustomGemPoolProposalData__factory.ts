/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICreateCustomGemPoolProposalData } from "../ICreateCustomGemPoolProposalData";

export class ICreateCustomGemPoolProposalData__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreateCustomGemPoolProposalData {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICreateCustomGemPoolProposalData;
  }
}

const _abi = [
  {
    inputs: [],
    name: "data",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
