import * as React from 'react';
import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {Pool} from 'components/pool';
import {Pool as TPool} from 'types/Pool';
import {useQuery} from 'react-query';
import {getPools} from 'lib/blockchain';

function Pools(): JSX.Element {
  const {contracts, signer} = useBlockchain();

  const {
    data: pools,
    isError,
    isIdle,
    isLoading,
    error
  } = useQuery<TPool[], Error>(
    'pools',
    async () => getPools(contracts, signer),
    {
      enabled: contracts.factory !== null,
      refetchOnWindowFocus: false
    }
  );

  if (isIdle) return <div>Idle</div>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-white">{error.message}</p>;

  return (
    <main className="flex-1 px-1">
      <div className="flex flex-col gap-6">
        <SectionHeader title="BitGem Pools" />
        {pools.map((pool) => (
          <Pool key={pool.address} pool={pool} />
        ))}
      </div>
    </main>
  );
}

export default Pools;
