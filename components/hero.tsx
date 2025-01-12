'use client'

import { motion } from "framer-motion"
import { ScrollIndicator } from "./scroll-indicator"
import { ImageSlider } from "./image-slider"


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
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
      </div>

      <ScrollIndicator />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  )
}