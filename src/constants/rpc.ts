import {ChainId} from './networks';

export const RPC: {[chainId: number]: string} = {
  [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
  [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
  [ChainId.LOCAL]: 'http://localhost:4200'
};
