'use client';

import React, { useEffect, useState } from 'react';
import { MarketOverview } from './MarketOverview';
import { ProtocolProvider } from '@/contexts/ProtocolContext';
import { YourSupplies } from './YourSupplies';
import { YourBorrows } from './YourBorrows';
import { AssetsToSupply } from './AssetsToSupply';
import { AssetsToBorrow } from './AssetsToBorrow';
import { useAccount } from 'wagmi';

export const Dashboard: React.FC = () => {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  // 处理客户端水合(hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 确保在客户端渲染
  if (!mounted) {
    return null;
  }

  return (
    <ProtocolProvider>
      <div className="w-[1600px] mt-10">
        {isConnected ? (
          <>
            <MarketOverview />
            <div className="mx-auto p-4 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <YourSupplies />
                <AssetsToSupply />
              </div>
              <div className="space-y-4">
                <YourBorrows />
                <AssetsToBorrow />
              </div>
            </div>
          </>
        ) : (
          <div className="h-[800px] flex flex-col items-center justify-center">
            <div className="text-xl mb-4 text-gray-400">Please connect your wallet first</div>
            <w3m-button />
          </div>
        )}
      </div>
    </ProtocolProvider>
  );
};