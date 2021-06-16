import {useWeb3React} from '@web3-react/core';
import {getWalletName} from 'lib/blockchain';
import * as React from 'react';
import {ConnectModal} from './connect-modal';

const ConnectButton = ({className}) => {
  const {active, chainId, account} = useWeb3React();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (!active && !open) setOpen(true);
  };

  const buttonLabel = active ? getWalletName(chainId, account) : 'Connect';

  return (
    <div>
      <button className={className} onClick={handleClick}>
        {buttonLabel}
      </button>
      <ConnectModal open={open} setOpen={setOpen} />
    </div>
  );
};

export {ConnectButton};
