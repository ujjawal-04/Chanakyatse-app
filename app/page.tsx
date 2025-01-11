import React from 'react'
import SplitLayout from '@/components/split'
import ScrollableCards from '@/components/scrollcards'
import WorkWithUsLayout from '@/components/reverseSplit'
import SlidingText from '@/components/slide'
import { Hero } from '@/components/hero'
import ClientTestimonials from '@/components/testimonials'
import Features from '@/components/features'

const Page = () => {
  return (
    <main className="bg-white pt-16 sm:pt-20 overflow-x-hidden w-full">
      <div className="max-w-[1440px] mx-auto">
        <div>
          <Hero/>
        </div>
        <div className="mt-20">
          <SplitLayout/>
        </div>
        <div className="mt-20 mb-28">
          <Features/>
        </div>
        <div className="mt-20">
          <ScrollableCards/>
        </div>
        <ClientTestimonials/>
        <div className="mt-20">
          <SlidingText/>
        </div>
        <div className="mt-20 mb-40">
          <WorkWithUsLayout/>
        </div>
      </div>
    </main>
  )
}

export default Page