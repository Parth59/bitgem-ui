/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155MintBurnPackedBalance } from "../ERC1155MintBurnPackedBalance";

export class ERC1155MintBurnPackedBalance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1155MintBurnPackedBalance> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC1155MintBurnPackedBalance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155MintBurnPackedBalance {
    return super.attach(address) as ERC1155MintBurnPackedBalance;
  }
  connect(signer: Signer): ERC1155MintBurnPackedBalance__factory {
    return super.connect(signer) as ERC1155MintBurnPackedBalance__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MintBurnPackedBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MintBurnPackedBalance;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061177a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c8063a22cb46511610076578063e985e9c51161005b578063e985e9c5146104c4578063eaec5f81146104f2578063f242432a14610515576100a2565b8063a22cb46514610460578063db90e83c1461048e576100a2565b8062fdd58e146100a757806301ffc9a7146100e55780632eb2c2d6146101205780634e1273f4146102e9575b600080fd5b6100d3600480360360408110156100bd57600080fd5b506001600160a01b0381351690602001356105e0565b60408051918252519081900360200190f35b61010c600480360360208110156100fb57600080fd5b50356001600160e01b031916610628565b604080519115158252519081900360200190f35b6102e7600480360360a081101561013657600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561016a57600080fd5b82018360208201111561017c57600080fd5b8035906020019184602083028401116401000000008311171561019e57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101ee57600080fd5b82018360208201111561020057600080fd5b8035906020019184602083028401116401000000008311171561022257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561027257600080fd5b82018360208201111561028457600080fd5b803590602001918460018302840111640100000000831117156102a657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610675945050505050565b005b610410600480360360408110156102ff57600080fd5b81019060208101813564010000000081111561031a57600080fd5b82018360208201111561032c57600080fd5b8035906020019184602083028401116401000000008311171561034e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561039e57600080fd5b8201836020820111156103b057600080fd5b803590602001918460208302840111640100000000831117156103d257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610732945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561044c578181015183820152602001610434565b505050509050019250505060405180910390f35b6102e76004803603604081101561047657600080fd5b506001600160a01b0381351690602001351515610949565b6104ab600480360360208110156104a457600080fd5b50356109b7565b6040805192835260208301919091528051918290030190f35b61010c600480360360408110156104da57600080fd5b506001600160a01b03813581169160200135166109c4565b6100d36004803603604081101561050857600080fd5b50803590602001356109f2565b6102e7600480360360a081101561052b57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561056b57600080fd5b82018360208201111561057d57600080fd5b8035906020019184600183028401116401000000008311171561059f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a05945050505050565b60008060006105ee846109b7565b6001600160a01b038716600090815260208181526040808320858452909152902054919350915061061f90826109f2565b95945050505050565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000141561066457506001610670565b61066d82610abb565b90505b919050565b336001600160a01b0386161480610691575061069185336109c4565b6106cc5760405162461bcd60e51b815260040180806020018281038252603c8152602001806115dd603c913960400191505060405180910390fd5b6001600160a01b0384166107115760405162461bcd60e51b815260040180806020018281038252603d8152602001806114a8603d913960400191505060405180910390fd5b61071d85858585610aed565b61072b858585855a86610e51565b5050505050565b815181516060919081146107775760405162461bcd60e51b815260040180806020018281038252603981526020018061146f6039913960400191505060405180910390fd5b6000806107978560008151811061078a57fe5b60200260200101516109b7565b915091506000806000886000815181106107ad57fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561080757600080fd5b50604051908082528060200260200182016040528015610831578160200160208202803683370190505b50905061083e83856109f2565b8160008151811061084b57fe5b602090810291909101015260015b8681101561093c5761087089828151811061078a57fe5b909650945082861415806108bf575089818151811061088b57fe5b60200260200101516001600160a01b03168a60018303815181106108ab57fe5b60200260200101516001600160a01b031614155b15610913576000808b83815181106108d357fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008781526020019081526020016000205493508592505b61091d84866109f2565b82828151811061092957fe5b6020908102919091010152600101610859565b5098975050505050505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6008810491600790911690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b336001600160a01b0386161480610a215750610a2185336109c4565b610a5c5760405162461bcd60e51b81526004018080602001828103825260378152602001806115186037913960400191505060405180910390fd5b6001600160a01b038416610aa15760405162461bcd60e51b81526004018080602001828103825260388152602001806116966038913960400191505060405180910390fd5b610aad85858585611062565b61072b858585855a866110df565b6001600160e01b031981167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b815181518114610b2e5760405162461bcd60e51b815260040180806020018281038252604281526020018061154f6042913960600191505060405180910390fd5b836001600160a01b0316856001600160a01b031614158015610b505750600081115b15610cee57600080610b688560008151811061078a57fe5b6001600160a01b038916600090815260208181526040808320858452909152812054875193955091935091610bb39190849088908590610ba457fe5b6020026020010151600161126a565b6001600160a01b03881660009081526020818152604080832087845290915281205487519293509091610bfc9190859089908590610bed57fe5b6020026020010151600061126a565b90508360015b86811015610ca957610c1989828151811061078a57fe5b9096509450818614610c7b576001600160a01b038b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610c8c84868a8481518110610ba457fe5b9350610c9f83868a8481518110610bed57fe5b9250600101610c02565b50506001600160a01b03808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610d71565b60005b81811015610d6f57828181518110610d0557fe5b6020026020010151610d2a87868481518110610d1d57fe5b60200260200101516105e0565b1015610d675760405162461bcd60e51b81526004018080602001828103825260368152602001806116196036913960400191505060405180910390fd5b600101610cf1565b505b836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610df6578181015183820152602001610dde565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610e35578181015183820152602001610e1d565b5050505090500194505050505060405180910390a45050505050565b610e63856001600160a01b03166113fb565b1561105a576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610ef4578181015183820152602001610edc565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610f33578181015183820152602001610f1b565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610f6f578181015183820152602001610f57565b50505050905090810190601f168015610f9c5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610fc157600080fd5b5087f1158015610fd5573d6000803e3d6000fd5b50505050506040513d6020811015610fec57600080fd5b505190506001600160e01b031981167fbc197c8100000000000000000000000000000000000000000000000000000000146110585760405162461bcd60e51b815260040180806020018281038252604c815260200180611591604c913960600191505060405180910390fd5b505b505050505050565b61106f8483836001611401565b61107c8383836000611401565b826001600160a01b0316846001600160a01b0316336001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6110f1856001600160a01b03166113fb565b1561105a576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561118357818101518382015260200161116b565b50505050905090810190601f1680156111b05780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156111d357600080fd5b5087f11580156111e7573d6000803e3d6000fd5b50505050506040513d60208110156111fe57600080fd5b505190506001600160e01b031981167ff23a6e6100000000000000000000000000000000000000000000000000000000146110585760405162461bcd60e51b815260040180806020018281038252604781526020018061164f6047913960600191505060405180910390fd5b60006020840263ffffffff8284600181111561128257fe5b141561131c5784821b87019250868310156112ce5760405162461bcd60e51b81526004018080602001828103825260328152602001806117136032913960400191505060405180910390fd5b64010000000087831c82168601106113175760405162461bcd60e51b81526004018080602001828103825260328152602001806117136032913960400191505060405180910390fd5b6113f1565b600184600181111561132a57fe5b14156113ba5784821b87039250868311156113765760405162461bcd60e51b81526004018080602001828103825260338152602001806114e56033913960400191505060405180910390fd5b84818389901c1610156113175760405162461bcd60e51b81526004018080602001828103825260338152602001806114e56033913960400191505060405180910390fd5b60405162461bcd60e51b81526004018080602001828103825260458152602001806116ce6045913960600191505060405180910390fd5b5050949350505050565b3b151590565b60008061140d856109b7565b6001600160a01b03881660009081526020818152604080832085845290915290205491935091506114409082868661126a565b6001600160a01b0390961660009081526020818152604080832094835293905291909120949094555050505056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a2646970667358221220fed009c699e2e3ab29ad6645352675efd28f96468d190cc042eb72227cf537b064736f6c63430007030033";
