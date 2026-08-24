"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useState } from "react";

type InfiniteTextMarqueeProps = {
  text?: string;
  link?: string;
  speed?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  fontSize?: string;
  textColor?: string;
  hoverColor?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let’s get started",
  link = "/services",
  speed = 30,
  showTooltip = true,
  tooltipText = "Explore Kraftt",
  fontSize = "8rem",
  textColor = "",
  hoverColor = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const rotation = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const maxRotation = 8;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!showTooltip) return;

    cursorX.set(event.clientX);
    cursorY.set(event.clientY);

    const midpoint = window.innerWidth / 2;
    const distanceFromMidpoint = Math.abs(event.clientX - midpoint);
    const nextRotation = (distanceFromMidpoint / midpoint) * maxRotation;
    rotation.set(event.clientX > midpoint ? nextRotation : -nextRotation);
  };

  const repeatedText = Array(2).fill(text);
  const textStyle = {
    fontSize,
    color: textColor || undefined,
    "--marquee-hover": hoverColor || "var(--raw-umber)",
    "--marquee-font-size": fontSize,
  } as React.CSSProperties;

  return (
    <>
      {showTooltip && (
        <motion.div
          aria-hidden="true"
          className={`following-tooltip ${isHovered ? "is-visible" : ""}`}
          style={{
            top: cursorY,
            left: cursorX,
            x: "-50%",
            y: "-145%",
            rotateZ: rotation,
          }}
        >
          {tooltipText}
        </motion.div>
      )}

      <div className="infinite-text-marquee" onPointerMove={handlePointerMove}>
        <motion.div
          className="infinite-text-marquee__track"
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          animate={reduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
          transition={reduceMotion ? { duration: 0 } : { repeat: Infinity, duration: speed, ease: "linear" }}
        >
          {[0, 1].map((group) => (
            <Link
              className="infinite-text-marquee__group"
              href={link}
              aria-hidden={group === 1}
              tabIndex={group === 1 ? -1 : undefined}
              key={group}
              style={textStyle}
            >
              {repeatedText.map((item, index) => (
                <span key={`${group}-${index}`}>
                  {item}<b aria-hidden="true">✦</b>
                </span>
              ))}
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
};
