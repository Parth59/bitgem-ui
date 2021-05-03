import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Pool} from 'components/pool';

function Pools(): JSX.Element {
  const {isSuccess, data} = useBlockchain();

  const gemPools = isSuccess ? data.gemPools : [];

  return (
    <main className="flex-1 px-1">
      <SectionHeader title="BitGem Pools" />
      <div className="flex flex-col gap-6">
        {gemPools.map(({address}) => (
          <Pool key={address} address={address} />
        ))}
      </div>
      <StatusPanel />
    </main>
  );
}

export default Pools;
