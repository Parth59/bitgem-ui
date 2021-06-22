import {BigNumber, Contract} from 'ethers';
import {Web3Provider} from '@ethersproject/providers';
// import {GemContracts, Web3BitgemContext} from 'components/web3-bitgem-context';
import {networks} from 'constants/networks';
import {NFTComplexGemPool} from '../../types';

export type ClaimRequestParams = {
  poolContract: NFTComplexGemPool;
  stakingTime: BigNumber;
  gemCount: BigNumber;
  total: BigNumber;
};

export const getWalletName = (chainId: number, account: string): string =>
  `${networks[chainId]?.name ?? 'unknown'}-${account.substring(
    0,
    3
  )}...${account.substring(account.length - 2)}`;

export const loadContract = (
  address: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  ABI: any,
  library: Web3Provider
): Contract | null => {
  if (!address || !ABI || !library) return null;
  try {
    return new Contract(address, ABI, library.getSigner());
  } catch (error) {
    console.error('Failed to get contract', error);
    return null;
  }
};

export const submitClaim = async ({
  poolContract,
  stakingTime,
  gemCount,
  total
}: ClaimRequestParams): Promise<string> => {
  const txResponse = await poolContract.createClaims(stakingTime, gemCount, {
    value: total.toHexString()
  });

  console.log({txResponse});
  // transaction sent, but not mined (we need the hash for the pending cache)
  const receipt = await txResponse.wait(0);

  // return when transaction is mined
  return receipt.transactionHash;
};

// const getContractRef = async (
//   contractData: any,
//   contract: string,
//   signer: ethers.providers.JsonRpcSigner,
//   library: ethers.providers.Provider,
//   address?: string
// ): Promise<Contract> => {
//   const tokenData = contractData.contracts[contract];
//   if (tokenData) {
//     return new Contract(
//       address ? address : tokenData.address,
//       tokenData.abi,
//       signer ?? library
//     );
//   }
// };

// const importContractData = async (chainId: number) => {
//   let module;
//   switch (chainId) {
//     case 1337: {
//       module = await import('../../abis/1337/bitgems.json');
//       break;
//     }
//   }
//   return module?.default ?? null;
// };

// export const loadBitgemContext = async (
//   chainId: number,
//   library: Web3Provider,
//   account: string
// ): Promise<Web3BitgemContext> => {
//   if (!chainId) throw new Error('Not connected');

//   const contractData = await importContractData(chainId);
//   console.log('CONTRACTDATA: ', {contractData});
//   if (contractData === null) throw new Error('Invalid Network');
//   const signer = library.getSigner();

//   const [
//     token, // the primary bitgem multitoken
//     factory, // the bitgem pool factory
//     tokenFactory, // the bitgem pool factory
//     governor // governance
//   ] = await Promise.all([
//     getContractRef(contractData, 'NFTGemMultiToken', signer, library),
//     getContractRef(contractData, 'NFTGemPoolFactory', signer, library),
//     getContractRef(contractData, 'ERC20GemTokenFactory', signer, library),
//     getContractRef(contractData, 'NFTGemGovernor', signer, library)
//   ]);

//   return {
//     chainId,
//     library,
//     account,
//     signer,
//     contracts: {token, factory, tokenFactory, governor} as GemContracts
//   };
// };
