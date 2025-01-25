"use client"

import { motion } from "framer-motion"
import { Building2, ArrowRightLeft, Gavel, FileLock } from "lucide-react"

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      className="text-white py-20"
      style={{
        backgroundImage: "url(small.png)",
        backgroundSize: "180%",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {[
            {
              icon: Building2,
              title: "Incorporation of Companies",
              description: "Complete assistance in company formation",
              delay: 0,
              gradient: "from-gray-800 via-blue-500 to-gray-800",
            },
            {
              icon: ArrowRightLeft,
              title: "Mergers and Acquisitions",
              description: "Strategic business combinations",
              delay: 0.1,
              gradient: "from-gray-800 via-blue-500 to-gray-800",
            },
            {
              icon: Gavel,
              title: "Comprehensive Legal Support",
              description: "Expert legal guidance for businesses, ensuring compliance and growth.",
              delay: 0.2,
              gradient: "from-gray-800 via-blue-500 to-gray-800",
            },
            {
              icon: FileLock,
              title: "IPR Registration",
              description: "Secure your intellectual property with expert registration services.",
              delay: 0.3,
              gradient: "from-gray-900 via-blue-500 to-gray-900",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Thought Bubble with Black Border */}
              <motion.div
                className="absolute inset-2 bg-white border border-black rounded-[20px] filter blur-sm"
                style={{
                  clipPath: "polygon(0% 0%, 96% 2%, 100% 92%, 60% 92%, 90% 100%, 45% 94%, 4% 94%)",
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: item.delay + 0.1, // Slight delay for sequential effect
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Icon with 360° Rotation on Hover */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${item.gradient} rounded-full p-4 mb-4 mx-20 shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-blue-500">{item.title}</h3>
                <p className="text-blue-500 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
