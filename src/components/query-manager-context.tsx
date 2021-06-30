import {useWeb3React} from '@web3-react/core';
import {
  GetUserClaimsQuery,
  GetUserGemsQuery,
  useGetUserClaimsQuery,
  useGetUserGemsQuery
} from 'graph';
import {client} from 'graph/client';
import {useVerifiedContext} from 'hooks/use-verified-context';
import * as React from 'react';
import {useEffect} from 'react';
import {QueryClient, useQueryClient} from 'react-query';

interface IWithTransactionHash extends Object {
  transactionHash?: string;
}

type PendingCacheKey = 'pendingClaims' | 'pendingGems';

export const QueryManagerContext = React.createContext(null);

const REFETCH_INTERVAL_WHEN_EMPTY = false; // Interval at which we automatically refetch when queries are not in poll mode.
export const REFETCH_INTERVAL_WITH_PENDING = 5 * 1000; // When polling, we refetch at this interval.
const REFETCH_WHILE_ON_BACKGROUND = false; // If window is in background, don't refetch on interval.

export const dedupByTransactionHash = <T extends IWithTransactionHash>(
  pending: T[] = [],
  indexed: T[] = []
): {pending: T[]; indexed: T[]} => {
  if (indexed.length === 0 || pending.length === 0) return {pending, indexed};
  const indexedHashes = indexed.map((claim) => claim.transactionHash);
  const pendingFiltered = pending.filter(
    (item) => !indexedHashes.includes(item.transactionHash)
  );

  return {pending: pendingFiltered, indexed};
};

export const cleanPendingCache = <T extends IWithTransactionHash>(
  cacheKey: PendingCacheKey,
  queryClient: QueryClient,
  items?: T[]
): T[] => {
  return queryClient.setQueryData<T[]>(cacheKey, (previous) => {
    const {pending} = dedupByTransactionHash<T>(previous, items);
    return pending;
  });
};

type QueryManagerContextType = {
  setClaimRefetchInterval: React.Dispatch<React.SetStateAction<number | false>>;
  setClaimRefetchIntervalOverride: React.Dispatch<
    React.SetStateAction<number | false>
  >;
  setInventoryRefetchInterval: React.Dispatch<
    React.SetStateAction<number | false>
  >;
  setInventoryRefetchIntervalOverride: React.Dispatch<
    React.SetStateAction<number | false>
  >;
};

const QueryManagerProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {account} = useWeb3React();
  // interval (in sec) used to refetch pending claim query, stays active until it is empty.
  const [claimRefetchInterval, setClaimRefetchInterval] = React.useState<
    number | false
  >(REFETCH_INTERVAL_WHEN_EMPTY);
  const [inventoryRefetchInterval, setInventoryRefetchInterval] =
    React.useState<number | false>(REFETCH_INTERVAL_WHEN_EMPTY);
  // interval used to refetch pending claim query, stays active until turned off manually, overrides ambient interval.
  const [claimRefetchIntervalOverride, setClaimRefetchIntervalOverride] =
    React.useState<number | false>(false);
  const [
    inventoryRefetchIntervalOverride,
    setInventoryRefetchIntervalOverride
  ] = React.useState<number | false>(false);
  const {data: claimsQueryData, isSuccess: isClaimsQuerySuccess} =
    useGetUserClaimsQuery(
      client,
      {id: account?.toLowerCase(), collected: false},
      {
        enabled: !!account,
        refetchInterval: claimRefetchIntervalOverride || claimRefetchInterval,
        refetchIntervalInBackground: REFETCH_WHILE_ON_BACKGROUND
      }
    );
  const {data: inventoryQueryData, isSuccess: isInventoryQuerySuccess} =
    useGetUserGemsQuery(
      client,
      {id: account?.toLowerCase()},
      {
        enabled: !!account,
        refetchInterval:
          inventoryRefetchIntervalOverride || inventoryRefetchInterval,
        refetchIntervalInBackground: REFETCH_WHILE_ON_BACKGROUND
      }
    );

  React.useEffect(() => {
    console.log(
      'Refetch interval changed to:',
      claimRefetchIntervalOverride || claimRefetchInterval
    );
  }, [claimRefetchInterval, claimRefetchIntervalOverride]);

  // Whenever claims is updated, we update the pending claim cache
  useUpdatePendingCache(
    'pendingClaims',
    isClaimsQuerySuccess,
    claimsQueryData,
    setClaimRefetchInterval
  );

  // same for the inventory
  useUpdatePendingCache(
    'pendingGems',
    isInventoryQuerySuccess,
    inventoryQueryData,
    setInventoryRefetchInterval
  );

  const context = React.useMemo(
    () => ({
      setClaimRefetchInterval,
      setClaimRefetchIntervalOverride,
      setInventoryRefetchInterval,
      setInventoryRefetchIntervalOverride
    }),
    []
  );

  return (
    <QueryManagerContext.Provider value={context}>
      {children}
    </QueryManagerContext.Provider>
  );
};

const useUpdatePendingCache = <T extends GetUserClaimsQuery | GetUserGemsQuery>(
  key: PendingCacheKey,
  isSuccess: boolean,
  queryData: T,
  setRefetchInterval: React.Dispatch<React.SetStateAction<number | false>>
) => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    if (isSuccess) {
      const items =
        key === 'pendingClaims'
          ? queryData.user?.['claims']
          : queryData.user?.['gems'];
      const filtered = cleanPendingCache(key, queryClient, items);
      // If there's nothing pending, turn off automatic polling
      if (filtered.length === 0) {
        console.log('pending cache empty, turning off polling', key);
        setRefetchInterval(false);
      }
    }
  }, [key, queryData, isSuccess, queryClient, setRefetchInterval]);
};

QueryManagerContext.displayName = 'QueryManagerContext';

const useQueryManager = (): QueryManagerContextType =>
  useVerifiedContext(QueryManagerContext);

const useClaimQueryRefetchInterval = (interval: number): void => {
  const {setClaimRefetchIntervalOverride} = useQueryManager();

  useEffect(() => {
    setClaimRefetchIntervalOverride(interval);
    return () => setClaimRefetchIntervalOverride(false);
  }, [interval, setClaimRefetchIntervalOverride]);
};

export {QueryManagerProvider, useQueryManager, useClaimQueryRefetchInterval};
