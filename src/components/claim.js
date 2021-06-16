import * as React from 'react';
import {gemPics, networkCoins} from 'lib/blockchain';
import {useWeb3React} from '@web3-react/core';
import {useToggle} from 'hooks/use-toggle';
import {ConfirmationModal} from 'components/confirmation-modal';

const Claim = ({hash, amount, pool, name, symbol, quantity, unlockTime}) => {
  const {chainId} = useWeb3React();
  const [isConfirmOpen, toggleConfirm] = useToggle(false);
  const date = new Date(unlockTime * 1000);
  const isMature = Date.now() > unlockTime * 1000;

  const handleCollectClick = () => {
    if (isMature) collectClaim();
    else toggleConfirm();
  };

  const collectClaim = () => {
    pool.contract.collectClaim(hash);
  };

  return (
    <div className="rounded-lg bg-green-900">
      <div className="flex px-3 py-1 sm:px-5 sm:py-3 text-green-500 ">
        <img
          alt={name}
          className="h-20 sm:h-24 self-center"
          src={`/img/${gemPics(symbol)}`}
        />
        <div className="flex flex-col sm:flex-row justify-between flex-grow">
          <div className="flex sm:flex-1 flex-row sm:flex-col items-start pl-4 lg:pl-6 justify-between py-1 sm:py-2">
            <div className="text-2xl  sm:text-lg md:text-xl lg:text-3xl text-yellow-500">
              {name}
            </div>
            <div className="text-blue-300 text-right sm:text-left text-xs sm:text-sm lg:text-base">
              <div className="">({symbol})</div>
              <div className="hidden sm:block">X TOTAL MINTED</div>
            </div>
          </div>
          <div className="text-yellow-300  flex-2 flex-grow px-4 sm:py-2 sm:px-4 md:pl-10 text-sm sm:text-base md:text-xl font-bold">
            <div>
              {amount} {networkCoins[chainId]} x {quantity}
            </div>
            <div>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </div>
          </div>
          <div className="flex sm:flex-1 flex-grow sm:justify-end py-1 sm:py-0 ">
            <div className="flex sm:flex-col pl-4 sm:pl-0 items-center sm:text-sm md:text-base self-center gap-3 font-bold">
              <span
                className={` whitespace-nowrap ${
                  isMature ? 'text-green-200' : 'text-red-500'
                }`}
              >
                {isMature ? 'claim mature' : 'claim immature'}
              </span>
              <div className="w-full hidden sm:block">
                <button
                  onClick={handleCollectClick}
                  className="whitespace-nowrap button-basic text-white"
                >
                  collect claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <button
          onClick={handleCollectClick}
          className="button-basic rounded-b-md text-lg w-full text-white bg-blue-600"
        >
          collect claim
        </button>
      </div>
      <ConfirmationModal
        title="Immature Claim"
        text="You are about to collect an immature claim and will *NOT* receive a gem if you proceed. Would you like to collect your claim principal?"
        confirmText="Yes, I want to collect"
        onConfirm={collectClaim}
        open={isConfirmOpen}
        toggle={toggleConfirm}
      />
    </div>
  );
};

export {Claim};
