// lib/apolloClient.ts

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', // 替换为您的 subgraph URL
    }),
    cache: new InMemoryCache(),
  });
}
