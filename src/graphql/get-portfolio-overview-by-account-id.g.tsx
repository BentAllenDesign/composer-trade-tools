/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetPortfolioOverviewByAccountIdQueryVariables = Types.Exact<{
  account_id: Types.Scalars['ID']['input'];
}>;


export type GQLGetPortfolioOverviewByAccountIdQuery = (
  { __typename?: 'query_root' }
  & { portfolioOverview?: Types.Maybe<(
    { __typename?: 'PortfolioOverview' }
    & { netDeposits: Types.GQLPortfolioOverview['net_deposits'], pendingDeploysCash: Types.GQLPortfolioOverview['pending_deploys_cash'], portfolioValue: Types.GQLPortfolioOverview['portfolio_value'], cumulativeReturn: Types.GQLPortfolioOverview['simple_return'], todaysDollarChange: Types.GQLPortfolioOverview['todays_dollar_change'], todaysPercentChange: Types.GQLPortfolioOverview['todays_percent_change'], totalCash: Types.GQLPortfolioOverview['total_cash'], totalUnallocatedCash: Types.GQLPortfolioOverview['total_unallocated_cash'] }
  )> }
);


export const GetPortfolioOverviewByAccountIdDocument = gql`
    query GetPortfolioOverviewByAccountId($account_id: ID!) {
  portfolioOverview: get_portfolio_overview_by_account_id(account_id: $account_id) {
    netDeposits: net_deposits
    pendingDeploysCash: pending_deploys_cash
    portfolioValue: portfolio_value
    cumulativeReturn: simple_return
    todaysDollarChange: todays_dollar_change
    todaysPercentChange: todays_percent_change
    totalCash: total_cash
    totalUnallocatedCash: total_unallocated_cash
  }
}
    `;

/**
 * __useGetPortfolioOverviewByAccountIdQuery__
 *
 * To run a query within a React component, call `useGetPortfolioOverviewByAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioOverviewByAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioOverviewByAccountIdQuery({
 *   variables: {
 *      account_id: // value for 'account_id'
 *   },
 * });
 */
export function useGetPortfolioOverviewByAccountIdQuery(baseOptions: Apollo.QueryHookOptions<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables> & ({ variables: GQLGetPortfolioOverviewByAccountIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>(GetPortfolioOverviewByAccountIdDocument, options);
      }
export function useGetPortfolioOverviewByAccountIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>(GetPortfolioOverviewByAccountIdDocument, options);
        }
export function useGetPortfolioOverviewByAccountIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>(GetPortfolioOverviewByAccountIdDocument, options);
        }
export type GetPortfolioOverviewByAccountIdQueryHookResult = ReturnType<typeof useGetPortfolioOverviewByAccountIdQuery>;
export type GetPortfolioOverviewByAccountIdLazyQueryHookResult = ReturnType<typeof useGetPortfolioOverviewByAccountIdLazyQuery>;
export type GetPortfolioOverviewByAccountIdSuspenseQueryHookResult = ReturnType<typeof useGetPortfolioOverviewByAccountIdSuspenseQuery>;
export type GetPortfolioOverviewByAccountIdQueryResult = Apollo.QueryResult<GQLGetPortfolioOverviewByAccountIdQuery, GQLGetPortfolioOverviewByAccountIdQueryVariables>;