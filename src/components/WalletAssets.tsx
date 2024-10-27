'use client';

import { useAccount, useBalance, useChainId } from 'wagmi';
import { useState } from 'react';

export default function WalletAssets() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balance, isLoading } = useBalance({
    address: address,
  });

  const getNetworkName = (chainId: number) => {
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
  };

  if (!isConnected) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Please connect your wallet first</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Loading wallet assets...</p>
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
        <div className="mb-4">
          <p className="text-sm text-gray-600">Network</p>
          <p>{getNetworkName(chainId)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Native Token Balance</p>
          <p>{balance?.formatted} {balance?.symbol}</p>
        </div>
      </div>
    </div>
  );
}
