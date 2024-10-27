'use client';

import { ApolloClient, ApolloProvider, InMemoryCache, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ReactNode, useState } from 'react';

export function ApolloWrapper({ children }: { children: ReactNode }) {
  const [client] = useState(() => {
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    });

    const httpLink = new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
      fetchOptions: {
        mode: 'cors',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: from([errorLink, httpLink]),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
      },
      connectToDevTools: true,
    });
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
