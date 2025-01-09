'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SplitLayout = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the vertical shift for images based on scroll
  const imageShiftMain = scrollY * 0.05; // Slight vertical shift for the main image (adjust the factor)
  const imageShiftSmall = scrollY * 0.05; // Slight vertical shift for the small image (adjust the factor)

  return (
    <div className="h-[100vh] flex flex-col md:flex-row bg-white">
      {/* Left Column - Content */}
      <div className="w-full md:w-1/2 bg-white pl-16 pr-10 py-12 flex flex-col justify-center">
        <p className="text-base font-medium mb-6">
          WE WANT CHANGE, TODAY
        </p>
        
        <h1 className="text-4xl font-serif mb-6 leading-tight text-black">
          Join us in making the 
          world radically inclusive.
        </h1>
        
        <p className="text-gray-600 mb-16 text-lg leading-relaxed max-w-xl">
          We&apos;re a youth initiative passionate about making a difference in the world 
          by building a more accessible and inclusive society through informative 
          posts, awareness campaigns, and sparking interesting conversations!
        </p>
        
        <div className="flex gap-24">
          <div>
            <h3 className="text-6xl font-serif mb-2 text-black">15%</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              of the global<br />
              population has<br />
              some form of<br />
              a disability
            </p>
          </div>
          
          <div>
            <h3 className="text-6xl font-serif mb-2 text-black">98%</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              of the world&apos;s<br />
              top websites<br />
              remain<br />
              inaccessible
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="w-full md:w-1/2 bg-white flex items-center relative">
        {/* Small overlapping image */}
        <div 
          className="absolute left-0 top-1/3 z-10 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${imageShiftSmall}px)  translateX(-32%)`, // Move small image up/down
            objectFit: 'cover', // Ensures the small image is fully visible without cutting horizontally
          }}
        >
          <Image
            src="/cmp.jpg"
            alt="Accessibility features"
            className="w-72 h-96 shadow-xl"
            width={1000}
            height={1000}
          />
        </div>

        {/* Main image */}
        <div 
          className="relative transition-all duration-700 ease-in-out transform mr-20"
          style={{
            transform: `translateY(${imageShiftMain}px)`, // Move main image up/down
            height: '85vh', // Make sure the image fits the screen height
            width: '80vw',  // Make sure the image takes up the full screen width
          }}
        >
          <Image
            src="/tg.jpg"
            alt="Community inclusion"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
