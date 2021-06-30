/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WrapAndUnigem1155 } from "../WrapAndUnigem1155";

export class WrapAndUnigem1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides
  ): Promise<WrapAndUnigem1155> {
    return super.deploy(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    ) as Promise<WrapAndUnigem1155>;
  }
  getDeployTransaction(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    );
  }
  attach(address: string): WrapAndUnigem1155 {
    return super.attach(address) as WrapAndUnigem1155;
  }
  connect(signer: Signer): WrapAndUnigem1155__factory {
    return super.connect(signer) as WrapAndUnigem1155__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrapAndUnigem1155 {
    return new Contract(address, _abi, signerOrProvider) as WrapAndUnigem1155;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_tokenWrapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc1155",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "erc1155",
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
    name: "erc20",
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
    name: "exchange",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
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
        name: "_unigemOrder",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWrapper",
    outputs: [
      {
        internalType: "contract IERC20Wrapper",
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
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_unigemOrder",
        type: "bytes",
      },
    ],
    name: "wrapAndSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620016e7380380620016e78339810160408190526200003591620001ec565b6001600160a01b038416158015906200005657506001600160a01b03831615155b80156200006b57506001600160a01b03821615155b80156200008057506001600160a01b03811615155b620000a85760405162461bcd60e51b81526004016200009f90620002c2565b60405180910390fd5b6001600160601b0319606085811b821660805284811b821660a05283811b821660c05282901b1660e05260405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906200010490879060001990600401620002a9565b602060405180830381600087803b1580156200011f57600080fd5b505af115801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a919062000253565b506040516318fe01c760e21b81526001600160a01b038516906363f8071c906200018990859060040162000295565b60206040518083038186803b158015620001a257600080fd5b505afa158015620001b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001dd91906200027c565b61010052506200031292505050565b6000806000806080858703121562000202578384fd5b84516200020f81620002f9565b60208601519094506200022281620002f9565b60408601519093506200023581620002f9565b60608601519092506200024881620002f9565b939692955090935050565b60006020828403121562000265578081fd5b8151801515811462000275578182fd5b9392505050565b6000602082840312156200028e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252601c908201527f494e56414c494420434f4e5354525543544f5220415247554d454e5400000000604082015260600190565b6001600160a01b03811681146200030f57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005161132a620003bd60003980610387528061043752806107b852508061057b528061064652806109f852508061010252806101b2528061029b52806104fb528061087c5280610908525080610365528061070252806109d452508061026e5280610336528061040852806104ce52806106065280610789528061084f52806109b05280610a27525061132a6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c5e3dfd81161005b578063c5e3dfd8146100d5578063d2f7265a146100dd578063d56022d7146100e5578063f23a6e61146100ed5761007d565b8063785e9e8614610082578063a874d5b6146100a0578063bc197c81146100b5575b600080fd5b61008a610100565b604051610097919061100b565b60405180910390f35b6100b36100ae366004610f02565b610124565b005b6100c86100c3366004610c4f565b6105ee565b6040516100979190611151565b61008a6109ae565b61008a6109d2565b61008a6109f6565b6100c86100fb366004610d06565b610a1a565b7f000000000000000000000000000000000000000000000000000000000000000081565b61012c610a90565b61013882840184610da3565b80519092506001600160a01b03161590508061015d575080516001600160a01b031630145b6101825760405162461bcd60e51b81526004016101799061117e565b60405180910390fd5b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906101eb90339030908a9060040161101f565b602060405180830381600087803b15801561020557600080fd5b505af1158015610219573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023d9190610d7c565b506040517f8340f5490000000000000000000000000000000000000000000000000000000081526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638340f549906102c7907f00000000000000000000000000000000000000000000000000000000000000009030908a9060040161101f565b600060405180830381600087803b1580156102e157600080fd5b505af11580156102f5573d6000803e3d6000fd5b50506000805460ff1916600117905550506040517ff242432a0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a906103b59030907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b908a908a906004016110ff565b600060405180830381600087803b1580156103cf57600080fd5b505af11580156103e3573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e9061045f9030907f000000000000000000000000000000000000000000000000000000000000000090600401611138565b60206040518083038186803b15801561047757600080fd5b505afa15801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af9190610eea565b9050801561055a57604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed1290610527907f0000000000000000000000000000000000000000000000000000000000000000908990869060040161101f565b600060405180830381600087803b15801561054157600080fd5b505af1158015610555573d6000803e3d6000fd5b505050505b60208201516040808401519051631759616b60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692632eb2c2d6926105b49230928b9290916004016110a7565b600060405180830381600087803b1580156105ce57600080fd5b505af11580156105e2573d6000803e3d6000fd5b50505050505050505050565b6000805460ff16806106285750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b1561063b575063bc197c8160e01b6109a2565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106835760405162461bcd60e51b815260040161017990611297565b61068b610ac1565b61069783850185610e6d565b80519092506001600160a01b0316159050806106bc575080516001600160a01b031630145b6106d85760405162461bcd60e51b8152600401610179906111dc565b6000805460ff19166001179055604051631759616b60e11b81523390632eb2c2d6906107369030907f0000000000000000000000000000000000000000000000000000000000000000908d908d908d908d908d908d90600401611043565b600060405180830381600087803b15801561075057600080fd5b505af1158015610764573d6000803e3d6000fd5b50506000805460ff19168155604051627eeac760e11b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906107e09030907f000000000000000000000000000000000000000000000000000000000000000090600401611138565b60206040518083038186803b1580156107f857600080fd5b505afa15801561080c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108309190610eea565b9050801561099557604051636ce5768960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d9caed12906108a8907f0000000000000000000000000000000000000000000000000000000000000000903090869060040161101f565b600060405180830381600087803b1580156108c257600080fd5b505af11580156108d6573d6000803e3d6000fd5b50506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb9150610941908d908590600401611138565b602060405180830381600087803b15801561095b57600080fd5b505af115801561096f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109939190610d7c565b505b5063bc197c8160e01b9150505b98975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a645760405162461bcd60e51b81526004016101799061123a565b507ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b0381168114610b0257600080fd5b919050565b60008083601f840112610b18578182fd5b50813567ffffffffffffffff811115610b2f578182fd5b6020830191508360208083028501011115610b4957600080fd5b9250929050565b600082601f830112610b60578081fd5b813567ffffffffffffffff80821115610b7557fe5b602080830260405182828201018181108582111715610b9057fe5b604052848152945081850192508582018187018301881015610bb157600080fd5b600091505b84821015610bd4578035845292820192600191909101908201610bb6565b505050505092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610b0257600080fd5b60008083601f840112610c20578182fd5b50813567ffffffffffffffff811115610c37578182fd5b602083019150836020828501011115610b4957600080fd5b60008060008060008060008060a0898b031215610c6a578384fd5b610c7389610aeb565b9750610c8160208a01610aeb565b9650604089013567ffffffffffffffff80821115610c9d578586fd5b610ca98c838d01610b07565b909850965060608b0135915080821115610cc1578586fd5b610ccd8c838d01610b07565b909650945060808b0135915080821115610ce5578384fd5b50610cf28b828c01610c0f565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610d1e578182fd5b610d2787610aeb565b9550610d3560208801610aeb565b94506040870135935060608701359250608087013567ffffffffffffffff811115610d5e578283fd5b610d6a89828a01610c0f565b979a9699509497509295939492505050565b600060208284031215610d8d578081fd5b81518015158114610d9c578182fd5b9392505050565b60008060408385031215610db5578182fd5b610dbe83610bdf565b9150602083013567ffffffffffffffff80821115610dda578283fd5b9084019060808287031215610ded578283fd5b604051608081018181108382111715610e0257fe5b604052610e0e83610aeb565b8152602083013582811115610e21578485fd5b610e2d88828601610b50565b602083015250604083013582811115610e44578485fd5b610e5088828601610b50565b604083015250606083013560608201528093505050509250929050565b6000808284036080811215610e80578283fd5b610e8984610bdf565b92506060601f1982011215610e9c578182fd5b506040516060810181811067ffffffffffffffff82111715610eba57fe5b604052610ec960208501610aeb565b81526040840135602082015260608401356040820152809150509250929050565b600060208284031215610efb578081fd5b5051919050565b60008060008060608587031215610f17578384fd5b84359350610f2760208601610aeb565b9250604085013567ffffffffffffffff811115610f42578283fd5b610f4e87828801610c0f565b95989497509550505050565b60008284527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610f8b578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b83811015610fd657815187529582019590820190600101610fba565b509495945050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03808b168352808a1660208401525060a0604083015261107060a08301888a610f5a565b8281036060840152611083818789610f5a565b90508281036080840152611098818587610fe1565b9b9a5050505050505050505050565b60006001600160a01b03808716835280861660208401525060a060408301526110d360a0830185610fa7565b82810360608401526110e58185610fa7565b838103608090940193909352508152602001949350505050565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301526109a260a083018486610fe1565b6001600160a01b03929092168252602082015260400190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b602080825260409082018190527f57726170416e64556e6967656d2377726170416e64537761703a204f52444552908201527f20524543495049454e54204d555354204245205448495320434f4e5452414354606082015260800190565b602080825260409082018190527f57726170416e64556e6967656d236f6e45524331313535426174636852656365908201527f697665643a2052435054204d555354204245205448495320434f4e5452414354606082015260800190565b60208082526039908201527f57726170416e64556e6967656d236f6e4552433131353552656365697665643a60408201527f20494e56414c49445f455243313135355f524543454956454400000000000000606082015260800190565b6020808252603e908201527f57726170416e64556e6967656d236f6e4552433131353542617463685265636560408201527f697665643a20494e56414c49445f455243313135355f5245434549564544000060608201526080019056fea26469706673582212204fc453581c144648a0c48edf027f2c6c0de98d20c8b13ab353bba98d8d4dc64e64736f6c63430007030033";
