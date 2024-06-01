"use client";

import { useEffect } from 'react';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return <>{children}</>;
}
