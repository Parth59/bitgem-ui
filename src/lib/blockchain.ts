import {BigNumber, Contract, utils} from 'ethers';

import {NFTGemGovernor} from '../../types/NFTGemGovernor';
import {NFTGemMultiToken} from '../../types/NFTGemMultiToken';
import {NFTGemPoolFactory} from '../../types/NFTGemPoolFactory';
import {ERC20GemTokenFactory} from '../../types/ERC20GemTokenFactory';

import {Pool} from '../lib/Pool';
import {Token} from '../lib/Token';

import * as iabis from '../../abis/abis.json';

// Unfortunately the bundler will complain if we parameterize the chainId on the import
const importJSON = async (chainId) => {
  switch (chainId) {
    case 250:
      return import('../../abis/250/bitgems.json');
    case 1337:
      return import('../../abis/1337/bitgems.json');
    case 4002:
      return import('../../abis/4002/bitgems.json');
    default:
      return null;
  }
};

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

const sortGemsList = (
  a: {symbol: string; id: number},
  b: {symbol: string; id: number}
) => {
  if (a.symbol > b.symbol) return -1;
  if (a.symbol < b.symbol) return 1;
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
};

const sortClaimsList = (a: {unlockTime: number}, b: {unlockTime: number}) => {
  if (a.unlockTime > b.unlockTime) return 1;
  if (a.unlockTime < b.unlockTime) return -1;
  return 0;
};

export const gemPics = (symbol: string): string => {
  if (symbol == 'DMND') return 'white2.png';
  else if (symbol == 'RUBY') return 'red2.png';
  else if (symbol == 'MRLD') return 'greengem2.png';
  else if (symbol == 'SPHR') return 'blue2.png';
  else if (symbol == 'JADE') return 'dkgreengem2.png';
  else if (symbol == 'TPAZ') return 'orange2.png';
  else if (symbol == 'OPAL') return 'opal.png';
  else if (symbol == 'PERL') return 'pearl.png';
  else if (symbol == 'CHRY') return 'cherry.png';
  else if (symbol == 'BERY') return 'strawberry.png';
  else if (symbol == 'PEPE') return 'pepe.png';
  else return 'white2.png';
};

export const getWalletName = (networkId: number, account: string): string =>
  `${networkNames[networkId]}-${account.substring(0, 3)}...${account.substring(
    account.length - 2
  )}`;

export const importContract = async ({
  queryKey
}: {
  queryKey: [string, number | undefined];
}): Promise<any> => {
  const [, chainId] = queryKey;
  if (chainId === undefined) return Promise.resolve(null);
  return importJSON(chainId).then((module) => module.default);
};

export const emptyBlockchainData = {
  contracts: {token: null, factory: null, governor: null},
  totals: {staked: 0, claims: 0, minted: 0},
  gemPools: [],
  gemList: [],
  claimList: [],
  balances: {governance: BigNumber.from(0)},
  pepe: null
};

