import React from 'react';
import Image from 'next/image';

const SplitLayout = () => {
  return (
    <div className="h-[40rem] flex flex-col md:flex-row bg-white">
      {/* left Column - Content */}
      <div className="w-full md:w-1/2 bg-white pl-16 pr-10 py-12 flex flex-col justify-center">
        <p className="text-base font-medium mb-6">
          WE WANT CHANGE, TODAY
        </p>
        
        <h1 className="text-4xl font-serif mb-6 leading-tight text-black">
          Join us in making the 
          world radically inclusive.
        </h1>
        
        <p className="text-gray-600 mb-16 text-lg leading-relaxed max-w-xl">
          We&apos;re a youth initiative passionate about making a difference in the world 
          by building a more accessible and inclusive society through informative 
          posts, awareness campaigns, and sparking interesting conversations!
        </p>
        
        <div className="flex gap-24">
          <div>
            <h3 className="text-6xl font-serif mb-2 text-black">15%</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              of the global<br />
              population has<br />
              some form of<br />
              a disability
            </p>
          </div>
          
          <div>
            <h3 className="text-6xl font-serif mb-2 text-black">98%</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              of the world&apos;s<br />
              top websites<br />
              remain<br />
              inaccessible
            </p>
          </div>
        </div>
      </div>
       {/* Left Column - Images */}
       <div className="w-full md:w-1/2 bg-white flex items-center relative">
       {/* Small overlapping image */}
       <div className="absolute left-0 top-1/4 z-10" style={{ transform: 'translateX(-36%)' }}>
          <Image
            src="/cmp.jpg"
            alt="Accessibility features"
            className="w-72 h-96 object-cover shadow-xl"
          />
        </div>
        {/* Main image */}
        <Image
          src="/tg.jpg"
          alt="Community inclusion"
          className="w-11/12 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SplitLayout;