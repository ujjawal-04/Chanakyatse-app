'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',  
      smoothWheel: true, 
      touchMultiplier: 2,
      wheelMultiplier: 0.8,  
      lerp: 0.1,
      infinite: false,
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}