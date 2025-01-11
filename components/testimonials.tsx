'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "Chanakyatse Consultancy's expertise was instrumental in our successful expansion into the UAE market. Their comprehensive understanding of both Indian and UAE business landscapes proved invaluable.",
    author: "Rajesh Patel",
    company: "TechInnovate Solutions Pvt. Ltd."
  },
  {
    quote: "The team at Chanakyatse provided us with exceptional guidance during our M&A process. Their strategic insights and meticulous approach ensured a smooth transition.",
    author: "Sarah Al-Mansoori",
    company: "Gulf Enterprises LLC"
  },
  {
    quote: "We were impressed by Chanakyatse's in-depth knowledge of intellectual property rights. They helped us navigate complex legal challenges and secure our innovations effectively.",
    author: "Dr. Aisha Khan",
    company: "MediTech Innovations"
  }
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45
    }
  }
}

export default function ClientTestimonials() {
  const [[page, direction], setPage] = useState([0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(([prevPage]) => [
        (prevPage + 1) % testimonials.length,
        1
      ])
    }, 5000) // Change testimonial every 5 seconds

    return () => clearTimeout(timer)
  }, [page])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#24388F]">Client Testimonials</h2>
        <div className="relative h-[300px] max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.5 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg mb-4 italic text-gray-700">&quot;{testimonials[page].quote}&quot;</p>
                <div>
                  <p className="font-semibold text-[#24388F]">{testimonials[page].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[page].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`w-3 h-3 rounded-full ${
                  index === page ? 'bg-[#24388F]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
