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
  id: Scalars['ID'];
  gemPool: GemPool;
  owner: User;
  stakedTimeSeconds: Scalars['BigInt'];
  stakedAmount: Scalars['BigInt'];
  quantity: Scalars['BigInt'];
  /** creation timestamp for this token */
  createdAtTimestamp: Scalars['BigInt'];
  /** last update timestamp for this token */
  modifiedAtTimestamp: Scalars['BigInt'];
  /** is this claim collected */
  collected: Scalars['Boolean'];
  /** collection timestamp for this token */
  collectedAtTimestamp?: Maybe<Scalars['BigInt']>;
  /** was this claim mature when it was collected */
  collectedWhenMature?: Maybe<Scalars['Boolean']>;
  /** total time this claim was staked when it was collected */
  collectedAfterSeconds?: Maybe<Scalars['BigInt']>;
  /** transaction for the creation of this token */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type Claim_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
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
  modifiedAtTimestamp?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  modifiedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  modifiedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  collected?: Maybe<Scalars['Boolean']>;
  collected_not?: Maybe<Scalars['Boolean']>;
  collected_in?: Maybe<Array<Scalars['Boolean']>>;
  collected_not_in?: Maybe<Array<Scalars['Boolean']>>;
  collectedAtTimestamp?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  collectedAtTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  collectedAtTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  collectedWhenMature?: Maybe<Scalars['Boolean']>;
  collectedWhenMature_not?: Maybe<Scalars['Boolean']>;
  collectedWhenMature_in?: Maybe<Array<Scalars['Boolean']>>;
  collectedWhenMature_not_in?: Maybe<Array<Scalars['Boolean']>>;
  collectedAfterSeconds?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_not?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_gt?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_lt?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_gte?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_lte?: Maybe<Scalars['BigInt']>;
  collectedAfterSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  collectedAfterSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Claim_OrderBy {
  Id = 'id',
  GemPool = 'gemPool',
  Owner = 'owner',
  StakedTimeSeconds = 'stakedTimeSeconds',
  StakedAmount = 'stakedAmount',
  Quantity = 'quantity',
  CreatedAtTimestamp = 'createdAtTimestamp',
  ModifiedAtTimestamp = 'modifiedAtTimestamp',
  Collected = 'collected',
  CollectedAtTimestamp = 'collectedAtTimestamp',
  CollectedWhenMature = 'collectedWhenMature',
  CollectedAfterSeconds = 'collectedAfterSeconds',
  TransactionHash = 'transactionHash'
}

export type Game = {
  /** Global id */
  id: Scalars['ID'];
  /** number of of outstanding claims */
  claimCount: Scalars['BigInt'];
  /** number of claims minted */
  gemCount: Scalars['BigInt'];
  /** amount of coin currently staked */
  stakedAmount: Scalars['BigInt'];
};

export type Game_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  claimCount?: Maybe<Scalars['BigInt']>;
  claimCount_not?: Maybe<Scalars['BigInt']>;
  claimCount_gt?: Maybe<Scalars['BigInt']>;
  claimCount_lt?: Maybe<Scalars['BigInt']>;
  claimCount_gte?: Maybe<Scalars['BigInt']>;
  claimCount_lte?: Maybe<Scalars['BigInt']>;
  claimCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount?: Maybe<Scalars['BigInt']>;
  gemCount_not?: Maybe<Scalars['BigInt']>;
  gemCount_gt?: Maybe<Scalars['BigInt']>;
  gemCount_lt?: Maybe<Scalars['BigInt']>;
  gemCount_gte?: Maybe<Scalars['BigInt']>;
  gemCount_lte?: Maybe<Scalars['BigInt']>;
  gemCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedAmount?: Maybe<Scalars['BigInt']>;
  stakedAmount_not?: Maybe<Scalars['BigInt']>;
  stakedAmount_gt?: Maybe<Scalars['BigInt']>;
  stakedAmount_lt?: Maybe<Scalars['BigInt']>;
  stakedAmount_gte?: Maybe<Scalars['BigInt']>;
  stakedAmount_lte?: Maybe<Scalars['BigInt']>;
  stakedAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Game_OrderBy {
  Id = 'id',
  ClaimCount = 'claimCount',
  GemCount = 'gemCount',
  StakedAmount = 'stakedAmount'
}

