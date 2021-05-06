import {ethers} from 'ethers';
import * as iabis from '../../abis/abis.json';

// This verbosity is unfortunate but necessary for webpack to know what to bundle
// and not spit out "Critical dependency: the request of a dependency is an expression"
const importJSON = async (chainId) => {
  switch (chainId) {
    case 1:
      return import('../../abis/1/bitgems.json');
    case 56:
      return import('../../abis/56/bitgems.json');
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
  balances: {governance: ethers.BigNumber.from(0)},
  pepe: null
};

export const getBlockchainData = async (
  chainId: number | undefined,
  library: any
): Promise<any> => {
  if (chainId === undefined || library === undefined)
    throw new Error('Not connected');

  const contractData = await importJSON(chainId).then(
    (module) => module.default
  );
  const signer = library.getSigner();
  const token = await getContractRef(contractData, 'NFTGemMultiToken', signer);
  const governor = await getContractRef(
    contractData,
    'NFTGemGovernance',
    signer
  );
  const factory = await getContractRef(
    contractData,
    'NFTGemPoolFactory',
    signer
  );
  const address = await signer.getAddress();
  const claimList = [];
  const gemList = [];
  const gemPools = [];
  const totals = {
    claims: 0,
    minted: 0,
    staked: ethers.BigNumber.from(0)
  };
  const allPoolsCount = await factory.allNFTGemPoolsLength();

  // Build the list of gem pools
  let promises = [];
  for (let i = 0; i < allPoolsCount; i++) {
    promises.push(
      (async (i: any) => {
        const address = await factory.allNFTGemPools(i);
        let res: any = {
          address: address.toLowerCase(),
          contract: new ethers.Contract(address, iabis.NFTGemPool, signer)
        };

        const poolDetails = await getPoolDetails(res);
        totals.claims = totals.claims + poolDetails.claimedCount.toNumber();
        totals.minted = totals.minted + poolDetails.mintedCount.toNumber();
        totals.staked = totals.staked.add(poolDetails.totalStaked);
        res = Object.assign(res, poolDetails);

        if (gemPools.length > i && gemPools[i].address === address) {
          gemPools[i] = res;
        } else {
          gemPools.push(res);
        }
      })(i)
    );
  }
  await Promise.all(promises);

  // build the list of claims and gems for this address on this network.
  promises = [];
  const tokensHeldCount = await token.allHeldTokensLength(address);
  for (let i = 0; i < tokensHeldCount.toNumber(); i++) {
    promises.push(
      (async (i: any) => {
        const tokenIndex = await token.allHeldTokens(address, i);
        const hashString = tokenIndex.toHexString();
        if (hashString == '0x00') {
          return;
        }
        let tokenType = 0;
        let tokenPool;
        for (let j = 0; j < gemPools.length; j++) {
          tokenType = await gemPools[j].contract.tokenType(hashString);
          if (tokenType !== 0) {
            tokenPool = gemPools[j];
            break;
          }
        }
        if (tokenType === 1 || tokenType === 2) {
          const item = await getTokenOfPool(
            tokenType,
            hashString,
            tokenPool,
            token,
            address
          );
          if (tokenType === 1) {
            claimList.push(item);
          } else if (tokenType === 2) {
            gemList.push(item);
          }
        } else {
          console.log('not found', hashString);
        }
      })(i)
    );
  }
  await Promise.all(promises);
  const balances = {
    governance: await token.balanceOf(address, 0)
  };

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
    return new ethers.Contract(
      address ? address : tokenData.address,
      tokenData.abi,
      signer
    );
  }
};

const getTokenOfPool = async (
  tokenType: number,
  hashString: string,
  pool: any,
  token: any,
  address: any
): Promise<any> => {
  const claimUnlockTime = await pool.contract.claimUnlockTime(hashString);
  const claimAmount = await pool.contract.claimAmount(hashString);
  const claimQuantity = await pool.contract.claimQuantity(hashString);
  const gemQuantity = await token.balanceOf(address, hashString);
  const claimTokenAmount = await pool.contract.claimTokenAmount(hashString);
  const stakedToken = await pool.contract.stakedToken(hashString);
  const tokenId = await pool.contract.tokenId(hashString);
  const item = {
    type: tokenType,
    id: tokenId,
    hash: hashString,
    name: pool.name,
    symbol: pool.symbol,
    unlockTime: claimUnlockTime,
    amount: claimAmount,
    tokenAmount: claimTokenAmount,
    quantity: claimQuantity,
    gemQuantity: gemQuantity,
    token: stakedToken,
    pool: pool
  };
  return item;
};

const getPoolDetails = async (p: any): Promise<any> => {
  if (!p.contract) {
    return;
  }
  if (!p.name) p.name = await p.contract.name();
  if (!p.symbol) p.symbol = await p.contract.symbol();
  p.ethPrice = await p.contract.ethPrice();
  if (!p.minTime) p.minTime = await p.contract.minTime();
  if (!p.maxTime) p.maxTime = await p.contract.maxTime();
  if (!p.difficultyStep) p.difficultyStep = await p.contract.difficultyStep();
  if (!p.claimedCount) {
    p.claimedCount = await p.contract.claimedCount();
  }
  if (!p.mintedCount) {
    p.mintedCount = await p.contract.mintedCount();
  }
  p.totalStaked = await p.contract.totalStakedEth();
  return p;
};

// utilities

// parseEther(n: any) {
//   const pe = ethers.utils.parseEther(n ? n.toString() : '0');
//   return pe ? pe.toString() : '0';
// }

export const parseEther = (n: any) => {
  const pe = ethers.utils.parseEther(n ? n.toString() : '0');
  return pe ? pe.toString() : '0';
};

export const formatEther = (n: any) => {
  if (!n) return '0';
  const pe = ethers.utils.formatEther(n);
  return pe ? pe.toString() : '0';
};

export const bigNumberToStr = (eth: ethers.BigNumber, precision = 4): string =>
  parseFloat(formatEther(eth)).toFixed(precision);

export const dateFromBigNumber = (bn: ethers.BigNumber): Date =>
  new Date(bn.toNumber() * 1000);
