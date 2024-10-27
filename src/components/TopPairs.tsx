'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOP_PAIRS } from '../graphql/queries';

interface Pool {
  id: string;
  token0: { symbol: string };
  token1: { symbol: string };
  totalValueLockedUSD: string;
}

export default function TopPairs() {
  const { loading, error, data } = useQuery(GET_TOP_PAIRS, {
    onError: (error) => {
      console.error('GraphQL Error:', error);
    },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Loading pools data...</p>
      </div>
    );
  }

  if (error) {
    console.error('Detailed error:', error);
    return (
      <div className="p-4">
        <p className="text-red-500">Error loading pools: {error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data || !data.pools) {
    return (
      <div className="p-4">
        <p className="text-gray-500">No pools data available</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top 10 Uniswap V3 Pools</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Pool</th>
              <th className="px-4 py-2">TVL (USD)</th>
            </tr>
          </thead>
          <tbody>
            {data.pools.map((pool: Pool) => (
              <tr key={pool.id} className="border-b">
                <td className="px-4 py-2">{pool.token0.symbol} / {pool.token1.symbol}</td>
                <td className="px-4 py-2">
                  ${parseFloat(pool.totalValueLockedUSD).toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
