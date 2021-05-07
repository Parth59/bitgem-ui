import * as React from 'react';
import {useWeb3React} from '@web3-react/core';
import {getBlockchainData} from 'lib/blockchain';
import {verifyContext} from 'lib/utils';
import {useAsync} from 'hooks/use-async';
const BlockchainContext = React.createContext(null);

function BlockchainProvider({children}) {
  const {active, account, chainId, library} = useWeb3React();
  const {run, ...blockchain} = useAsync();

  React.useEffect(() => {
    if (active && library && chainId) {
      run(getBlockchainData(chainId, library, account));
    }
  }, [account, active, chainId, library, run]);

  return (
    <BlockchainContext.Provider value={blockchain}>
      {children}
    </BlockchainContext.Provider>
  );
}

function useBlockchain() {
  return verifyContext(
    React.useContext(BlockchainContext),
    'BlockchainContext'
  );
}

function usePool(address) {
  return verifyContext(
    React.useContext(BlockchainContext),
    'BlockchainContext'
  ).data.gemPools.find((pool) => pool.address === address.toLowerCase());
}

export {BlockchainProvider, useBlockchain, usePool};
