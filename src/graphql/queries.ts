// graphql/queries.ts

import { gql } from '@apollo/client';

// 保留您原有的查询...

export const GET_TOP_PAIRS = gql`
  query GetTopPairs {
    pools(first: 10, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      totalValueLockedUSD
    }
  }
`;
