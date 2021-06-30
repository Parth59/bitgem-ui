import {ClaimProps} from 'components/claim';
import {dedupByTransactionHash} from 'components/query-manager-context';
import {useGetUserClaimsQuery} from 'graph';
import {client} from 'graph/client';
import {usePendingClaims} from './use-pending-cache';

type UseClaimsResult = {
  claims: ClaimProps[];
  isLoading: boolean;
};

const useClaims = (account: string): UseClaimsResult => {
  const {data, isLoading} = useGetUserClaimsQuery(client, {
    id: account?.toLowerCase(),
    collected: false
  });
  const pendingClaims = usePendingClaims();

  const claims: ClaimProps[] = Object.values(
    dedupByTransactionHash(pendingClaims, data?.user?.claims ?? [])
  ).flat();

  return {claims, isLoading};
};

export {useClaims};
