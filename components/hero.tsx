'use client'

import { motion } from "framer-motion"
import { ScrollIndicator } from "./scroll-indicator"
import { AnimatedText } from "./animated-text"
import { ImageSlider } from "./image-slider"
import Link from "next/link"


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500">
      <ImageSlider/>
            <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-30" />
      </motion.div>

     
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatedText
            text="Comprehensive Partner for all your"
            className="text-2xl md:text-3xl font-light text-white/90"
            delay={0.3}
          />
          <AnimatedText
            text="Individual and Business Needs"
            className="text-4xl md:text-6xl font-bold text-white"
            delay={0.6}
          />
          <AnimatedText
            text="in India and the UAE"
            className="text-2xl md:text-3xl font-light text-white/90"
            delay={0.9}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
        </motion.div>
        <Link href="/services"  className="px-8 py-3 bg-[#24338F] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
           Our Services
          </Link>
      </div>
  <ScrollIndicator/>
     
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  )
}

