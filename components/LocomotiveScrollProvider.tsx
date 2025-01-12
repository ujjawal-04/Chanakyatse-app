'use client';

import React, { createContext, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { default as LocomotiveScrollImpl } from 'locomotive-scroll';

type LocomotiveScrollType = {
  update: () => void;
  destroy: () => void;
  // Additional methods and properties can be added here
};

type ScrollContextType = {
  scroll: LocomotiveScrollType | null;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const LocomotiveScrollContext = createContext<ScrollContextType>({
  scroll: null
});

const LocomotiveScrollProvider: React.FC<ProviderProps> = ({ children }) => {
  const scrollRef = useRef<LocomotiveScrollType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (typeof window === 'undefined' || !containerRef.current) return;

        scrollRef.current = new LocomotiveScrollImpl({
          el: containerRef.current,
          smooth: true,
          lerp: 0.1,
          direction: 'vertical',
          reloadOnContextChange: true,
          gestureDirection: 'vertical',
          smartphone: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
        });

        // Force update after initialization
        setTimeout(() => {
          scrollRef.current?.update();
        }, 500);

        // Update on window resize
        const handleResize = () => {
          setTimeout(() => {
            scrollRef.current?.update();
          }, 100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (scrollRef.current) {
            scrollRef.current.destroy();
          }
          scrollRef.current = null;
        };
      } catch (error) {
        console.error('Locomotive Scroll initialization failed:', error);
      }
    })();
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll: scrollRef.current }}>
      <div 
        ref={containerRef} 
        data-scroll-container
        className="relative"
      >
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  );
};

export default dynamic(() => Promise.resolve(LocomotiveScrollProvider), {
  ssr: false,
});