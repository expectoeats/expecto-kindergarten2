"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Programs", href: "#programs" },
  { label: "Campus Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  {
    label: "Facebook",
    color: "hover:bg-[#4267B2]",
    icon: (
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    ),
  },
  {
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    icon: (
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
    ),
  },
  {
    label: "YouTube",
    color: "hover:bg-[#FF0000]",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
  {
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-14 sm:pt-20 pb-10 overflow-hidden">
      <div className="absolute -top-14 sm:-top-20 left-0 right-0 w-full h-16 sm:h-24 z-0 pointer-events-none">
        <Image
          src="https://www.madeeasypreschool.in/public/front/img/background/footer_top.png"
          alt=""
          fill
          sizes="100vw"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-14 border-b border-cream/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="#home" className="flex items-center gap-3 mb-5">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-sunshine to-coral flex items-center justify-center shadow-paper"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFF8EC">
                  <path d="M12 2L14.5 8.5L21 9.2L16 14L17.5 21L12 17.8L6.5 21L8 14L3 9.2L9.5 8.5L12 2Z" />
                </svg>
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-medium text-xl text-cream">
                  Little Bloom
                </span>
                <span className="font-accent text-base text-sunshine -mt-0.5">
                  kindergarten <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC93C" className="inline-block ml-1 -mt-1.5"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
                </span>
              </div>
            </Link>
            <p className="text-cream/75 font-medium leading-relaxed text-base mb-6 max-w-xs">
              A sunny little kindergarten home where every day is paint on
              fingers, songs in the air, and proud little faces at the gate.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -5, scale: 1.1, rotate: 4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center text-cream transition-colors ${s.color}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    {s.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-medium text-lg text-cream mb-5">
              <span className="squiggle-underline">Quick Links</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-cream/80 hover:text-sunshine font-medium transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-sunshine group-hover:scale-150 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-medium text-lg text-cream mb-5">
              <span className="squiggle-underline">Contact</span>
            </h4>
            <ul className="space-y-3.5 font-medium text-sm text-cream/80 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-2xl bg-sunshine/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC93C">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span>
                  42, Sunshine Avenue
                  <br />
                  Green Park, Bengaluru 560034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-2xl bg-coral/15 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF6B6B">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-2xl bg-skyteal/15 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#2EC4B6">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span>hello@littlebloom.edu.in</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-medium text-lg text-cream mb-3">
              <span className="squiggle-underline">Stay in the Loop</span>
            </h4>
            <p className="font-nunito font-semibold text-lg sm:text-xl text-sunshine leading-snug mb-4 flex items-center gap-1.5">
              With little adventures from school
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC93C"><path d="M12 2C13.5 2 14.7 3 15 4.3C16.3 4.6 17.3 5.6 17.5 7C18.9 7.3 20 8.5 20 10C20 11.4 19 12.6 17.7 12.9C17.4 14.4 16.3 15.6 14.8 15.9C14.5 17.3 13.3 18.5 11.8 18.7C10.3 18.5 9.1 17.3 8.8 15.9C7.3 15.6 6.2 14.4 5.9 12.9C4.6 12.6 3.6 11.4 3.6 10C3.6 8.5 4.7 7.3 6.1 7C6.4 5.6 7.4 4.6 8.7 4.3C9 3 10.2 2 12 2Z"/></svg>
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-full px-5 py-3 bg-cream/10 border border-cream/20 focus:border-sunshine focus:bg-cream/15 outline-none transition-all font-semibold text-cream placeholder:text-cream/50"
              />
              <button
                type="submit"
                className="w-full font-display font-medium rounded-full px-6 py-3 bg-gradient-to-r from-coral to-sunshine text-ink hover:brightness-105 transition-all shadow-paper flex items-center justify-center gap-2 group"
              >
                Join the Fun
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-cream/70 text-sm font-medium">
          <p>
            © {new Date().getFullYear()} Little Bloom Kindergarten. Made with{" "}
            <span className="text-coral">lots of hugs & glitter</span>.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-sunshine transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sunshine transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-sunshine transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
