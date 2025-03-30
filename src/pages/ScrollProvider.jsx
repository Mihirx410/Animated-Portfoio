import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Keep the smooth delay
      easing: (t) => Math.min(1, 1.001 - Math.pow(1.001, -1000 * t)), // Inertia
      smooth: true, // Base smooth scrolling
      smoothTouch: true, // Enable for touch devices (fixes some jumps)
      lerp: 0.08, // Linear interpolation for consistent smoothing (key fix)
    });

    // Sync with scroll events explicitly
    lenis.on('scroll', () => {
      // No-op, just ensures Lenis tracks scroll
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;