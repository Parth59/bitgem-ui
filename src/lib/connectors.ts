import {InjectedConnector} from '@web3-react/injected-connector';
import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
import {NetworkConnector} from './network-connector';

export enum ChainId {
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  LOCAL = 1337
}

const POLLING_INTERVAL = 12000;
const RPC: {[chainId: number]: string} = {
  [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
  [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
  [ChainId.LOCAL]: 'http://localhost:4200'
};

export const network = new NetworkConnector({
  defaultChainId: ChainId.FANTOM,
  urls: RPC
});

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.FANTOM, ChainId.FANTOM_TESTNET, ChainId.LOCAL]
});

export const walletConnect = new WalletConnectConnector({
  rpc: RPC,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
