import * as React from 'react';
import {useWeb3React} from '@web3-react/core';
import {useVerifiedContext} from 'hooks/use-verified-context';
import {Web3Provider} from '@ethersproject/providers';
import {loadBitgemContractData} from 'lib/blockchain';
import {ConfirmationModal} from 'components/confirmation-modal';
import {useAsync} from 'hooks/use-async';
import {supportedChainIds} from 'lib/connectors';

// TODO: Figure out the best type for this.
export type BitgemContractDataType = {
  contracts: {[contractName: string]: {address: string; abi: any}};
};

const BitgemContractDataContext = React.createContext<BitgemContractDataType>(
  {} as BitgemContractDataType
);
BitgemContractDataContext.displayName = 'BitgemContractDataContext';

const BitgemContractDataProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {chainId} = useWeb3React<Web3Provider>();
  const {data, isLoading, isError, isSuccess, error, run} = useAsync({
    data: {}
  });

  React.useEffect(() => {
    if (chainId && supportedChainIds.includes(chainId)) {
      run(loadBitgemContractData(chainId));
    }
  }, [chainId, run]);

  // if (isLoading) return <div>Loading contract data...</div>;
  if (isError)
    return (
      <ConfirmationModal
        title="Error loading contracts for this network"
        hasCancel={false}
        open={isError}
        toggle={() => null}
      >
        {error?.message}
      </ConfirmationModal>
    );

  return (
    <BitgemContractDataContext.Provider value={data}>
      {children}
    </BitgemContractDataContext.Provider>
  );
};

const useBitgemContractData = (): BitgemContractDataType => {
  return useVerifiedContext<BitgemContractDataType>(BitgemContractDataContext);
};

export {BitgemContractDataProvider, useBitgemContractData};
