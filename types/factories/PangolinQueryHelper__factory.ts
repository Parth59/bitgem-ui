/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PangolinQueryHelper } from "../PangolinQueryHelper";

export class PangolinQueryHelper__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: PangolinQueryHelperLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      PangolinQueryHelper__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: PangolinQueryHelperLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1e02c994691d2b125c26964ddf99eecd4d\\$__", "g"),
      linkLibraryAddresses["__$1e02c994691d2b125c26964ddf99eecd4d$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<PangolinQueryHelper> {
    return super.deploy(overrides || {}) as Promise<PangolinQueryHelper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PangolinQueryHelper {
    return super.attach(address) as PangolinQueryHelper;
  }
  connect(signer: Signer): PangolinQueryHelper__factory {
    return super.connect(signer) as PangolinQueryHelper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PangolinQueryHelper {
    return new Contract(address, _abi, signerOrProvider) as PangolinQueryHelper;
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
    inputs: [],
    name: "FUJI_PANGOLIN_ROUTER_ADDRESS",
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
    name: "PANGOLIN_ROUTER_ADDRESS",
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
    stateMutability: "pure",
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
        name: "",
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
  "0x608060405234801561001057600080fd5b50600180546001600160a01b03191673efa94de7a4656d787667c749f7e1223d71e9fd8817905561098b806100466000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063868d2d1e1161008c578063b429afeb11610066578063b429afeb1461029f578063c45a0155146102c5578063e1c28bef146102cd578063e6a43905146102d5576100df565b8063868d2d1e14610227578063a54a72b714610271578063a7fc7a0714610279576100df565b80633ba130d6116100bd5780633ba130d6146101b85780633e99c1e4146101c05780635bb47808146101ff576100df565b806309666696146100e45780631139cde01461015a5780631246dbf51461017e575b600080fd5b61010a600480360360208110156100fa57600080fd5b50356001600160a01b0316610303565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014657818101518382015260200161012e565b505050509050019250505060405180910390f35b61016261042d565b604080516001600160a01b039092168252519081900360200190f35b6101a46004803603602081101561019457600080fd5b50356001600160a01b0316610445565b604080519115158252519081900360200190f35b6101626104d1565b6101e6600480360360208110156101d657600080fd5b50356001600160a01b03166104e9565b6040805192835260208301919091528051918290030190f35b6102256004803603602081101561021557600080fd5b50356001600160a01b0316610580565b005b6102536004803603604081101561023d57600080fd5b506001600160a01b038135169060200135610583565b60408051938452602084019290925282820152519081900360600190f35b61016261062d565b6102256004803603602081101561028f57600080fd5b50356001600160a01b03166106a4565b6101a4600480360360208110156102b557600080fd5b50356001600160a01b0316610725565b610162610743565b610225610789565b610162600480360360408110156102eb57600080fd5b506001600160a01b03813581169160200135166107ff565b606073__$1e02c994691d2b125c26964ddf99eecd4d$__6326edfd81836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060006040518083038186803b15801561035d57600080fd5b505af4158015610371573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561039a57600080fd5b81019080805160405193929190846401000000008211156103ba57600080fd5b9083019060208201858111156103cf57600080fd5b82518660208202830111640100000000821117156103ec57600080fd5b82525081516020918201928201910280838360005b83811015610419578181015183820152602001610401565b505050509050016040525050509050919050565b73e4a575550c2b460d2307b82dcd7afe84ad1484dd81565b600073__$1e02c994691d2b125c26964ddf99eecd4d$__631246dbf5836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561049f57600080fd5b505af41580156104b3573d6000803e3d6000fd5b505050506040513d60208110156104c957600080fd5b505192915050565b73efa94de7a4656d787667c749f7e1223d71e9fd8881565b60008073__$1e02c994691d2b125c26964ddf99eecd4d$__633e99c1e4846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050604080518083038186803b15801561054357600080fd5b505af4158015610557573d6000803e3d6000fd5b505050506040513d604081101561056d57600080fd5b5080516020909101519094909350915050565b50565b600080600073__$1e02c994691d2b125c26964ddf99eecd4d$__639df2762886866040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060606040518083038186803b1580156105e857600080fd5b505af41580156105fc573d6000803e3d6000fd5b505050506040513d606081101561061257600080fd5b50805160208201516040909201519097919650945092505050565b600073__$1e02c994691d2b125c26964ddf99eecd4d$__6373b295c26040518163ffffffff1660e01b815260040160206040518083038186803b15801561067357600080fd5b505af4158015610687573d6000803e3d6000fd5b505050506040513d602081101561069d57600080fd5b5051919050565b3360009081526020819052604090205460ff161515600114806106c657503033145b6107015760405162461bcd60e51b815260040180806020018281038252602881526020018061092e6028913960400191505060405180910390fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b6001600160a01b031660009081526020819052604090205460ff1690565b600073__$1e02c994691d2b125c26964ddf99eecd4d$__63c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561067357600080fd5b3360009081526020819052604090205460ff161515600114806107ab57503033145b6107e65760405162461bcd60e51b815260040180806020018281038252602881526020018061092e6028913960400191505060405180910390fd5b336000908152602081905260409020805460ff19169055565b60008073__$1e02c994691d2b125c26964ddf99eecd4d$__63c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561084657600080fd5b505af415801561085a573d6000803e3d6000fd5b505050506040513d602081101561087057600080fd5b5051604080517f61e0b77f0000000000000000000000000000000000000000000000000000000081526001600160a01b038084166004830152808816602483015286166044820152905191925073__$1e02c994691d2b125c26964ddf99eecd4d$__916361e0b77f91606480820192602092909190829003018186803b1580156108f957600080fd5b505af415801561090d573d6000803e3d6000fd5b505050506040513d602081101561092357600080fd5b505194935050505056fe436f6e74726f6c6c61626c653a2063616c6c6572206973206e6f74206120636f6e74726f6c6c6572a2646970667358221220626c8a3df0dc46afbc595643f07a0eedb18020f8a048e7dcf2dca46b581b954964736f6c63430007030033";

export interface PangolinQueryHelperLibraryAddresses {
  ["__$1e02c994691d2b125c26964ddf99eecd4d$__"]: string;
}