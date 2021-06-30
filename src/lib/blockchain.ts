import {BigNumber, Contract} from 'ethers';
import {Web3Provider} from '@ethersproject/providers';
// import {GemContracts, Web3BitgemContext} from 'components/web3-bitgem-context';
import {networks} from 'constants/networks';
import {NFTComplexGemPool} from '../../types';
import {BitgemContractDataType} from 'components/bitgem-contract-data-context';

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

export const loadContract = <T extends Contract>(
  address: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  ABI: any,
  library: Web3Provider
): T | null => {
  if (!address || !ABI || !library) return null;
  try {
    return new Contract(address, ABI, library.getSigner()) as T;
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

  // transaction sent, but not mined (we need the hash for the pending cache)
  const receipt = await txResponse.wait(0);

  // return when transaction is mined
  return receipt.transactionHash;
};

export const loadBitgemContractData = async (
  chainId: number
): Promise<BitgemContractDataType> => {
  if (!chainId) throw new Error('Not connected');
  let module;
  // We can't use string substitution here
  switch (chainId) {
    case 1337: {
      module = await import(`../../abis/${1337}/bitgems.json`);
      break;
    }
  }
  console.log('Imported', {module});
  const contractData = module?.default ?? null;
  console.log('contractdata from imported', {contractData});
  if (contractData === null) throw new Error('Invalid Network');

  return contractData as BitgemContractDataType;
};
