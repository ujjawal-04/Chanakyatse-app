"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const SplitLayout = () => {
  return (
    <>
      {/* Mobile Layout (hidden on md and above) */}
      <div className="min-h-screen flex flex-col bg-white md:hidden">
        {/* Hero Image Section */}
        <div className="w-full h-72 relative">
          <Image
            src="/hero.jpg"
            alt="Trademark Attorney"
            className="object-cover w-full h-full"
            width={2000}
            height={2000}
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-6 py-8 bg-gradient-to-b from-blue-50 to-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bold text-3xl text-blue-800 mb-3">
              YOUR SUCCESS
              <span className="block mt-2">OUR PROMISE</span>
            </h1>

            <p className="font-serif text-2xl  text-black mt-6 mb-8">
              Protecting Your Business & Brand
            </p>

            <Link
              href="/about"
              className="bg-blue-800 text-white py-4 px-8 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
              Get Expert Help Today
            </Link>
          </motion.div>

          <div className="mt-12 relative">
            <Image
              src="/small.jpg"
              alt="Background Design"
              className="w-full h-48 object-cover rounded-lg opacity-40"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout (hidden below md) */}
      <div className="hidden md:flex min-h-screen flex-row bg-white">
        {/* Left Side - Hero Image */}
        <motion.div 
          initial={{ x: "-150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/2 relative"
        >
          <Image
            src="/hero.jpg"
            alt="Trademark Attorney"
            className="object-cover w-full h-full"
            width={2000}
            height={2000}
            priority
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-1/2 bg-cover bg-no-repeat px-12 py-12 flex flex-col justify-center relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/small.jpg"
              alt="Background Design"
              className="object-cover w-full h-full"
              width={2000}
              height={2000}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start max-w-xl mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="font-bold text-6xl mb-4 text-left"
            >
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col text-blue-800"
              >
                YOUR SUCCESS
              </motion.span>
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-blue-800"
              >
                OUR PROMISE
              </motion.span>
            </motion.h1>

            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              className="font-serif text-6xl  text-black mb-8 block text-left mt-4"
            >
              Protecting Your Business & Brand
            </motion.span>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2.3 }}
              className="w-full flex justify-start"
            >
              <Link
                href="/contact"
                className="bg-blue-800 text-white py-3 px-16 rounded-full inline-flex items-center justify-center text-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-all duration-300 ease-in-out"
              >
                Get Expert Help Today
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SplitLayout