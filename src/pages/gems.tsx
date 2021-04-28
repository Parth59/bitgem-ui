import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';

function Gems(): JSX.Element {
  return (
    <main className="flex-1">
      <SectionHeader title="My Bitgems" />
      <StatusPanel />
    </main>
  );
}

export default Gems;
