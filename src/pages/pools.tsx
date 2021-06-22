import * as React from 'react';
import {SectionHeader} from 'components/section-header';
import {Pool} from 'components/pool';
import {Skeleton} from 'components/skeleton';
import {useGetPoolsQuery} from 'graph';
import {client} from 'graph/client';

const Pools = (): JSX.Element => {
  const {data, isError, isIdle, isLoading, error} = useGetPoolsQuery(
    client,
    {}
  );

  if (isIdle) return <div>Idle</div>;
  if (isLoading) return <div>Loading</div>;
  if (isError) return <p className="text-white">{error.message}</p>;
  const {gemPools} = data;

  return (
    <main className="flex-1 px-1">
      <div className="flex flex-col gap-6">
        <SectionHeader title="BitGem Pools" />
        {isLoading
          ? [...new Array(5)].map((_, i) => (
              <Skeleton key={i} className="bg-blue-900 h-80 md:h-72" />
            ))
          : gemPools.map((pool) => <Pool key={pool.id} pool={pool} />)}
      </div>
    </main>
  );
};

export default Pools;
