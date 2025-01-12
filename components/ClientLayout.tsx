'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';


// Dynamically import LocomotiveScrollProvider with no SSR
const LocomotiveScrollProvider = dynamic(
  () => import('@/components/LocomotiveScrollProvider'),
  { 
    ssr: false,
  }
);

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <main className="relative">
      <LocomotiveScrollProvider>
        {children}
      </LocomotiveScrollProvider>
    </main>
  );
}