import {SectionHeader} from 'components/section-header';
import {StatusPanel} from 'components/status-panel';

const Governance = (): JSX.Element => {
  return (
    <main className="flex-1 px-4 md:px-0">
      <SectionHeader title="Governance" />
      <StatusPanel />
      <div className="text-yellow-200 md:mt-8 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg text-shadow-sm">
        <h2 className="mb-2 text-lg md:text-2xl lg:text-3xl">
          How governance works
        </h2>
        <p className="pb-2 md:pb-4">
          <span className="pr-1 text-red-500">
            bitgem governance tokens, just like bitgems, are earned.
          </span>
          the bitgem protocol randomly issues governance tokens to those using
          the system.
        </p>
        <p className="pb-2 md:pb-4">
          once armed with some bitgem governance tokens, users can vote on
          newly-added governance proposals. Anyone can file a governance
          proposal.
        </p>
        <p className="pb-2 md:pb-4">
          Once created, proposals can only be voted on once funded at a cost of
          one ETH. Anyone can fund a proposal.
        </p>
        <p className="pb-2 md:pb-4">
          Once funded, proposals are voted on by governance token holders - one
          token, one vote. More than 50% votes in favor automatically pass the
          proposal.
        </p>
        <p className="pb-2 md:pb-4">
          The proposal can then be executed. Anyone can initiate execution of a
          proposal once it has passewd, and whether a proposal has passed or
          not, the funder receives their Ethereum back.
        </p>
        <p className="pb-2 md:pb-4">
          If a proposal does pass and it is a gem pool addition proposal, then
          the proposal initiator and the proposal funder both get the first and
          second gems of the new gem pool minted to them as a reward.
        </p>
        Governance proposal types include:
        <ol className="px-6 md:px-8 list-decimal pb-2 md:pb-4">
          <li>add a gem pool</li>
          <li>fund a project</li>
          <li>change pool fees</li>
          <li>modify pool tokenlist</li>
        </ol>
        <p>
          A governance UI will be available here within about two weeks from
          launch. This interface will allow anyone to submit proposals, and
          governance-token holders to vote on those proposals.
        </p>
      </div>
    </main>
  );
};

export default Governance;
