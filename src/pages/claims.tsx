import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {filterClaims, formatEther} from 'lib/blockchain';
import {useTokens} from 'hooks/use-tokens';
import {Skeleton} from 'components/skeleton';

function Claims(): JSX.Element {
  const {data: tokens, isLoading, isError, error, isIdle} = useTokens();

  if (isIdle) return <div>Idle</div>;
  if (isError) return <p className="text-white">{error.message}</p>;

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((x, i) => (
              <Skeleton key={i} className="bg-green-900 h-60 md:h-56" />
            ))
          : tokens
              .filter(filterClaims)
              .map(
                ({hash, pool, amount, name, symbol, quantity, unlockTime}) => (
                  <Claim
                    key={hash}
                    hash={hash}
                    pool={pool}
                    amount={parseFloat(formatEther(amount)).toFixed(4)}
                    name={name}
                    quantity={quantity.toString()}
                    unlockTime={unlockTime}
                    symbol={symbol}
                  />
                )
              )}
      </div>
      <StatusPanel />
    </main>
  );
}

export default Claims;
