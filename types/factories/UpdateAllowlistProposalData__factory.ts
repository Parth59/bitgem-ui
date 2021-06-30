/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UpdateAllowlistProposalData } from "../UpdateAllowlistProposalData";

export class UpdateAllowlistProposalData__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _pool: string,
    _newStatus: boolean,
    overrides?: Overrides
  ): Promise<UpdateAllowlistProposalData> {
    return super.deploy(
      _token,
      _pool,
      _newStatus,
      overrides || {}
    ) as Promise<UpdateAllowlistProposalData>;
  }
  getDeployTransaction(
    _token: string,
    _pool: string,
    _newStatus: boolean,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _pool,
      _newStatus,
      overrides || {}
    );
  }
  attach(address: string): UpdateAllowlistProposalData {
    return super.attach(address) as UpdateAllowlistProposalData;
  }
  connect(signer: Signer): UpdateAllowlistProposalData__factory {
    return super.connect(signer) as UpdateAllowlistProposalData__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdateAllowlistProposalData {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpdateAllowlistProposalData;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_newStatus",
        type: "bool",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101783803806101788339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b03199081166001600160a01b0394851617825560018054909116939094169290921760ff60a01b1916600160a01b911515919091021790915560e490819061009490396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806373d4a13a14602d575b600080fd5b6033606c565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015215158183015290519081900360600190f35b60005460015473ffffffffffffffffffffffffffffffffffffffff91821692918116917401000000000000000000000000000000000000000090910460ff169056fea26469706673582212208b5be3b194789ec9b1d19c2c66e1beb26c9707e596d3cf9c15c21f3213ff5d1464736f6c63430007030033";