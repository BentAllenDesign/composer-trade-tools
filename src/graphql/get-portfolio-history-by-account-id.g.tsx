/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetPortfolioHistoryByAccountIdQueryVariables = Types.Exact<{
  account_id: Types.Scalars['ID']['input'];
}>;


export type GQLGetPortfolioHistoryByAccountIdQuery = (
  { __typename?: 'query_root' }
  & { portfolioHistory?: Types.Maybe<(
    { __typename?: 'PortfolioHistory' }
    & { timestamps: Types.GQLPortfolioHistory['series_unix_timestamps'], values: Types.GQLPortfolioHistory['series_values'] }
  )> }
);


export const GetPortfolioHistoryByAccountIdDocument = gql`
    query GetPortfolioHistoryByAccountId($account_id: ID!) {
  portfolioHistory: get_portfolio_history_by_account_id(account_id: $account_id) {
    timestamps: series_unix_timestamps
    values: series_values
  }
}
    `;

/**
 * __useGetPortfolioHistoryByAccountIdQuery__
 *
 * To run a query within a React component, call `useGetPortfolioHistoryByAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioHistoryByAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioHistoryByAccountIdQuery({
 *   variables: {
 *      account_id: // value for 'account_id'
 *   },
 * });
 */
export function useGetPortfolioHistoryByAccountIdQuery(baseOptions: Apollo.QueryHookOptions<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables> & ({ variables: GQLGetPortfolioHistoryByAccountIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>(GetPortfolioHistoryByAccountIdDocument, options);
      }
export function useGetPortfolioHistoryByAccountIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>(GetPortfolioHistoryByAccountIdDocument, options);
        }
export function useGetPortfolioHistoryByAccountIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>(GetPortfolioHistoryByAccountIdDocument, options);
        }
export type GetPortfolioHistoryByAccountIdQueryHookResult = ReturnType<typeof useGetPortfolioHistoryByAccountIdQuery>;
export type GetPortfolioHistoryByAccountIdLazyQueryHookResult = ReturnType<typeof useGetPortfolioHistoryByAccountIdLazyQuery>;
export type GetPortfolioHistoryByAccountIdSuspenseQueryHookResult = ReturnType<typeof useGetPortfolioHistoryByAccountIdSuspenseQuery>;
export type GetPortfolioHistoryByAccountIdQueryResult = Apollo.QueryResult<GQLGetPortfolioHistoryByAccountIdQuery, GQLGetPortfolioHistoryByAccountIdQueryVariables>;