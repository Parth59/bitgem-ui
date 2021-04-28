import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';

function Pools(): JSX.Element {
  return (
    <main className="flex-1">
      <SectionHeader title="BitGem Pools" />
      <StatusPanel />
    </main>
  );
}

export default Pools;
