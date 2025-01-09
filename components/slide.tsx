'use client'
import React from 'react';

const SlidingText = () => {
  const words = ['accessibility', 'inclusivity', 'equality'];
  
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="whitespace-nowrap animate-slide">
        {/* Repeat the words multiple times to create continuous scroll effect */}
        {[...Array(3)].map((_, i) => (
          <span key={i} className="inline-block mx-4">
            {words.map((word, wordIndex) => (
              <span 
                key={wordIndex}
                className="text-8xl font-serif inline-block mx-4"
                style={{
                  WebkitTextStroke: '1px black',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-slide {
          display: inline-block;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingText;