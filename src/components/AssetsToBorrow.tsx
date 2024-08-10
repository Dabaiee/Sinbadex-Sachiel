// components/AssetsToBorrow.tsx
'use client'
import { Table } from './ui/table';
import { useState } from 'react';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Image from "next/image"
import { Button } from './ui/button';

interface Asset {
  asset: string;
  available: string;
  apy: string;
  icon: string;
}

const dummyAssets: Asset[] = [
  { asset: 'GHO', available: '19.95', apy: '5.08-7.25%' , icon: "/icons/ethereum.png"},
  { asset: 'wstETH', available: '0.0067876', apy: '0.46%' , icon: "/icons/ethereum.png"},
  { asset: 'ETH', available: '0.0079765', apy: '2.61%' , icon: "/icons/ethereum.png"},
  { asset: 'WBTC', available: '0.0003508', apy: '1.04%' , icon: "/icons/ethereum.png"},
  { asset: 'wETH', available: '0.0076349', apy: '1.63%' , icon: "/icons/ethereum.png"},
  { asset: 'USDC', available: '19.75', apy: '5.35%' , icon: "/icons/ethereum.png"},
  { asset: 'USDT', available: '19.73', apy: '5.87%' , icon: "/icons/ethereum.png"},
  { asset: 'DAI', available: '19.75', apy: '5.39%' , icon: "/icons/ethereum.png"},
  { asset: 'rETH', available: '0.0071659', apy: '0.46%' , icon: "/icons/ethereum.png"},
  { asset: 'LINK', available: '1.96', apy: '0.19%' , icon: "/icons/ethereum.png"},
];

export const AssetsToBorrow = () => {
  const [assets] = useState<Asset[]>(dummyAssets);

  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Assets to borrow</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead className="flex-1 text-right">Available</TableHead>
            <TableHead className="flex-1 text-right">APY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyAssets.map((item, index) => (
            <TableRow className='' key={index}>
              <TableCell className="w-[100px] flex items-center font-medium">
                <Image 
                      src={item.icon}
                      alt={item.asset}
                      width={32} 
                      height={32} 
                      className="mr-2"
                    />
                {item.asset}
              </TableCell>
              <TableCell className="text-right">
                <div>{item.available}</div>
              </TableCell>
              <TableCell className="text-right">
                {item.apy}
              </TableCell>
              <TableCell className="text-right">
                <Button className="mr-2" variant="secondary">Borrow</Button>
                <Button className="" variant="outline">Detail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};