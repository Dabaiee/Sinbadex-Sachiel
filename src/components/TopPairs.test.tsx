import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TopPairs from './TopPairs';
import { GET_TOP_PAIRS } from '../graphql/queries';
import '@testing-library/jest-dom';

const mocks = [
  {
    request: {
      query: GET_TOP_PAIRS,
    },
    result: {
      data: {
        pools: [
          { 
            id: '1', 
            token0: { symbol: 'ETH' }, 
            token1: { symbol: 'USDT' }, 
            totalValueLockedUSD: '1000000' 
          },
        ],
      },
    },
  },
];

describe('TopPairs', () => {
  it('renders loading state', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopPairs />
      </MockedProvider>
    );
    
    expect(screen.getByText('Loading pools data...')).toBeInTheDocument();
  });

  it('renders pools data', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopPairs />
      </MockedProvider>
    );

    const pairText = await screen.findByText('ETH / USDT');
    expect(pairText).toBeInTheDocument();
  });
});
