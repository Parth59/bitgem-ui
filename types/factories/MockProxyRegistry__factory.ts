/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockProxyRegistry } from "../MockProxyRegistry";

export class MockProxyRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockProxyRegistry> {
    return super.deploy(overrides || {}) as Promise<MockProxyRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockProxyRegistry {
    return super.attach(address) as MockProxyRegistry;
  }
  connect(signer: Signer): MockProxyRegistry__factory {
    return super.connect(signer) as MockProxyRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as MockProxyRegistry;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "input",
        type: "address",
      },
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c28061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c455279114602d575b600080fd5b605d60048036036020811015604157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166086565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b5060009056fea2646970667358221220b6bccb0a56f848ac8bbb54a1f4774f04f80e17116a57d3f1161e98a95ba2e98a64736f6c63430007030033";
