// components/Dashboard.tsx
import React from 'react';
import { MarketOverview } from './MarketOverview';
// import { YourSupplies } from './YourSupplies';
// import { AssetsToSupply } from './AssetsToSupply';
// import { YourBorrows } from './YourBorrows';
// import { AssetsToBorrow } from './AssetsToBorrow';
import { ProtocolProvider } from '@/contexts/ProtocolContext';

export const Dashboard: React.FC = () => {
  return (
    <ProtocolProvider>
      <div className="w-[1440px] mt-10">
        <MarketOverview />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            {/* <YourSupplies supplies={[]} totalBalance={''} totalApy={''} /> */}
            {/* <AssetsToSupply /> */}
          </div>
          <div>
            {/* <YourBorrows /> */}
            {/* <AssetsToBorrow /> */}
          </div>
        </div>
      </div>
    </ProtocolProvider>
  );
};