import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';

function Home(): JSX.Element {
  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="Welcome" />
      <span className="text-sm text-justify lg:text-lg xl:text-xl text-yellow-200">
        <span className="text-shadow-sm text-lg md:text-xl lg:text-2xl text-pink-600">
          bitgems are digital jewels.
        </span>
        <span className="mx-2 text-shadow-sm text-green-500">
          To mine them, stake Ethereum or any ERC20 token to receive a claim.
        </span>
        <span className="text-shadow-md">
          Redeem your claim after the maturity date for a gem and your tokens
          back. Or anytime before maturity to get your tokens back. Each gem
          found raises the price to stake the next gem. Redeem your claim after
          the maturity date for a gem and your tokens back. Or anytime before
          maturity to get your tokens back. Each gem found raises the price to
          stake the next gem.
        </span>
        <span className="block my-4 border-2 rounded-md border-yellow-500 p-3">
          4/21/2020 - an issue with with withdrawals involving multiple-quantity
          claims has been reported. If your claim is for a single gem you can
          safely collect it and your gem. If you have claims for multiple
          quantities PLEASE visit{' '}
          <a className="" href="https://discord.gg/qNXAk4wtMe">
            our Discord
          </a>{' '}
          before you collect on your claim.
        </span>
      </span>
      <StatusPanel />
    </main>
  );
}

Home.displayName = 'Home';

export default Home;
