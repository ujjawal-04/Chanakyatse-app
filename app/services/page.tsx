import { Suspense } from 'react';
import ServicesGrid from './components/ServicesGrid';
import HeroSection from './components/HeroSection';
import BottomCTA from './components/BottomCTA'
import { services } from './data';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#24388F]/[0.02] rounded-full blur-3xl" />
      </div>

      <HeroSection />

      <div className="relative">
        <div className="container mx-auto px-6 py-20">
          {/* Section Title with decorative elements */}
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl font-bold text-[#24388F] mb-4 relative z-10">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
              Comprehensive legal and business solutions tailored to meet your specific needs
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#24388F]/20 rounded-full" />
          </div>
          
          <Suspense fallback={<div>Loading services...</div>}>
            <ServicesGrid services={services} />
          </Suspense>
        </div>

        <BottomCTA />
      </div>
    </div>
  );
}

