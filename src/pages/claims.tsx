import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {Skeleton} from 'components/skeleton';
import {useWeb3React} from '@web3-react/core';
import {useGetUserClaimsQuery} from 'graph';
import {client} from 'graph/client';

const Claims = (): JSX.Element => {
  const {account} = useWeb3React();
  const {data, isLoading, isError, error, isIdle} = useGetUserClaimsQuery(
    client,
    {id: account.toLowerCase()}
  );

  if (isIdle) return <div>Idle</div>;
  if (isLoading) return <div>Loading</div>;
  if (isError) return <p className="text-white">{error.message}</p>;
  const claims = data.user?.claims ?? [];

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((_, i) => (
              <Skeleton key={i} className="bg-green-900 h-60 md:h-56" />
            ))
          : claims.map(
              ({
                transactionHash,
                gemPool,
                stakedAmount,
                quantity,
                createdAtTimestamp,
                stakedTimeSeconds
              }) => (
                <Claim
                  key={transactionHash}
                  quantity={quantity}
                  stakedTimeSeconds={stakedTimeSeconds}
                  createdAtTimestamp={createdAtTimestamp}
                  stakedAmount={stakedAmount}
                  transactionHash={transactionHash}
                  gemPool={gemPool}
                />
              )
            )}
      </div>
      <StatusPanel />
    </main>
  );
};

export default Claims;
