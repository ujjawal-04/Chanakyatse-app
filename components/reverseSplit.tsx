import React from 'react';
import Image from 'next/image';

const WorkWithUsLayout = () => {
  return (
    <div className="h-[40rem] flex flex-col md:flex-row bg-white">
      {/* Left Column - Images */}
      <div className="w-full md:w-1/2 bg-white flex items-center relative">
        {/* Main image */}
        <Image 
          src="/tg.jpg"
          alt="Community inclusion"
          className="w-11/12 h-full object-cover"
        />

        {/* Small overlapping image */}
        <div className="absolute right-0 top-1/4 z-10" style={{ transform: 'translateX(36%)' }}>
          <Image 
            src="/cmp.jpg"
            alt="Accessibility features"
            className="w-72 h-96 object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-1/2 bg-white pl-40 pr-12 py-12 flex flex-col justify-center">
        <p className="text-base font-medium mb-6 uppercase tracking-wider">
          WORK WITH US
        </p>
        
        <h1 className="text-4xl font-serif mb-6 leading-tight text-black">
          Want to work towards building inclusive communities?
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Become an integral part of our hardworking team, make new friends, make 
          a real difference and learn skills all while helping promote equal access to 
          opportunities!
        </p>
        
        <a 
          href="#apply"
          className="text-red-500 hover:text-red-600 mb-12 inline-block"
        >
          Click here to apply.
        </a>

        <div className="flex gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Youth-oriented
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Established Team
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUsLayout;