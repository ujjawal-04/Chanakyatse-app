import React from 'react';
import Image from 'next/image';

const ScrollableCards = () => {
  const items = [
    {
      title: "Awareness Campaigns",
      description: "We conduct campaigns to educate individuals and boost public awareness about disabilities and accessibility guidelines.",
      image: "/lw.jpeg"
    },
    {
      title: "Engaging Competitions",
      description: "Showcase your talents in our competitions where we create a platform to support budding disabled artists and rising influencers.",
      image: "/lw.jpeg"
    },
    {
      title: "Intriguing Events",
      description: "Join us in one of our digital events where we facilitate conversations and celebrate the achievements of the disabled community.",
      image: "/lw.jpeg"
    },
    {
      title: "Informative Posts",
      description: "A4E aims to cover every topic in the realm of disability, accessibility and inclusion – from A to Z – in the form of engaging posts.",
      image: "/lw.jpeg"
    },
    {
      title: "Accessibility Solutions",
      description: "We provide and implement comprehensive solutions to improve accessibility across digital platforms.",
      image: "/lw.jpeg"
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="overflow-x-auto">
        <div className="flex pl-16 space-x-8 pb-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-96 transform transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                width={1000}
                height={1000}/>
              </div>
              <div className="relative inline-block">
                <h3 className="text-xl font-bold mt-4 mb-2 text-black">
                  {item.title}
                </h3>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></div>
              </div>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;