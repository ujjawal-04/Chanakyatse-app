"use client"

import { motion } from "framer-motion"

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-48 h-48" // Increased width and shifted up
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[12px] uppercase tracking-[0.14em] fill-white/95">
            <textPath href="#circle" startOffset="0%">
              Scroll Down Scroll Down
            </textPath>
          </text>
        </svg>
      </motion.div>
    </motion.div>
  )
}
