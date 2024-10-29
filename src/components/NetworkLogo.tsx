'use client';

import Image from 'next/image';
import { FC } from 'react';

interface NetworkLogoProps {
  network?: string;
  token?: string;
  size?: number;
  className?: string;
}

const DEFAULT_LOGO = '/icons/ethereum.png';

export const NetworkLogo: FC<NetworkLogoProps> = ({ 
  network,
  token,
  size = 24,
  className = ''
}) => {
  return (
    <Image
      src={DEFAULT_LOGO}
      alt={`${token || network || 'default'} logo`}
      width={size}
      height={size}
      className={className}
    />
  );
};
