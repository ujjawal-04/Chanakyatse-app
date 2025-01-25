'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importing motion from framer-motion

const SplitLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Content with Background Image */}
      <div 
        className="w-full md:w-1/2 bg-cover bg-no-repeat px-2 md:px-2 py-12 flex flex-col justify-center relative"
        style={{
          backgroundImage: "url('/small.jpg')", // Replace with your actual image path
          backgroundPosition: "center right", // Slightly shifted to the right
        }}
      >
        {/* Text on top of the background image */}
        <div className="relative inset-0 flex flex-col justify-center items-start z-10" style={{ left: '35%' }}> {/* Shifted left */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Delay the first part
            className="font-bold text-4xl md:text-7xl mb-4"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col text-yellow-400"
            >
              YOUR SUCCESS
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block text-yellow-400"
            >
              OUR PROMISE
            </motion.span>
          </motion.h1>

          {/* Text for "Protecting Your" with independent left positioning */}
          <motion.span
            initial={{ y: 50, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
            className="font-serif text-xl md:text-6xl text-teal-500 mb-8 block"
            style={{ position: 'relative', left: '25%' }}
          >
            Protecting Your Business & Brand
          </motion.span>

          {/* "Get Expert Help Today" button with independent left positioning */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{ duration: 1, ease: 'easeOut', delay: 2.3 }}
          >
            <Link
              href="/about"
              className="bg-teal-800 text-yellow-400 py-3 px-16 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out"
              style={{ position: 'relative', left: '70%' }} 
            >
              Get Expert Help Today
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right Image with Animation */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        <motion.div
          initial={{ x: '150%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full h-full relative"
        >
          <Image
            src="/files.webp"
            alt="Trademark Attorney"
            className="mt-10 object-cover w-full h-full" 
            width={2000}  
            height={2000} 
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SplitLayout;
