"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
        >
          <div className="flex items-center gap-3 bg-deepberry rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(61,41,82,0.5)] border border-white/10">
            {/* Ping dot */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-coral" />
            </span>
            <span className="font-nunito font-semibold text-cream text-sm flex-1 leading-tight">
              Admissions Open 2026!
            </span>
            <Link
              href="#contact"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-coral to-sunshine px-4 py-2 font-nunito font-bold text-sm text-ink shadow-paper"
            >
              Book Visit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:+919876543210"
              className="shrink-0 w-9 h-9 rounded-xl bg-skyteal/20 border border-skyteal/30 flex items-center justify-center"
              aria-label="Call us"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#2EC4B6">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
