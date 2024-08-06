import React from 'react';

interface Supply {
  asset: string;
  balance: string;
  apy: string;
  collateral: boolean;
}

interface YourSuppliesProps {
  supplies: Supply[];
  totalBalance: string;
  totalApy: string;
}

export const YourSupplies: React.FC<YourSuppliesProps> = ({ supplies, totalBalance, totalApy }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-white text-lg font-semibold mb-4">Your supplies</h3>
      <div className="flex justify-between text-gray-400 mb-2">
        <span>Balance ${totalBalance}</span>
        <span>APY {totalApy}</span>
      </div>
      {supplies.map((supply, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-t border-gray-700">
          <div className="flex items-center">
            <img src={`/${supply.asset.toLowerCase()}-logo.svg`} alt={supply.asset} className="w-6 h-6 mr-2" />
            <span className="text-white">{supply.asset}</span>
          </div>
          <div className="text-white">{supply.balance}</div>
          <div className="text-white">{supply.apy}</div>
          <div className={`w-4 h-4 rounded-full ${supply.collateral ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Switch</button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded">Withdraw</button>
        </div>
      ))}
    </div>
  );
};
