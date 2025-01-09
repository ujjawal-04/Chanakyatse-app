'use client'

import { motion } from "framer-motion"

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <span className="text-sm text-white/70">Scroll Down</span>
      <motion.div
        className="w-6 h-6 border-2 border-white/30 rounded-full"
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-white rounded-full mx-auto mt-1"
        />
      </motion.div>
    </motion.div>
  )
}