export type Gem = {
  id: Scalars['ID'];
  gemPool: GemPool;
  owner: User;
  claim: Claim;
  quantity: Scalars['BigInt'];
  /** creation timestamp for this token */
  createdAtTimestamp: Scalars['BigInt'];
  /** transaction for the creation of this token */
  transactionHash?: Maybe<Scalars['Bytes']>;
};

export type GemPool = {
  id: Scalars['ID'];
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
  /** active claims for this staking pool */
  claims: Array<Claim>;
  /** gems created for this staking pool */
  gems: Array<Gem>;
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

export type GemPool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
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
};

export enum GemPool_OrderBy {
  Id = 'id',
  Symbol = 'symbol',
  Name = 'name',
  StakingPrice = 'stakingPrice',
  MinTimeSecs = 'minTimeSecs',
  MaxTimeSecs = 'maxTimeSecs',
  DiffStep = 'diffStep',
  MaxMint = 'maxMint',
  Claims = 'claims',
  Gems = 'gems'
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
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Gem_OrderBy {
  Id = 'id',
  GemPool = 'gemPool',
  Owner = 'owner',
  Claim = 'claim',
  Quantity = 'quantity',
  CreatedAtTimestamp = 'createdAtTimestamp',
  TransactionHash = 'transactionHash'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  game?: Maybe<Game>;
  games: Array<Game>;
  gemPool?: Maybe<GemPool>;
  gemPools: Array<GemPool>;
  user?: Maybe<User>;
  users: Array<User>;
  claim?: Maybe<Claim>;
  claims: Array<Claim>;
  gem?: Maybe<Gem>;
  gems: Array<Gem>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryGameArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGamesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Game_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Game_Filter>;
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


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  game?: Maybe<Game>;
  games: Array<Game>;
  gemPool?: Maybe<GemPool>;
  gemPools: Array<GemPool>;
  user?: Maybe<User>;
  users: Array<User>;
  claim?: Maybe<Claim>;
  claims: Array<Claim>;
  gem?: Maybe<Gem>;
  gems: Array<Gem>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionGameArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGamesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Game_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Game_Filter>;
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


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type User = {
  /** wallet address */
  id: Scalars['ID'];
  claims: Array<Claim>;
  gems: Array<Gem>;
  /** claims owned by this user */
  claimCount: Scalars['BigInt'];
  /** gems owned by this user */
  gemCount: Scalars['BigInt'];
};


export type UserClaimsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Claim_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Claim_Filter>;
};


export type UserGemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Gem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Gem_Filter>;
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
  claimCount?: Maybe<Scalars['BigInt']>;
  claimCount_not?: Maybe<Scalars['BigInt']>;
  claimCount_gt?: Maybe<Scalars['BigInt']>;
  claimCount_lt?: Maybe<Scalars['BigInt']>;
  claimCount_gte?: Maybe<Scalars['BigInt']>;
  claimCount_lte?: Maybe<Scalars['BigInt']>;
  claimCount_in?: Maybe<Array<Scalars['BigInt']>>;
  claimCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount?: Maybe<Scalars['BigInt']>;
  gemCount_not?: Maybe<Scalars['BigInt']>;
  gemCount_gt?: Maybe<Scalars['BigInt']>;
  gemCount_lt?: Maybe<Scalars['BigInt']>;
  gemCount_gte?: Maybe<Scalars['BigInt']>;
  gemCount_lte?: Maybe<Scalars['BigInt']>;
  gemCount_in?: Maybe<Array<Scalars['BigInt']>>;
  gemCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Claims = 'claims',
  Gems = 'gems',
  ClaimCount = 'claimCount',
  GemCount = 'gemCount'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
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


export type GetPoolsQuery = { gemPools: Array<Pick<GemPool, 'id' | 'symbol' | 'name' | 'stakingPrice' | 'minTimeSecs' | 'maxTimeSecs' | 'diffStep' | 'maxMint'>> };

export type GetPoolQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPoolQuery = { gemPool?: Maybe<Pick<GemPool, 'id' | 'symbol' | 'name' | 'stakingPrice' | 'minTimeSecs' | 'maxTimeSecs' | 'diffStep' | 'maxMint'>> };

export type GetStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsQuery = { game?: Maybe<Pick<Game, 'claimCount' | 'gemCount' | 'stakedAmount'>> };

export type GetUserStatsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserStatsQuery = { user?: Maybe<Pick<User, 'claimCount' | 'gemCount'>> };

export type GetUserClaimsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserClaimsQuery = { user?: Maybe<{ claims: Array<(
      Pick<Claim, 'stakedAmount' | 'quantity' | 'createdAtTimestamp' | 'stakedTimeSeconds' | 'transactionHash'>
      & { gemPool: Pick<GemPool, 'id' | 'symbol' | 'name'> }
    )> }> };

export type GetUserInventoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserInventoryQuery = { user?: Maybe<{ gems: Array<(
      Pick<Gem, 'quantity' | 'createdAtTimestamp' | 'transactionHash'>
      & { gemPool: Pick<GemPool, 'symbol' | 'name'> }
    )> }> };


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
export const GetStatsDocument = `
    query GetStats {
  game(id: "BITGEM") {
    claimCount
    gemCount
    stakedAmount
  }
}
    `;
export const useGetStatsQuery = <
      TData = GetStatsQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables?: GetStatsQueryVariables, 
      options?: UseQueryOptions<GetStatsQuery, TError, TData>
    ) => 
    useQuery<GetStatsQuery, TError, TData>(
      ['GetStats', variables],
      fetcher<GetStatsQuery, GetStatsQueryVariables>(client, GetStatsDocument, variables),
      options
    );
