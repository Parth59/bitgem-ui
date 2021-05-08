import {SectionHeader} from 'components/section-header';

function Faq(): JSX.Element {
  return (
    <main className="flex-1">
      <SectionHeader title="FAQ" />
      <div className="text-center lowercase">
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            what is bitgem?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            bitgems are nft&apos;s that are earned by staking ETHEREUM or any
            ERC20 token of value. bitgems are limited in quantity and become
            progressively harder to earn over time, just like real gems.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            how does bitgem work?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            bitgem WORKS BY LETTING YOU STAKE YOUR TOKENS OR ETHEREUM TO EARN AN
            NFT GEM. EACH TIME SOMEONE EARNS A GEM BY SUBMITTING A MATURE CLAIM,
            THE STAKE NEEDED TO CLAIM THE NEXT GEM INCREASES IN PRICE. YOU CAN
            BUY AS MANY CLAIMS AS YOU WANT AT THE LISTED PRICE. eACH CLAIM HAS A
            MINIMUM AND MAXIMUM STAKING PERIOD YOU CAN SELECT, AND THE LONGER
            YOUR CLAIM MATURITY PERIOD IS, THE LESS YOU NEED TO STAKE. YOUR
            TOKENS ARE HELD IN YOUR CLAIM UNTIL YOU COLLECT IT, WHICH YOU CAN DO
            AT ANY TIME, BUT COLLECTING A CLAIM BEFORE IT MATURES WILL NOT EARN
            YOU A gem.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            how can I earn a bitgem?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            bitgems are earned by creating a staking claim. to create a staking
            claim, pick the gem you want to earn and the amount of time you want
            to wait to earn it (longer claims require less capital to stake
            with. once the claim is mature, collect your claim to receive your
            principal back along with a new gem!
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            is my money locked until my claim matures?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            no! if you need to break a claim for whatever reason, you can do so
            with no penalty. you&apos;ll receive 100% of your deposited funds
            back immediately, no questions asked.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            how much does it cost to earn a bitgem?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            creating a bitgem staking claim amd breaking a bitgem claim early is
            free. redeeming a mature claim applies a 0.1% fee incurred on your
            principal deposit applied when your deposit and bitgem are sent to
            you.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            what are bitgems good for?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            what is bitcoin good for? bitgems are an experiment in non-fungible
            digital scarcity. bitgems are bitcoins missing jewels - digital
            artifacts that bear the collected value of all the staking activity
            of those that transact them, just like bitcoin.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            is my money safe?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            bitgem is a secure and decentralized protocol, designed to ensure
            that funds banked within its contracts cannot be withdrawn by anyone
            except the claim holder. Nobody else can access your tokens except
            you. independent audits are being performed on bitgem to ensure your
            funds are safe.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            what do fees go towards?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            fees incurred on mined bitgems are distributed to the larger
            community via bitgem governance and project funding proposals.
            Anyone can file a proposal. bitgem governance token holders then
            vote on proposals. proposals that are accepted by governance are
            automatically funded.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            where can I buy bitgem governance tokens?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            you can&apos;t. bitgem governance tokens are earned by creating and
            collecting on claims, and just like bitgems, bitgem governance
            tokens get harder and harder to find as time goes on.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            what tokens can I stake to earn bitgems?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            you can stake ethereum or any erc20 token with value (the token
            needs to have a uniswap pool and healthy liquidity (100x reserves of
            your staked amount in reserve in uniswap) in order to be eligible.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            is there source code I can look at?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            yes! bitgem contract code is publicly available for review in our
            github.
          </div>
        </div>
        <div className="py-3 sm:py-6">
          <div className="text-blue-300 pb-1 sm:pb-2 text-shadow-sm sm:text-lg md:text-2xl">
            This is awesome! Can I help somehow?
          </div>
          <div className="text-green-500 text-shadow-sm text-xs sm:text-base md:text-xl">
            bounty tasks for our community to participate in and we reward you
            with gems and bitgem governance tokens.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Faq;
