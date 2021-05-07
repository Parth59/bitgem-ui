/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20WrappedERC1155 } from "../ERC20WrappedERC1155";

export class ERC20WrappedERC1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    erc1155Token: string,
    tokenIndex: BigNumberish,
    exchangeRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ERC20WrappedERC1155> {
    return super.deploy(
      name,
      symbol,
      decimals,
      erc1155Token,
      tokenIndex,
      exchangeRate,
      overrides || {}
    ) as Promise<ERC20WrappedERC1155>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    erc1155Token: string,
    tokenIndex: BigNumberish,
    exchangeRate: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      decimals,
      erc1155Token,
      tokenIndex,
      exchangeRate,
      overrides || {}
    );
  }
  attach(address: string): ERC20WrappedERC1155 {
    return super.attach(address) as ERC20WrappedERC1155;
  }
  connect(signer: Signer): ERC20WrappedERC1155__factory {
    return super.connect(signer) as ERC20WrappedERC1155__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20WrappedERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC20WrappedERC1155;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "erc1155Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exchangeRate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "unwrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "wrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a2c38038062001a2c833981810160405260c08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208281015191830151606084015160809094015188519396509094509187918791620001d29160039190850190620002f3565b508051620001e8906004906020840190620002f3565b50506005805460ff19166012179055506200020a6301ffc9a760e01b62000258565b6200021c630271189760e51b62000258565b600780546001600160a01b0319166001600160a01b038516179055600882905560098190556200024c84620002dd565b5050505050506200038f565b6001600160e01b03198082161415620002b8576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600660205260409020805460ff19166001179055565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200033657805160ff191683800117855562000366565b8280016001018555821562000366579182015b828111156200036657825182559160200191906001019062000349565b506200037492915062000378565b5090565b5b8082111562000374576000815560010162000379565b61168d806200039f6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806395d89b4111610097578063dd62ed3e11610066578063dd62ed3e14610578578063de0e9a3e146105b3578063ea598cb0146105d2578063f23a6e61146105ef57610100565b806395d89b41146102f5578063a457c2d7146102fd578063a9059cbb14610336578063bc197c811461036f57610100565b806323b872dd116100d357806323b872dd14610228578063313ce5671461026b578063395093511461028957806370a08231146102c257610100565b806301ffc9a71461010557806306fdde0314610158578063095ea7b3146101d557806318160ddd1461020e575b600080fd5b6101446004803603602081101561011b57600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166106c7565b604080519115158252519081900360200190f35b6101606106fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019a578181015183820152602001610182565b50505050905090810190601f1680156101c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610144600480360360408110156101eb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107b2565b6102166107d0565b60408051918252519081900360200190f35b6101446004803603606081101561023e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107d6565b610273610877565b6040805160ff9092168252519081900360200190f35b6101446004803603604081101561029f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610880565b610216600480360360208110156102d857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108db565b610160610903565b6101446004803603604081101561031357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610982565b6101446004803603604081101561034c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109f7565b610543600480360360a081101561038557600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156103c657600080fd5b8201836020820111156103d857600080fd5b803590602001918460208302840111640100000000831117156103fa57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561044a57600080fd5b82018360208201111561045c57600080fd5b8035906020019184602083028401116401000000008311171561047e57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156104ce57600080fd5b8201836020820111156104e057600080fd5b8035906020019184600183028401116401000000008311171561050257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a0b945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b6102166004803603604081101561058e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610a35565b6105d0600480360360208110156105c957600080fd5b5035610a6d565b005b6105d0600480360360208110156105e857600080fd5b5035610c0d565b610543600480360360a081101561060557600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561065257600080fd5b82018360208201111561066457600080fd5b8035906020019184600183028401116401000000008311171561068657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e1b945050505050565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526006602052604090205460ff1690565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107a85780601f1061077d576101008083540402835291602001916107a8565b820191906000526020600020905b81548152906001019060200180831161078b57829003601f168201915b5050505050905090565b60006107c66107bf610e45565b8484610e49565b5060015b92915050565b60025490565b60006107e3848484610f5c565b61086d846107ef610e45565b610868856040518060600160405280602881526020016115a16028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061083a610e45565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205491906110f8565b610e49565b5060019392505050565b60055460ff1690565b60006107c661088d610e45565b84610868856001600061089e610e45565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549061118f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107a85780601f1061077d576101008083540402835291602001916107a8565b60006107c661098f610e45565b846108688560405180606001604052806025815260200161163360259139600160006109b9610e45565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d168152925290205491906110f8565b60006107c6610a04610e45565b8484610f5c565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b80610abf576040805162461bcd60e51b815260206004820152600d60248201527f5a45524f5f5155414e5449545900000000000000000000000000000000000000604482015290519081900360640190fd5b610adb610aca610877565b600954839160ff16600a0a026111f0565b610ae4336108db565b1015610b37576040805162461bcd60e51b815260206004820152601a60248201527f494e53554646494349454e545f45524332305f42414c414e4345000000000000604482015290519081900360640190fd5b610b5c33610b57610b46610877565b600954859160ff16600a0a026111f0565b611249565b600754600854604080517ff242432a00000000000000000000000000000000000000000000000000000000815230600482015233602482015260448101929092526064820184905260a06084830152600060a48301819052905173ffffffffffffffffffffffffffffffffffffffff9093169263f242432a9260e480820193929182900301818387803b158015610bf257600080fd5b505af1158015610c06573d6000803e3d6000fd5b5050505050565b80610c5f576040805162461bcd60e51b815260206004820152600d60248201527f5a45524f5f5155414e5449545900000000000000000000000000000000000000604482015290519081900360640190fd5b600754600854604080517efdd58e000000000000000000000000000000000000000000000000000000008152336004820152602481019290925251839273ffffffffffffffffffffffffffffffffffffffff169162fdd58e916044808301926020929190829003018186803b158015610cd757600080fd5b505afa158015610ceb573d6000803e3d6000fd5b505050506040513d6020811015610d0157600080fd5b50511015610d56576040805162461bcd60e51b815260206004820152601c60248201527f494e53554646494349454e545f455243313135355f42414c414e434500000000604482015290519081900360640190fd5b600754600854604080517ff242432a00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101929092526064820184905260a06084830152600060a48301819052905173ffffffffffffffffffffffffffffffffffffffff9093169263f242432a9260e480820193929182900301818387803b158015610dec57600080fd5b505af1158015610e00573d6000803e3d6000fd5b50505050610e1833610e13610b46610877565b611379565b50565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610e9b5760405162461bcd60e51b815260040180806020018281038252602481526020018061160f6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eed5760405162461bcd60e51b81526004018080602001828103825260228152602001806115386022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fae5760405162461bcd60e51b81526004018080602001828103825260258152602001806115ea6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110005760405162461bcd60e51b81526004018080602001828103825260238152602001806114f36023913960400191505060405180910390fd5b61100b838383611490565b6110558160405180606001604052806026815260200161155a6026913973ffffffffffffffffffffffffffffffffffffffff861660009081526020819052604090205491906110f8565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054611091908261118f565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156111875760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561114c578181015183820152602001611134565b50505050905090810190601f1680156111795780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156111e9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000826111ff575060006107ca565b8282028284828161120c57fe5b04146111e95760405162461bcd60e51b81526004018080602001828103825260218152602001806115806021913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661129b5760405162461bcd60e51b81526004018080602001828103825260218152602001806115c96021913960400191505060405180910390fd5b6112a782600083611490565b6112f1816040518060600160405280602281526020016115166022913973ffffffffffffffffffffffffffffffffffffffff851660009081526020819052604090205491906110f8565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020556002546113249082611495565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b73ffffffffffffffffffffffffffffffffffffffff82166113e1576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6113ed60008383611490565b6002546113fa908261118f565b60025573ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205461142d908261118f565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828211156114ec576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212202afc65fb0e85470aa9a53dc1a49cf30d146b8571cc59c3041ab533e5df19f64964736f6c63430007030033";
