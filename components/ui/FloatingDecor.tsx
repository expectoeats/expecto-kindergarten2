"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

type FloatType = "bob" | "floaty" | "floatySlow" | "twinkle" | "spin";

interface FloatingDecorProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  float?: FloatType;
  className?: string;
  delay?: number;
  svgIcon?: "star" | "squiggle" | "dot" | "circle" | "leaf" | "sparkle";
  svgColor?: string;
  svgSize?: number;
}

const animations = {
  bob: { y: [0, -10, 0], rotate: [-3, 3, -3] },
  floaty: { y: [0, -14, 0], rotate: [0, 2, 0] },
  floatySlow: { y: [0, -20, 0] },
  twinkle: { opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] },
  spin: { rotate: 360 },
} as const;

const durations: Record<FloatType, number> = {
  bob: 4,
  floaty: 5,
  floatySlow: 8,
  twinkle: 3,
  spin: 20,
};

export default function FloatingDecor({
  children,
  src,
  alt = "",
  width = 60,
  height = 60,
  float = "floaty",
  className = "",
  delay = 0,
  svgIcon,
  svgColor = "#FFC93C",
  svgSize = 32,
}: FloatingDecorProps) {
  const svgIcons: Record<string, JSX.Element> = {
    star: (
      <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill={svgColor}>
        <path d="M12 2L14.5 8.5L21 9.2L16 14L17.5 21L12 17.8L6.5 21L8 14L3 9.2L9.5 8.5L12 2Z" />
      </svg>
    ),
    sparkle: (
      <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill={svgColor}>
        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
      </svg>
    ),
    squiggle: (
      <svg
        width={svgSize * 2}
        height={svgSize}
        viewBox="0 0 60 20"
        fill="none"
        stroke={svgColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M2 10 Q 8 2, 14 10 T 26 10 T 38 10 T 50 10 T 58 10" />
      </svg>
    ),
    dot: (
      <svg width={svgSize} height={svgSize} viewBox="0 0 10 10" fill={svgColor}>
        <circle cx="5" cy="5" r="4" />
      </svg>
    ),
    circle: (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 30 30"
        fill="none"
        stroke={svgColor}
        strokeWidth="2"
        strokeDasharray="3 3"
      >
        <circle cx="15" cy="15" r="13" />
      </svg>
    ),
    leaf: (
      <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill={svgColor}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L7 21L7.57 19.71L8 19C10.22 18.65 14.22 15.8 17 8Z M14 4L15 6L17 7L15 8L14 10L13 8L11 7L13 6L14 4Z" />
      </svg>
    ),
  };

  const animateProps =
    float === "spin"
      ? { rotate: 360 }
      : (animations[float] as Record<string, unknown>);

  const transitionProps =
    float === "spin"
      ? {
          duration: durations[float],
          delay,
          repeat: Infinity,
          ease: "linear" as "linear",
        }
      : {
          duration: durations[float],
          delay,
          repeat: Infinity,
          ease: "easeInOut" as "easeInOut",
        };

  return (
    <motion.div
      className={`absolute pointer-events-none z-10 ${className}`}
      animate={animateProps as never}
      transition={transitionProps}
    >
      {src && (
        <Image src={src} alt={alt} width={width} height={height} className="object-contain" />
      )}
      {svgIcon && svgIcons[svgIcon]}
      {children}
    </motion.div>
  );
}
