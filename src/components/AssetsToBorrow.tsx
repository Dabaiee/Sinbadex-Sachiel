// components/AssetsToBorrow.tsx
'use client'
import { useState } from 'react';

interface Asset {
  asset: string;
  available: string;
  apy: string;
}

const dummyAssets: Asset[] = [
  { asset: 'GHO', available: '19.95', apy: '5.08-7.25%' },
  { asset: 'wstETH', available: '0.0067876', apy: '0.46%' },
  { asset: 'ETH', available: '0.0079765', apy: '2.61%' },
  { asset: 'WBTC', available: '0.0003508', apy: '1.04%' },
  { asset: 'wETH', available: '0.0076349', apy: '1.63%' },
  { asset: 'USDC', available: '19.75', apy: '5.35%' },
  { asset: 'USDT', available: '19.73', apy: '5.87%' },
  { asset: 'DAI', available: '19.75', apy: '5.39%' },
  { asset: 'rETH', available: '0.0071659', apy: '0.46%' },
  { asset: 'LINK', available: '1.96', apy: '0.19%' },
];

export const AssetsToBorrow = () => {
  const [assets] = useState<Asset[]>(dummyAssets);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Assets to borrow</h2>
        <button className="text-gray-400 text-sm">Hide</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left">Asset</th>
            <th className="text-right">Available</th>
            <th className="text-right">APY, variable</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index} className="text-white">
              <td className="py-2">{asset.asset}</td>
              <td className="text-right">{asset.available}</td>
              <td className="text-right">{asset.apy}</td>
              <td className="text-right">
                <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">Borrow</button>
                <button className="bg-gray-700 text-white px-3 py-1 rounded">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};