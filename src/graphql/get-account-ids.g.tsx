/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetAccountIdsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GQLGetAccountIdsQuery = (
  { __typename?: 'query_root' }
  & { get_accounts: (
    { __typename?: 'GetAccountsResponse' }
    & { accounts: Array<Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.GQLAccount, 'account_uuid' | 'status'>
    )>> }
  ) }
);


export const GetAccountIdsDocument = gql`
    query GetAccountIds {
  get_accounts {
    accounts {
      account_uuid
      status
    }
  }
}
    `;

/**
 * __useGetAccountIdsQuery__
 *
 * To run a query within a React component, call `useGetAccountIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountIdsQuery(baseOptions?: Apollo.QueryHookOptions<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>(GetAccountIdsDocument, options);
      }
export function useGetAccountIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>(GetAccountIdsDocument, options);
        }
export function useGetAccountIdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>(GetAccountIdsDocument, options);
        }
export type GetAccountIdsQueryHookResult = ReturnType<typeof useGetAccountIdsQuery>;
export type GetAccountIdsLazyQueryHookResult = ReturnType<typeof useGetAccountIdsLazyQuery>;
export type GetAccountIdsSuspenseQueryHookResult = ReturnType<typeof useGetAccountIdsSuspenseQuery>;
export type GetAccountIdsQueryResult = Apollo.QueryResult<GQLGetAccountIdsQuery, GQLGetAccountIdsQueryVariables>;