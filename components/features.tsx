'use client'

import { motion } from 'framer-motion'
import { Building2, ArrowRightLeft, Gavel, FileLock } from 'lucide-react'

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="text-white py-20"
      style={{
        backgroundImage: 'url(/small.png)', // Add the path to your image here
        backgroundSize: 'cover',  // Ensures the image covers the whole section
        backgroundPosition: 'center', // Centers the image
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#4FB5FF] rounded-full p-6 mb-4">
              <Building2 className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Incorporation of Companies</h3>
            <p className="text-white/80">Complete assistance in company formation</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#4FB5FF] rounded-full p-6 mb-4">
              <ArrowRightLeft className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mergers and Acquisitions</h3>
            <p className="text-white/80">Strategic business combinations</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#4FB5FF] rounded-full p-6 mb-4">
              <Gavel className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Legal Support</h3>
            <p className="text-white/80">Expert legal guidance for businesses, ensuring compliance and growth.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#4FB5FF] rounded-full p-6 mb-4">
              <FileLock className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">IPR Registration</h3>
            <p className="text-white/80">Secure your intellectual property with expert registration services.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
