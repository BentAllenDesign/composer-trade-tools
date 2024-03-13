/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetPrimaryAccountIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GQLGetPrimaryAccountIdQuery = (
  { __typename?: 'query_root' }
  & { primaryAccount?: Types.Maybe<(
    { __typename?: 'PrimaryAccountOverview' }
    & Pick<Types.GQLPrimaryAccountOverview, 'id'>
  )> }
);


export const GetPrimaryAccountIdDocument = gql`
    query GetPrimaryAccountId {
  primaryAccount: get_primary_account_overview {
    id
  }
}
    `;

/**
 * __useGetPrimaryAccountIdQuery__
 *
 * To run a query within a React component, call `useGetPrimaryAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrimaryAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrimaryAccountIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrimaryAccountIdQuery(baseOptions?: Apollo.QueryHookOptions<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>(GetPrimaryAccountIdDocument, options);
      }
export function useGetPrimaryAccountIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>(GetPrimaryAccountIdDocument, options);
        }
export function useGetPrimaryAccountIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>(GetPrimaryAccountIdDocument, options);
        }
export type GetPrimaryAccountIdQueryHookResult = ReturnType<typeof useGetPrimaryAccountIdQuery>;
export type GetPrimaryAccountIdLazyQueryHookResult = ReturnType<typeof useGetPrimaryAccountIdLazyQuery>;
export type GetPrimaryAccountIdSuspenseQueryHookResult = ReturnType<typeof useGetPrimaryAccountIdSuspenseQuery>;
export type GetPrimaryAccountIdQueryResult = Apollo.QueryResult<GQLGetPrimaryAccountIdQuery, GQLGetPrimaryAccountIdQueryVariables>;