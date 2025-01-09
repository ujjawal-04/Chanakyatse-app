'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  'https://binduschettur.com/wp-content/uploads/2023/12/awards-1536x749.webp',
  'https://binduschettur.com/wp-content/uploads/2023/12/Philanthropy-1536x749.jpg',
  'https://i.ytimg.com/vi/BdPwP--LOoU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWShUMA8=&rs=AOn4CLCrTkqFPEB4aCWHuaLqkqXHURAABg'
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Business consultancy services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

