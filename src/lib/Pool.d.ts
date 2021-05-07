import { BigNumber, Contract } from 'ethers';

export type Pool = {
  address: string;
  name: string;
  symbol: string;
  totalEthStaked: BigNumber;
  claimedCount: BigNumber;
  mintedCount: BigNumber;
  ethPrice: BigNumber;
  difficultyStep: BigNumber;
  contract: Contract;
  visible: boolean;
  gemTokenAddress: BigNumber;
}