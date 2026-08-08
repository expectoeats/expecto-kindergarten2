"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DoodleDivider from "./ui/DoodleDivider";
import FloatingDecor from "./ui/FloatingDecor";
import BouncyButton from "./ui/BouncyButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative">
      <div className="h-16 sm:h-24 -mt-1">
        <DoodleDivider variant="wave" color="#3D2952" accent="#5A3A77" flip />
      </div>

      <div className="relative bg-deepberry pb-28 sm:pb-40 pt-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-repeat bg-center opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://kindheitkindergarten.com/img/ornaments/childrenbg.png')",
            backgroundSize: "600px auto",
          }}
        />

        <FloatingDecor
          svgIcon="star"
          svgColor="#FFC93C"
          svgSize={28}
          float="twinkle"
          className="top-24 left-[5%] sm:left-[9%]"
        />
        <FloatingDecor
          svgIcon="sparkle"
          svgColor="#FF6B6B"
          svgSize={22}
          float="twinkle"
          delay={0.7}
          className="top-40 right-[7%] sm:right-[11%]"
        />
        <FloatingDecor
          svgIcon="circle"
          svgColor="#2EC4B6"
          svgSize={60}
          float="floatySlow"
          delay={0.3}
          className="bottom-40 left-[3%] sm:left-[6%]"
        />
        <FloatingDecor
          svgIcon="leaf"
          svgColor="#7BC950"
          svgSize={24}
          float="bob"
          className="bottom-56 right-[10%] sm:right-[14%]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 font-accent text-xl sm:text-2xl text-sunshine font-medium mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFC93C"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"/></svg>
              say hello &amp; book a visit
            </span>
            <h2 className="font-nunito font-900 text-3xl sm:text-4xl lg:text-5xl text-cream leading-[1.1] tracking-tight" style={{ fontWeight: 900 }}>
              Come see our{" "}
              <span className="squiggle-underline">happy school</span>
              <br />
              <span className="inline-block rotate-1 mt-1 bg-gradient-to-r from-sunshine via-coral to-skyteal bg-clip-text text-transparent">
                your little one will never want to leave
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-cream/80 font-medium leading-relaxed">
              Fill the form, drop a WhatsApp, or just ring our bell. We usually
              reply within a couple of hours with a warm smile and an invite for chai.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 relative"
            >
              <div className="absolute -inset-3 rounded-blob2 bg-gradient-to-br from-sunshine/40 via-coral/30 to-skyteal/40 blur-xl opacity-60" />
              <div className="relative bg-cream rounded-blob1 shadow-paperlift p-6 sm:p-9 lg:p-10 border-4 border-sunshine/40">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 sm:py-14"
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -10, 5, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.9 }}
                      className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-sunshine to-coral flex items-center justify-center shadow-paperlift mb-6"
                    >
                      <svg width="50" height="50" viewBox="0 0 24 24" fill="#FFF8EC">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </motion.div>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink mb-3">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFC93C" className="inline-block mr-2 -mt-1"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      Yay! We got your message
                    </h3>
                    <p className="font-accent text-xl sm:text-2xl text-berry max-w-md mx-auto leading-snug">
                      Our head teacher Priya will call you within 2 hours to
                      plan a warm little campus tour. Bring socks for the ball pit!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                          Your Name *
                        </label>
                        <input
                          required
                          value={form.parentName}
                          onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full rounded-3xl px-5 py-3.5 bg-white/70 border-2 border-transparent focus:border-coral focus:bg-white outline-none transition-all font-medium text-ink placeholder:text-ink/40 shadow-paper"
                        />
                      </div>
                      <div>
                        <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                          Child's Name *
                        </label>
                        <input
                          required
                          value={form.childName}
                          onChange={(e) => setForm({ ...form, childName: e.target.value })}
                          placeholder="e.g. Aanya"
                          className="w-full rounded-3xl px-5 py-3.5 bg-white/70 border-2 border-transparent focus:border-skyteal focus:bg-white outline-none transition-all font-medium text-ink placeholder:text-ink/40 shadow-paper"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                          Child's Age *
                        </label>
                        <select
                          required
                          value={form.childAge}
                          onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                          className="w-full rounded-3xl px-5 py-3.5 bg-white/70 border-2 border-transparent focus:border-sunshine focus:bg-white outline-none transition-all font-medium text-ink shadow-paper appearance-none cursor-pointer"
                        >
                          <option value="">Pick an age group</option>
                          <option>1.5 – 2 years (Playgroup)</option>
                          <option>2 – 3 years (Playgroup)</option>
                          <option>3 – 4 years (Nursery)</option>
                          <option>4 – 5 years (LKG)</option>
                          <option>5 – 6 years (UKG)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 —"
                          className="w-full rounded-3xl px-5 py-3.5 bg-white/70 border-2 border-transparent focus:border-grass focus:bg-white outline-none transition-all font-medium text-ink placeholder:text-ink/40 shadow-paper"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                        Email ID
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="For updates &amp; photo newsletters"
                        className="w-full rounded-3xl px-5 py-3.5 bg-white/70 border-2 border-transparent focus:border-berry focus:bg-white outline-none transition-all font-medium text-ink placeholder:text-ink/40 shadow-paper"
                      />
                    </div>

                    <div>
                      <label className="block font-display font-medium text-sm text-ink/80 mb-2 ml-1">
                        Anything you'd like us to know?
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Allergies, shy personality, favourite things — we'd love to know"
                        className="w-full rounded-3xl px-5 py-4 bg-white/70 border-2 border-transparent focus:border-coral focus:bg-white outline-none transition-all font-medium text-ink placeholder:text-ink/40 shadow-paper resize-none"
                      />
                    </div>

                    <div className="pt-3 flex flex-wrap gap-4 items-center">
                      <BouncyButton type="submit" size="lg">
                        Send Enquiry
                      </BouncyButton>
                      <p className="font-accent text-lg text-berry/80">
                        or WhatsApp us: <span className="font-medium">+91 98765 43210</span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="relative rounded-blob2 bg-gradient-to-br from-sunshine to-coral p-7 sm:p-8 shadow-paperlift">
                <div className="w-14 h-14 rounded-2xl bg-cream/25 flex items-center justify-center mb-5 shadow-paper">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFF8EC">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <h3 className="font-display font-medium text-2xl text-cream mb-2">
                  Find Our School
                </h3>
                <p className="text-cream/95 font-medium leading-relaxed text-base">
                  42, Sunshine Avenue, Green Park,
                  <br />
                  Near Community Park,
                  <br />
                  Bengaluru – 560034
                </p>
              </div>

              <div className="relative rounded-blob3 bg-gradient-to-br from-skyteal to-grass p-7 sm:p-8 shadow-paperlift">
                <div className="w-14 h-14 rounded-2xl bg-cream/25 flex items-center justify-center mb-5 shadow-paper">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFF8EC">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a1 1 0 00.24-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1zM6.54 5h.8a9.26 9.26 0 00-.3 1.77L6.13 8.2a15.14 15.14 0 014.21-4.21l1.43 0.91c.39.25.85.2 1.18-.14l.85-.85a.99.99 0 01.95-.26 11.35 11.35 0 003.56.54v.8a9.26 9.26 0 01-1.77-.3l-.91 1.43c-.34.53-.29 1.22.14 1.56l.85.85c.46.46.36 1.26-.14 1.56-.49.3-1.03.52-1.6.66v.45l-.79-.45z" />
                  </svg>
                </div>
                <h3 className="font-display font-medium text-2xl text-cream mb-4">
                  Call &amp; Hours
                </h3>
                <ul className="space-y-3 text-cream/95 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cream/25 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFF8EC">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </span>
                    <span className="pt-0.5">+91 98765 43210 <br />(Mon – Sat)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cream/25 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFF8EC">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-5v-2h4V5h2z" />
                      </svg>
                    </span>
                    <span className="pt-0.5">8:30 AM – 1:30 PM <br />(School)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cream/25 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFF8EC">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </span>
                    <span className="pt-0.5">hello@littlebloom.edu.in</span>
                  </li>
                </ul>
              </div>

              <div className="relative clip-blob-2 overflow-hidden shadow-paperlift border-4 border-cream/20 aspect-[4/3]">
                <iframe
                  title="Little Bloom Kindergarten Map"
                  className="w-full h-full border-0"
                  style={{ filter: "saturate(1.1) contrast(1.05)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.74748974494!2d77.5845998!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8324c0983d0cd32!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
