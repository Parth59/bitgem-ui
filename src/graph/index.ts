import { GraphQLClient } from 'graphql-request';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};






export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type Claim = {
  __typename?: 'Claim';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  gemPool: GemPool;
  owner: User;
  stakedTimeSeconds: Scalars['BigInt'];
  stakedAmount: Scalars['BigInt'];
  quantity: Scalars['BigInt'];
  /** creation timestamp for this token */
  createdAtTimestamp: Scalars['BigInt'];
  /** creation block number for this token */
  createdAtBlockNumber: Scalars['BigInt'];
  /** last update timestamp for this token */
  updatedAtTimestamp: Scalars['BigInt'];
  /** transaction for the creation of this token */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type ClaimSend = {
  __typename?: 'ClaimSend';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  gemPool: GemPool;
  claim: Claim;
  to: User;
  from: User;
  /** creation timestamp for this send */
  createdAtTimestamp: Scalars['BigInt'];
  /** creation block number for this send */
  createdAtBlockNumber: Scalars['BigInt'];
  /** transaction for the creation of this send */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type ClaimSend_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  gemPool?: Maybe<Scalars['String']>;
  gemPool_not?: Maybe<Scalars['String']>;
  gemPool_gt?: Maybe<Scalars['String']>;
  gemPool_lt?: Maybe<Scalars['String']>;
  gemPool_gte?: Maybe<Scalars['String']>;
  gemPool_lte?: Maybe<Scalars['String']>;
  gemPool_in?: Maybe<Array<Scalars['String']>>;
  gemPool_not_in?: Maybe<Array<Scalars['String']>>;
  gemPool_contains?: Maybe<Scalars['String']>;
  gemPool_not_contains?: Maybe<Scalars['String']>;
  gemPool_starts_with?: Maybe<Scalars['String']>;
  gemPool_not_starts_with?: Maybe<Scalars['String']>;
  gemPool_ends_with?: Maybe<Scalars['String']>;
  gemPool_not_ends_with?: Maybe<Scalars['String']>;
  claim?: Maybe<Scalars['String']>;
  claim_not?: Maybe<Scalars['String']>;
  claim_gt?: Maybe<Scalars['String']>;
  claim_lt?: Maybe<Scalars['String']>;
  claim_gte?: Maybe<Scalars['String']>;
  claim_lte?: Maybe<Scalars['String']>;
  claim_in?: Maybe<Array<Scalars['String']>>;
  claim_not_in?: Maybe<Array<Scalars['String']>>;
  claim_contains?: Maybe<Scalars['String']>;
  claim_not_contains?: Maybe<Scalars['String']>;
  claim_starts_with?: Maybe<Scalars['String']>;
  claim_not_starts_with?: Maybe<Scalars['String']>;
  claim_ends_with?: Maybe<Scalars['String']>;
  claim_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum ClaimSend_OrderBy {
  Id = 'id',
  Factory = 'factory',
  GemPool = 'gemPool',
  Claim = 'claim',
  To = 'to',
  From = 'from',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  TransactionHash = 'transactionHash'
}

export type Claim_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  gemPool?: Maybe<Scalars['String']>;
  gemPool_not?: Maybe<Scalars['String']>;
  gemPool_gt?: Maybe<Scalars['String']>;
  gemPool_lt?: Maybe<Scalars['String']>;
  gemPool_gte?: Maybe<Scalars['String']>;
  gemPool_lte?: Maybe<Scalars['String']>;
  gemPool_in?: Maybe<Array<Scalars['String']>>;
  gemPool_not_in?: Maybe<Array<Scalars['String']>>;
  gemPool_contains?: Maybe<Scalars['String']>;
  gemPool_not_contains?: Maybe<Scalars['String']>;
  gemPool_starts_with?: Maybe<Scalars['String']>;
  gemPool_not_starts_with?: Maybe<Scalars['String']>;
  gemPool_ends_with?: Maybe<Scalars['String']>;
  gemPool_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  stakedTimeSeconds?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_not?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_gt?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_lt?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_gte?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_lte?: Maybe<Scalars['BigInt']>;
  stakedTimeSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedTimeSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedAmount?: Maybe<Scalars['BigInt']>;
  stakedAmount_not?: Maybe<Scalars['BigInt']>;
  stakedAmount_gt?: Maybe<Scalars['BigInt']>;
  stakedAmount_lt?: Maybe<Scalars['BigInt']>;
  stakedAmount_gte?: Maybe<Scalars['BigInt']>;
  stakedAmount_lte?: Maybe<Scalars['BigInt']>;
  stakedAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  quantity?: Maybe<Scalars['BigInt']>;
  quantity_not?: Maybe<Scalars['BigInt']>;
  quantity_gt?: Maybe<Scalars['BigInt']>;
  quantity_lt?: Maybe<Scalars['BigInt']>;
  quantity_gte?: Maybe<Scalars['BigInt']>;
  quantity_lte?: Maybe<Scalars['BigInt']>;
  quantity_in?: Maybe<Array<Scalars['BigInt']>>;
  quantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Claim_OrderBy {
  Id = 'id',
  Factory = 'factory',
  GemPool = 'gemPool',
  Owner = 'owner',
  StakedTimeSeconds = 'stakedTimeSeconds',
  StakedAmount = 'stakedAmount',
  Quantity = 'quantity',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  TransactionHash = 'transactionHash'
}

export type Gem = {
  __typename?: 'Gem';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  gemPool: GemPool;
  owner: User;
  claim: Claim;
  quantity: Scalars['BigInt'];
  /** creation timestamp for this token */
  createdAtTimestamp: Scalars['BigInt'];
  /** creation block number for this token */
  createdAtBlockNumber: Scalars['BigInt'];
  /** last update timestamp for this token */
  updatedAtTimestamp: Scalars['BigInt'];
  /** transaction for the creation of this token */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type GemPool = {
  __typename?: 'GemPool';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  /** unique symbol for this gem pool */
  symbol: Scalars['String'];
  /** name of this gem pool */
  name: Scalars['String'];
  /** the current staking price for the gem pool */
  stakingPrice: Scalars['BigInt'];
  /** the minimum staking time for this gem pool */
  minTimeSecs: Scalars['BigInt'];
  /** the maximum staking time for this gem pool */
  maxTimeSecs: Scalars['BigInt'];
  /** the difficulty step for this gem pool, determines staking price as gems are minted */
  diffStep: Scalars['BigInt'];
  /** the maximum number of gem mints this gem pool allows */
  maxMint: Scalars['BigInt'];
  /** limit staking to this ERC20 token */
  allowedToken?: Maybe<Scalars['String']>;
  /** active claims for this staking pool */
  claims: Array<Claim>;
  /** gems created for this staking pool */
  gems: Array<Gem>;
  /** claims created */
  claimsCount: Scalars['BigInt'];
  /** total quantity on created claims */
  claimsQuantity: Scalars['BigInt'];
  /** total funds staked on created claims */
  claimsStakedAmount: Scalars['BigDecimal'];
  /** total gem staking time in seconds */
  claimsStakedTimeSecs: Scalars['BigInt'];
  /** number of claim send transactions */
  claimsSentCount: Scalars['BigInt'];
  /** number of gems minted */
  gemsMintedCount: Scalars['BigInt'];
  /** total quantity specified on minted gems */
  gemsMintedQuantity: Scalars['BigInt'];
  /** total funds staked on minted gems */
  gemsStakedAmount: Scalars['BigDecimal'];
  /** number of gem send transactions */
  gemsSentCount: Scalars['BigInt'];
  /** total quantity of gems in gem send transactions */
  gemsSentQuantity: Scalars['BigInt'];
  /** total time staked by this user, including immature claim collections */
  stakedTimeSecs: Scalars['BigInt'];
};


export type GemPoolClaimsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Claim_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Claim_Filter>;
};


export type GemPoolGemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Gem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Gem_Filter>;
};

export type GemPoolFactory = {
  __typename?: 'GemPoolFactory';
  id: Scalars['ID'];
  factoryAddress: Scalars['String'];
  /** total time staked by this user, including immature claim collections */
  stakedTimeSecs: Scalars['BigInt'];
  /** claims created */
  claimsCount: Scalars['BigInt'];
  /** total quantity on created claims */
  claimsQuantity: Scalars['BigInt'];
  /** total funds staked on created claims */
  claimsStakedAmount: Scalars['BigDecimal'];
  /** total gem staking time in seconds */
  claimsStakedTimeSecs: Scalars['BigInt'];
  /** number of claim send transactions */
  claimsSentCount: Scalars['BigInt'];
  /** number of gems minted */
  gemsMintedCount: Scalars['BigInt'];
  /** total quantity specified on minted gems */
  gemsMintedQuantity: Scalars['BigInt'];
  /** total funds staked on minted gems */
  gemsStakedAmount: Scalars['BigDecimal'];
  /** number of gem send transactions */
  gemsSentCount: Scalars['BigInt'];
  /** total quantity of gems in gem send transactions */
  gemsSentQuantity: Scalars['BigInt'];
  gemPoolsCount: Scalars['Int'];
  gemPools: Array<GemPool>;
};


export type GemPoolFactoryGemPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemPool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemPool_Filter>;
};

