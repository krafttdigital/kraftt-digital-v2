'use client';

import { animate, inView } from 'framer-motion/dom';
import { useEffect, useRef } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    element.classList.add('reveal-enhanced');
    const startTransform = {
      up: 'translate3d(0, 32px, 0)',
      left: 'translate3d(-34px, 0, 0)',
      right: 'translate3d(34px, 0, 0)',
      scale: 'scale(.965)',
    }[direction];
    const endTransform = direction === 'scale' ? 'scale(1)' : 'translate3d(0, 0, 0)';
    let revealed = false;

    const stop = inView(element, () => {
      if (revealed) return;
      revealed = true;
      animate(
        element,
        {
          opacity: [0, 1],
          transform: [startTransform, endTransform],
          filter: ['blur(7px)', 'blur(0px)'],
        },
        { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
      );
    }, { margin: '0px 0px -10% 0px' });

    return () => stop();
  }, [delay, direction]);

  return <div ref={ref} className={className}>{children}</div>;
}
