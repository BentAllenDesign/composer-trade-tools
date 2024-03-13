/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetAccountsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GQLGetAccountsQuery = (
  { __typename?: 'query_root' }
  & { accounts: Array<Types.Maybe<(
    { __typename?: 'Account' }
    & Pick<Types.GQLAccount, 'status' | 'broker'>
    & { accountId: Types.GQLAccount['account_uuid'], accountType: Types.GQLAccount['account_type'] }
  )>> }
);


export const GetAccountsDocument = gql`
    query GetAccounts {
  accounts: get_accounts {
    accountId: account_uuid
    accountType: account_type
    status
    broker
  }
}
    `;

/**
 * __useGetAccountsQuery__
 *
 * To run a query within a React component, call `useGetAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountsQuery(baseOptions?: Apollo.QueryHookOptions<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>(GetAccountsDocument, options);
      }
export function useGetAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>(GetAccountsDocument, options);
        }
export function useGetAccountsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>(GetAccountsDocument, options);
        }
export type GetAccountsQueryHookResult = ReturnType<typeof useGetAccountsQuery>;
export type GetAccountsLazyQueryHookResult = ReturnType<typeof useGetAccountsLazyQuery>;
export type GetAccountsSuspenseQueryHookResult = ReturnType<typeof useGetAccountsSuspenseQuery>;
export type GetAccountsQueryResult = Apollo.QueryResult<GQLGetAccountsQuery, GQLGetAccountsQueryVariables>;