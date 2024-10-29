'use client';

import { WagmiConfig } from 'wagmi';
import { config } from '@/config';
import ContextProvider from '@/context';
import { ApolloWrapper } from '@/lib/apollo-wrapper';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={config}>
      <ContextProvider>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </ContextProvider>
    </WagmiConfig>
  );
} 