import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ScrollableCards = () => {
  const items = [
    {
      title: "Services",
      description: "Comprehensive accessibility solutions, digital inclusion consulting, and assistive technology implementation for organizations.",
      image: "/lw.jpeg"
    },
    {
      title: "About Us",
      description: "Dedicated team of accessibility experts committed to creating an inclusive digital world through innovation and advocacy.",
      image: "/lw.jpeg"
    },
    {
      title: "News",
      description: "Stay updated with the latest developments in accessibility technology, policy changes, and industry innovations.",
      image: "/lw.jpeg"
    },
    {
      title: "Articles",
      description: "In-depth insights, best practices, and expert perspectives on digital accessibility and inclusive design.",
      image: "/lw.jpeg"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful accessibility implementations and their impact on organizations and users.",
      image: "/lw.jpeg"
    }
  ];

  return (
    <div className="w-full bg-white px-4 md:px-8">
      <div className="scrollbar-hide overflow-x-auto -mx-4 md:-mx-8">
        <div className="flex space-x-8 pb-2 px-4 md:px-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-72 md:w-96 transform transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-gray-300">
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