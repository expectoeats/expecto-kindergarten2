"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";
import BackgroundTexture from "./BackgroundTexture";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    alt: "Playing with colorful blocks",
    caption: "Block builders! 🧱",
    rotation: "-rotate-2",
    aspectClass: "aspect-square",
    tapeColor: "#FFE082",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    alt: "Creative painting activity",
    caption: "Paint time! 🎨",
    rotation: "rotate-1",
    aspectClass: "aspect-[3/4]",
    tapeColor: "#FFAB91",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
    alt: "Reading storybooks with teacher",
    caption: "Story circle! 📚",
    rotation: "-rotate-1",
    aspectClass: "aspect-[4/3]",
    tapeColor: "#80DEEA",
  },
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    alt: "Outdoor playground fun",
    caption: "Slide champions! 🛝",
    rotation: "rotate-2",
    aspectClass: "aspect-square",
    tapeColor: "#C5E1A5",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
    alt: "Art and craft session",
    caption: "Little artists! ✂️",
    rotation: "-rotate-2",
    aspectClass: "aspect-[3/4]",
    tapeColor: "#CE93D8",
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=700&q=80",
    alt: "Singing together in class",
    caption: "Music time! 🎵",
    rotation: "rotate-1",
    aspectClass: "aspect-[4/3]",
    tapeColor: "#FFE082",
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=700&q=80",
    alt: "Happy kindergarten friends",
    caption: "Best buddies! 👫",
    rotation: "-rotate-1",
    aspectClass: "aspect-square",
    tapeColor: "#FFAB91",
  },
  {
    src: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
    alt: "Colorful toys and play",
    caption: "Toy kingdom! 🧸",
    rotation: "rotate-2",
    aspectClass: "aspect-[4/3]",
    tapeColor: "#80DEEA",
  },
];

// Split into columns for masonry
function getMasonryColumns(items: typeof gallery, colCount: number) {
  const cols: (typeof gallery)[] = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => cols[i % colCount].push(item));
  return cols;
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const cols2 = getMasonryColumns(gallery, 2);
  const cols3 = getMasonryColumns(gallery, 3);
  const cols4 = getMasonryColumns(gallery, 4);

  const renderPolaroid = (g: typeof gallery[0], globalIdx: number, delay: number) => (
    <motion.div
      key={globalIdx}
      initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: parseInt(g.rotation) || 0 }}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{
        scale: 1.06,
        rotate: 0,
        y: -8,
        zIndex: 30,
        transition: { type: "spring", stiffness: 280 },
      }}
      onClick={() => setLightbox(globalIdx)}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="relative cursor-pointer mb-4 sm:mb-5 group"
      style={{ transformOrigin: "center bottom" }}
    >
      {/* Tape strip */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex justify-center">
        <div
          className="w-10 h-5 rounded-sm opacity-75 shadow-sm rotate-1"
          style={{ background: g.tapeColor }}
        />
      </div>

      {/* Polaroid frame */}
      <div className="bg-white p-2.5 pb-8 sm:p-3 sm:pb-10 rounded-sm shadow-[0_6px_24px_rgba(74,52,40,0.18),0_2px_6px_rgba(74,52,40,0.1)] group-hover:shadow-[0_16px_48px_rgba(74,52,40,0.26),0_4px_12px_rgba(74,52,40,0.15)] transition-shadow">
        {/* Image */}
        <div className={`relative w-full overflow-hidden rounded-sm ${g.aspectClass} bg-ink/5`}>
          <Image
            src={g.src}
            alt={g.alt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFF8EC">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <span className="font-nunito font-bold text-xs text-cream">View</span>
            </div>
          </div>
        </div>
        {/* Caption */}
        <p className="mt-2 sm:mt-2.5 text-center font-nunito font-bold text-[11px] sm:text-xs text-ink/70 tracking-wide">
          {g.caption}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="gallery" className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="zigzag" color="#FDE9E9" accent="#FFCDD2" />
      </div>

      <BackgroundTexture
        theme="coral"
        className="relative bg-gradient-to-b from-[#FDE9E9] via-coral-50/40 to-white pb-28 sm:pb-40 pt-8 overflow-hidden"
      >
        <FloatingDecor svgIcon="sparkle" svgColor="#FFC93C" svgSize={22} float="twinkle" delay={0.5} className="top-16 left-[8%] sm:left-[12%]" />
        <FloatingDecor svgIcon="star" svgColor="#2EC4B6" svgSize={20} float="twinkle" className="bottom-20 left-[5%] sm:left-[10%]" />
        <FloatingDecor svgIcon="leaf" svgColor="#FF6B6B" svgSize={22} float="bob" delay={1.3} className="bottom-56 right-[14%] sm:right-[18%]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 font-nunito font-bold text-lg sm:text-xl text-coral mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF6B6B"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
              a peek into our happy days
            </span>
            <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
              Campus life,
              <br />
              <span className="inline-block -rotate-1 mt-1 bg-gradient-to-r from-berry via-coral to-sunshine bg-clip-text text-transparent">
                unfiltered & joyful
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg font-semibold text-ink/75 leading-relaxed">
              Finger-paint messes, parade days, snack-time giggles, and those
              quiet proud moments when they finally tie their own shoelace.
            </p>
          </motion.div>

          {/* Masonry grid — responsive columns */}
          {/* Mobile: 2 cols */}
          <div className="sm:hidden">
            <div className="flex gap-4 items-start">
              {cols2.map((col, ci) => (
                <div key={ci} className="flex-1">
                  {col.map((g) => {
                    const globalIdx = gallery.indexOf(g);
                    return renderPolaroid(g, globalIdx, 0.06 * globalIdx);
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: 3 cols */}
          <div className="hidden sm:flex lg:hidden gap-5 items-start">
            {cols3.map((col, ci) => (
              <div key={ci} className={`flex-1 ${ci === 1 ? "mt-8" : ""}`}>
                {col.map((g) => {
                  const globalIdx = gallery.indexOf(g);
                  return renderPolaroid(g, globalIdx, 0.06 * globalIdx);
                })}
              </div>
            ))}
          </div>

          {/* Desktop: 4 cols */}
          <div className="hidden lg:flex gap-6 items-start">
            {cols4.map((col, ci) => (
              <div key={ci} className={`flex-1 ${ci === 1 ? "mt-10" : ci === 3 ? "mt-6" : ci === 2 ? "mt-16" : ""}`}>
                {col.map((g) => {
                  const globalIdx = gallery.indexOf(g);
                  return renderPolaroid(g, globalIdx, 0.07 * globalIdx);
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.button
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-coral text-cream flex items-center justify-center shadow-paperlift z-10"
                aria-label="Close"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: -3 }}
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === 0 ? gallery.length - 1 : (l as number) - 1)); }}
                className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-sunshine text-ink flex items-center justify-center shadow-paperlift"
                aria-label="Previous"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 3 }}
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === gallery.length - 1 ? 0 : (l as number) + 1)); }}
                className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-sunshine text-ink flex items-center justify-center shadow-paperlift"
                aria-label="Next"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </motion.button>

              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 3 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-3 pb-12 rounded-sm shadow-paperlift max-w-2xl w-full relative"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={gallery[lightbox].src}
                    alt={gallery[lightbox].alt}
                    fill
                    sizes="90vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center font-nunito font-bold text-sm text-ink/70">
                  {gallery[lightbox].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </BackgroundTexture>
    </section>
  );
}
