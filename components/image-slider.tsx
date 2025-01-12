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
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 100vw,
                     100vw"
              quality={90}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}