import * as React from 'react';
import {useBitgemContractData} from './bitgem-contract-data-context';
import {useWeb3Notification} from 'hooks/use-web3-event';
import {useContract} from 'hooks/use-contract';
import {NFTGemGovernor} from '../../types';

const BitGemEventManager = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const bitgemContractData = useBitgemContractData();
  const {address, abi} = bitgemContractData.contracts?.['NFTGemGovernor'] ?? {
    address: null,
    abi: null
  };
  const governorContract = useContract<NFTGemGovernor>(address, abi);

  useWeb3Notification(
    governorContract,
    'GovernanceTokenIssued',
    'You just received a governance token!'
  );

  // useCacheInvalidationOnEvent(
  //   governorContract,
  //   'GovernanceTokenIssued',
  //   'balance'
  // );

  return <>{children}</>;
};

export {BitGemEventManager};
