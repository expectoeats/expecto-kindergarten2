"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const stars = [
    { color: "#FFC93C", size: 22, x: "18%", y: "22%", delay: 0.2 },
    { color: "#FF6B6B", size: 16, x: "75%", y: "18%", delay: 0.4 },
    { color: "#2EC4B6", size: 20, x: "82%", y: "68%", delay: 0.1 },
    { color: "#7BC950", size: 14, x: "12%", y: "72%", delay: 0.6 },
    { color: "#7C5CBF", size: 18, x: "60%", y: "80%", delay: 0.3 },
    { color: "#FFC93C", size: 12, x: "35%", y: "14%", delay: 0.5 },
    { color: "#FF6B6B", size: 24, x: "88%", y: "38%", delay: 0.2 },
    { color: "#2EC4B6", size: 16, x: "5%", y: "45%", delay: 0.7 },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, #FFF3D6 0%, #FFF8EC 50%, #E0F7F4 100%)",
          }}
        >
          {/* Floating background stars */}
          {stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{ left: s.x, top: s.y }}
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{
                opacity: [0, 1, 0.6, 1],
                scale: [0, 1.2, 0.9, 1],
                rotate: [-30, 10, -5, 0],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2,
                delay: s.delay,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            >
              <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill={s.color}>
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
              </svg>
            </motion.div>
          ))}

          {/* Main logo area */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 200, damping: 18 }}
            className="flex flex-col items-center gap-5"
          >
            {/* Animated flower/logo */}
            <motion.div
              animate={{ rotate: [0, 8, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sunshine to-coral flex items-center justify-center shadow-[0_12px_40px_rgba(255,107,107,0.4)]">
                {/* Flower SVG */}
                <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
                  {/* Petals */}
                  <ellipse cx="30" cy="14" rx="7" ry="12" fill="#FFF8EC" opacity="0.9" />
                  <ellipse cx="30" cy="46" rx="7" ry="12" fill="#FFF8EC" opacity="0.9" />
                  <ellipse cx="14" cy="30" rx="12" ry="7" fill="#FFF8EC" opacity="0.9" />
                  <ellipse cx="46" cy="30" rx="12" ry="7" fill="#FFF8EC" opacity="0.9" />
                  <ellipse cx="18" cy="18" rx="7" ry="11" fill="#FFF8EC" opacity="0.75" transform="rotate(-45 18 18)" />
                  <ellipse cx="42" cy="18" rx="7" ry="11" fill="#FFF8EC" opacity="0.75" transform="rotate(45 42 18)" />
                  <ellipse cx="18" cy="42" rx="7" ry="11" fill="#FFF8EC" opacity="0.75" transform="rotate(45 18 42)" />
                  <ellipse cx="42" cy="42" rx="7" ry="11" fill="#FFF8EC" opacity="0.75" transform="rotate(-45 42 42)" />
                  {/* Center */}
                  <circle cx="30" cy="30" r="12" fill="#FFC93C" />
                  <circle cx="30" cy="30" r="7" fill="#FF6B6B" />
                  <circle cx="27" cy="27" r="2.5" fill="#FFF8EC" opacity="0.7" />
                </svg>
              </div>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-skyteal shadow-[0_2px_8px_rgba(46,196,182,0.6)]" />
              </motion.div>
            </motion.div>

            {/* School name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="font-nunito font-900 text-3xl text-ink tracking-tight leading-none">
                Little Bloom
              </h1>
              <p className="font-nunito font-semibold text-base text-coral mt-1 tracking-wide flex items-center justify-center gap-1.5">
                kindergarten
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC93C"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"/></svg>
              </p>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 mt-1"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: ["#FFC93C", "#FF6B6B", "#2EC4B6", "#7BC950"][i],
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom wave */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0"
          >
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
              <path
                d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
                fill="#FFC93C"
                opacity="0.3"
              />
              <path
                d="M0,55 C240,90 480,20 720,55 C960,90 1200,25 1440,55 L1440,80 L0,80 Z"
                fill="#FF6B6B"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
