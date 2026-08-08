"use client";

import type { ReactNode } from "react";

type PatternTheme = "sunshine" | "sky" | "coral" | "grass" | "berry";

interface BackgroundTextureProps {
  children: ReactNode;
  className?: string;
  theme?: PatternTheme;
}

export default function BackgroundTexture({
  children,
  className = "",
  theme = "sunshine",
}: BackgroundTextureProps) {
  const patternClass: Record<PatternTheme, string> = {
    sunshine: "pattern-sunshine",
    sky: "pattern-sky",
    coral: "pattern-coral",
    grass: "pattern-grass",
    berry: "pattern-berry",
  };

  return (
    <div className={`section-textured ${patternClass[theme]} ${className}`}>
      {children}
    </div>
  );
}
