"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BouncyButton from "./ui/BouncyButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["home", "about", "programs", "gallery", "admissions", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-cream/90 backdrop-blur-xl shadow-paperlift border border-sunshine/20"
              : "bg-cream/60 backdrop-blur-md shadow-paper border border-sunshine/10"
          }`}
        >
          <Link href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-sunshine to-coral flex items-center justify-center shadow-soft"
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFF8EC">
                <path d="M12 2L14.5 8.5L21 9.2L16 14L17.5 21L12 17.8L6.5 21L8 14L3 9.2L9.5 8.5L12 2Z" />
              </svg>
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="font-nunito font-900 text-base sm:text-lg text-ink tracking-tight" style={{ fontWeight: 900 }}>
                Little Bloom
              </span>
              <span className="font-nunito font-bold text-xs sm:text-sm text-coral -mt-0.5 hidden sm:block">
                kindergarten <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFC93C" className="inline-block ml-0.5 -mt-1"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 font-nunito font-bold text-sm transition-colors group ${isActive ? "text-coral" : "text-ink/70 hover:text-coral"}`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute left-1/2 -translate-x-1/2 bottom-0.5 h-[3px] bg-gradient-to-r from-coral to-sunshine rounded-full"
                      animate={{ width: isActive ? "70%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <BouncyButton href="#contact" size="sm">
                Book a Visit
              </BouncyButton>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-10 h-10 rounded-full bg-sunshine/20 hover:bg-sunshine/30 flex items-center justify-center transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={open ? "open" : "closed"}
                className="relative w-5 h-4"
              >
                <motion.span
                  variants={{
                    closed: { top: 0, rotate: 0 },
                    open: { top: 8, rotate: 45 },
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-ink rounded"
                />
                <motion.span
                  variants={{
                    closed: { top: 8, opacity: 1 },
                    open: { top: 8, opacity: 0 },
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-ink rounded"
                />
                <motion.span
                  variants={{
                    closed: { top: 16, rotate: 0 },
                    open: { top: 8, rotate: -45 },
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-ink rounded"
                />
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 mx-1 rounded-3xl bg-cream/98 backdrop-blur-xl shadow-paperlift border border-sunshine/20 overflow-hidden"
            >
              <div className="flex flex-col p-5 gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-5 py-3.5 rounded-2xl font-display font-medium text-ink/75 hover:text-ink hover:bg-sunshine/15 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 sm:hidden">
                  <BouncyButton href="#contact" size="md" className="w-full">
                    Book a Visit
                  </BouncyButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