export type GemPoolFactory_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factoryAddress?: Maybe<Scalars['String']>;
  factoryAddress_not?: Maybe<Scalars['String']>;
  factoryAddress_gt?: Maybe<Scalars['String']>;
  factoryAddress_lt?: Maybe<Scalars['String']>;
  factoryAddress_gte?: Maybe<Scalars['String']>;
  factoryAddress_lte?: Maybe<Scalars['String']>;
  factoryAddress_in?: Maybe<Array<Scalars['String']>>;
  factoryAddress_not_in?: Maybe<Array<Scalars['String']>>;
  factoryAddress_contains?: Maybe<Scalars['String']>;
  factoryAddress_not_contains?: Maybe<Scalars['String']>;
  factoryAddress_starts_with?: Maybe<Scalars['String']>;
  factoryAddress_not_starts_with?: Maybe<Scalars['String']>;
  factoryAddress_ends_with?: Maybe<Scalars['String']>;
  factoryAddress_not_ends_with?: Maybe<Scalars['String']>;
  stakedTimeSecs?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsCount?: Maybe<Scalars['BigInt']>;
  claimsCount_not?: Maybe<Scalars['BigInt']>;
  claimsCount_gt?: Maybe<Scalars['BigInt']>;
  claimsCount_lt?: Maybe<Scalars['BigInt']>;
  claimsCount_gte?: Maybe<Scalars['BigInt']>;
  claimsCount_lte?: Maybe<Scalars['BigInt']>;
  claimsCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity?: Maybe<Scalars['BigInt']>;
  claimsQuantity_not?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedAmount?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedTimeSecs?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount?: Maybe<Scalars['BigInt']>;
  claimsSentCount_not?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedCount?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_not?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_gt?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_lt?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_gte?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_lte?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedQuantity?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsStakedAmount?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemsStakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemsSentCount?: Maybe<Scalars['BigInt']>;
  gemsSentCount_not?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemPoolsCount?: Maybe<Scalars['Int']>;
  gemPoolsCount_not?: Maybe<Scalars['Int']>;
  gemPoolsCount_gt?: Maybe<Scalars['Int']>;
  gemPoolsCount_lt?: Maybe<Scalars['Int']>;
  gemPoolsCount_gte?: Maybe<Scalars['Int']>;
  gemPoolsCount_lte?: Maybe<Scalars['Int']>;
  gemPoolsCount_in?: Maybe<Array<Scalars['Int']>>;
  gemPoolsCount_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum GemPoolFactory_OrderBy {
  Id = 'id',
  FactoryAddress = 'factoryAddress',
  StakedTimeSecs = 'stakedTimeSecs',
  ClaimsCount = 'claimsCount',
  ClaimsQuantity = 'claimsQuantity',
  ClaimsStakedAmount = 'claimsStakedAmount',
  ClaimsStakedTimeSecs = 'claimsStakedTimeSecs',
  ClaimsSentCount = 'claimsSentCount',
  GemsMintedCount = 'gemsMintedCount',
  GemsMintedQuantity = 'gemsMintedQuantity',
  GemsStakedAmount = 'gemsStakedAmount',
  GemsSentCount = 'gemsSentCount',
  GemsSentQuantity = 'gemsSentQuantity',
  GemPoolsCount = 'gemPoolsCount',
  GemPools = 'gemPools'
}

