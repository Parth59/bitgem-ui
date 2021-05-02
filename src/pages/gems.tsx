import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Gem} from 'components/gem';

function Gems(): JSX.Element {
  const {gemList} = useBlockchain();
  return (
    <main className="flex-1">
      <SectionHeader title="My Bitgems" />
      {gemList.map(({hash, id, gemQuantity, name}) => (
        <Gem
          key={hash}
          hash={hash}
          id={id}
          gemQuantity={gemQuantity.toString()}
          name={name}
        />
      ))}
      <StatusPanel />
    </main>
  );
}

export default Gems;
