"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const springProgress = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      springProgress.set(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [springProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: springProgress,
          transformOrigin: "left",
          background: "linear-gradient(90deg, #FF6B6B 0%, #FFC93C 40%, #2EC4B6 70%, #7BC950 100%)",
          boxShadow: "0 0 8px rgba(255, 107, 107, 0.6)",
        }}
        // Use width instead of scaleX to avoid origin issues
      />
      {/* Simplified approach: just use width */}
      <div
        className="absolute top-0 left-0 h-full transition-none"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #FF6B6B 0%, #FFC93C 35%, #2EC4B6 65%, #7BC950 100%)",
          boxShadow: "0 0 6px rgba(255, 107, 107, 0.5), 0 0 12px rgba(255, 201, 60, 0.3)",
          borderRadius: "0 4px 4px 0",
          transition: "width 0.1s linear",
        }}
      >
        {/* Glowing tip */}
        {progress > 1 && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full animate-pulse"
            style={{
              background: "#FFC93C",
              boxShadow: "0 0 8px #FFC93C, 0 0 16px rgba(255,201,60,0.5)",
              transform: "translateY(-50%) translateX(50%)",
            }}
          />
        )}
      </div>
    </div>
  );
}
