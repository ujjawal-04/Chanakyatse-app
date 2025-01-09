import React from 'react';
import Image from 'next/image';

const TextWithImages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-4xl text-center relative">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight text-black">
          We&apos;re making accessibility
          <div className="inline-block relative">
            <Image 
              src="/api/placeholder/60/60"
              alt="Decorative circular image"
              className="w-12 h-12 rounded-full object-cover absolute -top-2 -right-16"
            />
          </div>
          {' '}a priority. Join us as
          <div className="inline-block relative">
            <Image 
              src="/api/placeholder/60/60"
              alt="Decorative circular image"
              className="w-12 h-12 rounded-full object-cover absolute -top-2 -right-16"
            />
          </div>
          {' '}we learn, unlearn and relearn, take everyone
          <div className="inline-block relative">
            <Image
              src="/api/placeholder/60/60"
              alt="Decorative circular image"
              className="w-12 h-12 rounded-full object-cover absolute top
-1/2 -left-16"
            />
          </div>
          {' '}into consideration
          <div className="inline-block relative">
            <Image
              src="/api/placeholder/60/60"
              alt="Decorative circular image"
              className="w-12 h-12 rounded-full object-cover absolute -top-2 -right-16"
            />
          </div>
          , celebrate diversity, and foster inclusivity.
        </h1>
      </div>
    </div>
  );
};

export default TextWithImages;