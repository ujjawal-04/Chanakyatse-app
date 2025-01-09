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
        <br />
        <br />
        <SplitLayout/>
      </div>
      
      <div className="mt-32">
        <ScrollableCards/>
      </div>
      
      <div className="mt-32">
        <WorkWithUsLayout/>
      </div>
      
      <div className="mt-32">
        <SlidingText/>
      </div>
      
      <div className="mt-2 mb-20">
        <TextWithImages/>
      </div>
    </div>
  )
}

export default Page