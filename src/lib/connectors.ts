import {InjectedConnector} from '@web3-react/injected-connector';
import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
import {ChainId} from 'constants/networks';
import {RPC} from 'constants/rpc';
import {NetworkConnector} from './network-connector';

const POLLING_INTERVAL = 12000;

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
