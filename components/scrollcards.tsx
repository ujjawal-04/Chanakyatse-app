'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ScrollableCards: React.FC = () => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      title: "Services",
      description: "Comprehensive accessibility solutions, digital inclusion consulting, and assistive technology implementation for organizations.",
      image: "/3.avif",
      path: "/services"
    },
    {
      title: "About Us",
      description: "Dedicated team of accessibility experts committed to creating an inclusive digital world through innovation and advocacy.",
      image: "/4.avif",
      path: "/about"
    },
    {
      title: "News",
      description: "Stay updated with the latest developments in accessibility technology, policy changes, and industry innovations.",
      image: "/5.avif",
      path: "/news"
    },
    {
      title: "Articles",
      description: "In-depth insights, best practices, and expert perspectives on digital accessibility and inclusive design.",
      image: "/6.avif",
      path: "/articles"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful accessibility implementations and their impact on organizations and users.",
      image: "/7.avif",
      path: "/case-studies"
    }
  ];

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white px-4 md:px-8 relative">
      <div className="absolute right-4 -top-14 flex gap-2 z-10 mb-20">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200 focus:outline-none"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="scrollbar-hide overflow-x-auto -mx-4 md:-mx-8 scroll-smooth"
      >
        <div className="flex space-x-8 pb-2 px-4 md:px-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-80 md:w-[450px] transform transition-all duration-500 hover:-translate-y-2 group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleCardClick(item.path)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-gray-300 rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        className="text-white opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        size={24}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm md:text-base text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.description}
                      </p>
                      <span className="text-white font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;