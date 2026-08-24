"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const reduceMotion = useReducedMotion();
  const maxRotation = 8;

  useEffect(() => {
    if (!showTooltip) return;

    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(event.clientX - midpoint);
      const nextRotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(event.clientX > midpoint ? nextRotation : -nextRotation);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const repeatedText = Array(2).fill(text);
  const textStyle = {
    fontSize,
    color: textColor || undefined,
    "--marquee-hover": hoverColor || "var(--raw-umber)",
  } as React.CSSProperties;

  return (
    <>
      {showTooltip && (
        <div
          aria-hidden="true"
          className={`following-tooltip ${isHovered ? "is-visible" : ""}`}
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: `translate(-50%, -145%) rotate(${rotation}deg)`,
          }}
        >
          {tooltipText}
        </div>
      )}

      <div className="infinite-text-marquee">
        <motion.div
          className="infinite-text-marquee__track"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
