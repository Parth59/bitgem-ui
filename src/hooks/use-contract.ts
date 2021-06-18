import {useWeb3Bitgem} from 'components/web3-bitgem-context';
import {Contract} from 'ethers';
import {NFTComplexGemPool} from '../../types';
import NFTComplexGemPoolABI from '../../abis/NFTComplexGemPool.json';

// TODO: typescript: is there any better way to do this?
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useContract = (address: string, ABI: any): Contract | null => {
  const {library, signer} = useWeb3Bitgem();

  if (!address || !ABI || !library) return null;
  try {
    return new Contract(address, ABI, signer ?? library);
  } catch (error) {
    console.error('Failed to get contract', error);
    return null;
  }
};

const usePoolContract = (address: string): NFTComplexGemPool | null =>
  useContract(address, NFTComplexGemPoolABI) as NFTComplexGemPool;

export {useContract, usePoolContract};
