import * as React from 'react';
import {useWeb3React} from '@web3-react/core';
import {getData, emptyData, formatEth} from 'lib/blockchain';
import {verifyContext} from 'lib/utils';
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
  return verifyContext(
    React.useContext(BlockchainContext),
    'BlockchainContext'
  );
}

function usePool(address) {
  return verifyContext(
    React.useContext(BlockchainContext),
    'BlockchainContext'
  ).gemPools.find((pool) => pool.address === address.toLowerCase());
}

export {BlockchainProvider, useBlockchain, usePool};
