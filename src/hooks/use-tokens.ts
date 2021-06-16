import {useWeb3React} from '@web3-react/core';
import {useBlockchain} from 'components/blockchain-context';
import {getTokens} from 'lib/blockchain';
import {useQuery, UseQueryResult} from 'react-query';
import {Token} from 'types/Token';
import {usePools} from './use-pools';

const useTokens = (): UseQueryResult<Array<Token>, Error> => {
  const {account} = useWeb3React();
  const {contracts} = useBlockchain();
  const poolsResult = usePools();

  return useQuery<Array<Token>, Error>(
    'tokens',
    () => getTokens(account, contracts, poolsResult.data),
    {
      enabled: poolsResult.isSuccess,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  );
};

export {useTokens};
