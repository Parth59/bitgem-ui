import {GemProps} from 'components/gem';
import {dedupByTransactionHash} from 'components/query-manager-context';
import {useGetUserGemsQuery} from 'graph';
import {client} from 'graph/client';
import {usePendingGems} from './use-pending-cache';

type UseGemsResult = {
  gems: GemProps[];
  isLoading: boolean;
};

const useGems = (account: string): UseGemsResult => {
  const {data, isLoading} = useGetUserGemsQuery(client, {
    id: account.toLowerCase()
  });
  const pendingGems = usePendingGems();
  const gems: GemProps[] = Object.values(
    dedupByTransactionHash(pendingGems, data?.user?.gems ?? [])
  ).flat();

  return {gems, isLoading};
};

export {useGems};
