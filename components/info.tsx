'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import mamasolo from "@/public/mamsolo.jpg"
const SplitLayout = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation once

  return (
    <div ref={sectionRef} className=" flex flex-col md:flex-row bg-white">
      {/* Left Image with "Printed" Animation */}
      <div className="w-full flex justify-center items-center md:w-1/2 px-4 sm:px-0">
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
            src={mamasolo}
            alt="Adv Binschet"
            className="mt-10 object-contain w-3/4 h-auto sm:h-3/4 md:w-full md:h-auto relative z-10"
            width={2000}
            height={2000}
            priority
          />
        </motion.div>
      </div>

      {/* Right Content with Background Image */}
      <div
        className="w-full flex flex-col md:w-1/2 bg-white px-4 sm:px-8 py-12 justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/small.jpg")',
          backgroundPosition: 'center left',
        }}
      >
        {/* Text on top of the background image */}
        <div className="relative inset-0 flex flex-col justify-center items-start z-10 md:left-0 ml-2 sm:ml-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="font-bold text-2xl sm:text-4xl mb-4"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-serif text-xl sm:text-3xl flex flex-col text-blue-800"
            >
            CHANAKYATSE CONSULTANCY   
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-light text-lg sm:text-2xl flex flex-col text-blue-600"
            >
    We are your trusted partner for navigating complex legal landscapes, offering expert solutions tailored to both personal and business needs.
            </motion.span>
          </motion.h1>

          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
            className="font-serif text-base sm:text-xl text-gray-600 mb-8 block"
            style={{ position: 'relative', left: '2%' }}
          >
           Our expertise lies in drafting, reviewing, and vetting legal documents and agreements with precision, while offering dedicated legal assistance through retainerships, ensuring businesses receive consistent, round-the-clock legal support. We assist with business setup, compliance, and corporate structuring, while also addressing personal and civil legal matters. Our services extend to managing disputes through litigation, mediation, and arbitration, along with providing expert legal opinions and reliable 24/7 legal advice. Empower your business with our seasoned team, ensuring sustained growth and success in today’s dynamic marketplace.
          </motion.span>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
          >
            <Link
              href="/services"
              className="bg-blue-800 text-white py-2 sm:py-3 px-10 sm:px-16 rounded-full inline-flex items-center justify-center text-sm sm:text-lg font-semibold hover:bg-blue-400 hover:text-teal-400 transition-all duration-300 ease-in-out"
              style={{ position: 'relative', left: '50%' }}
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