import * as React from 'react';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {Skeleton} from 'components/skeleton';
import {useWeb3React} from '@web3-react/core';
import {useClaimQueryRefetchInterval} from 'components/query-manager-context';
import {useClaims} from 'hooks/use-claims';
import {ClaimList} from 'components/claim-list';

const Claims = (): JSX.Element => {
  const {active, account} = useWeb3React();
  const {claims, isLoading} = useClaims(account);
  // While on this page, override any refetch intervals with this one.
  useClaimQueryRefetchInterval(1000);

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
        {active ? <ClaimList account={account} /> : <StatusPanel />}
      </div>
    </main>
  );
};

export default Claims;
