import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';
import {filterGems} from 'lib/blockchain';
import {useTokens} from 'hooks/use-tokens';

function Gems(): JSX.Element {
  const {data: tokens, isLoading, error, isError, isIdle} = useTokens();

  if (isIdle) return <div>Idle</div>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-white">{error.message}</p>;

  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="My Bitgems" />
      <div className="flex flex-col gap-6">
        {tokens
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
