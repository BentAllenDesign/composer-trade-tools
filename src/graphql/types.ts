/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

export type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GQLAccount = {
  __typename?: 'Account';
  account_foreign_id?: Maybe<Scalars['String']['output']>;
  account_number: Scalars['String']['output'];
  account_type: Scalars['String']['output'];
  account_uuid: Scalars['String']['output'];
  broker: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type GQLAccountDetail = {
  __typename?: 'AccountDetail';
  account_number: Scalars['String']['output'];
  account_type: Scalars['String']['output'];
  broker: Scalars['String']['output'];
  broker_status: Scalars['String']['output'];
  contact?: Maybe<GQLAccountOwnerContact>;
  identity: GQLAccountOwner;
  investor_profile?: Maybe<GQLInvestorProfile>;
  status: Scalars['String']['output'];
  trusted_contact?: Maybe<GQLAccountTrustedContact>;
};

export type GQLAccountOwner = {
  __typename?: 'AccountOwner';
  family_name: Scalars['String']['output'];
  given_name: Scalars['String']['output'];
  middle_name?: Maybe<Scalars['String']['output']>;
};

export type GQLAccountOwnerContact = {
  __typename?: 'AccountOwnerContact';
  address?: Maybe<GQLAddress>;
  email_address: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
};

export type GQLAccountTrustedContact = {
  __typename?: 'AccountTrustedContact';
  email_address?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  mailing_address?: Maybe<GQLAddress>;
  phone_number?: Maybe<Scalars['String']['output']>;
};

export type GQLAddress = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street_address?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type GQLAnnualIncomeUsd = {
  __typename?: 'AnnualIncomeUsd';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type GQLGetAccountsResponse = {
  __typename?: 'GetAccountsResponse';
  accounts: Array<Maybe<GQLAccount>>;
};

export type GQLInvestorProfile = {
  __typename?: 'InvestorProfile';
  annual_income_usd?: Maybe<GQLAnnualIncomeUsd>;
  investment_objective?: Maybe<Scalars['String']['output']>;
  total_net_worth_usd?: Maybe<GQLTotalNetWorthUsd>;
};

export type GQLTotalNetWorthUsd = {
  __typename?: 'TotalNetWorthUsd';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type GQLQueryRoot = {
  __typename?: 'query_root';
  get_account_by_id?: Maybe<GQLAccountDetail>;
  get_accounts: GQLGetAccountsResponse;
};


export type GQLQueryRootGetAccountByIdArgs = {
  account_id: Scalars['ID']['input'];
};
