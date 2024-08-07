// components/AssetsToSupply.tsx
'use client'
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Image from "next/image"
import { Button } from './ui/button';
interface Asset {
  asset: string;
  walletBalance: string;
  apy: string;
  canBeCollateral: boolean;
  icon: string;
}

const dummyAssets: Asset[] = [
  { asset: 'ETH', walletBalance: '0.0392959', apy: '1.90%', canBeCollateral: true , icon: "/icons/ethereum.png"},
  { asset: 'BTC', walletBalance: '0', apy: '2.50%', canBeCollateral: true , icon: "/icons/ethereum.png"},
  { asset: 'LTC', walletBalance: '0', apy: '1.75%', canBeCollateral: false , icon: "/icons/ethereum.png"},
];

export const AssetsToSupply = () => {
  const [assets] = useState<Asset[]>(dummyAssets);
  const [showZeroBalance, setShowZeroBalance] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Assets to supply</h2>
      </div>
      {/* currently not using */}
      {/* <div className="mb-4">
        <label className="flex items-center text-gray-400">
          <input
            type="checkbox"
            checked={showZeroBalance}
            onChange={() => setShowZeroBalance(!showZeroBalance)}
            className="mr-2"
          />
          Show assets with 0 balance
        </label>
      </div> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Assets</TableHead>
            <TableHead className="text-right">Wallet balance</TableHead>
            <TableHead className="text-right">APY</TableHead>
            <TableHead className="text-center">Can be collateral</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center font-medium">
                <Image 
                      src={item.icon}
                      alt={item.asset}
                      width={32} 
                      height={32} 
                      className="mr-2"
                    />
                {item.asset}
              </TableCell>
              <TableCell className="text-right">{item.walletBalance}</TableCell>
              <TableCell className="text-right">{item.apy}</TableCell>
              <TableCell className="text-center">{item.canBeCollateral ? '✓' : ''}</TableCell>
              <TableCell>
                <Button className="mr-2" variant="secondary">Supply</Button>
                <Button className="" variant="outline">...</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
  );
};