export type GemPool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  stakingPrice?: Maybe<Scalars['BigInt']>;
  stakingPrice_not?: Maybe<Scalars['BigInt']>;
  stakingPrice_gt?: Maybe<Scalars['BigInt']>;
  stakingPrice_lt?: Maybe<Scalars['BigInt']>;
  stakingPrice_gte?: Maybe<Scalars['BigInt']>;
  stakingPrice_lte?: Maybe<Scalars['BigInt']>;
  stakingPrice_in?: Maybe<Array<Scalars['BigInt']>>;
  stakingPrice_not_in?: Maybe<Array<Scalars['BigInt']>>;
  minTimeSecs?: Maybe<Scalars['BigInt']>;
  minTimeSecs_not?: Maybe<Scalars['BigInt']>;
  minTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  minTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  minTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  minTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  minTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  minTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  maxTimeSecs?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_not?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  maxTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  maxTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  diffStep?: Maybe<Scalars['BigInt']>;
  diffStep_not?: Maybe<Scalars['BigInt']>;
  diffStep_gt?: Maybe<Scalars['BigInt']>;
  diffStep_lt?: Maybe<Scalars['BigInt']>;
  diffStep_gte?: Maybe<Scalars['BigInt']>;
  diffStep_lte?: Maybe<Scalars['BigInt']>;
  diffStep_in?: Maybe<Array<Scalars['BigInt']>>;
  diffStep_not_in?: Maybe<Array<Scalars['BigInt']>>;
  maxMint?: Maybe<Scalars['BigInt']>;
  maxMint_not?: Maybe<Scalars['BigInt']>;
  maxMint_gt?: Maybe<Scalars['BigInt']>;
  maxMint_lt?: Maybe<Scalars['BigInt']>;
  maxMint_gte?: Maybe<Scalars['BigInt']>;
  maxMint_lte?: Maybe<Scalars['BigInt']>;
  maxMint_in?: Maybe<Array<Scalars['BigInt']>>;
  maxMint_not_in?: Maybe<Array<Scalars['BigInt']>>;
  allowedToken?: Maybe<Scalars['String']>;
  allowedToken_not?: Maybe<Scalars['String']>;
  allowedToken_gt?: Maybe<Scalars['String']>;
  allowedToken_lt?: Maybe<Scalars['String']>;
  allowedToken_gte?: Maybe<Scalars['String']>;
  allowedToken_lte?: Maybe<Scalars['String']>;
  allowedToken_in?: Maybe<Array<Scalars['String']>>;
  allowedToken_not_in?: Maybe<Array<Scalars['String']>>;
  allowedToken_contains?: Maybe<Scalars['String']>;
  allowedToken_not_contains?: Maybe<Scalars['String']>;
  allowedToken_starts_with?: Maybe<Scalars['String']>;
  allowedToken_not_starts_with?: Maybe<Scalars['String']>;
  allowedToken_ends_with?: Maybe<Scalars['String']>;
  allowedToken_not_ends_with?: Maybe<Scalars['String']>;
  claimsCount?: Maybe<Scalars['BigInt']>;
  claimsCount_not?: Maybe<Scalars['BigInt']>;
  claimsCount_gt?: Maybe<Scalars['BigInt']>;
  claimsCount_lt?: Maybe<Scalars['BigInt']>;
  claimsCount_gte?: Maybe<Scalars['BigInt']>;
  claimsCount_lte?: Maybe<Scalars['BigInt']>;
  claimsCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity?: Maybe<Scalars['BigInt']>;
  claimsQuantity_not?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedAmount?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedTimeSecs?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount?: Maybe<Scalars['BigInt']>;
  claimsSentCount_not?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedCount?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_not?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_gt?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_lt?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_gte?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_lte?: Maybe<Scalars['BigInt']>;
  gemsMintedCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedQuantity?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsMintedQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsMintedQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsStakedAmount?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  gemsStakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemsStakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemsSentCount?: Maybe<Scalars['BigInt']>;
  gemsSentCount_not?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedTimeSecs?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  stakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum GemPool_OrderBy {
  Id = 'id',
  Factory = 'factory',
  Symbol = 'symbol',
  Name = 'name',
  StakingPrice = 'stakingPrice',
  MinTimeSecs = 'minTimeSecs',
  MaxTimeSecs = 'maxTimeSecs',
  DiffStep = 'diffStep',
  MaxMint = 'maxMint',
  AllowedToken = 'allowedToken',
  Claims = 'claims',
  Gems = 'gems',
  ClaimsCount = 'claimsCount',
  ClaimsQuantity = 'claimsQuantity',
  ClaimsStakedAmount = 'claimsStakedAmount',
  ClaimsStakedTimeSecs = 'claimsStakedTimeSecs',
  ClaimsSentCount = 'claimsSentCount',
  GemsMintedCount = 'gemsMintedCount',
  GemsMintedQuantity = 'gemsMintedQuantity',
  GemsStakedAmount = 'gemsStakedAmount',
  GemsSentCount = 'gemsSentCount',
  GemsSentQuantity = 'gemsSentQuantity',
  StakedTimeSecs = 'stakedTimeSecs'
}

