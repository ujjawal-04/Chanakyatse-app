'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SplitLayout = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const imageShiftMain = scrollY * 0.05
  const imageShiftSmall = scrollY * 0.05

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
     
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="w-full md:w-1/2 bg-white px-6 md:pl-16 md:pr-10 py-12 flex flex-col justify-center relative order-2 md:order-1"
      >
        <motion.h1 
          variants={textVariants}
          className="text-3xl md:text-4xl font-serif text-black mb-4 leading-tight"
        >
          Your success is our commitment
        </motion.h1>
        
        <motion.p 
          variants={textVariants}
          className="text-lg font-medium text-gray-600 mb-8 max-w-xl"
        >
          Chanakyatse Consultancy (India and U.A.E) guides you through corporate intricacies, offering comprehensive services from inception to expansion.
        </motion.p>

        <motion.p 
          variants={textVariants}
          className="text-gray-600 mb-12 text-lg leading-relaxed max-w-xl"
        >
          Our expertise spans incorporation guidance, M&A facilitation, strategic restructuring, and comprehensive legal support including dealing with intellectual property rights disputes and registration. Empower your business with our seasoned team, ensuring sustained growth and success in today&apos;s dynamic marketplace.
        </motion.p>
        
        <motion.div
          variants={textVariants}
          className="w-full sm:w-auto"
        >
          <Link 
            href="/services"
            className="group bg-[#24388F] text-white py-3 px-8 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-[#1a2d6d] transition-all duration-300 ease-in-out w-full sm:w-auto"
          >
            <span>View All</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      <div className="w-full md:w-1/2 bg-white flex flex-col md:flex-row items-center justify-center relative order-1 md:order-2 ml-10">
       
        <div 
          className="absolute left-0 top-1/4 md:top-1/3 z-10 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${imageShiftSmall}px) translateX(-20%)`
          }}
        >
          <Image
            src="/logo2.jpg"
            alt="logo"
            className="w-36 h-44 md:w-64 md:h-96 shadow-xl rounded-lg transition-all duration-700 ease-in-out"
            width={1000}
            height={1000}
          />
        </div>

        <div 
          className="relative transition-all duration-700 ease-in-out transform"
          style={{
            transform: `translateY(${imageShiftMain}px)`, 
            height: '80vh',
            width: '100%',
          }}
        >
          <Image
            src="/Adv-Binschet.webp"
            alt="founder"
            className="w-full h-full object-contain rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default SplitLayout
