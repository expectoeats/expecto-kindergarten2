"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";
import BackgroundTexture from "./BackgroundTexture";

const testimonials = [
  {
    name: "Ananya & Ravi Mehra",
    child: "Aarav, Nursery",
    avatarBg: "from-coral to-sunshine",
    initials: "AM",
    text: "We cried on his first day. Three months later, Aarav refuses to come home on weekends! The teachers remember every little quirk — his favourite purple cup, how he likes his sandwich crusts off.",
    cardBg: "bg-[#FFF9C4]",
    pinColor: "#FF6B6B",
    tapeColor: "#FFE082",
    rotation: "-rotate-2",
    stars: 5,
  },
  {
    name: "Sneha Krishnan",
    child: "Myra, LKG",
    avatarBg: "from-skyteal to-grass",
    initials: "SK",
    text: "Myra used to hide behind my legs at every social gathering. Now she comes home with stories, introduces herself to strangers, and even had a 'best friend sleepover' party invite. The confidence boost is unreal!",
    cardBg: "bg-[#E8F8F5]",
    pinColor: "#2EC4B6",
    tapeColor: "#B2EBF2",
    rotation: "rotate-1",
    stars: 5,
  },
  {
    name: "Rahul & Priya Kapoor",
    child: "Kabir, UKG",
    avatarBg: "from-sunshine to-coral",
    initials: "RK",
    text: "Kabir is academically so far ahead of what we expected, but what we love most is the kindness. He opens doors for his little sister now, shares snacks without being told — they taught him that, not us.",
    cardBg: "bg-[#FFF3E0]",
    pinColor: "#FFC93C",
    tapeColor: "#FFE0B2",
    rotation: "-rotate-1",
    stars: 5,
  },
  {
    name: "Meera Iyer",
    child: "Naina & Vihaan, Playgroup",
    avatarBg: "from-berry to-skyteal",
    initials: "MI",
    text: "Twin toddlers, enough said. Little Bloom handled my two tiny chaos-monsters with so much patience that even I take notes from their teachers. The daily WhatsApp photo updates made going back to work bearable.",
    cardBg: "bg-[#F3E5F5]",
    pinColor: "#7C5CBF",
    tapeColor: "#CE93D8",
    rotation: "rotate-2",
    stars: 5,
  },
  {
    name: "Arjun Deshmukh",
    child: "Aanya, Playgroup",
    avatarBg: "from-grass to-sunshine",
    initials: "AD",
    text: "I was the dad who called twice on day one. They answered with a photo of her eating pasta covered in sauce, grinning like a maniac. Now every morning she's the one pulling ME to the school gate.",
    cardBg: "bg-[#F1F8E9]",
    pinColor: "#7BC950",
    tapeColor: "#C5E1A5",
    rotation: "-rotate-1",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC93C">
          <path d="M12 2L14.5 8.5L21 9.2L16 14L17.5 21L12 17.8L6.5 21L8 14L3 9.2L9.5 8.5L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(2); // Center card active by default

  const visibleIndices = [
    (active - 1 + testimonials.length) % testimonials.length,
    active,
    (active + 1) % testimonials.length,
  ];

  return (
    <section className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="grass" color="#F1F8E9" accent="#C5E1A5" />
      </div>

      <BackgroundTexture
        theme="grass"
        className="relative bg-gradient-to-b from-[#F1F8E9] via-grass-50/40 to-white pb-28 sm:pb-40 pt-8 overflow-hidden"
      >
        <FloatingDecor svgIcon="star" svgColor="#7BC950" svgSize={26} float="twinkle" delay={0.3} className="top-20 left-[6%] sm:left-[10%]" />
        <FloatingDecor svgIcon="sparkle" svgColor="#FF6B6B" svgSize={20} float="twinkle" className="top-14 right-[10%] sm:right-[14%]" />
        <FloatingDecor svgIcon="circle" svgColor="#FFC93C" svgSize={54} float="floatySlow" delay={1} className="bottom-32 left-[3%] sm:left-[6%]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 font-nunito font-bold text-lg sm:text-xl text-grass mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#7BC950"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
              whispered by parents
            </span>
            <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
              Real words from{" "}
              <span className="squiggle-underline">moms & dads</span>
              <br />
              <span className="inline-block -rotate-1 mt-1 bg-gradient-to-r from-grass via-sunshine to-coral bg-clip-text text-transparent">
                (not reviews, thank-you notes)
              </span>
            </h2>
          </motion.div>

          {/* Desktop: 3 sticky note cards */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-center gap-6 lg:gap-8 py-8">
              {visibleIndices.map((tIdx, position) => {
                const t = testimonials[tIdx];
                const isCenter = position === 1;
                return (
                  <motion.div
                    key={tIdx}
                    layout
                    initial={{ opacity: 0, scale: 0.85, y: 40 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.75,
                      scale: isCenter ? 1 : 0.88,
                      y: isCenter ? -12 : 0,
                      rotate: isCenter ? 0 : position === 0 ? -4 : 4,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    whileHover={!isCenter ? { scale: 0.93, opacity: 0.9 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    onClick={() => !isCenter && setActive(tIdx)}
                    className={`relative w-80 lg:w-96 shrink-0 ${t.cardBg} rounded-2xl shadow-[0_8px_30px_rgba(74,52,40,0.15),0_2px_8px_rgba(74,52,40,0.08)] ${!isCenter ? "cursor-pointer" : ""}`}
                    style={{
                      filter: isCenter ? "none" : "blur(0.5px)",
                    }}
                  >
                    {/* Tape strips at top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-6">
                      <div
                        className="w-10 h-5 rounded-sm opacity-75 shadow-sm"
                        style={{ background: t.tapeColor }}
                      />
                    </div>

                    {/* Push pin */}
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-md border-2 border-white/50 z-10"
                      style={{ background: t.pinColor }}
                    >
                      <div className="absolute inset-1 rounded-full bg-white/30" />
                    </div>

                    <div className="p-6 lg:p-7 pt-7">
                      {/* Stars */}
                      <StarRating count={t.stars} />

                      {/* Quote */}
                      <div className="mt-3 relative">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={t.pinColor} opacity="0.25" className="absolute -top-1 -left-1">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                        <p className="font-semibold text-sm sm:text-base text-ink/85 leading-relaxed pl-5">
                          "{t.text}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-5 pt-4 border-t border-ink/10 flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-nunito font-bold text-base text-cream shadow-sm`}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-nunito font-700 text-sm text-ink leading-tight" style={{ fontWeight: 700 }}>
                            {t.name}
                          </p>
                          <p className="font-semibold text-xs mt-0.5 flex items-center gap-1" style={{ color: t.pinColor }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            proud parent of {t.child}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-400 ${
                      i === active
                        ? "w-8 h-3 bg-gradient-to-r from-grass to-sunshine"
                        : "w-3 h-3 bg-ink/20 hover:bg-ink/35"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: single card carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              {(() => {
                const t = testimonials[active];
                return (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 60, rotate: 4 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -60, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    className={`relative ${t.cardBg} rounded-2xl mx-2 shadow-[0_8px_30px_rgba(74,52,40,0.15)]`}
                  >
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="w-12 h-5 rounded-sm opacity-70" style={{ background: t.tapeColor }} />
                    </div>
                    <div className="p-6 pt-7">
                      <StarRating count={t.stars} />
                      <p className="font-semibold text-sm text-ink/85 leading-relaxed mt-3">"{t.text}"</p>
                      <div className="mt-5 pt-4 border-t border-ink/10 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-nunito font-bold text-sm text-cream shadow-sm`}>
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-nunito font-bold text-sm text-ink">{t.name}</p>
                          <p className="font-semibold text-xs mt-0.5 flex items-center gap-1" style={{ color: t.pinColor }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            {t.child}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-cream shadow-paper border border-sunshine/20 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`}>
                    <span className={`block rounded-full transition-all ${i === active ? "w-6 h-2.5 bg-grass" : "w-2.5 h-2.5 bg-ink/20"}`} />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-cream shadow-paper border border-sunshine/20 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </BackgroundTexture>
    </section>
  );
}
