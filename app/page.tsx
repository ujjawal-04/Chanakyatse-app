import React from 'react'
import SplitLayout from '@/components/split'
import ScrollableCards from '@/components/scrollcards'
import WorkWithUsLayout from '@/components/reverseSplit'
import SlidingText from '@/components/slide'
import TextWithImages from '@/components/textwithimg'
import { Hero } from '@/components/hero'

const Page = () => {
  return (
    <div className='bg-white'>
      <div className="mt-0">
        <Hero/>
      </div>
      <div className="mt-20">
      <SplitLayout/>
      </div>
      
      <div className="mt-20">
      <ScrollableCards/>
      </div>
      
      <div className="mt-20">
      <WorkWithUsLayout/>
      </div>
      
      <div className="mt-20">
      <SlidingText/>
      </div>
      
      <div className="mt-2 mb-20">
      <TextWithImages/>
      </div>
    </div>
  )
}

export default Page