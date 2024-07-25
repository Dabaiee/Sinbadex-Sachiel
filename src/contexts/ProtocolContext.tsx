'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProtocolContextType {
  selectedProtocol: string;
  setSelectedProtocol: (protocol: string) => void;
  protocolData: {
    [key: string]: {
      netWorth: string;
      apy: string;
    };
  };
}

const ProtocolContext = createContext<ProtocolContextType | undefined>(undefined);

export const ProtocolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProtocol, setSelectedProtocol] = useState('eth');
  const protocolData = {
    eth: { netWorth: '$34.98', apy: '1.90%' },
    base: { netWorth: '$25.50', apy: '2.10%' },
    arb: { netWorth: '$25.50', apy: '2.10%' },
    avax: { netWorth: '$25.50', apy: '2.10%' },
    op: { netWorth: '$25.50', apy: '2.10%' },
    poly: { netWorth: '$25.50', apy: '2.10%' },
    bnb: { netWorth: '$25.50', apy: '2.10%' },
    // Add data for other protocols
  };

  return (
    <ProtocolContext.Provider value={{ selectedProtocol, setSelectedProtocol, protocolData }}>
      {children}
    </ProtocolContext.Provider>
  );
};

export const useProtocol = () => {
  const context = useContext(ProtocolContext);
  if (context === undefined) {
    throw new Error('useProtocol must be used within a ProtocolProvider');
  }
  return context;
};