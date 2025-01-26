'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SplitLayout = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const backgroundVariants = {
    initial: { backgroundPosition: '200% left' },
    animate: {
      backgroundPosition: '0% center',
      transition: { duration: 3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={backgroundVariants}
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '150vh',
      }}
    >
      {/* Left Content (Text) */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="w-full md:w-1/2 bg-transparent px-4 md:pl-16 md:pr-2 flex flex-col justify-center relative order-2 md:order-1 mt-16 md:mt-32 md:left-2/4"
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight mt-48"
        >
          Join Us
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-2xl font-medium text-yellow-200 mb-4 max-w-xl"
        >
          At Chanakyatse Consultancy, we believe that our success is driven by our people. Join a diverse and passionate team of experts who are shaping the future of business consulting.
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-white mb-4 text-2xl leading-relaxed max-w-xl"
        >
          Joining our team means becoming part of a company that is shaping the future of business consulting. As part of our team, you will have the opportunity to contribute to projects that make a real difference, not only for our clients but for the broader business landscape.
        </motion.p>

        <motion.div variants={textVariants} className="w-full sm:w-auto">
          <Link
            href="/services"
            className="group bg-[#24388F] text-white py-3 px-8 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-[#1a2d6d] transition-all duration-300 ease-in-out w-full sm:w-auto mb-16"
          >
            <span>Join Us</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplitLayout;
