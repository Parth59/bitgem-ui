import {useBlockchain} from 'components/blockchain-context';
import {getPools} from 'lib/blockchain';
import {useQuery, UseQueryResult} from 'react-query';
import {Pool} from 'types/Pool';

function usePools(): UseQueryResult<Pool[], Error> {
  const {contracts, signer} = useBlockchain();
  const result = useQuery<Pool[], Error>(
    'pools',
    async () => getPools(contracts, signer),
    {
      enabled: contracts.factory !== null,
      refetchOnWindowFocus: false
    }
  );

  return result;
}

export {usePools};
