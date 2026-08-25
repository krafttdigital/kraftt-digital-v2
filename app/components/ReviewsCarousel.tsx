'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import type { ClientReview } from '../data/reviews';
import { ReviewCard } from './ReviewCard';

type ReviewsCarouselProps = {
  reviews: ClientReview[];
  variant: 'home' | 'project';
  projectName?: string;
};

export function ReviewsCarousel({ reviews, variant, projectName }: ReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 26, stiffness: 190 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 190 });
  const numberX = useTransform(springX, [-250, 250], [-16, 16]);
  const numberY = useTransform(springY, [-180, 180], [-8, 8]);
  const isHome = variant === 'home';

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }, [reviews.length]);

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (reduceMotion || isPaused || reviews.length < 2) return;
    const timer = window.setInterval(goNext, 8000);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, reduceMotion, reviews.length]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = carouselRef.current?.getBoundingClientRect();
    if (!bounds || reduceMotion) return;
    mouseX.set(event.clientX - (bounds.left + bounds.width / 2));
    mouseY.set(event.clientY - (bounds.top + bounds.height / 2));
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsPaused(false);
  };

  return (
    <div
      className="client-reviews-carousel"
      ref={carouselRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={handlePointerLeave}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <motion.span
        className="client-reviews-watermark"
        aria-hidden="true"
        style={reduceMotion ? undefined : { x: numberX, y: numberY }}
      >
        {String(activeIndex + 1).padStart(2, '0')}
      </motion.span>

      <div className="client-reviews-rail" aria-hidden="true">
        <span>Testimonials</span>
        <i><b style={{ height: `${((activeIndex + 1) / reviews.length) * 100}%` }} /></i>
      </div>

      <div className="client-reviews-stage">
        <header className="client-reviews-heading">
          <div>
            <p className="eyebrow eyebrow-dark">{isHome ? 'Client reviews' : 'Client perspective'}</p>
            <span>{String(reviews.length).padStart(2, '0')} perspective{reviews.length === 1 ? '' : 's'}</span>
          </div>
          <h2 id={`client-reviews-${variant}-title`}>
            {isHome ? <>Proof, <em>in their words.</em></> : <>What the <em>client says.</em></>}
          </h2>
          <div className="client-reviews-heading-action">
            <p>
              {isHome
                ? 'Real feedback from the people behind the work.'
                : `First-hand feedback from ${projectName ?? 'this project'}.`}
            </p>
            <Link href={isHome ? '/work' : '/audit'}>
              {isHome ? 'Explore the work' : 'Start with an audit'} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <div className="client-reviews-slides" aria-live="polite" aria-atomic="true">
          {reviews.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                className={`client-review-slide${isActive ? ' is-active' : ''}`}
                key={review.id}
                aria-hidden={!isActive}
                inert={!isActive}
                animate={reduceMotion ? undefined : {
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : index < activeIndex ? -24 : 24,
                  filter: isActive ? 'blur(0px)' : 'blur(7px)',
                }}
                initial={false}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <ReviewCard review={review} index={index} showProjectLink={isHome} />
              </motion.div>
            );
          })}
        </div>

        <div className="client-reviews-controls">
          <span>Review {String(activeIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span>
          {reviews.length > 1 && (
            <div>
              <button type="button" onClick={goPrevious} aria-label="Show previous client review">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" onClick={goNext} aria-label="Show next client review">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="client-reviews-ticker" aria-hidden="true">
        <div>
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <span key={`${review.id}-${index}`}>{review.company} <i>•</i></span>
          ))}
        </div>
      </div>
    </div>
  );
}
