import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';

function Gems(): JSX.Element {
  const {gemList} = useBlockchain();

  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="My Bitgems" />
      <div className="flex flex-col gap-6">
        {gemList.map(({hash, id, gemQuantity, symbol, name}) => (
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
