/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FundProjectProposalData } from "../FundProjectProposalData";

export class FundProjectProposalData__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _receiver: string,
    _descriptionUrl: string,
    _ethAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<FundProjectProposalData> {
    return super.deploy(
      _receiver,
      _descriptionUrl,
      _ethAmount,
      overrides || {}
    ) as Promise<FundProjectProposalData>;
  }
  getDeployTransaction(
    _receiver: string,
    _descriptionUrl: string,
    _ethAmount: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _receiver,
      _descriptionUrl,
      _ethAmount,
      overrides || {}
    );
  }
  attach(address: string): FundProjectProposalData {
    return super.attach(address) as FundProjectProposalData;
  }
  connect(signer: Signer): FundProjectProposalData__factory {
    return super.connect(signer) as FundProjectProposalData__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FundProjectProposalData {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FundProjectProposalData;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_descriptionUrl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_ethAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103923803806103928339818101604052606081101561003357600080fd5b81516020830180516040519294929383019291908464010000000082111561005a57600080fd5b90830190602082018581111561006f57600080fd5b825164010000000081118282018810171561008957600080fd5b82525081516020918201929091019080838360005b838110156100b657818101518382015260200161009e565b50505050905090810190601f1680156100e35780820380516001836020036101000a031916815260200191505b50604052602090810151600080546001600160a01b0319166001600160a01b038816179055845190935061011d9250600191850190610129565b50600255506101bc9050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016a57805160ff1916838001178555610197565b82800160010185558215610197579182015b8281111561019757825182559160200191906001019061017c565b506101a39291506101a7565b5090565b5b808211156101a357600081556001016101a8565b6101c7806101cb6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806373d4a13a14610030575b600080fd5b6100386100d4565b604051808473ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561009757818101518382015260200161007f565b50505050905090810190601f1680156100c45780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b600080546002805460018054604080516020601f60001985871615610100020190941696909604928301869004860281018601909152818152606095879573ffffffffffffffffffffffffffffffffffffffff9091169492849183018282801561017f5780601f106101545761010080835404028352916020019161017f565b820191906000526020600020905b81548152906001019060200180831161016257829003601f168201915b5050505050915092509250925090919256fea26469706673582212207a4f5a178ba20b4f745657c46fbf35ab5cf9a01af31248d27b493770cfa1c05564736f6c63430007030033";
