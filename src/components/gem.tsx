import * as React from 'react';
import {getGemImage} from 'constants/gem-metadata';
import {Gem as GemType, GemPool} from 'graph';

type GemProps = Pick<
  GemType,
  'quantity' | 'createdAtTimestamp' | 'transactionHash'
> & {
  gemPool: Pick<GemPool, 'symbol' | 'name'>;
};

const Gem = ({
  transactionHash,
  // createdAtTimestamp,
  gemPool,
  quantity
}: GemProps): JSX.Element => {
  return (
    <div className="flex items-center text-xl justify-between w-full px-3 py-4 rounded-md bg-indigo-900">
      <div className="flex items-center justify-start gap-4 md:gap-6 lg:gap-10 sm:mr-8 sm:text-lg lg:text-2xl xl:text-3xl">
        <div className="text-red-600 pl-2 text-shadow-sm">#{0}</div>
        <img
          alt={gemPool.name}
          className="h-16"
          src={getGemImage(gemPool.symbol)}
        />
      </div>
      <div className="sm:flex sm:flex-row flex-grow text-right sm:text-left pl-4 sm:pl-0">
        <div className="sm:flex-grow text-yellow-400 font-bold text-shadow-sm">
          {gemPool.name}
        </div>
        <div className="flex-grow text-red-600 text-shadow-sm sm:px-3">
          x{quantity}
        </div>
        <div className="text-green-500 text-shadow-sm">
          {transactionHash.substring(0, 5)}...
          {transactionHash.substring(transactionHash.length - 6)}
        </div>
      </div>
    </div>
  );
};

export {Gem};
