import {Contract, ethers} from 'ethers';
import {Web3Provider} from '@ethersproject/providers';
import {GemContracts, Web3BitgemContext} from 'components/web3-bitgem-context';
import {networks} from 'constants/networks';

export const getWalletName = (chainId: number, account: string): string =>
  `${networks[chainId]?.name ?? 'unknown'}-${account.substring(
    0,
    3
  )}...${account.substring(account.length - 2)}`;

const getContractRef = async (
  contractData: any,
  contract: string,
  signer: ethers.providers.JsonRpcSigner,
  library: ethers.providers.Provider,
  address?: string
): Promise<Contract> => {
  const tokenData = contractData.contracts[contract];
  if (tokenData) {
    return new Contract(
      address ? address : tokenData.address,
      tokenData.abi,
      signer ?? library
    );
  }
};

const importContractData = async (chainId: number) => {
  let module;
  switch (chainId) {
    case 1337: {
      module = await import('../../abis/1337/bitgems.json');
      break;
    }
  }
  return module?.default ?? null;
};

export const loadBitgemContext = async (
  chainId: number,
  library: Web3Provider,
  account: string
): Promise<Web3BitgemContext> => {
  if (!chainId) throw new Error('Not connected');

  const contractData = await importContractData(chainId);
  console.log('CONTRACTDATA: ', {contractData});
  if (contractData === null) throw new Error('Invalid Network');
  const signer = library.getSigner();

  const [
    token, // the primary bitgem multitoken
    factory, // the bitgem pool factory
    tokenFactory, // the bitgem pool factory
    governor // governance
  ] = await Promise.all([
    getContractRef(contractData, 'NFTGemMultiToken', signer, library),
    getContractRef(contractData, 'NFTGemPoolFactory', signer, library),
    getContractRef(contractData, 'ERC20GemTokenFactory', signer, library),
    getContractRef(contractData, 'NFTGemGovernor', signer, library)
  ]);

  return {
    chainId,
    library,
    account,
    signer,
    contracts: {token, factory, tokenFactory, governor} as GemContracts
  };
};
