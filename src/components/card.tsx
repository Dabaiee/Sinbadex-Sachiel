import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  DollarSign,
} from "lucide-react"
import { Badge } from './ui/badge';
const MyCard = () => {
  return (
    <Card className="bg-dark-blue max-w-4xl w-3/4 rounded-lg shadow-md overflow-hidden">
      <CardHeader className="bg-transparent px-6 pt-4 pb-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-2xl font-bold">USDY</h2>
            <p className="text-gray-400 text-sm">US Dollar Yield</p>
          </div>
          <DollarSign className="text-white" />
        </div>
      </CardHeader>
      <CardContent className="px-6 py-4">
        <div className="text-white text-5xl font-bold">5.20% APY</div>
        <div className="flex items-center justify-between text-gray-400 text-sm mt-2">
          <Badge>$249.56M TVL</Badge>
          {/* <span>$249.56M TVL</span> */}
          <span>...</span> {/* Icon or more details can be placed here */}
        </div>
      </CardContent>
    </Card>

    
  );
};

export default MyCard;
