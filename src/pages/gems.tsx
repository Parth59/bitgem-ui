import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';
import {Skeleton} from 'components/skeleton';
import {useWeb3React} from '@web3-react/core';
import {useGems} from 'hooks/use-gems';

const Gems = (): JSX.Element => {
  const {account} = useWeb3React();
  const {gems, isLoading} = useGems(account);

  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="My Bitgems" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((_, i) => (
              <Skeleton key={i} className="bg-blue-900 md:h-24 h-40" />
            ))
          : gems.map(
              ({
                id,
                transactionHash,
                createdAtTimestamp,
                quantity,
                gemPool,
                pending
              }) => (
                <Gem
                  id={id}
                  key={transactionHash}
                  createdAtTimestamp={createdAtTimestamp}
                  transactionHash={transactionHash}
                  gemPool={gemPool}
                  quantity={quantity}
                  pending={pending}
                />
              )
            )}
      </div>
      <StatusPanel />
    </main>
  );
};

export default Gems;
