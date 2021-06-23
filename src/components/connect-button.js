import {UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import {getWalletName} from 'lib/blockchain';
import * as React from 'react';
import {ConnectModal} from './connect-modal';

const ConnectButton = ({className = 'px-4 py-2'}) => {
  const {active, chainId, account, error} = useWeb3React();
  const isUnsupported = error instanceof UnsupportedChainIdError;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (!active && !open) setOpen(true);
  };

  let buttonLabel = active ? getWalletName(chainId, account) : 'Connect';
  if (isUnsupported) {
    buttonLabel = 'Unsupported network';
  } else if (error) {
    buttonLabel = 'Error connecting';
  }

  return (
    <div>
      <button
        className={`font-bold rounded-md focus:ring-2 focus:outline-none text-red-500 text-shadow-sm ${className}`}
        onClick={handleClick}
      >
        {buttonLabel}
      </button>
      <ConnectModal open={open} setOpen={setOpen} />
    </div>
  );
};

export {ConnectButton};