// TODO: type
export const getBlockchainData = async (
  chainId: number | undefined,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  library: any,
  account: null | string
): Promise<any> => {
  if (chainId === undefined || library === undefined)
    throw new Error('Not connected');

  // let mockMode = false;
  let contractData;
  const claimList = [];
  const gemList = [];
  const gemPools = [];
  const gemPoolsByAddress: {[address: string]: Pool} = {};
  // const symbolsBySymbol: {[symbol: string]: boolean} = {};
  // const symbolsList: string[] = [];

  const totals = {
    claims: 0,
    minted: 0,
    staked: BigNumber.from(0)
  };
  const balances = {
    governance: 0
  };

  const signer = library.getSigner();

  try {
    contractData = await importJSON(chainId).then((module) => module.default);
  } catch (e) {
    throw new Error('Invalid network');
  }

  let queryHelperContract = '';
  if (chainId == 1 || chainId == 250) {
    queryHelperContract = 'UniswapQueryHelper';
  } else if (chainId == 43114) {
    queryHelperContract = 'PangolinQueryHelper';
  } else if (chainId == 56) {
    queryHelperContract = 'PancakeSwapQueryHelper';
  } else {
    queryHelperContract = 'MockQueryHelper';
    // mockMode = true;
  }

  const [
    queryHelper, // the uniswap helper
    token, // the primary bitgem multitoken
    factory, // the bitgem pool factory
    tokenFactory, // the bitgem erc20 token factory
    governor // governance
  ]: [
    any,
    NFTGemMultiToken,
    NFTGemPoolFactory,
    ERC20GemTokenFactory,
    NFTGemGovernor
  ] = await Promise.all([
    getContractRef(contractData, queryHelperContract, signer),
    getContractRef(contractData, 'NFTGemMultiToken', signer),
    getContractRef(contractData, 'NFTGemPoolFactory', signer),
    getContractRef(contractData, 'ERC20GemTokenFactory', signer),
    getContractRef(contractData, 'NFTGemGovernor', signer)
  ]);

  console.dir(queryHelper, tokenFactory);

  const allPoolsCount = (await factory.allNFTGemPoolsLength()).toNumber();

  // Build the list of gem pools
  let promises: Promise<void>[] = [];
  for (let i = 0; i < allPoolsCount; i++) {
    promises.push(
      (async (i: any) => {
        const address = await factory.allNFTGemPools(i);

        let abi = iabis.NFTGemPool;

        if (
          address === '0xB2f90a1E3a465764Bdf35DCf75795cC3D0D74778' ||
          address === '0x3C1ee35a56Da6c51b4ce9CdF5A790441041FB4c'
        ) {
          abi = iabis.NFTComplexGemPool;
        }

        const pool: any = {
          address: address.toLowerCase(),
          contract: new Contract(address, abi, signer)
        };

        // get pool details
        Object.assign(pool, await getPoolDetails(pool)); //, tokenFactory, signer));

        // Add this pool's numbers to our totals
        totals.claims += pool.claimedCount.toNumber();
        totals.minted += pool.mintedCount.toNumber();
        totals.staked = totals.staked.add(pool.totalEthStaked);

        if (gemPools.length > i && gemPools[i].address === address) {
          gemPools[i] = pool;
        } else {
          gemPools.push(pool);
        }
        gemPoolsByAddress[address.toLowerCase()] = pool;
        // if (this.loadSecret) console.log(pool);  // TODO: what is this?
      })(i)
    );
  }
  await Promise.all(promises);

  // build the list of claims and gems for this address on this network.
  promises = [];
  const tokenCount = await (
    await token.allHeldTokensLength(account)
  ).toNumber();
  for (let i = 0; i < tokenCount; i++) {
    promises.push(
      (async (n: any) => {
        const tokenIndex = await token.allHeldTokens(account, n);

        await updateTokenPools(
          tokenIndex.toHexString(),
          gemPools,
          gemPoolsByAddress,
          token,
          account,
          claimList,
          gemList
        );
      })(i)
    );
  }
  await Promise.all(promises);
  balances.governance = (await token.balanceOf(account, 0)).toNumber();

  return {
    contracts: {token, factory, governor},
    totals,
    gemPools,
    gemList,
    claimList,
    balances
  };
};

const getContractRef = async (
  contractData: any,
  contract: any,
  signer: any,
  address?: any
): Promise<any> => {
  const tokenData = contractData.contracts[contract];
  if (tokenData) {
    return new Contract(
      address ? address : tokenData.address,
      tokenData.abi,
      signer
    );
  }
};

const updateTokenPools = async (
  hash: string,
  gemPools: Array<Pool>,
  gemPoolsByAddress: any,
  token: any,
  account: any,
  claimsList: any,
  gemsList: any
): Promise<void> => {
  if (BigNumber.from(hash).eq(0) || BigNumber.from(hash).eq(1)) {
    return;
  }
  const {type: tokenType, address} = await getTokenPoolInfo(hash, gemPools);
  if (tokenType === 1 || tokenType === 2) {
    const gemPool = gemPoolsByAddress[address];
    updateTokenPool(
      tokenType,
      hash,
      gemPool,
      token,
      account,
      claimsList,
      gemsList
    );
  } else if (typeof tokenType !== 'undefined') {
    console.log('no pool address for', hash);
  }
};

const updateTokenPool = async (
  tokenType: number,
  hash: string,
  tokenPool: Pool,
  token: Token,
  account: any,
  claimsList: any,
  gemsList: any
) => {
  // if (symbol === 'MCU' && !this.loadSecret) {
  //   return;
  // }
  const item: Token = await getTokenDetails(
    tokenPool,
    tokenType,
    hash,
    token,
    account
  );

  if (tokenType === 1) {
    if (item.gemQuantity) {
      claimsList.push(item);
      claimsList.sort(sortClaimsList);
    }
  } else if (tokenType === 2) {
    gemsList.push(item);
    gemsList.sort(sortGemsList);
  }
};

