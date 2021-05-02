import * as React from 'react';
import {useWeb3React} from '@web3-react/core';
import {getData, emptyData, networkCoins, formatEther} from 'lib/blockchain';

const BlockchainContext = React.createContext(null);

function BlockchainProvider({children}) {
  const {active, chainId, library} = useWeb3React();
  const [data, setData] = React.useState(emptyData);

  React.useEffect(() => {
    if (active && library && chainId) {
      getData(chainId, library).then(setData);
    }
  }, [active, chainId, library]);
  console.log('data', data);
  return (
    <BlockchainContext.Provider value={data}>
      {children}
    </BlockchainContext.Provider>
  );
}

function useBlockchain() {
  const state = React.useContext(BlockchainContext);
  if (state === null)
    throw new Error('usePools() called outside PoolsProvider');
  return state;
}

export {BlockchainProvider, useBlockchain};
