'use client';

import { useAccount, useBalance, useChainId } from 'wagmi';
import { useCallback } from 'react';
import { NetworkLogo } from './NetworkLogo';
import { Skeleton } from './ui/Skeleton';

export default function WalletAssets() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balance, isLoading } = useBalance({
    address: address,
    // 移除不支持的配置选项
  });

  const getNetworkName = useCallback((chainId: number) => {
    switch (chainId) {
      case 1:
        return 'Ethereum Mainnet';
      case 5:
        return 'Goerli Testnet';
      case 11155111:
        return 'Sepolia Testnet';
      case 137:
        return 'Polygon Mainnet';
      case 80001:
        return 'Mumbai Testnet';
      default:
        return 'Unknown Network';
    }
  }, []);

  if (!isConnected) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Please connect your wallet first</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Wallet Assets</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600">Connected Address</p>
          <p className="font-mono">{address}</p>
        </div>
        <div className="mb-4 flex items-center">
          <NetworkLogo 
            network={getNetworkName(chainId).split(' ')[0].toLowerCase()}
            size={24}
            className="mr-2"
          />
          <p>{getNetworkName(chainId)}</p>
        </div>
        <div className="flex items-center gap-2">
          {isLoading ? (
            <>
              <Skeleton className="h-6 w-6" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
            </>
          ) : (
            <>
              <NetworkLogo 
                token={balance?.symbol?.toLowerCase()}
                size={24}
                className="mr-2"
              />
              <div>
                <p className="text-sm text-gray-600">Native Token Balance</p>
                <p>{balance?.formatted} {balance?.symbol}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