const getTokenDetails = async (
  tokenPool: any,
  tokenType: number,
  hash: string,
  token: any,
  account: any
): Promise<Token> => {
  // const version = 2;
  const valid = tokenType !== 0 && tokenType !== 2;
  const [
    claimUnlockTime,
    claimAmount,
    claimQuantity,
    claimTokenAmount,
    stakedToken,
    tokenId,
    gemQuantity
  ]: [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] = await Promise.all([
    valid ? tokenPool.contract.claimUnlockTime(hash) : BigNumber.from(0),
    valid ? tokenPool.contract.claimAmount(hash) : BigNumber.from(0),
    valid ? tokenPool.contract.claimQuantity(hash) : BigNumber.from(0),
    valid ? tokenPool.contract.claimTokenAmount(hash) : BigNumber.from(0),
    tokenPool.contract.stakedToken(hash),
    tokenPool.contract.tokenId(hash),
    token.balanceOf(account, hash)
  ]);

  const tokenDetails: Token = {
    type: tokenType,
    id: tokenId.toNumber(),
    hash: hash,
    name: tokenPool.name,
    symbol: tokenPool.symbol,
    unlockTime: claimUnlockTime.toNumber(),
    amount: claimAmount,
    tokenAmount: claimTokenAmount.toNumber(),
    quantity: claimQuantity.toNumber(),
    gemQuantity: gemQuantity.toNumber(),
    token: stakedToken,
    pool: tokenPool
  };

  return tokenDetails;
};

const getTokenPoolInfo = async (hash: string, gemPools: any): Promise<any> => {
  let tokenInfo = {};
  console.log({hash, gemPools});
  for (let i = 0; i < gemPools.length; i++) {
    const type = await gemPools[i].contract.tokenType(hash);
    if (type !== 0) {
      tokenInfo = {
        v: 1, // version in case we need to update
        type,
        address: gemPools[i].address,
        symbol: gemPools[i].symbol
      };
      break;
    }
  }
  console.log({tokenInfo});
  return tokenInfo;
};

const getPoolDetails = async (
  p: any
  // tokenFactory: any,
  // signer: any
): Promise<any> => {
  if (!p.contract) {
    return;
  }
  let {
    // eslint-disable-next-line prefer-const
    contract,
    symbol,
    name,
    ethPrice,
    minTime,
    maxTime,
    difficultyStep,
    visible,
    category,
    claimedCount,
    mintedCount,
    totalEthStaked
  } = p;

  [
    symbol,
    name,
    ethPrice,
    minTime,
    maxTime,
    difficultyStep,
    visible,
    category,
    claimedCount,
    mintedCount,
    totalEthStaked
  ] = await Promise.all([
    symbol ? Promise.resolve(symbol) : contract.symbol(),
    name ? Promise.resolve(name) : contract.name(),
    contract.ethPrice(), // always get the ethPrice
    minTime ? Promise.resolve(minTime) : contract.minTime(),
    maxTime ? Promise.resolve(maxTime) : contract.maxTime(),
    difficultyStep
      ? Promise.resolve(difficultyStep)
      : contract.difficultyStep(),
    visible ? Promise.resolve(visible) : contract.visible(),
    category ? Promise.resolve(category) : contract.category(),
    claimedCount ? Promise.resolve(claimedCount) : contract.claimedCount(),
    mintedCount ? Promise.resolve(mintedCount) : contract.mintedCount(),
    contract.totalStakedEth()
  ]);

  return {
    ...p,
    symbol,
    name,
    ethPrice,
    minTime,
    maxTime,
    difficultyStep,
    visible,
    category,
    claimedCount,
    mintedCount,
    totalEthStaked
  };
};

// utilities

export const parseEther = (n: string): string => {
  const pe = utils.parseEther(n ? n.toString() : '0');
  return pe ? pe.toString() : '0';
};

export const formatEther = (n: string): string => {
  if (!n) return '0';
  const pe = utils.formatEther(n);
  return pe ? pe.toString() : '0';
};

export const dateFromBigNumber = (bn: BigNumber): Date =>
  new Date(bn.toNumber() * 1000);
