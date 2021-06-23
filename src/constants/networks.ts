export enum ChainId {
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  LOCAL = 1337
}

export const networks = {
  [ChainId.FANTOM]: {name: 'Opera', coin: 'FTM', longName: 'Fantom'},
  [ChainId.LOCAL]: {name: 'Local', coin: 'lETH', longName: 'localhost'},
  [ChainId.FANTOM_TESTNET]: {
    name: 'FtmTest',
    coin: 'tFTM',
    longName: 'Fantom Testnet'
  }
};
