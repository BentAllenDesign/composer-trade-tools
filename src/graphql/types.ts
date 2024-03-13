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
  BigInt: { input: any; output: any; }
  double: { input: any; output: any; }
  int: { input: any; output: any; }
  objectId: { input: any; output: any; }
  string: { input: any; output: any; }
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

export type GQLAccountAdminConfigurations = {
  __typename?: 'AccountAdminConfigurations';
  allow_instant_ach?: Maybe<Scalars['Boolean']['output']>;
  disable_shorting?: Maybe<Scalars['Boolean']['output']>;
  max_margin_multiplier?: Maybe<Scalars['String']['output']>;
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

export enum GQLCountry {
  ABW = 'ABW',
  AFG = 'AFG',
  AGO = 'AGO',
  AIA = 'AIA',
  ALA = 'ALA',
  ALB = 'ALB',
  AND = 'AND',
  ARE = 'ARE',
  ARG = 'ARG',
  ARM = 'ARM',
  ASM = 'ASM',
  ATA = 'ATA',
  ATF = 'ATF',
  ATG = 'ATG',
  AUS = 'AUS',
  AUT = 'AUT',
  AZE = 'AZE',
  BDI = 'BDI',
  BEL = 'BEL',
  BEN = 'BEN',
  BES = 'BES',
  BFA = 'BFA',
  BGD = 'BGD',
  BGR = 'BGR',
  BHR = 'BHR',
  BHS = 'BHS',
  BIH = 'BIH',
  BLM = 'BLM',
  BLR = 'BLR',
  BLZ = 'BLZ',
  BMU = 'BMU',
  BOL = 'BOL',
  BRA = 'BRA',
  BRB = 'BRB',
  BRN = 'BRN',
  BTN = 'BTN',
  BVT = 'BVT',
  BWA = 'BWA',
  CAF = 'CAF',
  CAN = 'CAN',
  CCK = 'CCK',
  CHE = 'CHE',
  CHL = 'CHL',
  CHN = 'CHN',
  CIV = 'CIV',
  CMR = 'CMR',
  COD = 'COD',
  COG = 'COG',
  COK = 'COK',
  COL = 'COL',
  COM = 'COM',
  CPV = 'CPV',
  CRI = 'CRI',
  CUB = 'CUB',
  CUW = 'CUW',
  CXR = 'CXR',
  CYM = 'CYM',
  CYP = 'CYP',
  CZE = 'CZE',
  DEU = 'DEU',
  DJI = 'DJI',
  DMA = 'DMA',
  DNK = 'DNK',
  DOM = 'DOM',
  DZA = 'DZA',
  ECU = 'ECU',
  EGY = 'EGY',
  ERI = 'ERI',
  ESH = 'ESH',
  ESP = 'ESP',
  EST = 'EST',
  ETH = 'ETH',
  FIN = 'FIN',
  FJI = 'FJI',
  FLK = 'FLK',
  FRA = 'FRA',
  FRO = 'FRO',
  FSM = 'FSM',
  GAB = 'GAB',
  GBR = 'GBR',
  GEO = 'GEO',
  GGY = 'GGY',
  GHA = 'GHA',
  GIB = 'GIB',
  GIN = 'GIN',
  GLP = 'GLP',
  GMB = 'GMB',
  GNB = 'GNB',
  GNQ = 'GNQ',
  GRC = 'GRC',
  GRD = 'GRD',
  GRL = 'GRL',
  GTM = 'GTM',
  GUF = 'GUF',
  GUM = 'GUM',
  GUY = 'GUY',
  HKG = 'HKG',
  HMD = 'HMD',
  HND = 'HND',
  HRV = 'HRV',
  HTI = 'HTI',
  HUN = 'HUN',
  IDN = 'IDN',
  IMN = 'IMN',
  IND = 'IND',
  IOT = 'IOT',
  IRL = 'IRL',
  IRN = 'IRN',
  IRQ = 'IRQ',
  ISL = 'ISL',
  ISR = 'ISR',
  ITA = 'ITA',
  JAM = 'JAM',
  JEY = 'JEY',
  JOR = 'JOR',
  JPN = 'JPN',
  KAZ = 'KAZ',
  KEN = 'KEN',
  KGZ = 'KGZ',
  KHM = 'KHM',
  KIR = 'KIR',
  KNA = 'KNA',
  KOR = 'KOR',
  KWT = 'KWT',
  LAO = 'LAO',
  LBN = 'LBN',
  LBR = 'LBR',
  LBY = 'LBY',
  LCA = 'LCA',
  LIE = 'LIE',
  LKA = 'LKA',
  LSO = 'LSO',
  LTU = 'LTU',
  LUX = 'LUX',
  LVA = 'LVA',
  MAC = 'MAC',
  MAF = 'MAF',
  MAR = 'MAR',
  MCO = 'MCO',
  MDA = 'MDA',
  MDG = 'MDG',
  MDV = 'MDV',
  MEX = 'MEX',
  MHL = 'MHL',
  MKD = 'MKD',
  MLI = 'MLI',
  MLT = 'MLT',
  MMR = 'MMR',
  MNE = 'MNE',
  MNG = 'MNG',
  MNP = 'MNP',
  MOZ = 'MOZ',
  MRT = 'MRT',
  MSR = 'MSR',
  MTQ = 'MTQ',
  MUS = 'MUS',
  MWI = 'MWI',
  MYS = 'MYS',
  MYT = 'MYT',
  NAM = 'NAM',
  NCL = 'NCL',
  NER = 'NER',
  NFK = 'NFK',
  NGA = 'NGA',
  NIC = 'NIC',
  NIU = 'NIU',
  NLD = 'NLD',
  NOR = 'NOR',
  NPL = 'NPL',
  NRU = 'NRU',
  NZL = 'NZL',
  OMN = 'OMN',
  PAK = 'PAK',
  PAN = 'PAN',
  PCN = 'PCN',
  PER = 'PER',
  PHL = 'PHL',
  PLW = 'PLW',
  PNG = 'PNG',
  POL = 'POL',
  PRI = 'PRI',
  PRK = 'PRK',
  PRT = 'PRT',
  PRY = 'PRY',
  PSE = 'PSE',
  PYF = 'PYF',
  QAT = 'QAT',
  REU = 'REU',
  ROU = 'ROU',
  RUS = 'RUS',
  RWA = 'RWA',
  SAU = 'SAU',
  SDN = 'SDN',
  SEN = 'SEN',
  SGP = 'SGP',
  SGS = 'SGS',
  SHN = 'SHN',
  SJM = 'SJM',
  SLB = 'SLB',
  SLE = 'SLE',
  SLV = 'SLV',
  SMR = 'SMR',
  SOM = 'SOM',
  SPM = 'SPM',
  SRB = 'SRB',
  SSD = 'SSD',
  STP = 'STP',
  SUR = 'SUR',
  SVK = 'SVK',
  SVN = 'SVN',
  SWE = 'SWE',
  SWZ = 'SWZ',
  SXM = 'SXM',
  SYC = 'SYC',
  SYR = 'SYR',
  TCA = 'TCA',
  TCD = 'TCD',
  TGO = 'TGO',
  THA = 'THA',
  TJK = 'TJK',
  TKL = 'TKL',
  TKM = 'TKM',
  TLS = 'TLS',
  TON = 'TON',
  TTO = 'TTO',
  TUN = 'TUN',
  TUR = 'TUR',
  TUV = 'TUV',
  TWN = 'TWN',
  TZA = 'TZA',
  UGA = 'UGA',
  UKR = 'UKR',
  UMI = 'UMI',
  URY = 'URY',
  USA = 'USA',
  UZB = 'UZB',
  VAT = 'VAT',
  VCT = 'VCT',
  VEN = 'VEN',
  VGB = 'VGB',
  VIR = 'VIR',
  VNM = 'VNM',
  VUT = 'VUT',
  WLF = 'WLF',
  WSM = 'WSM',
  YEM = 'YEM',
  ZAF = 'ZAF',
  ZMB = 'ZMB',
  ZWE = 'ZWE'
}

export type GQLInvestorProfile = {
  __typename?: 'InvestorProfile';
  annual_income_usd?: Maybe<GQLAnnualIncomeUsd>;
  investment_objective?: Maybe<Scalars['String']['output']>;
  total_net_worth_usd?: Maybe<GQLTotalNetWorthUsd>;
};

/** column ordering options */
export enum GQLMongoOrderBy {
  /** in ascending order */
  ASC = 'asc',
  /** in descending order */
  DESC = 'desc'
}

export type GQLPortfolioHistory = {
  __typename?: 'PortfolioHistory';
  series_unix_timestamps: Array<Maybe<Scalars['BigInt']['output']>>;
  series_values: Array<Maybe<Scalars['Float']['output']>>;
};

export type GQLPortfolioOverview = {
  __typename?: 'PortfolioOverview';
  net_deposits: Scalars['Float']['output'];
  pending_deploys_cash: Scalars['Float']['output'];
  portfolio_value: Scalars['Float']['output'];
  simple_return: Scalars['Float']['output'];
  todays_dollar_change: Scalars['Float']['output'];
  todays_percent_change: Scalars['Float']['output'];
  total_cash: Scalars['Float']['output'];
  total_unallocated_cash: Scalars['Float']['output'];
};

export type GQLPrimaryAccountOverview = {
  __typename?: 'PrimaryAccountOverview';
  account_blocked?: Maybe<Scalars['Boolean']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  accrued_fees?: Maybe<Scalars['String']['output']>;
  admin_configurations?: Maybe<GQLAccountAdminConfigurations>;
  balance_asof?: Maybe<Scalars['String']['output']>;
  bod_dtbp?: Maybe<Scalars['String']['output']>;
  buying_power?: Maybe<Scalars['String']['output']>;
  cash?: Maybe<Scalars['String']['output']>;
  cash_transferable?: Maybe<Scalars['String']['output']>;
  cash_withdrawable?: Maybe<Scalars['Float']['output']>;
  clearing_broker?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  crypto_status?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  daytrade_count?: Maybe<Scalars['Int']['output']>;
  daytrading_buying_power?: Maybe<Scalars['String']['output']>;
  effective_buying_power?: Maybe<Scalars['String']['output']>;
  equity?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  initial_margin?: Maybe<Scalars['String']['output']>;
  last_buying_power?: Maybe<Scalars['String']['output']>;
  last_cash?: Maybe<Scalars['String']['output']>;
  last_daytrade_count?: Maybe<Scalars['Int']['output']>;
  last_daytrading_buying_power?: Maybe<Scalars['String']['output']>;
  last_equity?: Maybe<Scalars['String']['output']>;
  last_initial_margin?: Maybe<Scalars['String']['output']>;
  last_long_market_value?: Maybe<Scalars['String']['output']>;
  last_maintenance_margin?: Maybe<Scalars['String']['output']>;
  last_regt_buying_power?: Maybe<Scalars['String']['output']>;
  last_short_market_value?: Maybe<Scalars['String']['output']>;
  long_market_value?: Maybe<Scalars['String']['output']>;
  maintenance_margin?: Maybe<Scalars['String']['output']>;
  multiplier?: Maybe<Scalars['String']['output']>;
  non_marginable_buying_power?: Maybe<Scalars['String']['output']>;
  pattern_day_trader?: Maybe<Scalars['Boolean']['output']>;
  pending_transfer_in?: Maybe<Scalars['String']['output']>;
  pending_transfer_out?: Maybe<Scalars['String']['output']>;
  portfolio_value?: Maybe<Scalars['String']['output']>;
  position_market_value?: Maybe<Scalars['String']['output']>;
  previous_close?: Maybe<Scalars['String']['output']>;
  regt_buying_power?: Maybe<Scalars['String']['output']>;
  short_market_value?: Maybe<Scalars['String']['output']>;
  shorting_enabled?: Maybe<Scalars['Boolean']['output']>;
  sma?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trade_suspended_by_user?: Maybe<Scalars['Boolean']['output']>;
  trading_blocked?: Maybe<Scalars['Boolean']['output']>;
  transfers_blocked?: Maybe<Scalars['Boolean']['output']>;
  user_configurations?: Maybe<Scalars['String']['output']>;
};

export enum GQLTaxCountry {
  ABW = 'ABW',
  AFG = 'AFG',
  AGO = 'AGO',
  AIA = 'AIA',
  ALA = 'ALA',
  ALB = 'ALB',
  AND = 'AND',
  ARE = 'ARE',
  ARG = 'ARG',
  ARM = 'ARM',
  ASM = 'ASM',
  ATA = 'ATA',
  ATF = 'ATF',
  ATG = 'ATG',
  AUS = 'AUS',
  AUT = 'AUT',
  AZE = 'AZE',
  BDI = 'BDI',
  BEL = 'BEL',
  BEN = 'BEN',
  BES = 'BES',
  BFA = 'BFA',
  BGD = 'BGD',
  BGR = 'BGR',
  BHR = 'BHR',
  BHS = 'BHS',
  BIH = 'BIH',
  BLM = 'BLM',
  BLR = 'BLR',
  BLZ = 'BLZ',
  BMU = 'BMU',
  BOL = 'BOL',
  BRA = 'BRA',
  BRB = 'BRB',
  BRN = 'BRN',
  BTN = 'BTN',
  BVT = 'BVT',
  BWA = 'BWA',
  CAF = 'CAF',
  CAN = 'CAN',
  CCK = 'CCK',
  CHE = 'CHE',
  CHL = 'CHL',
  CHN = 'CHN',
  CIV = 'CIV',
  CMR = 'CMR',
  COD = 'COD',
  COG = 'COG',
  COK = 'COK',
  COL = 'COL',
  COM = 'COM',
  CPV = 'CPV',
  CRI = 'CRI',
  CUB = 'CUB',
  CUW = 'CUW',
  CXR = 'CXR',
  CYM = 'CYM',
  CYP = 'CYP',
  CZE = 'CZE',
  DEU = 'DEU',
  DJI = 'DJI',
  DMA = 'DMA',
  DNK = 'DNK',
  DOM = 'DOM',
  DZA = 'DZA',
  ECU = 'ECU',
  EGY = 'EGY',
  ERI = 'ERI',
  ESH = 'ESH',
  ESP = 'ESP',
  EST = 'EST',
  ETH = 'ETH',
  FIN = 'FIN',
  FJI = 'FJI',
  FLK = 'FLK',
  FRA = 'FRA',
  FRO = 'FRO',
  FSM = 'FSM',
  GAB = 'GAB',
  GBR = 'GBR',
  GEO = 'GEO',
  GGY = 'GGY',
  GHA = 'GHA',
  GIB = 'GIB',
  GIN = 'GIN',
  GLP = 'GLP',
  GMB = 'GMB',
  GNB = 'GNB',
  GNQ = 'GNQ',
  GRC = 'GRC',
  GRD = 'GRD',
  GRL = 'GRL',
  GTM = 'GTM',
  GUF = 'GUF',
  GUM = 'GUM',
  GUY = 'GUY',
  HKG = 'HKG',
  HMD = 'HMD',
  HND = 'HND',
  HRV = 'HRV',
  HTI = 'HTI',
  HUN = 'HUN',
  IDN = 'IDN',
  IMN = 'IMN',
  IND = 'IND',
  IOT = 'IOT',
  IRL = 'IRL',
  IRN = 'IRN',
  IRQ = 'IRQ',
  ISL = 'ISL',
  ISR = 'ISR',
  ITA = 'ITA',
  JAM = 'JAM',
  JEY = 'JEY',
  JOR = 'JOR',
  JPN = 'JPN',
  KAZ = 'KAZ',
  KEN = 'KEN',
  KGZ = 'KGZ',
  KHM = 'KHM',
  KIR = 'KIR',
  KNA = 'KNA',
  KOR = 'KOR',
  KWT = 'KWT',
  LAO = 'LAO',
  LBN = 'LBN',
  LBR = 'LBR',
  LBY = 'LBY',
  LCA = 'LCA',
  LIE = 'LIE',
  LKA = 'LKA',
  LSO = 'LSO',
  LTU = 'LTU',
  LUX = 'LUX',
  LVA = 'LVA',
  MAC = 'MAC',
  MAF = 'MAF',
  MAR = 'MAR',
  MCO = 'MCO',
  MDA = 'MDA',
  MDG = 'MDG',
  MDV = 'MDV',
  MEX = 'MEX',
  MHL = 'MHL',
  MKD = 'MKD',
  MLI = 'MLI',
  MLT = 'MLT',
  MMR = 'MMR',
  MNE = 'MNE',
  MNG = 'MNG',
  MNP = 'MNP',
  MOZ = 'MOZ',
  MRT = 'MRT',
  MSR = 'MSR',
  MTQ = 'MTQ',
  MUS = 'MUS',
  MWI = 'MWI',
  MYS = 'MYS',
  MYT = 'MYT',
  NAM = 'NAM',
  NCL = 'NCL',
  NER = 'NER',
  NFK = 'NFK',
  NGA = 'NGA',
  NIC = 'NIC',
  NIU = 'NIU',
  NLD = 'NLD',
  NOR = 'NOR',
  NPL = 'NPL',
  NRU = 'NRU',
  NZL = 'NZL',
  OMN = 'OMN',
  PAK = 'PAK',
  PAN = 'PAN',
  PCN = 'PCN',
  PER = 'PER',
  PHL = 'PHL',
  PLW = 'PLW',
  PNG = 'PNG',
  POL = 'POL',
  PRI = 'PRI',
  PRK = 'PRK',
  PRT = 'PRT',
  PRY = 'PRY',
  PSE = 'PSE',
  PYF = 'PYF',
  QAT = 'QAT',
  REU = 'REU',
  ROU = 'ROU',
  RUS = 'RUS',
  RWA = 'RWA',
  SAU = 'SAU',
  SDN = 'SDN',
  SEN = 'SEN',
  SGP = 'SGP',
  SGS = 'SGS',
  SHN = 'SHN',
  SJM = 'SJM',
  SLB = 'SLB',
  SLE = 'SLE',
  SLV = 'SLV',
  SMR = 'SMR',
  SOM = 'SOM',
  SPM = 'SPM',
  SRB = 'SRB',
  SSD = 'SSD',
  STP = 'STP',
  SUR = 'SUR',
  SVK = 'SVK',
  SVN = 'SVN',
  SWE = 'SWE',
  SWZ = 'SWZ',
  SXM = 'SXM',
  SYC = 'SYC',
  SYR = 'SYR',
  TCA = 'TCA',
  TCD = 'TCD',
  TGO = 'TGO',
  THA = 'THA',
  TJK = 'TJK',
  TKL = 'TKL',
  TKM = 'TKM',
  TLS = 'TLS',
  TON = 'TON',
  TTO = 'TTO',
  TUN = 'TUN',
  TUR = 'TUR',
  TUV = 'TUV',
  TWN = 'TWN',
  TZA = 'TZA',
  UGA = 'UGA',
  UKR = 'UKR',
  UMI = 'UMI',
  URY = 'URY',
  USA = 'USA',
  UZB = 'UZB',
  VAT = 'VAT',
  VCT = 'VCT',
  VEN = 'VEN',
  VGB = 'VGB',
  VIR = 'VIR',
  VNM = 'VNM',
  VUT = 'VUT',
  WLF = 'WLF',
  WSM = 'WSM',
  YEM = 'YEM',
  ZAF = 'ZAF',
  ZMB = 'ZMB',
  ZWE = 'ZWE'
}

export type GQLTotalNetWorthUsd = {
  __typename?: 'TotalNetWorthUsd';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type GQLUserProfile = {
  __typename?: 'UserProfile';
  country?: Maybe<GQLCountry>;
  country_of_tax_residence?: Maybe<GQLTaxCountry>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  onboarding_medium?: Maybe<Scalars['String']['output']>;
  onboarding_source?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_response?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "objectId". All fields are combined with logical 'AND'. */
export type GQLObjectIdMongoComparisonExp = {
  _eq?: InputMaybe<Scalars['objectId']['input']>;
  _gt?: InputMaybe<Scalars['objectId']['input']>;
  _gte?: InputMaybe<Scalars['objectId']['input']>;
  _in?: InputMaybe<Array<Scalars['objectId']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['objectId']['input']>;
  _lte?: InputMaybe<Scalars['objectId']['input']>;
  _neq?: InputMaybe<Scalars['objectId']['input']>;
  _nin?: InputMaybe<Array<Scalars['objectId']['input']>>;
};

export type GQLQueryRoot = {
  __typename?: 'query_root';
  get_account_by_id?: Maybe<GQLAccountDetail>;
  get_accounts: Array<Maybe<GQLAccount>>;
  get_portfolio_history_by_account_id?: Maybe<GQLPortfolioHistory>;
  get_portfolio_overview_by_account_id?: Maybe<GQLPortfolioOverview>;
  get_primary_account_overview?: Maybe<GQLPrimaryAccountOverview>;
  get_user_profile?: Maybe<GQLUserProfile>;
  /** fetch data from the table: "strategy" */
  strategy: Array<GQLStrategy>;
  /** fetch aggregated fields from the table: "strategy" */
  strategy_aggregate: GQLStrategyAggregate;
  /** fetch data from the table: "strategy" using primary key columns */
  strategy_by_pk?: Maybe<GQLStrategy>;
};


export type GQLQueryRootGetAccountByIdArgs = {
  account_id: Scalars['ID']['input'];
};


export type GQLQueryRootGetPortfolioHistoryByAccountIdArgs = {
  account_id: Scalars['ID']['input'];
};


export type GQLQueryRootGetPortfolioOverviewByAccountIdArgs = {
  account_id: Scalars['ID']['input'];
};


export type GQLQueryRootStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GQLStrategyOrderBy>>;
  where?: InputMaybe<GQLStrategyBoolExp>;
};


export type GQLQueryRootStrategyAggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GQLStrategyOrderBy>>;
  where?: InputMaybe<GQLStrategyBoolExp>;
};


export type GQLQueryRootStrategyByPkArgs = {
  _id: Scalars['objectId']['input'];
};

/** columns and relationships of "strategy" */
export type GQLStrategy = {
  __typename?: 'strategy';
  _id: Scalars['objectId']['output'];
  name: Scalars['string']['output'];
  oos_dd: Array<GQLStrategyOosDd>;
  oos_metrics: GQLStrategyOosMetrics;
  quantstats_dd: Array<GQLStrategyQuantstatsDd>;
  quantstats_metrics: GQLStrategyQuantstatsMetrics;
  sid: Scalars['string']['output'];
};

/** aggregated selection of "strategy" */
export type GQLStrategyAggregate = {
  __typename?: 'strategy_aggregate';
  aggregate?: Maybe<GQLStrategyAggregateFields>;
  nodes: Array<GQLStrategy>;
};

/** aggregate fields of "strategy" */
export type GQLStrategyAggregateFields = {
  __typename?: 'strategy_aggregate_fields';
  count: Scalars['Int']['output'];
};


/** aggregate fields of "strategy" */
export type GQLStrategyAggregateFieldsCountArgs = {
  column?: InputMaybe<GQLStrategySelectColumn>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "strategy". All fields are combined with a logical 'AND'. */
export type GQLStrategyBoolExp = {
  _and?: InputMaybe<Array<GQLStrategyBoolExp>>;
  _id?: InputMaybe<GQLObjectIdMongoComparisonExp>;
  _not?: InputMaybe<GQLStrategyBoolExp>;
  _or?: InputMaybe<Array<GQLStrategyBoolExp>>;
  name?: InputMaybe<GQLStringMongoComparisonExp>;
  oos_metrics?: InputMaybe<GQLStrategyOosMetricsBoolExpBoolExp>;
  quantstats_metrics?: InputMaybe<GQLStrategyQuantstatsMetricsBoolExpBoolExp>;
  sid?: InputMaybe<GQLStringMongoComparisonExp>;
};

export type GQLStrategyOosDd = {
  __typename?: 'strategy_oos_dd';
  days: Scalars['int']['output'];
  end: Scalars['string']['output'];
  max_drawdown?: Maybe<Scalars['double']['output']>;
  start: Scalars['string']['output'];
  valley: Scalars['string']['output'];
};

export type GQLStrategyOosMetrics = {
  __typename?: 'strategy_oos_metrics';
  Alltime_ann?: Maybe<Scalars['string']['output']>;
  Avg_DownMonth?: Maybe<Scalars['string']['output']>;
  Avg_Drawdown?: Maybe<Scalars['string']['output']>;
  Avg_DrawdownDays?: Maybe<Scalars['string']['output']>;
  Avg_UpMonth?: Maybe<Scalars['string']['output']>;
  Best_Day?: Maybe<Scalars['string']['output']>;
  Best_Month?: Maybe<Scalars['string']['output']>;
  Best_Year?: Maybe<Scalars['string']['output']>;
  CAGR?: Maybe<Scalars['string']['output']>;
  CPC_Index?: Maybe<Scalars['string']['output']>;
  Calmar: Scalars['string']['output'];
  Common_SenseRatio?: Maybe<Scalars['string']['output']>;
  Cumulative_Return?: Maybe<Scalars['string']['output']>;
  Daily_ValueatRisk?: Maybe<Scalars['string']['output']>;
  End_Period?: Maybe<Scalars['string']['output']>;
  Expected_Daily?: Maybe<Scalars['string']['output']>;
  Expected_Monthly?: Maybe<Scalars['string']['output']>;
  Expected_ShortfallcVaR?: Maybe<Scalars['string']['output']>;
  Expected_Yearly?: Maybe<Scalars['string']['output']>;
  GainPain_1M?: Maybe<Scalars['string']['output']>;
  GainPain_Ratio?: Maybe<Scalars['string']['output']>;
  Kelly_Criterion?: Maybe<Scalars['string']['output']>;
  Kurtosis: Scalars['string']['output'];
  Longest_DDDays?: Maybe<Scalars['string']['output']>;
  MTD: Scalars['string']['output'];
  Max_ConsecutiveLosses?: Maybe<Scalars['string']['output']>;
  Max_ConsecutiveWins?: Maybe<Scalars['string']['output']>;
  Max_Drawdown?: Maybe<Scalars['string']['output']>;
  Omega: Scalars['string']['output'];
  Outlier_LossRatio?: Maybe<Scalars['string']['output']>;
  Outlier_WinRatio?: Maybe<Scalars['string']['output']>;
  Payoff_Ratio?: Maybe<Scalars['string']['output']>;
  Prob_SharpeRatio?: Maybe<Scalars['string']['output']>;
  Profit_Factor?: Maybe<Scalars['string']['output']>;
  Recovery_Factor?: Maybe<Scalars['string']['output']>;
  RiskFree_Rate?: Maybe<Scalars['string']['output']>;
  Risk_ofRuin?: Maybe<Scalars['string']['output']>;
  Serenity_Index?: Maybe<Scalars['string']['output']>;
  Sharpe: Scalars['string']['output'];
  Skew: Scalars['string']['output'];
  Smart_Sharpe?: Maybe<Scalars['string']['output']>;
  Smart_Sortino?: Maybe<Scalars['string']['output']>;
  Smart_Sortino2?: Maybe<Scalars['string']['output']>;
  Sortino: Scalars['string']['output'];
  Sortino2?: Maybe<Scalars['string']['output']>;
  Start_Period?: Maybe<Scalars['string']['output']>;
  Tail_Ratio?: Maybe<Scalars['string']['output']>;
  Time_inMarket?: Maybe<Scalars['string']['output']>;
  Ulcer_Index?: Maybe<Scalars['string']['output']>;
  Volatility_ann?: Maybe<Scalars['string']['output']>;
  Win_Days?: Maybe<Scalars['string']['output']>;
  Win_Month?: Maybe<Scalars['string']['output']>;
  Win_Quarter?: Maybe<Scalars['string']['output']>;
  Win_Year?: Maybe<Scalars['string']['output']>;
  Worst_Day?: Maybe<Scalars['string']['output']>;
  Worst_Month?: Maybe<Scalars['string']['output']>;
  Worst_Year?: Maybe<Scalars['string']['output']>;
  YTD: Scalars['string']['output'];
};

/** Boolean expression to filter rows from the logical model for "strategy_oos_metrics". All fields are combined with a logical 'AND'. */
export type GQLStrategyOosMetricsBoolExpBoolExp = {
  Alltime_ann?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_DownMonth?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_Drawdown?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_DrawdownDays?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_UpMonth?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Day?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  CAGR?: InputMaybe<GQLStringMongoComparisonExp>;
  CPC_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Calmar?: InputMaybe<GQLStringMongoComparisonExp>;
  Common_SenseRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Cumulative_Return?: InputMaybe<GQLStringMongoComparisonExp>;
  Daily_ValueatRisk?: InputMaybe<GQLStringMongoComparisonExp>;
  End_Period?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Daily?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Monthly?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_ShortfallcVaR?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Yearly?: InputMaybe<GQLStringMongoComparisonExp>;
  GainPain_1M?: InputMaybe<GQLStringMongoComparisonExp>;
  GainPain_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Kelly_Criterion?: InputMaybe<GQLStringMongoComparisonExp>;
  Kurtosis?: InputMaybe<GQLStringMongoComparisonExp>;
  Longest_DDDays?: InputMaybe<GQLStringMongoComparisonExp>;
  MTD?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_ConsecutiveLosses?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_ConsecutiveWins?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_Drawdown?: InputMaybe<GQLStringMongoComparisonExp>;
  Omega?: InputMaybe<GQLStringMongoComparisonExp>;
  Outlier_LossRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Outlier_WinRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Payoff_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Prob_SharpeRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Profit_Factor?: InputMaybe<GQLStringMongoComparisonExp>;
  Recovery_Factor?: InputMaybe<GQLStringMongoComparisonExp>;
  RiskFree_Rate?: InputMaybe<GQLStringMongoComparisonExp>;
  Risk_ofRuin?: InputMaybe<GQLStringMongoComparisonExp>;
  Serenity_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Sharpe?: InputMaybe<GQLStringMongoComparisonExp>;
  Skew?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sharpe?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sortino?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sortino2?: InputMaybe<GQLStringMongoComparisonExp>;
  Sortino?: InputMaybe<GQLStringMongoComparisonExp>;
  Sortino2?: InputMaybe<GQLStringMongoComparisonExp>;
  Start_Period?: InputMaybe<GQLStringMongoComparisonExp>;
  Tail_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Time_inMarket?: InputMaybe<GQLStringMongoComparisonExp>;
  Ulcer_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Volatility_ann?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Days?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Quarter?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Day?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  YTD?: InputMaybe<GQLStringMongoComparisonExp>;
  _and?: InputMaybe<Array<GQLStrategyOosMetricsBoolExpBoolExp>>;
  _not?: InputMaybe<GQLStrategyOosMetricsBoolExpBoolExp>;
  _or?: InputMaybe<Array<GQLStrategyOosMetricsBoolExpBoolExp>>;
};

/** Ordering options when selecting data from "strategy_oos_metrics". */
export type GQLStrategyOosMetricsOrderBy = {
  Alltime_ann?: InputMaybe<GQLMongoOrderBy>;
  Avg_DownMonth?: InputMaybe<GQLMongoOrderBy>;
  Avg_Drawdown?: InputMaybe<GQLMongoOrderBy>;
  Avg_DrawdownDays?: InputMaybe<GQLMongoOrderBy>;
  Avg_UpMonth?: InputMaybe<GQLMongoOrderBy>;
  Best_Day?: InputMaybe<GQLMongoOrderBy>;
  Best_Month?: InputMaybe<GQLMongoOrderBy>;
  Best_Year?: InputMaybe<GQLMongoOrderBy>;
  CAGR?: InputMaybe<GQLMongoOrderBy>;
  CPC_Index?: InputMaybe<GQLMongoOrderBy>;
  Calmar?: InputMaybe<GQLMongoOrderBy>;
  Common_SenseRatio?: InputMaybe<GQLMongoOrderBy>;
  Cumulative_Return?: InputMaybe<GQLMongoOrderBy>;
  Daily_ValueatRisk?: InputMaybe<GQLMongoOrderBy>;
  End_Period?: InputMaybe<GQLMongoOrderBy>;
  Expected_Daily?: InputMaybe<GQLMongoOrderBy>;
  Expected_Monthly?: InputMaybe<GQLMongoOrderBy>;
  Expected_ShortfallcVaR?: InputMaybe<GQLMongoOrderBy>;
  Expected_Yearly?: InputMaybe<GQLMongoOrderBy>;
  GainPain_1M?: InputMaybe<GQLMongoOrderBy>;
  GainPain_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Kelly_Criterion?: InputMaybe<GQLMongoOrderBy>;
  Kurtosis?: InputMaybe<GQLMongoOrderBy>;
  Longest_DDDays?: InputMaybe<GQLMongoOrderBy>;
  MTD?: InputMaybe<GQLMongoOrderBy>;
  Max_ConsecutiveLosses?: InputMaybe<GQLMongoOrderBy>;
  Max_ConsecutiveWins?: InputMaybe<GQLMongoOrderBy>;
  Max_Drawdown?: InputMaybe<GQLMongoOrderBy>;
  Omega?: InputMaybe<GQLMongoOrderBy>;
  Outlier_LossRatio?: InputMaybe<GQLMongoOrderBy>;
  Outlier_WinRatio?: InputMaybe<GQLMongoOrderBy>;
  Payoff_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Prob_SharpeRatio?: InputMaybe<GQLMongoOrderBy>;
  Profit_Factor?: InputMaybe<GQLMongoOrderBy>;
  Recovery_Factor?: InputMaybe<GQLMongoOrderBy>;
  RiskFree_Rate?: InputMaybe<GQLMongoOrderBy>;
  Risk_ofRuin?: InputMaybe<GQLMongoOrderBy>;
  Serenity_Index?: InputMaybe<GQLMongoOrderBy>;
  Sharpe?: InputMaybe<GQLMongoOrderBy>;
  Skew?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sharpe?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sortino?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sortino2?: InputMaybe<GQLMongoOrderBy>;
  Sortino?: InputMaybe<GQLMongoOrderBy>;
  Sortino2?: InputMaybe<GQLMongoOrderBy>;
  Start_Period?: InputMaybe<GQLMongoOrderBy>;
  Tail_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Time_inMarket?: InputMaybe<GQLMongoOrderBy>;
  Ulcer_Index?: InputMaybe<GQLMongoOrderBy>;
  Volatility_ann?: InputMaybe<GQLMongoOrderBy>;
  Win_Days?: InputMaybe<GQLMongoOrderBy>;
  Win_Month?: InputMaybe<GQLMongoOrderBy>;
  Win_Quarter?: InputMaybe<GQLMongoOrderBy>;
  Win_Year?: InputMaybe<GQLMongoOrderBy>;
  Worst_Day?: InputMaybe<GQLMongoOrderBy>;
  Worst_Month?: InputMaybe<GQLMongoOrderBy>;
  Worst_Year?: InputMaybe<GQLMongoOrderBy>;
  YTD?: InputMaybe<GQLMongoOrderBy>;
};

/** Ordering options when selecting data from "strategy". */
export type GQLStrategyOrderBy = {
  _id?: InputMaybe<GQLMongoOrderBy>;
  name?: InputMaybe<GQLMongoOrderBy>;
  oos_metrics?: InputMaybe<GQLStrategyOosMetricsOrderBy>;
  quantstats_metrics?: InputMaybe<GQLStrategyQuantstatsMetricsOrderBy>;
  sid?: InputMaybe<GQLMongoOrderBy>;
};

export type GQLStrategyQuantstatsDd = {
  __typename?: 'strategy_quantstats_dd';
  days: Scalars['int']['output'];
  end: Scalars['string']['output'];
  max_drawdown?: Maybe<Scalars['double']['output']>;
  start: Scalars['string']['output'];
  valley: Scalars['string']['output'];
};

export type GQLStrategyQuantstatsMetrics = {
  __typename?: 'strategy_quantstats_metrics';
  Alltime_ann?: Maybe<Scalars['string']['output']>;
  Avg_DownMonth?: Maybe<Scalars['string']['output']>;
  Avg_Drawdown?: Maybe<Scalars['string']['output']>;
  Avg_DrawdownDays?: Maybe<Scalars['string']['output']>;
  Avg_UpMonth?: Maybe<Scalars['string']['output']>;
  Best_Day?: Maybe<Scalars['string']['output']>;
  Best_Month?: Maybe<Scalars['string']['output']>;
  Best_Year?: Maybe<Scalars['string']['output']>;
  CAGR?: Maybe<Scalars['string']['output']>;
  CPC_Index?: Maybe<Scalars['string']['output']>;
  Calmar: Scalars['string']['output'];
  Common_SenseRatio?: Maybe<Scalars['string']['output']>;
  Cumulative_Return?: Maybe<Scalars['string']['output']>;
  Daily_ValueatRisk?: Maybe<Scalars['string']['output']>;
  End_Period?: Maybe<Scalars['string']['output']>;
  Expected_Daily?: Maybe<Scalars['string']['output']>;
  Expected_Monthly?: Maybe<Scalars['string']['output']>;
  Expected_ShortfallcVaR?: Maybe<Scalars['string']['output']>;
  Expected_Yearly?: Maybe<Scalars['string']['output']>;
  GainPain_1M?: Maybe<Scalars['string']['output']>;
  GainPain_Ratio?: Maybe<Scalars['string']['output']>;
  Kelly_Criterion?: Maybe<Scalars['string']['output']>;
  Kurtosis: Scalars['string']['output'];
  Longest_DDDays?: Maybe<Scalars['string']['output']>;
  MTD: Scalars['string']['output'];
  Max_ConsecutiveLosses?: Maybe<Scalars['string']['output']>;
  Max_ConsecutiveWins?: Maybe<Scalars['string']['output']>;
  Max_Drawdown?: Maybe<Scalars['string']['output']>;
  Omega: Scalars['string']['output'];
  Outlier_LossRatio?: Maybe<Scalars['string']['output']>;
  Outlier_WinRatio?: Maybe<Scalars['string']['output']>;
  Payoff_Ratio?: Maybe<Scalars['string']['output']>;
  Prob_SharpeRatio?: Maybe<Scalars['string']['output']>;
  Profit_Factor?: Maybe<Scalars['string']['output']>;
  Recovery_Factor?: Maybe<Scalars['string']['output']>;
  RiskFree_Rate?: Maybe<Scalars['string']['output']>;
  Risk_ofRuin?: Maybe<Scalars['string']['output']>;
  Serenity_Index?: Maybe<Scalars['string']['output']>;
  Sharpe: Scalars['string']['output'];
  Skew: Scalars['string']['output'];
  Smart_Sharpe?: Maybe<Scalars['string']['output']>;
  Smart_Sortino?: Maybe<Scalars['string']['output']>;
  Smart_Sortino2?: Maybe<Scalars['string']['output']>;
  Sortino: Scalars['string']['output'];
  Sortino2?: Maybe<Scalars['string']['output']>;
  Start_Period?: Maybe<Scalars['string']['output']>;
  Tail_Ratio?: Maybe<Scalars['string']['output']>;
  Time_inMarket?: Maybe<Scalars['string']['output']>;
  Ulcer_Index?: Maybe<Scalars['string']['output']>;
  Volatility_ann?: Maybe<Scalars['string']['output']>;
  Win_Days?: Maybe<Scalars['string']['output']>;
  Win_Month?: Maybe<Scalars['string']['output']>;
  Win_Quarter?: Maybe<Scalars['string']['output']>;
  Win_Year?: Maybe<Scalars['string']['output']>;
  Worst_Day?: Maybe<Scalars['string']['output']>;
  Worst_Month?: Maybe<Scalars['string']['output']>;
  Worst_Year?: Maybe<Scalars['string']['output']>;
  YTD: Scalars['string']['output'];
};

/** Boolean expression to filter rows from the logical model for "strategy_quantstats_metrics". All fields are combined with a logical 'AND'. */
export type GQLStrategyQuantstatsMetricsBoolExpBoolExp = {
  Alltime_ann?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_DownMonth?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_Drawdown?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_DrawdownDays?: InputMaybe<GQLStringMongoComparisonExp>;
  Avg_UpMonth?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Day?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Best_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  CAGR?: InputMaybe<GQLStringMongoComparisonExp>;
  CPC_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Calmar?: InputMaybe<GQLStringMongoComparisonExp>;
  Common_SenseRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Cumulative_Return?: InputMaybe<GQLStringMongoComparisonExp>;
  Daily_ValueatRisk?: InputMaybe<GQLStringMongoComparisonExp>;
  End_Period?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Daily?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Monthly?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_ShortfallcVaR?: InputMaybe<GQLStringMongoComparisonExp>;
  Expected_Yearly?: InputMaybe<GQLStringMongoComparisonExp>;
  GainPain_1M?: InputMaybe<GQLStringMongoComparisonExp>;
  GainPain_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Kelly_Criterion?: InputMaybe<GQLStringMongoComparisonExp>;
  Kurtosis?: InputMaybe<GQLStringMongoComparisonExp>;
  Longest_DDDays?: InputMaybe<GQLStringMongoComparisonExp>;
  MTD?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_ConsecutiveLosses?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_ConsecutiveWins?: InputMaybe<GQLStringMongoComparisonExp>;
  Max_Drawdown?: InputMaybe<GQLStringMongoComparisonExp>;
  Omega?: InputMaybe<GQLStringMongoComparisonExp>;
  Outlier_LossRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Outlier_WinRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Payoff_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Prob_SharpeRatio?: InputMaybe<GQLStringMongoComparisonExp>;
  Profit_Factor?: InputMaybe<GQLStringMongoComparisonExp>;
  Recovery_Factor?: InputMaybe<GQLStringMongoComparisonExp>;
  RiskFree_Rate?: InputMaybe<GQLStringMongoComparisonExp>;
  Risk_ofRuin?: InputMaybe<GQLStringMongoComparisonExp>;
  Serenity_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Sharpe?: InputMaybe<GQLStringMongoComparisonExp>;
  Skew?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sharpe?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sortino?: InputMaybe<GQLStringMongoComparisonExp>;
  Smart_Sortino2?: InputMaybe<GQLStringMongoComparisonExp>;
  Sortino?: InputMaybe<GQLStringMongoComparisonExp>;
  Sortino2?: InputMaybe<GQLStringMongoComparisonExp>;
  Start_Period?: InputMaybe<GQLStringMongoComparisonExp>;
  Tail_Ratio?: InputMaybe<GQLStringMongoComparisonExp>;
  Time_inMarket?: InputMaybe<GQLStringMongoComparisonExp>;
  Ulcer_Index?: InputMaybe<GQLStringMongoComparisonExp>;
  Volatility_ann?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Days?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Quarter?: InputMaybe<GQLStringMongoComparisonExp>;
  Win_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Day?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Month?: InputMaybe<GQLStringMongoComparisonExp>;
  Worst_Year?: InputMaybe<GQLStringMongoComparisonExp>;
  YTD?: InputMaybe<GQLStringMongoComparisonExp>;
  _and?: InputMaybe<Array<GQLStrategyQuantstatsMetricsBoolExpBoolExp>>;
  _not?: InputMaybe<GQLStrategyQuantstatsMetricsBoolExpBoolExp>;
  _or?: InputMaybe<Array<GQLStrategyQuantstatsMetricsBoolExpBoolExp>>;
};

/** Ordering options when selecting data from "strategy_quantstats_metrics". */
export type GQLStrategyQuantstatsMetricsOrderBy = {
  Alltime_ann?: InputMaybe<GQLMongoOrderBy>;
  Avg_DownMonth?: InputMaybe<GQLMongoOrderBy>;
  Avg_Drawdown?: InputMaybe<GQLMongoOrderBy>;
  Avg_DrawdownDays?: InputMaybe<GQLMongoOrderBy>;
  Avg_UpMonth?: InputMaybe<GQLMongoOrderBy>;
  Best_Day?: InputMaybe<GQLMongoOrderBy>;
  Best_Month?: InputMaybe<GQLMongoOrderBy>;
  Best_Year?: InputMaybe<GQLMongoOrderBy>;
  CAGR?: InputMaybe<GQLMongoOrderBy>;
  CPC_Index?: InputMaybe<GQLMongoOrderBy>;
  Calmar?: InputMaybe<GQLMongoOrderBy>;
  Common_SenseRatio?: InputMaybe<GQLMongoOrderBy>;
  Cumulative_Return?: InputMaybe<GQLMongoOrderBy>;
  Daily_ValueatRisk?: InputMaybe<GQLMongoOrderBy>;
  End_Period?: InputMaybe<GQLMongoOrderBy>;
  Expected_Daily?: InputMaybe<GQLMongoOrderBy>;
  Expected_Monthly?: InputMaybe<GQLMongoOrderBy>;
  Expected_ShortfallcVaR?: InputMaybe<GQLMongoOrderBy>;
  Expected_Yearly?: InputMaybe<GQLMongoOrderBy>;
  GainPain_1M?: InputMaybe<GQLMongoOrderBy>;
  GainPain_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Kelly_Criterion?: InputMaybe<GQLMongoOrderBy>;
  Kurtosis?: InputMaybe<GQLMongoOrderBy>;
  Longest_DDDays?: InputMaybe<GQLMongoOrderBy>;
  MTD?: InputMaybe<GQLMongoOrderBy>;
  Max_ConsecutiveLosses?: InputMaybe<GQLMongoOrderBy>;
  Max_ConsecutiveWins?: InputMaybe<GQLMongoOrderBy>;
  Max_Drawdown?: InputMaybe<GQLMongoOrderBy>;
  Omega?: InputMaybe<GQLMongoOrderBy>;
  Outlier_LossRatio?: InputMaybe<GQLMongoOrderBy>;
  Outlier_WinRatio?: InputMaybe<GQLMongoOrderBy>;
  Payoff_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Prob_SharpeRatio?: InputMaybe<GQLMongoOrderBy>;
  Profit_Factor?: InputMaybe<GQLMongoOrderBy>;
  Recovery_Factor?: InputMaybe<GQLMongoOrderBy>;
  RiskFree_Rate?: InputMaybe<GQLMongoOrderBy>;
  Risk_ofRuin?: InputMaybe<GQLMongoOrderBy>;
  Serenity_Index?: InputMaybe<GQLMongoOrderBy>;
  Sharpe?: InputMaybe<GQLMongoOrderBy>;
  Skew?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sharpe?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sortino?: InputMaybe<GQLMongoOrderBy>;
  Smart_Sortino2?: InputMaybe<GQLMongoOrderBy>;
  Sortino?: InputMaybe<GQLMongoOrderBy>;
  Sortino2?: InputMaybe<GQLMongoOrderBy>;
  Start_Period?: InputMaybe<GQLMongoOrderBy>;
  Tail_Ratio?: InputMaybe<GQLMongoOrderBy>;
  Time_inMarket?: InputMaybe<GQLMongoOrderBy>;
  Ulcer_Index?: InputMaybe<GQLMongoOrderBy>;
  Volatility_ann?: InputMaybe<GQLMongoOrderBy>;
  Win_Days?: InputMaybe<GQLMongoOrderBy>;
  Win_Month?: InputMaybe<GQLMongoOrderBy>;
  Win_Quarter?: InputMaybe<GQLMongoOrderBy>;
  Win_Year?: InputMaybe<GQLMongoOrderBy>;
  Worst_Day?: InputMaybe<GQLMongoOrderBy>;
  Worst_Month?: InputMaybe<GQLMongoOrderBy>;
  Worst_Year?: InputMaybe<GQLMongoOrderBy>;
  YTD?: InputMaybe<GQLMongoOrderBy>;
};

/** select columns of table "strategy" */
export enum GQLStrategySelectColumn {
  /** column name */
  _ID = '_id',
  /** column name */
  NAME = 'name',
  /** column name */
  OOS_DD = 'oos_dd',
  /** column name */
  OOS_METRICS = 'oos_metrics',
  /** column name */
  QUANTSTATS_DD = 'quantstats_dd',
  /** column name */
  QUANTSTATS_METRICS = 'quantstats_metrics',
  /** column name */
  SID = 'sid'
}

/** Boolean expression to compare columns of type "string". All fields are combined with logical 'AND'. */
export type GQLStringMongoComparisonExp = {
  _eq?: InputMaybe<Scalars['string']['input']>;
  _gt?: InputMaybe<Scalars['string']['input']>;
  _gte?: InputMaybe<Scalars['string']['input']>;
  _in?: InputMaybe<Array<Scalars['string']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['string']['input']>;
  _lte?: InputMaybe<Scalars['string']['input']>;
  _neq?: InputMaybe<Scalars['string']['input']>;
  _nin?: InputMaybe<Array<Scalars['string']['input']>>;
};

export type GQLSubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "strategy" */
  strategy: Array<GQLStrategy>;
  /** fetch aggregated fields from the table: "strategy" */
  strategy_aggregate: GQLStrategyAggregate;
  /** fetch data from the table: "strategy" using primary key columns */
  strategy_by_pk?: Maybe<GQLStrategy>;
};


export type GQLSubscriptionRootStrategyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GQLStrategyOrderBy>>;
  where?: InputMaybe<GQLStrategyBoolExp>;
};


export type GQLSubscriptionRootStrategyAggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GQLStrategyOrderBy>>;
  where?: InputMaybe<GQLStrategyBoolExp>;
};


export type GQLSubscriptionRootStrategyByPkArgs = {
  _id: Scalars['objectId']['input'];
};
