'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WorkWithUsLayout = () => {
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
      {/* Left Column - Images */}
      <div className="w-full md:w-1/2 bg-white flex items-center relative ml-20">
        {/* Main image */}
      <div 
        className="relative transition-all duration-700 ease-in-out transform"
        style={{
          transform: `translateY(${imageShiftMain}px)`, // Main image moves up/down
          height: '85vh', // Ensure the image fits the screen height
          width: '80vw',  // Ensure the image takes up the full screen width
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

        {/* Small overlapping image */}
        <div 
          className="absolute right-0 top-2/4 z-10 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${imageShiftSmall}px) translateX(40%)`, // Small image moves up/down and slightly right
            objectFit: 'contain', // Ensures the small image is fully visible without cutting horizontally
          }}
        >
          <Image 
            src="/cmp.jpg"
            alt="Accessibility features"
            className="w-72 h-96 object-cover shadow-xl"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-1/2 bg-white pl-40 pr-12 py-12 flex flex-col justify-center">
        <p className="text-base font-medium mb-6 uppercase tracking-wider">
          WORK WITH US
        </p>
        
        <h1 className="text-4xl font-serif mb-6 leading-tight text-black">
          Want to work towards building inclusive communities?
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Become an integral part of our hardworking team, make new friends, make 
          a real difference and learn skills all while helping promote equal access to 
          opportunities!
        </p>
        
        <a 
          href="#apply"
          className="text-red-500 hover:text-red-600 mb-12 inline-block"
        >
          Click here to apply.
        </a>

        <div className="flex gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Youth-oriented
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Established Team
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUsLayout;
