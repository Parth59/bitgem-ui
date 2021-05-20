import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {filterClaims, formatEther} from 'lib/blockchain';
import {useTokens} from 'hooks/use-tokens';

function Claims(): JSX.Element {
  const {data: tokens, isLoading, isSuccess} = useTokens();

  if (!isSuccess || isLoading) return <div>Waiting</div>;

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
        {tokens
          .filter(filterClaims)
          .map(({hash, pool, amount, name, symbol, quantity, unlockTime}) => (
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
          ))}
      </div>
      <StatusPanel />
    </main>
  );
}

export default Claims;
