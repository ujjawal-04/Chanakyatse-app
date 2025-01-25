'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const SplitLayout = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation once

  return (
    <div ref={sectionRef} className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Image with "Printed" Animation */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        <motion.div
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
        >
          {/* Mask to create the printed effect */}
          <motion.div
            className="absolute w-full h-full bg-white left-0 z-20"
            initial={{ width: "100%" }}
            animate={isInView ? { width: 0 } : { width: "100%" }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          />
          {/* Image */}
          <Image
            src="/Adv-Binschet.webp"
            alt="Adv Binschet"
            className="mt-10 object-contain w-3/4 h-3/4 relative z-10"
            width={2000}
            height={2000}
            priority
          />
        </motion.div>
      </div>

      {/* Right Content with Background Image */}
      <div
        className="w-full md:w-1/2 bg-white px-2 md:px-2 py-12 flex flex-col justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/small.jpg")',
          backgroundPosition: 'center left',
        }}
      >
        {/* Text on top of the background image */}
        <div className="relative inset-0 flex flex-col justify-center items-start z-10" style={{ left: '-10%' }}>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="font-bold text-4xl md:text-4xl mb-4"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-serif text-2xl flex flex-col text-teal-400"
            >
              Chanakyatse Consultancy
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-light text-3xl flex flex-col text-sky-400"
            >
              guides you through corporate intricacies,<br /> offering comprehensive services<br /> from inception to expansion.
            </motion.span>
          </motion.h1>

          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
            className="font-serif text-xl md:text-xl text-gray-600 mb-8 block"
            style={{ position: 'relative', left: '5%' }}
          >
            Our expertise spans incorporation guidance, M&A facilitation, strategic restructuring, and comprehensive legal support including dealing with intellectual property rights disputes and registration. Empower your business with our seasoned team, ensuring sustained growth and success in today&apos;s dynamic marketplace.
          </motion.span>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
          >
            <Link
              href="/services"
              className="bg-teal-800 text-white py-3 px-16 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-blue-400 hover:text-teal-400 transition-all duration-300 ease-in-out"
              style={{ position: 'relative', left: '70%' }}
            >
              View All
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
