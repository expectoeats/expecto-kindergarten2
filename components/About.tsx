"use client";

import { motion } from "framer-motion";
import BlobImage from "./ui/BlobImage";
import BackgroundTexture from "./BackgroundTexture";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";

const features = [
  {
    title: "Warm & Gentle",
    desc: "Teachers who hug, listen, and know each child by heart.",
    tint: "bg-sunshine/15",
    iconColor: "#FFC93C",
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  {
    title: "Play-Based",
    desc: "Learning through blocks, paints, stories, and messy hands.",
    tint: "bg-skyteal/15",
    iconColor: "#2EC4B6",
    icon: (
      <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2H3v2h2v8H3v2h18v-2h-1v-8h2v-2h-3zm-7 10v-6H11v6H8v-6H5V6h14v6h-3v6h-3z" />
    ),
  },
  {
    title: "Small Groups",
    desc: "6:1 child-teacher ratio so no little one gets overlooked.",
    tint: "bg-coral/15",
    iconColor: "#FF6B6B",
    icon: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    ),
  },
  {
    title: "Safe & Clean",
    desc: "Fully sanitized, CCTV guarded, allergen-aware campus.",
    tint: "bg-grass/15",
    iconColor: "#7BC950",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="wave" color="#FFF3D6" accent="#FFE6A8" />
      </div>

      <BackgroundTexture
        theme="sunshine"
        className="relative bg-gradient-to-b from-[#FFF3D6] via-sunshine-50/60 to-white pb-28 sm:pb-40 pt-10"
      >
        <FloatingDecor
          svgIcon="star"
          svgColor="#FF6B6B"
          svgSize={26}
          float="twinkle"
          delay={0.4}
          className="top-16 left-[6%] sm:left-[10%]"
        />
        <FloatingDecor
          svgIcon="circle"
          svgColor="#2EC4B6"
          svgSize={56}
          float="floatySlow"
          className="top-28 right-[5%] sm:right-[8%]"
        />
        <FloatingDecor
          svgIcon="squiggle"
          svgColor="#7C5CBF"
          svgSize={16}
          float="floaty"
          delay={1}
          className="bottom-20 left-[3%] sm:left-[6%]"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-10 w-32 h-32 sm:w-48 sm:h-48 rounded-blob4 bg-coral/30 -z-10 blur-sm" />
              <div className="absolute -bottom-5 -right-4 sm:-bottom-8 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 rounded-blob2 bg-skyteal/25 -z-10 blur-sm" />

              <BlobImage
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
                alt="Happy teacher helping kids with art activity"
                variant="blob2"
                width={700}
                height={620}
                useClip
                className="shadow-paperlift"
              />

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 sm:-bottom-8 -left-3 sm:-left-6 bg-cream rounded-postcard shadow-paperlift px-5 py-4 max-w-[200px] sm:max-w-[240px] border-2 border-sunshine/25"
              >
                <p className="font-accent text-xl sm:text-2xl text-coral font-medium leading-tight">
                  "My class feels like a big warm hug everyday!"
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-ink/70">
                  — Priya Ma'am, Senior Teacher
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 font-accent text-xl sm:text-2xl text-coral font-medium mb-4"
              >
                <span className="w-10 h-0.5 bg-coral/50 rounded" />
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF6B6B" className="animate-wiggle"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
                hello parents & little stars
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#FFC93C"
                  className="animate-wiggle"
                >
                  <path d="M12 2L14.5 8.5L21 9.2L16 14L17.5 21L12 17.8L6.5 21L8 14L3 9.2L9.5 8.5L12 2Z" />
                </svg>
              </motion.span>

              <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
                Why families choose{" "}
                <span className="squiggle-underline">Little Bloom</span>
                <br />
                <span className="rotate-1 inline-block mt-2 bg-gradient-to-r from-skyteal to-berry bg-clip-text text-transparent">
                  over every other school
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-base sm:text-lg text-ink/75 font-medium leading-relaxed max-w-lg"
              >
                We know dropping your toddler off for the first time feels
                scary. That's why at Little Bloom, every door has a smiling
                face, every corner invites wonder, and every nap-time story is
                a gentle reminder: your child is home here.
              </motion.p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1, scale: 1.02 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className={`relative rounded-blob3 ${f.tint} p-5 sm:p-6 shadow-paper hover:shadow-paperlift transition-shadow border border-white/50`}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-paper mb-4"
                      style={{ background: `${f.iconColor}22` }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={f.iconColor}
                      >
                        {f.icon}
                      </svg>
                    </div>
                    <h3 className="font-display font-medium text-lg sm:text-xl text-ink mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-sm sm:text-base text-ink/70 font-medium leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </BackgroundTexture>
    </section>
  );
}
