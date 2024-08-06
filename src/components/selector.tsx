'use client';

import * as React from "react"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useProtocol } from '@/contexts/ProtocolContext'

const protocols = [
  { value: "eth", label: "Ethereum", icon: "/icons/ethereum.png" },
  { value: "base", label: "Base", icon: "/icons/ethereum.png" },
  { value: "arb", label: "Arbitrum", icon: "/icons/ethereum.png" },
  { value: "avax", label: "Avalanche", icon: "/icons/ethereum.png" },
  { value: "op", label: "Optimism", icon: "/icons/ethereum.png" },
  { value: "poly", label: "Polygon", icon: "/icons/ethereum.png" },
  { value: "bnb", label: "BNB Chain", icon: "/icons/ethereum.png" },
];

export function ProtocolSelector() {
  const { selectedProtocol, setSelectedProtocol } = useProtocol();

  const selectedProtocolData = protocols.find(p => p.value === selectedProtocol);

  return (
    <div>
      <div className="">
        <Select value={selectedProtocol} onValueChange={setSelectedProtocol}>
          <SelectTrigger className="ps-0 me-4 mb-4 text-3xl font-bold border-none">
            <SelectValue>
              {selectedProtocolData && (
                <div className="flex items-center">
                  <Image 
                    src={selectedProtocolData.icon} 
                    alt={selectedProtocolData.label}
                    width={32} 
                    height={32} 
                    className="mr-2"
                  />
                  {selectedProtocolData.label} Market
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Protocol</SelectLabel>
              {protocols.map((protocol) => (
                <SelectItem key={protocol.value} value={protocol.value}>
                  <div className="flex items-center">
                    <Image 
                      src={protocol.icon} 
                      alt={protocol.label} 
                      width={24} 
                      height={24} 
                      className="mr-2"
                    />
                    {protocol.label}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}