import * as React from 'react';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {Skeleton} from 'components/skeleton';
import {useWeb3React} from '@web3-react/core';
import {useClaimQueryRefetchInterval} from 'components/query-manager-context';
import {useClaims} from 'hooks/use-claims';

const Claims = (): JSX.Element => {
  const {account} = useWeb3React();
  const {claims, isLoading} = useClaims(account);
  // While on this page, override any refetch intervals with this one.
  useClaimQueryRefetchInterval(1000);

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((_, i) => (
              <Skeleton key={i} className="bg-green-900 h-60 md:h-52" />
            ))
          : claims.map(
              ({
                id,
                transactionHash,
                gemPool,
                stakedAmount,
                quantity,
                createdAtTimestamp,
                stakedTimeSeconds,
                status
              }) => (
                <Claim
                  key={transactionHash}
                  id={id}
                  quantity={quantity}
                  stakedTimeSeconds={stakedTimeSeconds}
                  createdAtTimestamp={createdAtTimestamp}
                  stakedAmount={stakedAmount}
                  transactionHash={transactionHash}
                  gemPool={gemPool}
                  status={status}
                />
              )
            )}
      </div>
      <StatusPanel />
    </main>
  );
};

export default Claims;
