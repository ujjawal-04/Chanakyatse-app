"use client"
import { Suspense } from 'react';
import { motion, useMotionValue  } from 'framer-motion';
import ServicesGrid from './components/ServicesGrid';
import BottomCTA from './components/BottomCTA'
import { services } from './data';

export const dynamic = 'force-dynamic';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);
  
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#24388F] rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          scale,
        }}
        animate={{
          backgroundColor: ['rgba(36,56,143,0.1)', 'rgba(36,56,143,0.2)'],
          transition: { repeat: Infinity, duration: 2 },
        }}
      />
      <div
        className="fixed inset-0"
        onMouseMove={onMouseMove}
        onMouseEnter={() => scale.set(1)}
        onMouseLeave={() => scale.set(0)}
      />
    </>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative md:mt-12 overflow-hidden">
      <CustomCursor />

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#24388F]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="relative">
        <div className="container mx-auto px-6 py-20">
          {/* Animated Section Title */}
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="md:text-7xl text-5xl font-bold text-[#24388F] mb-4 relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Our Services
              </motion.span>
            </h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive legal and business solutions tailored to meet your specific needs
            </motion.p>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#24388F]/20 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          <Suspense fallback={
            <motion.div 
              className="flex justify-center items-center h-32"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <div className="w-8 h-8 border-4 border-[#24388F] border-t-transparent rounded-full" />
            </motion.div>
          }>
            <ServicesGrid services={services} />
          </Suspense>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BottomCTA />
        </motion.div>
      </div>
    </div>
  );
}