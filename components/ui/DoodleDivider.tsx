"use client";

import { motion } from "framer-motion";

type DividerVariant = "wave" | "scallop" | "zigzag" | "cloud" | "grass";

interface DoodleDividerProps {
  variant?: DividerVariant;
  className?: string;
  color?: string;
  accent?: string;
  flip?: boolean;
}

export default function DoodleDivider({
  variant = "wave",
  className = "",
  color = "#FFF8EC",
  accent,
  flip = false,
}: DoodleDividerProps) {
  const dividers: Record<DividerVariant, JSX.Element> = {
    wave: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ddWaveFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accent ?? color} />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C240,118 480,2 720,58 C960,114 1200,18 1440,74 L1440,120 L0,120 Z"
          fill="url(#ddWaveFill)"
        />
        <path
          d="M0,80 C240,132 480,24 720,76 C960,128 1200,34 1440,88"
          stroke={accent ?? "#FFC93C"}
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
          strokeLinecap="round"
        />
      </svg>
    ),
    scallop: (
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ddScallopFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accent ?? color} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C60,2 120,2 180,60 C240,118 300,118 360,60 C420,2 480,2 540,60 C600,118 660,118 720,60 C780,2 840,2 900,60 C960,118 1020,118 1080,60 C1140,2 1200,2 1260,60 C1320,118 1380,118 1440,60 L1440,100 L0,100 Z"
          fill="url(#ddScallopFill)"
        />
      </svg>
    ),
    zigzag: (
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ddZigFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accent ?? color} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L80,2 L160,40 L240,2 L320,40 L400,2 L480,40 L560,2 L640,40 L720,2 L800,40 L880,2 L960,40 L1040,2 L1120,40 L1200,2 L1280,40 L1360,2 L1440,40 L1440,80 L0,80 Z"
          fill="url(#ddZigFill)"
        />
      </svg>
    ),
    cloud: (
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ddCloudFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accent ?? color} />
          </linearGradient>
        </defs>
        <path
          d="M0,104 Q100,44 200,82 T400,74 Q500,22 620,62 T820,52 Q940,12 1060,58 T1280,44 Q1380,12 1440,64 L1440,140 L0,140 Z"
          fill="url(#ddCloudFill)"
        />
      </svg>
    ),
    grass: (
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ddGrassFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={accent ?? color} />
          </linearGradient>
        </defs>
        <path
          d="M0,82 L40,22 L60,70 L90,14 L120,62 L150,8 L180,76 L220,26 L260,70 L290,16 L330,66 L370,14 L410,72 L450,22 L490,76 L530,16 L570,62 L610,10 L650,74 L690,28 L730,66 L770,14 L810,72 L850,22 L890,76 L930,10 L970,66 L1010,28 L1050,70 L1090,16 L1130,70 L1170,14 L1210,74 L1250,24 L1290,68 L1330,14 L1370,72 L1400,22 L1440,76 L1440,100 L0,100 Z"
          fill="url(#ddGrassFill)"
        />
      </svg>
    ),
  };

  return (
    <motion.div
      className={`w-full overflow-hidden ${className}`}
      style={{ transform: flip ? "rotate(180deg) scaleX(-1)" : undefined }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {dividers[variant]}
    </motion.div>
  );
}