export type GemSend = {
  __typename?: 'GemSend';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  gemPool: GemPool;
  gem: Gem;
  to: User;
  from: User;
  /** creation timestamp for this send */
  createdAtTimestamp: Scalars['BigInt'];
  /** creation block number for this send */
  createdAtBlockNumber: Scalars['BigInt'];
  /** transaction for the creation of this send */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type GemSend_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  gemPool?: Maybe<Scalars['String']>;
  gemPool_not?: Maybe<Scalars['String']>;
  gemPool_gt?: Maybe<Scalars['String']>;
  gemPool_lt?: Maybe<Scalars['String']>;
  gemPool_gte?: Maybe<Scalars['String']>;
  gemPool_lte?: Maybe<Scalars['String']>;
  gemPool_in?: Maybe<Array<Scalars['String']>>;
  gemPool_not_in?: Maybe<Array<Scalars['String']>>;
  gemPool_contains?: Maybe<Scalars['String']>;
  gemPool_not_contains?: Maybe<Scalars['String']>;
  gemPool_starts_with?: Maybe<Scalars['String']>;
  gemPool_not_starts_with?: Maybe<Scalars['String']>;
  gemPool_ends_with?: Maybe<Scalars['String']>;
  gemPool_not_ends_with?: Maybe<Scalars['String']>;
  gem?: Maybe<Scalars['String']>;
  gem_not?: Maybe<Scalars['String']>;
  gem_gt?: Maybe<Scalars['String']>;
  gem_lt?: Maybe<Scalars['String']>;
  gem_gte?: Maybe<Scalars['String']>;
  gem_lte?: Maybe<Scalars['String']>;
  gem_in?: Maybe<Array<Scalars['String']>>;
  gem_not_in?: Maybe<Array<Scalars['String']>>;
  gem_contains?: Maybe<Scalars['String']>;
  gem_not_contains?: Maybe<Scalars['String']>;
  gem_starts_with?: Maybe<Scalars['String']>;
  gem_not_starts_with?: Maybe<Scalars['String']>;
  gem_ends_with?: Maybe<Scalars['String']>;
  gem_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum GemSend_OrderBy {
  Id = 'id',
  Factory = 'factory',
  GemPool = 'gemPool',
  Gem = 'gem',
  To = 'to',
  From = 'from',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  TransactionHash = 'transactionHash'
}

export type GemWrap = {
  __typename?: 'GemWrap';
  id: Scalars['ID'];
  factory: GemPoolFactory;
  gemPool: GemPool;
  gem: Gem;
  user: User;
  quantity: Scalars['BigInt'];
  /** creation timestamp for this wrap */
  createdAtTimestamp: Scalars['BigInt'];
  /** creation block number for this wrap */
  createdAtBlockNumber: Scalars['BigInt'];
  /** transaction for the creation of this wrap */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type GemWrap_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  gemPool?: Maybe<Scalars['String']>;
  gemPool_not?: Maybe<Scalars['String']>;
  gemPool_gt?: Maybe<Scalars['String']>;
  gemPool_lt?: Maybe<Scalars['String']>;
  gemPool_gte?: Maybe<Scalars['String']>;
  gemPool_lte?: Maybe<Scalars['String']>;
  gemPool_in?: Maybe<Array<Scalars['String']>>;
  gemPool_not_in?: Maybe<Array<Scalars['String']>>;
  gemPool_contains?: Maybe<Scalars['String']>;
  gemPool_not_contains?: Maybe<Scalars['String']>;
  gemPool_starts_with?: Maybe<Scalars['String']>;
  gemPool_not_starts_with?: Maybe<Scalars['String']>;
  gemPool_ends_with?: Maybe<Scalars['String']>;
  gemPool_not_ends_with?: Maybe<Scalars['String']>;
  gem?: Maybe<Scalars['String']>;
  gem_not?: Maybe<Scalars['String']>;
  gem_gt?: Maybe<Scalars['String']>;
  gem_lt?: Maybe<Scalars['String']>;
  gem_gte?: Maybe<Scalars['String']>;
  gem_lte?: Maybe<Scalars['String']>;
  gem_in?: Maybe<Array<Scalars['String']>>;
  gem_not_in?: Maybe<Array<Scalars['String']>>;
  gem_contains?: Maybe<Scalars['String']>;
  gem_not_contains?: Maybe<Scalars['String']>;
  gem_starts_with?: Maybe<Scalars['String']>;
  gem_not_starts_with?: Maybe<Scalars['String']>;
  gem_ends_with?: Maybe<Scalars['String']>;
  gem_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['BigInt']>;
  quantity_not?: Maybe<Scalars['BigInt']>;
  quantity_gt?: Maybe<Scalars['BigInt']>;
  quantity_lt?: Maybe<Scalars['BigInt']>;
  quantity_gte?: Maybe<Scalars['BigInt']>;
  quantity_lte?: Maybe<Scalars['BigInt']>;
  quantity_in?: Maybe<Array<Scalars['BigInt']>>;
  quantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum GemWrap_OrderBy {
  Id = 'id',
  Factory = 'factory',
  GemPool = 'gemPool',
  Gem = 'gem',
  User = 'user',
  Quantity = 'quantity',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  TransactionHash = 'transactionHash'
}

export type Gem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  gemPool?: Maybe<Scalars['String']>;
  gemPool_not?: Maybe<Scalars['String']>;
  gemPool_gt?: Maybe<Scalars['String']>;
  gemPool_lt?: Maybe<Scalars['String']>;
  gemPool_gte?: Maybe<Scalars['String']>;
  gemPool_lte?: Maybe<Scalars['String']>;
  gemPool_in?: Maybe<Array<Scalars['String']>>;
  gemPool_not_in?: Maybe<Array<Scalars['String']>>;
  gemPool_contains?: Maybe<Scalars['String']>;
  gemPool_not_contains?: Maybe<Scalars['String']>;
  gemPool_starts_with?: Maybe<Scalars['String']>;
  gemPool_not_starts_with?: Maybe<Scalars['String']>;
  gemPool_ends_with?: Maybe<Scalars['String']>;
  gemPool_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  claim?: Maybe<Scalars['String']>;
  claim_not?: Maybe<Scalars['String']>;
  claim_gt?: Maybe<Scalars['String']>;
  claim_lt?: Maybe<Scalars['String']>;
  claim_gte?: Maybe<Scalars['String']>;
  claim_lte?: Maybe<Scalars['String']>;
  claim_in?: Maybe<Array<Scalars['String']>>;
  claim_not_in?: Maybe<Array<Scalars['String']>>;
  claim_contains?: Maybe<Scalars['String']>;
  claim_not_contains?: Maybe<Scalars['String']>;
  claim_starts_with?: Maybe<Scalars['String']>;
  claim_not_starts_with?: Maybe<Scalars['String']>;
  claim_ends_with?: Maybe<Scalars['String']>;
  claim_not_ends_with?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['BigInt']>;
  quantity_not?: Maybe<Scalars['BigInt']>;
  quantity_gt?: Maybe<Scalars['BigInt']>;
  quantity_lt?: Maybe<Scalars['BigInt']>;
  quantity_gte?: Maybe<Scalars['BigInt']>;
  quantity_lte?: Maybe<Scalars['BigInt']>;
  quantity_in?: Maybe<Array<Scalars['BigInt']>>;
  quantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Gem_OrderBy {
  Id = 'id',
  Factory = 'factory',
  GemPool = 'gemPool',
  Owner = 'owner',
  Claim = 'claim',
  Quantity = 'quantity',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp',
  TransactionHash = 'transactionHash'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  gemPoolFactory?: Maybe<GemPoolFactory>;
  gemPoolFactories: Array<GemPoolFactory>;
  gemPool?: Maybe<GemPool>;
  gemPools: Array<GemPool>;
  user?: Maybe<User>;
  users: Array<User>;
  claim?: Maybe<Claim>;
  claims: Array<Claim>;
  gem?: Maybe<Gem>;
  gems: Array<Gem>;
  claimSend?: Maybe<ClaimSend>;
  claimSends: Array<ClaimSend>;
  gemSend?: Maybe<GemSend>;
  gemSends: Array<GemSend>;
  gemWrap?: Maybe<GemWrap>;
  gemWraps: Array<GemWrap>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryGemPoolFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGemPoolFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemPoolFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemPoolFactory_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGemPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGemPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemPool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemPool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryClaimArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryClaimsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Claim_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Claim_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Gem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Gem_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryClaimSendArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryClaimSendsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimSend_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGemSendArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGemSendsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemSend_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGemWrapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGemWrapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemWrap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemWrap_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  gemPoolFactory?: Maybe<GemPoolFactory>;
  gemPoolFactories: Array<GemPoolFactory>;
  gemPool?: Maybe<GemPool>;
  gemPools: Array<GemPool>;
  user?: Maybe<User>;
  users: Array<User>;
  claim?: Maybe<Claim>;
  claims: Array<Claim>;
  gem?: Maybe<Gem>;
  gems: Array<Gem>;
  claimSend?: Maybe<ClaimSend>;
  claimSends: Array<ClaimSend>;
  gemSend?: Maybe<GemSend>;
  gemSends: Array<GemSend>;
  gemWrap?: Maybe<GemWrap>;
  gemWraps: Array<GemWrap>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionGemPoolFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemPoolFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemPoolFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemPoolFactory_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemPool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemPool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Claim_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Claim_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Gem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Gem_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimSendArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimSendsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimSend_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemSendArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemSendsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemSend_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemWrapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGemWrapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemWrap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemWrap_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type User = {
  __typename?: 'User';
  /** wallet address */
  id: Scalars['ID'];
  claims: Array<Claim>;
  claimsSent: Array<ClaimSend>;
  claimsRecieved: Array<ClaimSend>;
  gems: Array<Gem>;
  gemsSent: Array<GemSend>;
  gemsRecieved: Array<GemSend>;
  gemsERC20Wrapped: Array<GemWrap>;
  /** claims owned by this user */
  claimsCount: Scalars['BigInt'];
  /** claims owned by this user */
  claimsQuantity: Scalars['BigInt'];
  /** total funds staked on created claims */
  claimsStakedTotalAmount: Scalars['BigDecimal'];
  /** total gem staking time in seconds */
  claimsStakedTimeSecs: Scalars['BigInt'];
  /** number of claim send transactions */
  claimsSentCount: Scalars['BigInt'];
  /** gems owned by this user */
  gemCount: Scalars['BigInt'];
  /** total quantity specified on minted gems */
  gemQuantity: Scalars['BigInt'];
  /** total funds staked on minted gems */
  gemStakedTotalAmount: Scalars['BigDecimal'];
  /** total gem staking time in seconds */
  gemStakedTimeSecs: Scalars['BigInt'];
  /** number of gem send transactions */
  gemsSentCount: Scalars['BigInt'];
  /** number of gem recieve transactions */
  gemsRecievedCount: Scalars['BigInt'];
  /** total quantity of gems in gem send transactions */
  gemsSentQuantity: Scalars['BigInt'];
  /** total quantity of gems in gem send transactions */
  gemsRecievedQuantity: Scalars['BigInt'];
  /** number of gem wrap transactions */
  gemsERC20WrapCount: Scalars['BigInt'];
  /** total quantity of gems in gem wrap transactions */
  gemsERC20WrapQuantity: Scalars['BigInt'];
  /** total time staked by this user, including immature claim collections */
  actualStakedTimeSecs: Scalars['BigInt'];
};


export type UserClaimsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Claim_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Claim_Filter>;
};


export type UserClaimsSentArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimSend_Filter>;
};


export type UserClaimsRecievedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimSend_Filter>;
};


