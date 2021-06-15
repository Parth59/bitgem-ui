import * as React from 'react';
import {gemPics, networkCoins} from 'lib/blockchain';
// import {usePool} from './blockchain-context';
import {usePoolForm} from 'hooks/use-pool-form';
import {useTimerSwitch} from 'hooks/use-timer-switch';
import {useWeb3React} from '@web3-react/core';

function Pool({pool}) {
  const {chainId} = useWeb3React();
  const {
    formValues,
    formErrors,
    enabled,
    handleSubmit,
    handlePriceChange,
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

  return (
    <div className="sm:flex justify-between rounded-lg bg-blue-900">
      <div className="flex sm:flex-1 px-3 py-4 sm:px-5 sm:py-3 text-green-500 text-shadow-sm">
        <img
          alt={name}
          className="h-20 sm:h-24 md:h-36 self-center"
          src={`/img/${gemPics(symbol)}`}
        />
        <div className="flex flex-row w-full  sm:flex-col items-start pl-4 lg:pl-6 justify-between sm:justify-center py-1 sm:py-2">
          <div className="flex-1 sm:flex-none">
            <div className="text-2xl md:text-3xl sm:pb-4 text-yellow-300">
              {name}
            </div>
            <div className="text-blue-300 sm:hidden">
              using {networkCoins[chainId]} @ 1.0000/{networkCoins[chainId]}
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
          using {networkCoins[chainId]} @ 1.0000/{networkCoins[chainId]}
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            time
          </span>
          <input
            type="text"
            name="duration"
            id={`${pool.address}_duration`}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
            value={formValues.duration}
            onChange={handleDurationChange}
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            days
          </span>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            price
          </span>
          <input
            type="text"
            name="price"
            id={`${pool.address}_price`}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-400 bg-yellow-300"
            value={formValues.price}
            onChange={handlePriceChange}
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            {networkCoins[chainId]}
          </span>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm px-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-500 sm:text-sm">
            x
          </span>
          <input
            type="text"
            name="gems"
            id={`${pool.address}_gems`}
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
          <div className="px-1 py-2  text-base text-center text-shadow-sm font-bold text-green-600">
            {formValues.price * formValues.gems} {networkCoins[chainId]} will be
            staked for {formValues.duration} day
            {formValues.duration > 1 ? 's' : ''}
          </div>
        ) : null}
        <div className="w-full sm:p-4">
          <button
            type="submit"
            disabled={!enabled}
            className="button-card sm:rounded-lg"
          >
            stake
          </button>
        </div>
      </form>
    </div>
  );
}

export {Pool};
