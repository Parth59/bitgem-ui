import * as React from 'react';
// import {usePool} from './blockchain-context';
import {usePoolForm} from 'hooks/use-pool-form';
import {useTimerSwitch} from 'hooks/use-timer-switch';
import {useWeb3React} from '@web3-react/core';
import {GemPool} from 'graph';
import {getGemImage} from 'constants/gem-metadata';
import {networks} from 'constants/networks';
import {ConnectButton} from 'components/connect-button';
import {formatEther, parseEther} from 'ethers/lib/utils';

export type PoolType = Pick<
  GemPool,
  | 'symbol'
  | 'id'
  | 'name'
  | 'stakingPrice'
  | 'minTimeSecs'
  | 'maxTimeSecs'
  | 'diffStep'
  | 'maxMint'
>;

type PoolProps = {
  pool: PoolType;
};

const Pool = ({pool}: PoolProps): JSX.Element => {
  const {chainId = 1, active} = useWeb3React();
  const {
    formValues,
    formErrors,
    enabled,
    handleSubmit,
    handleGemsChange,
    handleDurationChange
  } = usePoolForm(pool);
  const {isOn: isErrorFlashing, turnOn: flashError} = useTimerSwitch();
  const hasErrors = !!Object.keys(formErrors).length;
  const errors = Object.values(formErrors);
  const isErrorShowing = isErrorFlashing || !enabled;

  React.useEffect(() => {
    if (enabled && hasErrors) flashError();
  }, [enabled, flashError, hasErrors]);

  if (!pool) return null;

  const {symbol, name} = pool;
  const coin = networks[chainId]?.coin ?? 'ETH';

  return (
    <div className="sm:flex justify-between rounded-lg bg-blue-900">
      <div className="flex sm:flex-1 px-3 py-4 sm:px-5 sm:py-3 text-green-500 text-shadow-sm">
        <img
          alt={name}
          className="h-20 sm:h-24 md:h-36 self-center"
          src={getGemImage(symbol)}
        />
        <div className="flex flex-row w-full  sm:flex-col items-start pl-4 lg:pl-6 justify-between sm:justify-center py-1 sm:py-2">
          <div className="flex-1 sm:flex-none">
            <div className="text-2xl md:text-3xl sm:pb-4 text-yellow-300">
              {name}
            </div>
            <div className="text-blue-300 sm:hidden">
              using {coin} @ 1.0000/{coin}
            </div>
          </div>
          <div className="text-blue-300 text-right sm:text-left text-xs sm:text-sm">
            <div className="">({symbol})</div>
            <div>diff: 32</div>
            <div>X119 mined</div>
            <div>x330 claims</div>
          </div>
        </div>
      </div>

      <form className="sm:flex-1" onSubmit={handleSubmit}>
        <div className="text-blue-300 hidden sm:block px-4 pt-4">
          using {coin} @ 1.0000/{coin}
        </div>

        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            price
          </span>
          <span className="flex-1 min-w-0 rounded-r-md block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-gray-200 ">
            {formValues.price} {coin}
          </span>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            time
          </span>
          <span className="flex-1 rounded-r-md min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-gray-200">
            {formValues.duration} seconds
          </span>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            adjust
          </span>
          <div className="flex-1 px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            <input
              type="range"
              name="duration"
              id={`${pool.id}_duration`}
              className="min-w-0 block w-full  py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
              min={pool.minTimeSecs}
              max={pool.maxTimeSecs}
              step="1"
              value={formValues.duration}
              onChange={handleDurationChange}
            />
          </div>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            x
          </span>
          <input
            type="text"
            name="gems"
            id={`${pool.id}_gems`}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
            value={formValues.gems}
            onChange={handleGemsChange}
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            gems
          </span>
        </div>
        {isErrorShowing ? (
          <div className="px-1 py-2  text-base text-center text-shadow-sm font-bold text-red-500">
            {errors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
          </div>
        ) : null}
        {enabled ? (
          <div className="px-2 py-2 text-base text-center text-shadow-sm font-bold text-green-600">
            {formatEther(parseEther(formValues.price).mul(formValues.gems))}{' '}
            {coin} will be staked for {formValues.duration} day
            {formValues.duration > 1 ? 's' : ''}
          </div>
        ) : null}
        <div className="w-full sm:p-4">
          {active ? (
            <button
              type="submit"
              disabled={!enabled}
              className="button-card sm:rounded-lg"
            >
              stake
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export {Pool};
