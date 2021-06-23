import {UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import {networks} from 'constants/networks';
import {ErrorFragment} from 'ethers/lib/utils';
import {supportedChainIds} from 'lib/connectors';
import React from 'react';
import {ConnectButton} from './connect-button';

const StatusPanel = (): JSX.Element => {
  const {active, error} = useWeb3React();
  const isDisconnected = !active && !error;
  const isUnsupported = error && error instanceof UnsupportedChainIdError;

  console.log({error, active});

  return (
    <>
      {active ? null : (
        <div className="block my-4 border-2 rounded-md border-yellow-500 p-3">
          <div className="pb-4 px-4 text-center lowercase text-yellow-100">
            {isDisconnected ? (
              <>
                Click below to connect to your wallet
                <ConnectButton />
              </>
            ) : isUnsupported ? (
              <>
                <div className="text-red-500  pb-2">
                  You&apos;re not connected to a supported network.
                </div>
                <div className="text-xs">Bitgem is currently available in</div>
                <ul className="text-xs">
                  {supportedChainIds.map((chainId) => (
                    <li key={chainId}>{networks[chainId].longName}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>There was an error connecting</>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export {StatusPanel};
