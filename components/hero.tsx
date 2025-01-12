'use client'

import { motion } from "framer-motion"
import { ScrollIndicator } from "./scroll-indicator"
import { AnimatedText } from "./animated-text"
import { ImageSlider } from "./image-slider"


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500">
      {/* Modified ImageSlider container to be responsive */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <ImageSlider />
        </div>
      </div>

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

        {/* Added responsive padding for better mobile spacing */}
        <div className="max-w-4xl mx-auto space-y-6 py-8 sm:py-12">
          <AnimatedText
            text="Comprehensive Partner for all your"
            className="text-xl md:text-3xl font-light text-white/90 px-4"
            delay={0.3}
          />
          <AnimatedText
            text="Individual and Business Needs"
            className="text-3xl md:text-6xl font-bold text-white px-4"
            delay={0.6}
          />
          <AnimatedText
            text="in India and the UAE"
            className="text-xl md:text-3xl font-light text-white/90 px-4"
            delay={0.9}
          />
        </div>

      </div>

      <ScrollIndicator />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  )
}