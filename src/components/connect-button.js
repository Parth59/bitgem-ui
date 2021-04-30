import {useWeb3React} from '@web3-react/core';
import {getWalletName} from 'lib/blockchain';
import {injected} from 'lib/connectors';
import React from 'react';
import {useToast} from './toast-context';

function ConnectButton({className}) {
  const {active, activate, chainId, account} = useWeb3React();
  const {add} = useToast();

  React.useEffect(() => {
    if (active) {
      add(`Connected to ${getWalletName(chainId, account)}`);
      console.log('added toast');
    }
  }, [account, active, chainId, add]);

  const handleClick = () => {
    if (!active) {
      activate(injected);
    }
  };

  const buttonLabel = active ? getWalletName(chainId, account) : 'Connect';

  return (
    <button className={className} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
}

export {ConnectButton};
