import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject, ApolloProvider as Provider } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import React, { PropsWithChildren } from 'react';

import { useTokenContext } from '../state/global/ComposerTokenContext';

export const ApolloProvider: React.FC<PropsWithChildren> = React.memo(({ children }) => {
  const { token } = useTokenContext();

  // Here we're creating a new authorization link that will run in
  // each request pipeline. This link will add composer's token to the
  // request headers.
  const authorizationLink = React.useMemo<ApolloLink>(() => 
    new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token?.raw}`,
          'x-hasura-admin-secret': '123456',
        },
      });

      return forward(operation);
    }), [token]);

  // Here we're merging our authorization link with a retry link and
  // a new http link that points to our graphql server.
  const mergedLink = React.useMemo<ApolloLink>(() => ApolloLink.from([
    new RetryLink(),
    authorizationLink,
    new HttpLink({ uri: 'http://qnap-nas:8082/v1/graphql' }),
  ]), [authorizationLink]);

  // Here we're creating a new Apollo client with our merged link
  // and a new in-memory cache.
  const client = React.useMemo<ApolloClient<NormalizedCacheObject>>(() => new ApolloClient({
    link: mergedLink,
    cache: new InMemoryCache(),
  }), [mergedLink]);

  return (
    <Provider client={client}>
      {children}
    </Provider>
  );
});