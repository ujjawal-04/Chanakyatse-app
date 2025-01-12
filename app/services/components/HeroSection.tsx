'use client';

import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative bg-[#24388F] text-white">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Hero Content */}
      <div className="relative pt-32 pb-14">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">SERVICES</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span 
              className="hover:text-white/80 cursor-pointer transition-colors"
              onClick={() => router.push('/')}
            >
              CHANAKYATSE
            </span>
            <ChevronRight size={16} />
            <span>SERVICES</span>
          </div>
        </div>
      </div>
    </div>
  );
}

