// components/YourSupplies.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Switch } from "@/components/ui/switch"
import { Button } from './ui/button';
import axios from 'axios';
import Image from "next/image"

interface Supply {
  asset: string;
  balance: string;
  apy: string;
  collateral: boolean;
  icon: string;
}

interface Prices {
  [key: string]: number;
}

const dummySupplies: Supply[] = [
  { asset: 'ETH', balance: '0.0100087', apy: '1.90%', collateral: true , icon: "/icons/ethereum.png"},
  { asset: 'BTC', balance: '0.00050087', apy: '2.50%', collateral: true , icon: "/icons/ethereum.png"},
  { asset: 'LTC', balance: '0.2000087', apy: '1.75%', collateral: false , icon: "/icons/ethereum.png"},
];

export const YourSupplies = () => {
  const [supplies, setSupplies] = useState<Supply[]>(dummySupplies);
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const [totalValue, setTotalValue] = useState(0);
  const [collateralValue, setCollateralValue] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'ethereum,bitcoin,litecoin',  // Add other assets here
            vs_currencies: 'usd',
          },
        });
        const prices: Prices = {
          ETH: response.data.ethereum.usd,
          BTC: response.data.bitcoin.usd,
          LTC: response.data.litecoin.usd,
        };
        setPrices(prices);
        setLoading(false);

        // Calculate total values
        calculateValues(supplies, prices);

      } catch (error) {
        console.error('Error fetching prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const calculateValues = (supplies: Supply[], prices: Prices) => {
    let total = 0;
    let collateral = 0;
    supplies.forEach(item => {
      const assetValue = parseFloat(item.balance) * (prices[item.asset] || 0);
      total += assetValue;
      if (item.collateral) {
        collateral += assetValue;
      }
    });
    setTotalValue(total);
    setCollateralValue(collateral);
  };

  const handleToggleCollateral = (index: number, checked: boolean) => {
    const newSupplies = [...supplies];
    newSupplies[index].collateral = checked;
    setSupplies(newSupplies);
    calculateValues(newSupplies, prices);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Your supplies</h2>
      </div>
      <div className="mb-4">
        <Badge className="mr-4 text-md" variant="outline">
          <span className="text-gray-500 mr-1">Total Balance</span>
          <span>${totalValue.toFixed(2)}</span>
        </Badge>
        <Badge className="mr-4 text-md" variant="outline">
          <span className="text-gray-500 mr-1">APY</span>
          1.90%
        </Badge>
        <Badge className="mr-4 text-md" variant="outline">
          <span className="text-gray-500 mr-1">Collateral Value</span>
          <span>${collateralValue.toFixed(2)}</span>
        </Badge>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead className="text-right">APY</TableHead>
            <TableHead className="text-right">Collateral</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummySupplies.map((item, index) => (
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
              <TableCell>
                <div>{item.balance}</div>
                <div className='text-gray-500'>${prices[item.asset] ? (parseFloat(item.balance) * prices[item.asset]).toFixed(2) : 'Loading...'}</div>
                
              </TableCell>
              <TableCell className="text-right">{item.apy}</TableCell>
              <TableCell className="text-right">
                <Switch
                    checked={item.collateral}
                    onCheckedChange={(checked) => handleToggleCollateral(index, checked)}
                  />
              </TableCell>
              <TableCell>
                <Button className="mr-2" variant="secondary">Switch</Button>
                <Button className="" variant="outline">Withdraw</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
};