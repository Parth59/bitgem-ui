import {BigNumber, Contract} from 'ethers';

export type Pool = {
  address: string;
  contract: Contract;
  name?: string;
  symbol?: string;
  category?: string;
  // totalEthStaked?: BigNumber;
  claimedCount?: BigNumber;
  mintedCount?: BigNumber;
  ethPrice?: BigNumber;
  difficultyStep?: BigNumber;
  visible?: boolean;
  gemTokenAddress?: BigNumber;
  gemToken?: Contract;
  description: string;
  maxQuantityPerClaim: any;
  maxClaimsPerAccount: any;
  totalStakedEth: BigNumber;
  nextClaimHash: string;
  nextGemHash: string;
  nextClaimId: any;
  nextGemI: any;

  minTime?: BigNumber;
  maxTime?: BigNumber;
};
