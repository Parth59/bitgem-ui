import {injected} from '../lib/connectors';
import * as React from 'react';
import {useWeb3React} from '@web3-react/core';

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
const useInactiveListener = (suppress = false): void => {
  const {active, error, activate} = useWeb3React(); // specifically using useWeb3React because of what this hook does

  React.useEffect(() => {
    const {ethereum} = window as any;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(injected, undefined, true).catch((error) => {
          console.error('Failed to activate after chain changed', error);
        });
      };

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true).catch((error) => {
            console.error('Failed to activate after accounts changed', error);
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
    return undefined;
  }, [active, error, suppress, activate]);
};

export default useInactiveListener;
