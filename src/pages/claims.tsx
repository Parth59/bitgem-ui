import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {ethToStr} from 'lib/blockchain';

function Claims(): JSX.Element {
  const {claimList} = useBlockchain();

  return (
    <main className="flex-1">
      <SectionHeader title="My Claims" />
      {claimList.map(({hash, amount, name, symbol, quantity, unlockTime}) => (
        <Claim
          key={hash}
          amount={ethToStr(amount)}
          name={name}
          quantity={quantity.toString()}
          unlockTime={unlockTime}
          symbol={symbol}
        />
      ))}
      <StatusPanel />
    </main>
  );
}

export default Claims;
