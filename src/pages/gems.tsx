import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';
import {useGetUserInventoryQuery} from 'graph';
import {Skeleton} from 'components/skeleton';
import {client} from 'graph/client';
import {useWeb3React} from '@web3-react/core';

const Gems = (): JSX.Element => {
  const {account} = useWeb3React();
  const {data, isLoading, isError, error, isIdle} = useGetUserInventoryQuery(
    client,
    {id: account.toLowerCase()}
  );

  if (isIdle) return <div>Idle</div>;
  if (isLoading) return <div>Loading</div>;
  if (isError) return <p className="text-white">{error.message}</p>;

  const inventory = data.user?.gems ?? [];

  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="My Bitgems" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((_, i) => (
              <Skeleton key={i} className="bg-blue-900 md:h-24 h-40" />
            ))
          : inventory.map(
              ({transactionHash, createdAtTimestamp, quantity, gemPool}) => (
                <Gem
                  key={transactionHash}
                  createdAtTimestamp={createdAtTimestamp}
                  transactionHash={transactionHash}
                  gemPool={gemPool}
                  quantity={quantity}
                />
              )
            )}
      </div>
      <StatusPanel />
    </main>
  );
};

export default Gems;
