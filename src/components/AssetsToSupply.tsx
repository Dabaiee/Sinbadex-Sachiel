// components/AssetsToSupply.tsx
'use client'
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Image from "next/image"
import { Button } from './ui/button';
import { useAccount, useBalance, useToken } from 'wagmi';

interface Asset {
  asset: string;
  walletBalance: string;
  apy: string;
  canBeCollateral: boolean;
  icon: string;
}

// 定义支持的代币列表
const SUPPORTED_TOKENS = [
  { 
    symbol: 'ETH', 
    icon: "/icons/ethereum.png",
    address: '', // ETH 是原生代币，不需要地址
    apy: '1.90%',
    canBeCollateral: true 
  },
  // 可以添加更多支持的代币
];

export const AssetsToSupply = () => {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({
    address: address,
  });

  // 格式化余额，保留4位小数
  const formatBalance = (balance: string): string => {
    const num = parseFloat(balance);
    return num.toFixed(4);
  };

  // 将余额数据转换为资产列表格式
  const assets: Asset[] = SUPPORTED_TOKENS.map(token => {
    if (token.symbol === 'ETH') {
      return {
        asset: 'ETH',
        walletBalance: ethBalance ? formatBalance(ethBalance.formatted) : '0.0000',
        apy: token.apy,
        canBeCollateral: token.canBeCollateral,
        icon: token.icon
      };
    }
    return {
      asset: token.symbol,
      walletBalance: '0.0000',
      apy: token.apy,
      canBeCollateral: token.canBeCollateral,
      icon: token.icon
    };
  });

  const [showZeroBalance, setShowZeroBalance] = useState(false);

  if (!isConnected) {
    return (
      <div className="bg-zinc-900 rounded-lg p-4">
        <p className="text-gray-400">Please connect your wallet to view assets</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Assets to supply</h2>
      </div>
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
          {assets
            .filter(item => showZeroBalance || parseFloat(item.walletBalance) > 0)
            .map((item, index) => (
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
                  <Button 
                    className="mr-2" 
                    variant="secondary"
                    disabled={parseFloat(item.walletBalance) <= 0}
                  >
                    Supply
                  </Button>
                  <Button className="" variant="outline">...</Button>
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
