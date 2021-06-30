/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapQueryHelper } from "../UniswapQueryHelper";

export class UniswapQueryHelper__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: UniswapQueryHelperLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      UniswapQueryHelper__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: UniswapQueryHelperLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$edf965422c4d699000d67e21efcd5710bc\\$__", "g"),
      linkLibraryAddresses["__$edf965422c4d699000d67e21efcd5710bc$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<UniswapQueryHelper> {
    return super.deploy(overrides || {}) as Promise<UniswapQueryHelper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapQueryHelper {
    return super.attach(address) as UniswapQueryHelper;
  }
  connect(signer: Signer): UniswapQueryHelper__factory {
    return super.connect(signer) as UniswapQueryHelper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapQueryHelper {
    return new Contract(address, _abi, signerOrProvider) as UniswapQueryHelper;
  }
}

const _abi = [
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
    inputs: [],
    name: "COIN",
    outputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "coinQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "ethereum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenReserve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethReserve",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "fac",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getPathForCoinToToken",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "hasPool",
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
        name: "f",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109b2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063a54a72b711610081578063c45a01551161005b578063c45a01551461029f578063e1c28bef146102a7578063e6a43905146102af576100c9565b8063a54a72b71461022f578063a7fc7a0714610253578063b429afeb14610279576100c9565b80633e99c1e4116100b25780633e99c1e41461017e5780635bb47808146101bd578063868d2d1e146101e5576100c9565b806309666696146100ce5780631246dbf514610144575b600080fd5b6100f4600480360360208110156100e457600080fd5b50356001600160a01b03166102dd565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610130578181015183820152602001610118565b505050509050019250505060405180910390f35b61016a6004803603602081101561015a57600080fd5b50356001600160a01b0316610407565b604080519115158252519081900360200190f35b6101a46004803603602081101561019457600080fd5b50356001600160a01b0316610493565b6040805192835260208301919091528051918290030190f35b6101e3600480360360208110156101d357600080fd5b50356001600160a01b031661052a565b005b610211600480360360408110156101fb57600080fd5b506001600160a01b0381351690602001356105c1565b60408051938452602084019290925282820152519081900360600190f35b61023761066b565b604080516001600160a01b039092168252519081900360200190f35b6101e36004803603602081101561026957600080fd5b50356001600160a01b03166106e2565b61016a6004803603602081101561028f57600080fd5b50356001600160a01b0316610763565b610237610781565b6101e3610790565b610237600480360360408110156102c557600080fd5b506001600160a01b0381358116916020013516610806565b606073__$edf965422c4d699000d67e21efcd5710bc$__637dddfe9f836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060006040518083038186803b15801561033757600080fd5b505af415801561034b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561037457600080fd5b810190808051604051939291908464010000000082111561039457600080fd5b9083019060208201858111156103a957600080fd5b82518660208202830111640100000000821117156103c657600080fd5b82525081516020918201928201910280838360005b838110156103f35781810151838201526020016103db565b505050509050016040525050509050919050565b600073__$edf965422c4d699000d67e21efcd5710bc$__631246dbf5836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561046157600080fd5b505af4158015610475573d6000803e3d6000fd5b505050506040513d602081101561048b57600080fd5b505192915050565b60008073__$edf965422c4d699000d67e21efcd5710bc$__633e99c1e4846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050604080518083038186803b1580156104ed57600080fd5b505af4158015610501573d6000803e3d6000fd5b505050506040513d604081101561051757600080fd5b5080516020909101519094909350915050565b3360009081526020819052604090205460ff1615156001148061054c57503033145b6105875760405162461bcd60e51b81526004018080602001828103825260288152602001806109556028913960400191505060405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600080600073__$edf965422c4d699000d67e21efcd5710bc$__631874f0a986866040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060606040518083038186803b15801561062657600080fd5b505af415801561063a573d6000803e3d6000fd5b505050506040513d606081101561065057600080fd5b50805160208201516040909201519097919650945092505050565b600073__$edf965422c4d699000d67e21efcd5710bc$__63ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b1580156106b157600080fd5b505af41580156106c5573d6000803e3d6000fd5b505050506040513d60208110156106db57600080fd5b5051919050565b3360009081526020819052604090205460ff1615156001148061070457503033145b61073f5760405162461bcd60e51b81526004018080602001828103825260288152602001806109556028913960400191505060405180910390fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b6001600160a01b031660009081526020819052604090205460ff1690565b600061078b6108bc565b905090565b3360009081526020819052604090205460ff161515600114806107b257503033145b6107ed5760405162461bcd60e51b81526004018080602001828103825260288152602001806109556028913960400191505060405180910390fd5b336000908152602081905260409020805460ff19169055565b600073__$edf965422c4d699000d67e21efcd5710bc$__6361e0b77f61082a6108bc565b85856040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b03168152602001826001600160a01b03168152602001935050505060206040518083038186803b15801561088957600080fd5b505af415801561089d573d6000803e3d6000fd5b505050506040513d60208110156108b357600080fd5b50519392505050565b6001546000906001600160a01b03166109445773__$edf965422c4d699000d67e21efcd5710bc$__63c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561091357600080fd5b505af4158015610927573d6000803e3d6000fd5b505050506040513d602081101561093d57600080fd5b505161078b565b506001546001600160a01b03169056fe436f6e74726f6c6c61626c653a2063616c6c6572206973206e6f74206120636f6e74726f6c6c6572a264697066735822122052ff99cdfd5b714c0461fbeb894db7030c64499e0a138bf89f8480c845408df964736f6c63430007030033";

export interface UniswapQueryHelperLibraryAddresses {
  ["__$edf965422c4d699000d67e21efcd5710bc$__"]: string;
}