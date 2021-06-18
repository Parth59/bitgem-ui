import * as React from 'react';
import {useToggle} from 'hooks/use-toggle';
import {ConfirmationModal} from 'components/confirmation-modal';
import {networks} from 'constants/networks';
import {formatEther} from 'ethers/lib/utils';
import {BigNumber} from 'ethers';
import {getGemImage} from 'constants/gem-metadata';
import {setStringPrecision} from 'lib/utils';
import {Claim as ClaimType, GemPool} from 'graph';
import {useWeb3Bitgem} from './web3-bitgem-context';
import {usePoolContract} from 'hooks/use-contract';

type ClaimProps = Pick<
  ClaimType,
  | 'transactionHash'
  | 'quantity'
  | 'stakedTimeSeconds'
  | 'createdAtTimestamp'
  | 'stakedAmount'
> & {
  gemPool: Pick<GemPool, 'symbol' | 'name' | 'id'>;
};

const Claim = ({
  transactionHash,
  gemPool: pool,
  stakedAmount: amount,
  quantity,
  stakedTimeSeconds,
  createdAtTimestamp
}: ClaimProps): JSX.Element => {
  const {chainId} = useWeb3Bitgem();
  const [isConfirmOpen, toggleConfirm] = useToggle(false);
  const poolContract = usePoolContract(pool.id);

  console.log('POOL CONTRACT IS', poolContract);

  const maturityTimestamp =
    (parseInt(createdAtTimestamp) + parseInt(stakedTimeSeconds)) * 1000;
  const maturityDate = new Date(maturityTimestamp);
  const isMature = Date.now() > maturityTimestamp;
  const total = setStringPrecision(
    formatEther(BigNumber.from(amount).mul(BigNumber.from(quantity))),
    5
  );

  const handleCollectClick = () => {
    if (isMature) collectClaim();
    else toggleConfirm();
  };

  const collectClaim = () => {
    poolContract.collectClaim(transactionHash);
  };

  return (
    <div className="rounded-lg bg-green-900">
      <div className="flex px-3 py-1 sm:px-5 sm:py-3 text-green-500 ">
        <img
          alt={pool.name}
          className="h-20 sm:h-24 self-center"
          src={getGemImage(pool.symbol)}
        />
        <div className="flex flex-col sm:flex-row justify-between flex-grow">
          <div className="flex sm:flex-1 flex-row sm:flex-col items-start pl-4 lg:pl-6 justify-between py-1 sm:py-2">
            <div className="text-2xl  sm:text-lg md:text-xl lg:text-3xl text-yellow-500">
              {pool.name}
            </div>
            <div className="text-blue-300 text-right sm:text-left text-xs sm:text-sm lg:text-base">
              <div className="">({pool.symbol})</div>
              <div className="hidden sm:block">X TOTAL MINTED</div>
            </div>
          </div>
          <div className="text-yellow-300  flex-2 flex-grow px-4 sm:py-2 sm:px-4 md:pl-10 text-sm sm:text-base md:text-xl font-bold">
            <div>
              {total} {networks[chainId].coin} x {quantity}
            </div>
            <div>
              {maturityDate.toLocaleDateString()}{' '}
              {maturityDate.toLocaleTimeString()}
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
