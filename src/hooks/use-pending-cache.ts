import {ClaimProps} from 'components/claim';
import {GemProps} from 'components/gem';
import {useQuery, useQueryClient} from 'react-query';

const usePendingClaims = (): ClaimProps[] => {
  const queryClient = useQueryClient();
  const {data} = useQuery(
    'pendingClaims',
    async () => queryClient.getQueryData<ClaimProps[]>('pendingClaims') ?? []
  );
  return data ?? [];
};

const usePendingGems = (): GemProps[] => {
  const queryClient = useQueryClient();
  const {data} = useQuery(
    'pendingGems',
    async () => queryClient.getQueryData<GemProps[]>('pendingGems') ?? []
  );
  return data ?? [];
};

export {usePendingClaims, usePendingGems};
