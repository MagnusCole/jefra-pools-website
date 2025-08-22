import React, { useEffect, useRef } from 'react';

// WaterOverlay: renders an SVG rect using the global filter and provides a
// JS fallback animation for browsers that don't run the inline <animate>.
const WaterOverlay: React.FC = () => {
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const turb = document.getElementById('turb');
    if (!turb) return;

    // animate baseFrequency via requestAnimationFrame as a robust fallback
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const t = (ts - (startRef.current as number)) / 1000; // seconds
      // oscillate values to simulate gentle water motion
      const a = 0.015 + 0.01 * Math.sin(t * 0.8);
      const b = 0.025 + 0.01 * Math.cos(t * 0.6);
      try {
        (turb as unknown as SVGElement).setAttribute('baseFrequency', `${a} ${b}`);
      } catch (e) {
        // ignore if not settable
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="water-overlay" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <rect width="100%" height="100%" filter="url(#water-filter)" fill="#ffffff" />
      </svg>
    </div>
  );
};

export default React.memo(WaterOverlay);
