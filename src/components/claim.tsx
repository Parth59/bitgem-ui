import * as React from 'react';
import {useToggle} from 'hooks/use-toggle';
import {ConfirmationModal} from 'components/confirmation-modal';
import {networks} from 'constants/networks';
import {formatEther} from 'ethers/lib/utils';
import {BigNumber} from 'ethers';
import {getGemImage} from 'constants/gem-metadata';
import {setStringPrecision} from 'lib/utils';
import {Claim as ClaimType, GemPool} from 'graph';
// import {useWeb3Bitgem} from './web3-bitgem-context';
import {usePoolContract} from 'hooks/use-contract';
import {useWeb3React} from '@web3-react/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useMutation, useQueryClient} from 'react-query';
import {GemProps} from './gem';
import {
  REFETCH_INTERVAL_WITH_PENDING,
  useQueryManager
} from './query-manager-context';
import {usePendingGems} from 'hooks/use-pending-cache';

dayjs.extend(relativeTime);

export type ClaimProps = Pick<
  ClaimType,
  | 'id'
  | 'transactionHash'
  | 'quantity'
  | 'stakedTimeSeconds'
  | 'createdAtTimestamp'
  | 'stakedAmount'
> & {
  gemPool: Pick<GemPool, 'symbol' | 'name' | 'id'>;
  status?: 'pendingSubmit' | 'pendingCollect';
};

type CollectClaimRequestParams = {
  id: string;
  requireMature: boolean;
};

const Claim = ({
  id,
  transactionHash,
  gemPool: pool,
  stakedAmount: amount,
  quantity,
  stakedTimeSeconds,
  createdAtTimestamp,
  status
}: ClaimProps): JSX.Element => {
  // const {chainId} = useWeb3Bitgem();
  const {chainId} = useWeb3React();
  const pendingGems = usePendingGems();
  const [isConfirmOpen, toggleConfirm] = useToggle(false);
  const poolContract = usePoolContract(pool.id);
  const {setInventoryRefetchInterval, setClaimRefetchInterval} =
    useQueryManager();
  const queryClient = useQueryClient();
  const {mutate} = useMutation<
    string,
    Error,
    CollectClaimRequestParams,
    GemProps
  >((variables) => collectClaim(variables), {
    onSettled: (collectTransactionHash, error) => {
      if (error) {
        console.log('Error submitting transaction', error);
      }
      // create pending gem
      const gem: GemProps = {
        id: transactionHash,
        transactionHash: collectTransactionHash,
        quantity,
        createdAtTimestamp: Date.now().toString(),
        pending: true,
        gemPool: {
          id: pool.id,
          symbol: pool.symbol,
          name: pool.name
        }
      };
      console.log({gem});
      // Keeping our pending cache in react-query
      queryClient.setQueryData<GemProps[]>('pendingGems', (previous) => [
        ...previous,
        gem
      ]);
      setInventoryRefetchInterval(REFETCH_INTERVAL_WITH_PENDING);
      setClaimRefetchInterval(REFETCH_INTERVAL_WITH_PENDING);
    }
  });

  // console.log('POOL CONTRACT IS', poolContract);
  const revisedStatus = pendingGems
    .map((gem) => gem.id)
    .includes(transactionHash)
    ? 'pendingCollect'
    : status;

  const maturityTimestamp =
    (parseInt(createdAtTimestamp) + parseInt(stakedTimeSeconds)) * 1000;
  const msFromNow = maturityTimestamp - Date.now();
  const maturityDate = new Date(maturityTimestamp);
  const isMature = Date.now() > maturityTimestamp;
  const total = setStringPrecision(
    formatEther(BigNumber.from(amount).mul(BigNumber.from(quantity))),
    5
  );
  const timeLegend =
    !isMature && msFromNow < 60000
      ? `in ${Math.floor(msFromNow / 1000)} seconds`
      : dayjs().to(maturityDate);

  const handleCollectClick = () => {
    if (isMature) mutate({id, requireMature: true});
    else toggleConfirm();
  };

  const collectClaim = async ({id, requireMature}) => {
    const txResponse = await poolContract.collectClaim(id, requireMature);

    const receipt = await txResponse.wait(0);
    return receipt.transactionHash;
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
            {!isMature ? (
              <div className="text-xs">Maturity: {timeLegend}</div>
            ) : null}
          </div>
          <div className="flex sm:flex-1 flex-grow sm:justify-end py-1 sm:py-0 ">
            <div className="flex sm:flex-col pl-4 sm:pl-0 items-center sm:text-sm md:text-base self-center gap-3 font-bold">
              <span
                className={` whitespace-nowrap ${
                  isMature ? 'text-green-200' : 'text-red-500'
                }`}
              >
                {status ? 'Tx Pending' : null}
                {isMature ? 'claim mature' : 'claim immature'}
              </span>
              <div className="w-full hidden sm:block">
                {status ? null : (
                  <button
                    onClick={handleCollectClick}
                    disabled={!!revisedStatus}
                    className="whitespace-nowrap button-basic text-white"
                  >
                    collect claim
                  </button>
                )}
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
        onConfirm={() => mutate({id, requireMature: false})}
        open={isConfirmOpen}
        toggle={toggleConfirm}
      />
    </div>
  );
};

export {Claim};
