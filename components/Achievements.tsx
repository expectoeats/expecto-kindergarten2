"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";
import BouncyButton from "./ui/BouncyButton";
import BackgroundTexture from "./BackgroundTexture";

const stats = [
  {
    numericValue: 500,
    suffix: "+",
    label: "Happy Little Learners",
    tint: "from-sunshine to-coral",
    bgTint: "bg-sunshine/15",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ),
    rotate: "-rotate-2",
  },
  {
    numericValue: 12,
    suffix: "+",
    label: "Years of Joyful Learning",
    tint: "from-skyteal to-grass",
    bgTint: "bg-skyteal/15",
    icon: (
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-5v-2h4V5h2z" />
    ),
    rotate: "rotate-1",
  },
  {
    numericValue: 40,
    suffix: "+",
    label: "Loving & Trained Staff",
    tint: "from-coral to-berry",
    bgTint: "bg-coral/15",
    icon: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    ),
    rotate: "-rotate-1",
  },
  {
    numericValue: 120,
    suffix: "+",
    label: "Annual Events & Celebrations",
    tint: "from-grass to-skyteal",
    bgTint: "bg-grass/15",
    icon: (
      <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.18L12 3 8.6 1.52 6.71 4.7l-3.61.82.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.48 1.89-3.18 3.61-.82-.34-3.69L23 12z" />
    ),
    rotate: "rotate-2",
  },
];

function CountUpNumber({
  target,
  suffix,
  tint,
}: {
  target: number;
  suffix: string;
  tint: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className={`font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r ${tint} bg-clip-text text-transparent tracking-tight count-display`}
      style={{ fontWeight: 900 }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="admissions" className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="scallop" color="#ECE6F7" accent="#D1C4E9" />
      </div>

      <BackgroundTexture
        theme="berry"
        className="relative bg-gradient-to-b from-[#ECE6F7] via-white to-white pb-28 sm:pb-40 pt-10 overflow-hidden"
      >
        <FloatingDecor svgIcon="star" svgColor="#FFC93C" svgSize={24} float="twinkle" className="top-20 left-[6%] sm:left-[9%]" />
        <FloatingDecor svgIcon="sparkle" svgColor="#FF6B6B" svgSize={18} float="twinkle" delay={0.4} className="top-40 right-[8%] sm:right-[11%]" />
        <FloatingDecor svgIcon="squiggle" svgColor="#2EC4B6" svgSize={16} float="floaty" delay={0.8} className="bottom-28 left-[12%] sm:left-[16%]" />
        <FloatingDecor svgIcon="leaf" svgColor="#7BC950" svgSize={20} float="bob" className="bottom-60 right-[17%] sm:right-[22%]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            {/* Left: mascot image */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -4 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1"
            >
              <div className="absolute -inset-6 sm:-inset-10 rounded-blob1 bg-gradient-to-br from-sunshine/55 via-coral/45 to-berry/35 blur-xl opacity-55 -z-10" />
              <div className="relative rounded-blob2 bg-gradient-to-br from-sunshine-50 via-coral-50/80 to-cream p-6 sm:p-10 shadow-paperlift">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <Image
                      src="https://www.eurokidsindia.com/ek-new-2023/images/Admission/aword-left.png"
                      alt="Cute rabbit with trophy mascot"
                      width={380}
                      height={380}
                      className="w-full h-auto drop-shadow-[0_20px_30px_rgba(74,52,40,0.25)]"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10, rotate: 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 bg-white rounded-postcard shadow-paperlift px-4 sm:px-5 py-3 sm:py-3.5 max-w-[190px] sm:max-w-[220px] border-2 border-coral/30 rotate-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#7C5CBF">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                    <p className="font-nunito font-bold text-base sm:text-lg text-berry leading-tight">
                      admissions open
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-ink/70">
                    Limited seats for 2026
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: text + stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-2"
            >
              <span className="inline-flex items-center gap-2.5 font-nunito font-bold text-lg sm:text-xl text-berry mb-4">
                <span className="w-10 h-0.5 bg-berry/45 rounded" />
                celebrations & milestones
                <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="#7C5CBF" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                </motion.svg>
              </span>

              <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
                Little blooms,{" "}
                <span className="squiggle-underline">big achievements</span>
                <br />
                <span className="inline-block rotate-1 mt-2 bg-gradient-to-r from-grass via-skyteal to-berry bg-clip-text text-transparent">
                  year after happy year
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-base sm:text-lg font-semibold text-ink/75 leading-relaxed"
              >
                Every small win here is a parade-worthy moment. From first
                steps into the classroom to confidently walking onto the Grade
                1 bus — we celebrate every step, and our numbers tell a warm,
                happy story.
              </motion.p>

              {/* CountUp stats grid */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -4 : 4 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    whileHover={{
                      y: -8,
                      rotate: i % 2 === 0 ? 1 : -1,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 280 },
                    }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className={`relative ${s.rotate} rounded-blob3 ${s.bgTint} p-5 sm:p-6 shadow-paper hover:shadow-paperlift transition-shadow border border-white/60`}
                  >
                    {/* Icon badge */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${s.tint} flex items-center justify-center shadow-paper mb-4`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF8EC">
                        {s.icon}
                      </svg>
                    </div>
                    <CountUpNumber
                      target={s.numericValue}
                      suffix={s.suffix}
                      tint={s.tint}
                    />
                    <p className="mt-1.5 text-sm sm:text-base font-semibold text-ink/75 leading-snug">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-wrap gap-4 items-center"
              >
                <BouncyButton size="lg" href="#contact">
                  Secure My Child&apos;s Seat
                </BouncyButton>
                <BouncyButton variant="sunshine" size="lg" href="#gallery">
                  See Our Events
                </BouncyButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </BackgroundTexture>
    </section>
  );
}
