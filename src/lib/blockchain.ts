export const networkNames: any = {
  '1': 'Ethereum',
  '3': 'ropsten',
  '4': 'rinkeby',
  '5': 'goerli',
  '42': 'kovan',
  '56': 'Binance',
  '77': 'sokol',
  '97': 'bsc-testnet',
  '99': 'POA',
  '250': 'Opera',
  '1337': 'local',
  '4002': 'ftmtest',
  '43113': 'fuji',
  '43114': 'Avalanche'
};

export const networkCoins: any = {
  '1': 'ETH',
  '3': 'rETH',
  '4': 'rETH',
  '5': 'kETH',
  '42': 'kETH',
  '56': 'BNB',
  '77': 'sPOS',
  '97': 'tBNB',
  '99': 'POA',
  '250': 'FTM',
  '1337': 'lETH',
  '4002': 'tFTM',
  '43113': 'tAVAX',
  '43114': 'AVAX'
};

export const getWalletName = (networkId: number, account: string): string =>
  `${networkNames[networkId]}-${account.substring(0, 3)}...${account.substring(
    account.length - 2
  )}`;