export type UserGemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Gem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Gem_Filter>;
};


export type UserGemsSentArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemSend_Filter>;
};


export type UserGemsRecievedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemSend_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemSend_Filter>;
};


export type UserGemsErc20WrappedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GemWrap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GemWrap_Filter>;
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  claimsCount?: Maybe<Scalars['BigInt']>;
  claimsCount_not?: Maybe<Scalars['BigInt']>;
  claimsCount_gt?: Maybe<Scalars['BigInt']>;
  claimsCount_lt?: Maybe<Scalars['BigInt']>;
  claimsCount_gte?: Maybe<Scalars['BigInt']>;
  claimsCount_lte?: Maybe<Scalars['BigInt']>;
  claimsCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity?: Maybe<Scalars['BigInt']>;
  claimsQuantity_not?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lt?: Maybe<Scalars['BigInt']>;
  claimsQuantity_gte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_lte?: Maybe<Scalars['BigInt']>;
  claimsQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedTotalAmount?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_not?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_gt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_lt?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_gte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_lte?: Maybe<Scalars['BigDecimal']>;
  claimsStakedTotalAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedTotalAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  claimsStakedTimeSecs?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  claimsStakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsStakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount?: Maybe<Scalars['BigInt']>;
  claimsSentCount_not?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lt?: Maybe<Scalars['BigInt']>;
  claimsSentCount_gte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_lte?: Maybe<Scalars['BigInt']>;
  claimsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount?: Maybe<Scalars['BigInt']>;
  gemCount_not?: Maybe<Scalars['BigInt']>;
  gemCount_gt?: Maybe<Scalars['BigInt']>;
  gemCount_lt?: Maybe<Scalars['BigInt']>;
  gemCount_gte?: Maybe<Scalars['BigInt']>;
  gemCount_lte?: Maybe<Scalars['BigInt']>;
  gemCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemQuantity?: Maybe<Scalars['BigInt']>;
  gemQuantity_not?: Maybe<Scalars['BigInt']>;
  gemQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemStakedTotalAmount?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_not?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_gt?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_lt?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_gte?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_lte?: Maybe<Scalars['BigDecimal']>;
  gemStakedTotalAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemStakedTotalAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  gemStakedTimeSecs?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  gemStakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  gemStakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentCount?: Maybe<Scalars['BigInt']>;
  gemsSentCount_not?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lt?: Maybe<Scalars['BigInt']>;
  gemsSentCount_gte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_lte?: Maybe<Scalars['BigInt']>;
  gemsSentCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsRecievedCount?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_not?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_gt?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_lt?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_gte?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_lte?: Maybe<Scalars['BigInt']>;
  gemsRecievedCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsRecievedCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsSentQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsSentQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsRecievedQuantity?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsRecievedQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsRecievedQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsERC20WrapCount?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_not?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_gt?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_lt?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_gte?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_lte?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsERC20WrapCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsERC20WrapQuantity?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_not?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_gt?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_lt?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_gte?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_lte?: Maybe<Scalars['BigInt']>;
  gemsERC20WrapQuantity_in?: Maybe<Array<Scalars['BigInt']>>;
  gemsERC20WrapQuantity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  actualStakedTimeSecs?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_not?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_gt?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_lt?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_gte?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_lte?: Maybe<Scalars['BigInt']>;
  actualStakedTimeSecs_in?: Maybe<Array<Scalars['BigInt']>>;
  actualStakedTimeSecs_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Claims = 'claims',
  ClaimsSent = 'claimsSent',
  ClaimsRecieved = 'claimsRecieved',
  Gems = 'gems',
  GemsSent = 'gemsSent',
  GemsRecieved = 'gemsRecieved',
  GemsErc20Wrapped = 'gemsERC20Wrapped',
  ClaimsCount = 'claimsCount',
  ClaimsQuantity = 'claimsQuantity',
  ClaimsStakedTotalAmount = 'claimsStakedTotalAmount',
  ClaimsStakedTimeSecs = 'claimsStakedTimeSecs',
  ClaimsSentCount = 'claimsSentCount',
  GemCount = 'gemCount',
  GemQuantity = 'gemQuantity',
  GemStakedTotalAmount = 'gemStakedTotalAmount',
  GemStakedTimeSecs = 'gemStakedTimeSecs',
  GemsSentCount = 'gemsSentCount',
  GemsRecievedCount = 'gemsRecievedCount',
  GemsSentQuantity = 'gemsSentQuantity',
  GemsRecievedQuantity = 'gemsRecievedQuantity',
  GemsErc20WrapCount = 'gemsERC20WrapCount',
  GemsErc20WrapQuantity = 'gemsERC20WrapQuantity',
  ActualStakedTimeSecs = 'actualStakedTimeSecs'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPoolsQuery = (
  { __typename?: 'Query' }
  & { gemPools: Array<(
    { __typename?: 'GemPool' }
    & Pick<GemPool, 'id' | 'symbol' | 'name' | 'stakingPrice' | 'minTimeSecs' | 'maxTimeSecs' | 'diffStep' | 'maxMint'>
  )> }
);

