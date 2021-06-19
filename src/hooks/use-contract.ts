import {useWeb3Bitgem} from 'components/web3-bitgem-context';
import {Contract} from 'ethers';
import {NFTComplexGemPool} from '../../types';
import NFTComplexGemPoolABI from '../../abis/NFTComplexGemPool.json';
import * as React from 'react';
import { loadContract } from 'lib/blockchain';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';


// TODO: typescript: is there any better way to do this?
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useContract = (address: string, ABI: any): Contract | null => {
  const {library} = useWeb3React<Web3Provider>();
  console.log("GETTING", address)
  const [contract, setContract] = React.useState(() => loadContract(address, ABI, library));

  useEffect(() => {
    setContract(loadContract(address, ABI, library));
  }, [ABI, address, library])

  return contract;
};

const usePoolContract = (address: string): NFTComplexGemPool | null =>
  useContract(address, NFTComplexGemPoolABI) as NFTComplexGemPool;

export {useContract, usePoolContract};
