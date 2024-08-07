import React from 'react';
import { MarketOverview } from './MarketOverview';

import { ProtocolProvider } from '@/contexts/ProtocolContext';
import { YourSupplies } from './YourSupplies';
import { YourBorrows } from './YourBorrows';
import { AssetsToSupply } from './AssetsToSupply';
import { AssetsToBorrow } from './AssetsToBorrow';

export const Dashboard: React.FC = () => {
  return (
    <ProtocolProvider>
      <div className="w-[1600px] mt-10 ">
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
      </div>
    </ProtocolProvider>
  );
};