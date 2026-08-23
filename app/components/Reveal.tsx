'use client';

import { animate, inView } from 'framer-motion/dom';
import { useEffect, useRef } from 'react';

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    element.classList.add('reveal-enhanced');
    const stop = inView(element, () => {
      animate(
        element,
        { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
        { duration: 0.46, ease: 'easeOut' },
      );
      return () => undefined;
    }, { margin: '0px 0px -10% 0px' });

    return () => stop();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
