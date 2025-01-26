'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'; // Correct imports for framer-motion

const SplitLayout = () => {
  // Create refs for the section and its elements
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Content with Background Image */}
      <div
        className="w-full md:w-1/2 bg-cover bg-no-repeat px-2 md:px-8 py-12 flex flex-col justify-center relative"
        style={{
          backgroundImage: "url('/small.jpg')", // Replace with your actual image path
          backgroundPosition: "center right", // Slightly shifted to the right
        }}
      >
        {/* Text on top of the background image */}
        <div className="relative inset-0 flex flex-col justify-center items-start z-10 ml-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }} // Start below and invisible
            animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }} // Trigger animations when in view
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="font-bold text-4xl md:text-7xl mb-4"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col text-teal-400"
            >
              Comprehensive Partner for all your
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block text-yellow-400"
            >
              Individual and Business Needs in India and UAE
            </motion.span>
          </motion.h1>
        </div>
      </div>

      {/* Right Image with Animation */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0 ml-12">
        <motion.div
          initial={{ x: '120%', opacity: 0 }}
          animate={{ x: isInView ? 0 : '120%', opacity: isInView ? 1 : 0 }} // Animate based on visibility
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full h-full relative"
          style={{ transform: 'translateX(30%)' }} // Apply a higher translateX for more shift
        >
          <Image
            src="/logo2.jpg"
            alt="logo"
            className="object-contain w-5/6 h-5/6 md:w-2/3 md:h-2/3 border-2 border-black shadow-xl shadow-black"
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
