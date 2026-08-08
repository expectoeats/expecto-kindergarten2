"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FloatingDecor from "./ui/FloatingDecor";

const slides = [
  {
    src: "https://kindheitkindergarten.com/img/slider/slide2.jpg",
    label: "Where imagination runs free",
  },
  {
    src: "https://kindheitkindergarten.com/img/slider/slide4.jpg",
    label: "Every day is a new adventure",
  },
];

const stats = [
  {
    value: "500+",
    label: "Happy Kids",
    color: "from-coral to-sunshine",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    iconColor: "#FF6B6B",
  },
  {
    value: "12 Yrs",
    label: "Of Joy",
    color: "from-sunshine to-skyteal",
    iconPath: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-5v-2h4V5h2z",
    iconColor: "#FFC93C",
  },
  {
    value: "6:1",
    label: "Child–Teacher",
    color: "from-skyteal to-grass",
    iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    iconColor: "#2EC4B6",
  },
  {
    value: "40+",
    label: "Caring Staff",
    color: "from-grass to-berry",
    iconPath: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
    iconColor: "#7BC950",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Full-bleed background slides ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].label}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>

      {/* ── Floating decorations ── */}
      <FloatingDecor svgIcon="sparkle" svgColor="#FFC93C" svgSize={22} float="twinkle" className="top-36 left-[8%] hidden sm:block" />
      <FloatingDecor svgIcon="circle"  svgColor="#2EC4B6" svgSize={44} float="floatySlow" delay={0.4} className="bottom-40 left-[6%] hidden sm:block" />
      <FloatingDecor svgIcon="leaf"    svgColor="#7BC950" svgSize={20} float="bob" delay={1}  className="bottom-52 right-[24%] hidden sm:block" />

      {/* ── Whale mascot ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-28 sm:bottom-36 right-0 sm:right-4 lg:right-10 w-32 sm:w-48 lg:w-64 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://kindheitkindergarten.com/img/ornaments/whale.png"
            alt="Cute whale"
            width={260}
            height={170}
            className="w-full h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </motion.div>

      {/* ── Main content — flex column, pt accounts for fixed navbar ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] px-5 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-24 sm:pb-28 max-w-2xl">

        {/* Admission badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-sunshine/40 rounded-full px-4 py-1.5 mb-5 self-start shadow-paper"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-coral" />
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFC93C">
            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
          </svg>
          <span className="font-nunito font-bold text-sm text-ink leading-none">
            admissions open 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-nunito text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          style={{ fontWeight: 900 }}
        >
          Where little minds
          <br />
          <span className="inline-flex items-center gap-2 mt-1">
            <span className="bg-gradient-to-r from-coral via-sunshine to-sunshine bg-clip-text text-transparent drop-shadow-none">
              bloom big
            </span>
            <motion.svg
              width="32" height="32" viewBox="0 0 24 24" fill="#FF6B6B"
              animate={{ rotate: [-15, 15, -15] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 2C13.5 2 14.7 3 15 4.3C16.3 4.6 17.3 5.6 17.5 7C18.9 7.3 20 8.5 20 10C20 11.4 19 12.6 17.7 12.9C17.4 14.4 16.3 15.6 14.8 15.9C14.5 17.3 13.3 18.5 11.8 18.7C10.3 18.5 9.1 17.3 8.8 15.9C7.3 15.6 6.2 14.4 5.9 12.9C4.6 12.6 3.6 11.4 3.6 10C3.6 8.5 4.7 7.3 6.1 7C6.4 5.6 7.4 4.6 8.7 4.3C9 3 10.2 2 12 2Z" />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-4 text-sm sm:text-base font-semibold text-white/90 leading-relaxed max-w-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
        >
          A warm kindergarten home where every giggle is celebrated.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-7 flex flex-wrap gap-3 items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 bg-coral text-white font-nunito font-bold text-sm sm:text-base shadow-paperlift hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Book a Visit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 bg-white/90 backdrop-blur-sm text-ink font-nunito font-bold text-sm sm:text-base shadow-paper border-2 border-skyteal/50 hover:bg-white transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Our Programs
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2EC4B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <polyline points="10 9 15 12 10 15 10 9" fill="#2EC4B6" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 grid grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-sm"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.08, type: "spring" }}
              className="bg-white/88 backdrop-blur-md rounded-2xl px-1.5 sm:px-2 py-2.5 text-center shadow-paper border border-white/60"
            >
              <div className="flex items-center justify-center mb-1">
                <svg width="15" height="15" viewBox="0 0 24 24" fill={s.iconColor}>
                  <path d={s.iconPath} />
                </svg>
              </div>
              <div
                className={`font-nunito text-sm sm:text-[15px] bg-gradient-to-r ${s.color} bg-clip-text text-transparent leading-none`}
                style={{ fontWeight: 900 }}
              >
                {s.value}
              </div>
              <div className="font-semibold text-[9px] sm:text-[10px] text-ink/55 mt-0.5 leading-tight">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 flex items-center gap-3"
        >
          <button
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md shadow-paper flex items-center justify-center border border-sunshine/50 hover:bg-white hover:scale-110 transition-all"
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-7 h-2.5 bg-gradient-to-r from-coral to-sunshine"
                      : "w-2.5 h-2.5 bg-white/70 border border-white/50 hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md shadow-paper flex items-center justify-center border border-sunshine/50 hover:bg-white hover:scale-110 transition-all"
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* ── Bottom wave ── */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24 z-10 pointer-events-none"
      >
        <path
          d="M0,60 C240,100 480,10 720,55 C960,100 1200,15 1440,60 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
