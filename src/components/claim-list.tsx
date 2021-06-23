import {Claim} from 'components/claim';
import {useClaims} from 'hooks/use-claims';
import {Skeleton} from './skeleton';

const ClaimList = ({account}: {account: string}): JSX.Element => {
  const {claims, isLoading} = useClaims(account);

  return (
    <>
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
    </>
  );
};

export {ClaimList};
