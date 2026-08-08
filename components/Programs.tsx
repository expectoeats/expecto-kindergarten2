"use client";

import { motion } from "framer-motion";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";
import BouncyButton from "./ui/BouncyButton";
import BackgroundTexture from "./BackgroundTexture";

const programs = [
  {
    name: "Playgroup",
    age: "1.5 – 2.5 yrs",
    color: "from-sunshine-50 via-sunshine-50/60 to-cream",
    badgeBg: "bg-sunshine",
    iconBg: "bg-sunshine/30",
    iconColor: "#FFC93C",
    accent: "bg-sunshine",
    desc: "Soft settling, sensory play, first songs and giggles with our cuddly toddler team.",
    highlights: ["Sensory bins", "Rhyme time", "Gentle separation"],
    icon: (
      <path d="M12 2a6 6 0 00-6 6v4a6 6 0 0012 0V8a6 6 0 00-6-6zm-3 18a3 3 0 006 0H9zm10-3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-17 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM20.5 13c.8 0 1.5-.7 1.5-1.5S21.3 10 20.5 10 19 10.7 19 11.5s.7 1.5 1.5 1.5zm-17 0C4.3 13 5 12.3 5 11.5S4.3 8.5 3.5 8.5 2 9.2 2 10s.7 1.5 1.5 1.5z" />
    ),
  },
  {
    name: "Nursery",
    age: "2.5 – 3.5 yrs",
    color: "from-skyteal-50 via-skyteal-50/60 to-cream",
    badgeBg: "bg-skyteal",
    iconBg: "bg-skyteal/30",
    iconColor: "#2EC4B6",
    accent: "bg-skyteal",
    desc: "Tiny hands painting, stacking, and making best friends in a room full of wonder.",
    highlights: ["Messy art", "Shape games", "First stories"],
    icon: (
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    ),
  },
  {
    name: "LKG",
    age: "3.5 – 4.5 yrs",
    color: "from-coral-50 via-coral-50/60 to-cream",
    badgeBg: "bg-coral",
    iconBg: "bg-coral/30",
    iconColor: "#FF6B6B",
    accent: "bg-coral",
    desc: "Phonics, counting, sharing snacks and that magical moment they read their first word.",
    highlights: ["Phonics fun", "Number songs", "Show & Tell"],
    icon: (
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    ),
  },
  {
    name: "UKG",
    age: "4.5 – 6 yrs",
    color: "from-grass-50 via-grass-50/60 to-cream",
    badgeBg: "bg-grass",
    iconBg: "bg-grass/30",
    iconColor: "#7BC950",
    accent: "bg-grass",
    desc: "Big-kid confidence, early math, writing sentences, and a brave heart for Grade 1.",
    highlights: ["Early math", "Sentence writing", "Annual concert"],
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 12.99L2 10l0 5l10 5 10-5 0-5-10 4.99z" />
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="cloud" color="#E0F7F4" accent="#B2EBF2" />
      </div>

      <BackgroundTexture
        theme="sky"
        className="relative bg-gradient-to-b from-[#E0F7F4] via-skyteal-50/50 to-white pb-28 sm:pb-40 pt-8"
      >
        <FloatingDecor
          svgIcon="star"
          svgColor="#2EC4B6"
          svgSize={22}
          float="twinkle"
          className="top-20 left-[4%] sm:left-[8%]"
        />
        <FloatingDecor
          svgIcon="dot"
          svgColor="#FF6B6B"
          svgSize={14}
          float="twinkle"
          delay={0.6}
          className="top-14 right-[12%] sm:right-[16%]"
        />
        <FloatingDecor
          svgIcon="leaf"
          svgColor="#7BC950"
          svgSize={24}
          float="floaty"
          className="bottom-40 right-[5%] sm:right-[9%]"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 font-accent text-xl sm:text-2xl text-skyteal font-medium mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#2EC4B6"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
              our little classrooms
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FF6B6B"
                className="animate-twinkle"
              >
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
              </svg>
            </span>
            <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
              Four gentle programs,
              <br />
              <span className="inline-block rotate-1 mt-1 bg-gradient-to-r from-sunshine via-coral to-berry bg-clip-text text-transparent">
                one happy campus
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-ink/75 font-medium leading-relaxed">
              Every age has its own magic. Our programs grow with your child —
              soft and cuddly at first, steadily curious, then confidently ready
              for big school.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {programs.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{
                  y: -14,
                  rotate: 0,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 260, damping: 16 },
                }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className={`relative rounded-blob1 bg-gradient-to-br ${p.color} p-6 sm:p-7 shadow-paper hover:shadow-paperlift transition-shadow border border-white/60 group`}
              >
                <div
                  className={`absolute -top-4 right-5 ${p.badgeBg} text-cream rounded-full px-4 py-1.5 font-display font-medium text-xs sm:text-sm shadow-paper`}
                >
                  {p.age}
                </div>

                <div
                  className={`${p.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-blob4 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill={p.iconColor}
                  >
                    {p.icon}
                  </svg>
                </div>

                <h3 className="font-display font-medium text-xl sm:text-2xl text-ink mb-1">
                  <span className="squiggle-underline">{p.name}</span>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink/75 font-medium leading-relaxed">
                  {p.desc}
                </p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm font-medium text-ink/70"
                    >
                      <span
                        className={`w-5 h-5 rounded-full ${p.accent} flex items-center justify-center shrink-0`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="#FFF8EC"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <BouncyButton variant="teal" size="lg" href="#contact">
              Download Full Curriculum PDF
            </BouncyButton>
            <p className="mt-4 font-accent text-lg text-coral">
              or call us at +91 98765 43210 for a friendly chat <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF6B6B" className="inline-block ml-1 -mt-0.5"><path d="M12 2C13.5 2 14.7 3 15 4.3C16.3 4.6 17.3 5.6 17.5 7C18.9 7.3 20 8.5 20 10C20 11.4 19 12.6 17.7 12.9C17.4 14.4 16.3 15.6 14.8 15.9C14.5 17.3 13.3 18.5 11.8 18.7C10.3 18.5 9.1 17.3 8.8 15.9C7.3 15.6 6.2 14.4 5.9 12.9C4.6 12.6 3.6 11.4 3.6 10C3.6 8.5 4.7 7.3 6.1 7C6.4 5.6 7.4 4.6 8.7 4.3C9 3 10.2 2 12 2Z"/></svg>
            </p>
          </motion.div>
        </div>
      </BackgroundTexture>
    </section>
  );
}
