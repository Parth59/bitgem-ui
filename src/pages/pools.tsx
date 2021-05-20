import * as React from 'react';
import {SectionHeader} from 'components/section-header';
import {Pool} from 'components/pool';
import {usePools} from 'hooks/use-pools';
import {Skeleton} from 'components/skeleton';

function Pools(): JSX.Element {
  const {data: pools, isError, isIdle, isLoading, error} = usePools();

  if (isIdle) return <div>Idle</div>;
  if (isError) return <p className="text-white">{error.message}</p>;

  return (
    <main className="flex-1 px-1">
      <div className="flex flex-col gap-6">
        <SectionHeader title="BitGem Pools" />
        {isLoading
          ? [...new Array(5)].map((x, i) => (
              <Skeleton key={i} className="bg-blue-900 h-80 md:h-72" />
            ))
          : pools.map((pool) => <Pool key={pool.address} pool={pool} />)}
      </div>
    </main>
  );
}

export default Pools;
