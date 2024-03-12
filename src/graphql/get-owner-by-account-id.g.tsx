/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GQLGetOwnerByAccountIdQueryVariables = Types.Exact<{
  account_id: Types.Scalars['ID']['input'];
}>;


export type GQLGetOwnerByAccountIdQuery = (
  { __typename?: 'query_root' }
  & { get_owner_by_account_id?: Types.Maybe<(
    { __typename?: 'AccountDetail' }
    & { identity: (
      { __typename?: 'AccountOwner' }
      & Pick<Types.GQLAccountOwner, 'given_name' | 'family_name' | 'middle_name'>
    ), contact?: Types.Maybe<(
      { __typename?: 'AccountOwnerContact' }
      & Pick<Types.GQLAccountOwnerContact, 'email_address' | 'phone_number'>
      & { address?: Types.Maybe<(
        { __typename?: 'Address' }
        & Pick<Types.GQLAddress, 'street_address' | 'city' | 'state' | 'postal_code' | 'country'>
      )> }
    )> }
  )> }
);


export const GetOwnerByAccountIdDocument = gql`
    query GetOwnerByAccountId($account_id: ID!) {
  get_owner_by_account_id: get_account_by_id(account_id: $account_id) {
    identity {
      given_name
      family_name
      middle_name
    }
    contact {
      address {
        street_address
        city
        state
        postal_code
        country
      }
      email_address
      phone_number
    }
  }
}
    `;

/**
 * __useGetOwnerByAccountIdQuery__
 *
 * To run a query within a React component, call `useGetOwnerByAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnerByAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnerByAccountIdQuery({
 *   variables: {
 *      account_id: // value for 'account_id'
 *   },
 * });
 */
export function useGetOwnerByAccountIdQuery(baseOptions: Apollo.QueryHookOptions<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables> & ({ variables: GQLGetOwnerByAccountIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>(GetOwnerByAccountIdDocument, options);
      }
export function useGetOwnerByAccountIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>(GetOwnerByAccountIdDocument, options);
        }
export function useGetOwnerByAccountIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>(GetOwnerByAccountIdDocument, options);
        }
export type GetOwnerByAccountIdQueryHookResult = ReturnType<typeof useGetOwnerByAccountIdQuery>;
export type GetOwnerByAccountIdLazyQueryHookResult = ReturnType<typeof useGetOwnerByAccountIdLazyQuery>;
export type GetOwnerByAccountIdSuspenseQueryHookResult = ReturnType<typeof useGetOwnerByAccountIdSuspenseQuery>;
export type GetOwnerByAccountIdQueryResult = Apollo.QueryResult<GQLGetOwnerByAccountIdQuery, GQLGetOwnerByAccountIdQueryVariables>;