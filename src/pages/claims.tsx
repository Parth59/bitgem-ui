import {useBlockchain} from 'components/blockchain-context';
import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';
import {Claim} from 'components/claim';
import {ethToStr} from 'lib/blockchain';

function Claims(): JSX.Element {
  const {isSuccess, data} = useBlockchain();

  const claimList = isSuccess ? data.claimList : [];

  return (
    <main className="flex-1 px-4">
      <SectionHeader title="My Claims" />
      <div className="flex flex-col gap-6">
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
      </div>
      <StatusPanel />
    </main>
  );
}

export default Claims;
