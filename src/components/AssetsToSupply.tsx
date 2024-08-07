// components/AssetsToSupply.tsx
'use client'
import { useState } from 'react';

interface Asset {
  asset: string;
  walletBalance: string;
  apy: string;
  canBeCollateral: boolean;
}

const dummyAssets: Asset[] = [
  { asset: 'ETH', walletBalance: '0.0392959', apy: '1.90%', canBeCollateral: true },
];

export const AssetsToSupply = () => {
  const [assets] = useState<Asset[]>(dummyAssets);
  const [showZeroBalance, setShowZeroBalance] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Assets to supply</h2>
        <button className="text-gray-400 text-sm">Hide</button>
      </div>
      <div className="mb-4">
        <label className="flex items-center text-gray-400">
          <input
            type="checkbox"
            checked={showZeroBalance}
            onChange={() => setShowZeroBalance(!showZeroBalance)}
            className="mr-2"
          />
          Show assets with 0 balance
        </label>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left">Assets</th>
            <th className="text-right">Wallet balance</th>
            <th className="text-right">APY</th>
            <th className="text-center">Can be collateral</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index} className="text-white">
              <td className="py-2">{asset.asset}</td>
              <td className="text-right">{asset.walletBalance}</td>
              <td className="text-right">{asset.apy}</td>
              <td className="text-center">
                {asset.canBeCollateral ? '✓' : ''}
              </td>
              <td className="text-right">
                <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">Supply</button>
                <button className="text-gray-400">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};