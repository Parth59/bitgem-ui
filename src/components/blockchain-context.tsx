import * as React from 'react';
import {useWeb3React} from '@web3-react/core';
import {useVerifiedContext} from 'hooks/use-verified-context';
import {Web3Provider} from '@ethersproject/providers';
import {Blockchain} from 'types/Blockchain';
import {useQuery, useQueryClient} from 'react-query';
import {getPools, getBlockChainData} from 'lib/blockchain';
import {ConfirmationModal} from 'components/confirmation-modal';
import {useToggle} from 'hooks/use-toggle';

export const emptyBlockchainData: Blockchain = {
  contracts: {factory: null, tokenFactory: null, token: null, governor: null},
  signer: null
};

const BlockchainContext = React.createContext<Blockchain | null>(null);
BlockchainContext.displayName = 'BlockchainContext';

const BlockchainProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isErrorModalOpen, toggleErrorModal] = useToggle(false);
  const {chainId, library, account} = useWeb3React<Web3Provider>();
  const queryClient = useQueryClient();
  const {
    data: blockchain,
    error,
    isError
  } = useQuery<Blockchain, Error>(
    'blockchain',
    () => getBlockChainData(chainId, library),
    {
      initialData: emptyBlockchainData,
      enabled: !!library && !!account,
      refetchOnWindowFocus: false
    }
  );

  React.useEffect(() => {
    if (isError) {
      toggleErrorModal();
    }
  }, [isError, toggleErrorModal]);

  // Prefetch pool data (react query auotmatically dedups requests)
  React.useEffect(() => {
    if (blockchain.signer !== null && blockchain.contracts !== null) {
      queryClient.prefetchQuery('pools', () =>
        getPools(blockchain.contracts, blockchain.signer)
      );
    }
  }, [blockchain.contracts, blockchain.signer, queryClient]);

  return (
    <BlockchainContext.Provider value={blockchain}>
      {children}
      <ConfirmationModal
        title="Error while connecting"
        hasCancel={false}
        text={error?.message}
        open={isErrorModalOpen}
        toggle={toggleErrorModal}
      />
    </BlockchainContext.Provider>
  );
};

const useBlockchain = (): Blockchain => {
  return useVerifiedContext(BlockchainContext);
};

export {BlockchainProvider, useBlockchain};
