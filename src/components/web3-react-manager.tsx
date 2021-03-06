import React, {useEffect, useState} from 'react';

// import Loader from "../Loader";
import {network} from 'lib/connectors';
import useEagerConnect from 'hooks/use-eager-connect';
import useInactiveListener from 'hooks/use-inactive-listener';
import {useWeb3React} from '@web3-react/core';
import {NetworkContextName} from '../constants';
import {ConfirmationModal} from './confirmation-modal';
import {useToggle} from 'hooks/use-toggle';

const Web3ReactManager = ({children}: {children: JSX.Element}): JSX.Element => {
  const {active} = useWeb3React();
  const [isErrorModalOpen, toggleErrorModal] = useToggle(false);
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork
  } = useWeb3React(NetworkContextName);

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]);

  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager);

  // handle delayed loader state
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // on page load, do nothing until we've tried to connect to the injected connector
  if (!triedEager) {
    return null;
  }

  // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
  if (!active && networkError) {
    toggleErrorModal();
  }

  // if neither context is active, spin
  if (!active && !networkActive) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
      <ConfirmationModal
        title="Error while connecting"
        hasCancel={false}
        open={isErrorModalOpen}
        toggle={toggleErrorModal}
      >
        Oops! An unknown error occurred. Please refresh the page, or visit from
        another browser or device ${networkError?.message}
      </ConfirmationModal>
    </>
  );
};

export {Web3ReactManager};
