import {ethers} from 'ethers';
import {
  NFTGemMultiToken,
  ERC20GemTokenFactory,
  NFTGemGovernor,
  NFTGemPoolFactory
} from '../../types';

export type Blockchain = {
  contracts: GemContracts | null;
  signer: ethers.providers.JsonRpcSigner | null;
};

export type SignerOrProvider =
  | ethers.providers.JsonRpcSigner
  | ethers.providers.Provider;

export type GemContracts = {
  token: NFTGemMultiToken;
  factory: NFTGemPoolFactory;
  tokenFactory: ERC20GemTokenFactory;
  governor: NFTGemGovernor;
};
