import { BigNumber } from 'ethers';
import { Pool } from "./Pool";

export type Token = {
  type: number;
  id: number;
  hash: string;
  name: string;
  symbol: string;
  unlockTime: number;
  amount: BigNumber;
  tokenAmount: number;
  quantity: number;
  gemQuantity: number;
  token: string;
  pool: Pool;
}
