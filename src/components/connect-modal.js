import * as React from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {MetamaskIcon, WalletConnectIcon} from './icons';
import {useWeb3React} from '@web3-react/core';
import {injected, walletConnect} from 'lib/connectors';
import {getWalletName} from 'lib/blockchain';
import {useToast} from './toast-context';

function ConnectModal({open, setOpen}) {
  const {active, activate, chainId, account} = useWeb3React();
  const {add} = useToast();

  React.useEffect(() => {
    if (active) {
      add(`Connected to ${getWalletName(chainId, account)}`);
    }
  }, [account, active, chainId, add]);

  const handleConnectClick = (source) => {
    if (open) setOpen(false);
    try {
      if (!active) {
        if (source === 'metamask') activate(injected);
        else if (source === 'walletConnect') activate(walletConnect);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center font-pixel min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-blue-800 rounded-md border-2 border-yellow-300 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-green-300 text-shadow-sm"
                  >
                    Connect to your wallet
                  </Dialog.Title>
                </div>
              </div>
              <div className="flex mt-5 sm:mt-6 gap-1 sm:gap-5 lg:gap-7">
                <button
                  type="button"
                  className="flex -z-10 flex-col flex-1 items-center text-xs mx-3 gap-2 justify-between w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 sm:text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  onClick={() => handleConnectClick('metamask')}
                >
                  <MetamaskIcon className="h-12" />
                  Desktop
                </button>
                <button
                  type="button"
                  name="walletConnect"
                  className="flex flex-col flex-1 items-center text-xs mx-3 gap-2 justify-between w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 sm:text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleConnectClick('walletConnect')}
                >
                  <WalletConnectIcon className="h-12 pt-3 pb-1" />
                  Mobile
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export {ConnectModal};
