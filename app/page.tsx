import React from 'react'
import Split from '@/components/split'
import ScrollableCards from '@/components/scrollcards'
import WorkWithUsLayout from '@/components/reverseSplit'
import SlidingText from '@/components/slide'
import { MarqueeDemo } from '@/components/testimonials'
import Features from '@/components/features'
import Info from '@/components/info'
import Detail from '@/components/detail'


const Page = () => {
  return (
    <main className="bg-white">
      <div className='overflow-x-hidden'>
        <div className='mt-20'>
          <Split/>
        </div>
        <div className='mt-20'>
          <Info/>
        </div>
        <div className='mt-20 mb-20'>
          <Detail/>
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
        <div className="mt-20">
          <WorkWithUsLayout/>
        </div>
      </div>
    </main>
  )
}

export default Page