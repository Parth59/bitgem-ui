import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';

function Claims(): JSX.Element {
  return (
    <main className="flex-1">
      <SectionHeader title="My Claims" />
      <StatusPanel />
    </main>
  );
}

export default Claims;
