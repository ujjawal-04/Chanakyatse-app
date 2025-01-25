import React from 'react'
import Split from '@/components/split'
import ScrollableCards from '@/components/scrollcards'
import WorkWithUsLayout from '@/components/reverseSplit'
import SlidingText from '@/components/slide'
import { MarqueeDemo } from '@/components/testimonials'
import Features from '@/components/features'


const Page = () => {
  return (
    <main className="bg-white pt-4 sm:pt-20">
      <div>
        <div>
          <Split/>
        </div>
        <div className="mt-20 mb-28">
          <Features/>
        </div>
        <div className="mt-20">
          <ScrollableCards/>
        </div>
        <MarqueeDemo/>
        <div className="mt-20">
          <SlidingText/>
        </div>
        <div className="mt-20 mb-20">
          <WorkWithUsLayout/>
        </div>
      </div>
    </main>
  )
}

export default Page