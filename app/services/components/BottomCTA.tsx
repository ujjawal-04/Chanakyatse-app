'use client';

import { useRouter } from 'next/navigation';

export default function BottomCTA() {
  const router = useRouter();

  return (
    <div className="bg-[#24388F]/5 py-16 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-[#24388F] mb-4">
          Need Professional Legal Assistance?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team of expert lawyers and consultants are ready to help you navigate through your legal and business challenges.
        </p>
        <button 
          onClick={() => router.push('/contact')}
          className="bg-[#24388F] text-white px-8 py-3 rounded-lg hover:bg-[#24388F]/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

