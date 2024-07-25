'use client'

import React from 'react';
import { useProtocol } from '@/contexts/ProtocolContext';
import { ProtocolSelector } from '@/components/selector';

export const MarketOverview: React.FC = () => {
  const { selectedProtocol, protocolData } = useProtocol();
  const { netWorth, apy } = protocolData[selectedProtocol];

  return (
    <div className="flex flex-col justify-between items-start p-4 rounded-t-lg">
      <ProtocolSelector />
      <div className="flex space-x-4">
        <div>
          <p className="text-gray-400 text-sm">Net worth</p>
          <p className="text-white font-bold">{netWorth}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Net APY</p>
          <p className="text-white font-bold">{apy}</p>
        </div>
      </div>
    </div>
  );
};