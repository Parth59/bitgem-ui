import {BigNumber, Contract, utils} from 'ethers';
import {Web3Provider} from '@ethersproject/providers';
// import {NFTGemGovernor} from '../../types/NFTGemGovernor';
// import {NFTGemPoolFactory} from '../../types/NFTGemPoolFactory';
import {ERC20GemTokenFactory} from '../../types';
// import {NFTGemWrappedERC20Governance} from '../../types/NFTGemWrappedERC20Governance';
import NFTComplexGemPoolAbi from '../../abis/NFTComplexGemPool.json';
import ERC20WrappedGemAbi from '../../abis/ERC20WrappedGem.json';
import {pack, keccak256} from '@ethersproject/solidity';
import {Pool} from '../types/Pool';
import {Token} from '../types/Token';
import {ethers} from 'ethers';
import {GemContracts, SignerOrProvider, Blockchain} from 'types/Blockchain';

const filterValidTokens = (hash: BigNumber) =>
  !hash.eq('0x00') && !hash.eq('0x01');
export const filterGems = (token: Token): boolean => token.type === 2;
export const filterClaims = (token: Token): boolean => token.type === 1;

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

const getContractRef = async (
  contractData: any,
  contract: string,
  signer: SignerOrProvider,
  address?: any
): Promise<Contract> => {
  const tokenData = contractData.contracts[contract];
  if (tokenData) {
    return new Contract(
      address ? address : tokenData.address,
      tokenData.abi,
      signer
    );
  }
};

const importContractData = async (chainId) => {
  let module;
  switch (chainId) {
    // case 42: {
    //   module = await import('../../abis/42/bitgems.json');
    //   break;
    // }
    // case 56: {
    //   module = await import('../../abis/56/bitgems.json');
    //   break;
    // }
    // case 250: {
    //   module = await import('../../abis/250/bitgems.json');
    //   break;
    // }
    case 1337: {
      module = await import('../../abis/1337/bitgems.json');
      break;
    }
    // case 4002: {
    //   module = await import('../../abis/4002/bitgems.json');
    //   break;
    // }
  }
  return module?.default ?? null;
};

export const loadContracts = async (
  chainId: number,
  signerOrProvider: SignerOrProvider
): Promise<GemContracts> => {
  if (!chainId) throw new Error('Not connected');

  const contractData = await importContractData(chainId);
  console.log('CONTRACTDATA: ', {contractData});
  if (contractData === null) throw new Error('Invalid Network');

  const [
    token, // the primary bitgem multitoken
    factory, // the bitgem pool factory
    tokenFactory, // the bitgem pool factory
    governor // governance
  ] = await Promise.all([
    getContractRef(contractData, 'NFTGemMultiToken', signerOrProvider),
    getContractRef(contractData, 'NFTGemPoolFactory', signerOrProvider),
    getContractRef(contractData, 'ERC20GemTokenFactory', signerOrProvider),
    getContractRef(contractData, 'NFTGemGovernor', signerOrProvider)
  ]);

  return {token, factory, tokenFactory, governor} as GemContracts;
};

export const getBlockChainData = async (
  chainId: number,
  library: Web3Provider
): Promise<Blockchain> => {
  if (library === null) Promise.reject('Not Connected');
  const signer = library.getSigner();
  return loadContracts(chainId, signer).then((contracts) => ({
    contracts,
    signer
  }));
};

export const getPools = async (
  contracts: GemContracts,
  signer: SignerOrProvider
): Promise<Pool[]> => {
  const {factory, tokenFactory} = contracts;
  const poolAddresses = await factory.nftGemPools();

  return Promise.all(
    poolAddresses.map((poolAddress) =>
      getPool(poolAddress, tokenFactory, signer)
    )
  );
};

const getPool = async (
  address: string,
  tokenFactory: ERC20GemTokenFactory,
  signerOrProvider: SignerOrProvider
): Promise<Pool> => {
  const contract = new Contract(
    address,
    NFTComplexGemPoolAbi,
    signerOrProvider
  );
  const [settings, stats] = await Promise.all([
    contract.settings(),
    contract.stats()
  ]);

  if (settings === undefined || stats === undefined) {
    throw new Error('missing pool data');
  }
  const symHash = keccak256(
    ['bytes'],
    [pack(['string'], [`W${settings.symbol}`])]
  );

  const gemTokenAddress = await tokenFactory.getItem(symHash);
  const gemToken = new ethers.Contract(
    gemTokenAddress,
    ERC20WrappedGemAbi,
    signerOrProvider
  );

  return {
    contract,
    address,
    gemToken,
    gemTokenAddress: BigNumber.from(gemTokenAddress),
    symbol: settings.symbol,
    name: settings.name,
    description: settings.description,
    visible: settings.visible,
    category: settings.category,
    ethPrice: settings.ethPrice,
    minTime: settings.minTime,
    maxTime: settings.maxTime,
    maxQuantityPerClaim: settings.maxQuantityPerClaim,
    maxClaimsPerAccount: settings.maxClaimsPerAccount,
    difficultyStep: settings.diffstep,
    claimedCount: stats.claimedCount,
    mintedCount: stats.mintedCount,
    totalStakedEth: stats.totalStakedEth,
    nextClaimHash: stats.nextClaimHash,
    nextGemHash: stats.nextGemHash,
    nextClaimId: stats.nextClaimId,
    nextGemI: stats.nextGemI
  };
};

export const getTokens = async (
  account: string,
  contracts: GemContracts,
  pools: Pool[]
): Promise<Token[]> => {
  const heldTokenHashes = (await contracts.token.heldTokens(account)).filter(
    filterValidTokens
  );
  const tokenData = await Promise.all(
    heldTokenHashes.map((tokenHash) => contracts.token.getTokenData(tokenHash))
  );

  return Promise.all(
    tokenData.map((td, i) =>
      getToken(
        contracts,
        account,
        td.tokenType,
        pools.find(({address}) => address === td.tokenPool),
        heldTokenHashes[i].toString()
      )
    )
  );
};

const getToken = async (
  contracts: GemContracts,
  account: string,
  tokenType: number,
  pool: Pool,
  hash: string
): Promise<Token | null> => {
  if (tokenType !== 1 && tokenType !== 2)
    throw new Error(`getToken: Invalid token type ${hash} ${tokenType}`);

  const {symbol, name} = pool;
  const {
    claimAmount,
    claimQuantity,
    claimUnlockTime,
    claimTokenAmount,
    stakedToken
  } = await pool.contract.claim(hash);
  const {tokenId} = await pool.contract.token(hash);
  const item = {
    type: tokenType,
    id: tokenId.toNumber(),
    hash,
    name,
    symbol,
    unlockTime: claimUnlockTime.toNumber() || 0,
    amount: claimAmount,
    quantity: claimQuantity.toNumber(),
    tokenAmount: claimTokenAmount.toNumber(),
    token: stakedToken,
    gemQuantity: (await contracts.token.balanceOf(account, hash)).toNumber(),
    pool
  };
  return item;
};

// utilities

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

export const dateFromBigNumber = (bn: BigNumber): Date =>
  new Date(bn.toNumber() * 1000);

export const parseEther = (n: string): string => {
  const pe = utils.parseEther(n ? n.toString() : '0');
  return pe ? pe.toString() : '0';
};

export const formatEther = (n: string | number | BigNumber): string => {
  if (!n) return '0';
  const pe = utils.formatEther(n);
  return pe ? pe.toString() : '0';
};
