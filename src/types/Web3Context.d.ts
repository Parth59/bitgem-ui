import {ethers, Web3Provider} from 'ethers';
import {
  NFTGemMultiToken,
  ERC20GemTokenFactory,
  NFTGemGovernor,
  NFTGemPoolFactory
} from '../../types';

export type GemContracts = {
  token: NFTGemMultiToken;
  factory: NFTGemPoolFactory;
  tokenFactory: ERC20GemTokenFactory;
  governor: NFTGemGovernor;
};

export type Web3Context = {
  chainId: number;
  library: Web3Provider;
  account: string;
  contracts: GemContracts | null;
  signer: ethers.providers.JsonRpcSigner | null;
};

export type SignerOrProvider =
  | ethers.providers.JsonRpcSigner
  | ethers.providers.Provider;
