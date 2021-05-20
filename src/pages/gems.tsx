import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';
import {filterGems} from 'lib/blockchain';
import {useTokens} from 'hooks/use-tokens';
import {Skeleton} from 'components/skeleton';

function Gems(): JSX.Element {
  const {data: tokens, isLoading, error, isError, isIdle} = useTokens();

  if (isIdle) return <div>Idle</div>;
  if (isError) return <p className="text-white">{error.message}</p>;

  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="My Bitgems" />
      <div className="flex flex-col gap-6">
        {isLoading
          ? [...new Array(5)].map((x, i) => (
              <Skeleton key={i} className="bg-blue-900 md:h-24 h-40" />
            ))
          : tokens
              .filter(filterGems)
              .map(({hash, id, gemQuantity, symbol, name}) => (
                <Gem
                  key={hash}
                  hash={hash}
                  id={id}
                  symbol={symbol}
                  gemQuantity={gemQuantity.toString()}
                  name={name}
                />
              ))}
      </div>
      <StatusPanel />
    </main>
  );
}

export default Gems;