export type GetPoolQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPoolQuery = (
  { __typename?: 'Query' }
  & { gemPool?: Maybe<(
    { __typename?: 'GemPool' }
    & Pick<GemPool, 'id' | 'symbol' | 'name' | 'stakingPrice' | 'minTimeSecs' | 'maxTimeSecs' | 'diffStep' | 'maxMint'>
  )> }
);


export const GetPoolsDocument = `
    query GetPools {
  gemPools {
    id
    symbol
    name
    stakingPrice
    minTimeSecs
    maxTimeSecs
    diffStep
    maxMint
  }
}
    `;
export const useGetPoolsQuery = <
      TData = GetPoolsQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables?: GetPoolsQueryVariables, 
      options?: UseQueryOptions<GetPoolsQuery, TError, TData>
    ) => 
    useQuery<GetPoolsQuery, TError, TData>(
      ['GetPools', variables],
      fetcher<GetPoolsQuery, GetPoolsQueryVariables>(client, GetPoolsDocument, variables),
      options
    );
export const GetPoolDocument = `
    query GetPool($id: ID!) {
  gemPool(id: $id) {
    id
    symbol
    name
    stakingPrice
    minTimeSecs
    maxTimeSecs
    diffStep
    maxMint
  }
}
    `;
export const useGetPoolQuery = <
      TData = GetPoolQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables: GetPoolQueryVariables, 
      options?: UseQueryOptions<GetPoolQuery, TError, TData>
    ) => 
    useQuery<GetPoolQuery, TError, TData>(
      ['GetPool', variables],
      fetcher<GetPoolQuery, GetPoolQueryVariables>(client, GetPoolDocument, variables),
      options
    );