export const GetUserStatsDocument = `
    query GetUserStats($id: ID!) {
  user(id: $id) {
    claimCount
    gemCount
  }
}
    `;
export const useGetUserStatsQuery = <
      TData = GetUserStatsQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables: GetUserStatsQueryVariables, 
      options?: UseQueryOptions<GetUserStatsQuery, TError, TData>
    ) => 
    useQuery<GetUserStatsQuery, TError, TData>(
      ['GetUserStats', variables],
      fetcher<GetUserStatsQuery, GetUserStatsQueryVariables>(client, GetUserStatsDocument, variables),
      options
    );
export const GetUserClaimsDocument = `
    query GetUserClaims($id: ID!) {
  user(id: $id) {
    claims {
      stakedAmount
      quantity
      createdAtTimestamp
      stakedTimeSeconds
      transactionHash
      gemPool {
        id
        symbol
        name
      }
    }
  }
}
    `;
export const useGetUserClaimsQuery = <
      TData = GetUserClaimsQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables: GetUserClaimsQueryVariables, 
      options?: UseQueryOptions<GetUserClaimsQuery, TError, TData>
    ) => 
    useQuery<GetUserClaimsQuery, TError, TData>(
      ['GetUserClaims', variables],
      fetcher<GetUserClaimsQuery, GetUserClaimsQueryVariables>(client, GetUserClaimsDocument, variables),
      options
    );
export const GetUserInventoryDocument = `
    query GetUserInventory($id: ID!) {
  user(id: $id) {
    gems {
      quantity
      createdAtTimestamp
      transactionHash
      gemPool {
        symbol
        name
      }
    }
  }
}
    `;
export const useGetUserInventoryQuery = <
      TData = GetUserInventoryQuery,
      TError = Error
    >(
      client: GraphQLClient, 
      variables: GetUserInventoryQueryVariables, 
      options?: UseQueryOptions<GetUserInventoryQuery, TError, TData>
    ) => 
    useQuery<GetUserInventoryQuery, TError, TData>(
      ['GetUserInventory', variables],
      fetcher<GetUserInventoryQuery, GetUserInventoryQueryVariables>(client, GetUserInventoryDocument, variables),
      options
    );