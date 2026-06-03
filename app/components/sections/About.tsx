"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-border)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
            >
              Our Story
            </p>

            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-snug mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
            >
              Built by a traveler,
              <br />
              <em>for every traveler.</em>
            </h2>

            <div
              className="space-y-5 text-base font-light leading-loose"
              style={{ color: "rgba(240,236,228,0.55)", fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <p>
                I started Backpackervun from a guesthouse in Kyoto, tired of
                scattered notes, broken spreadsheets, and endless browser tabs.
                Every trip deserved something better.
              </p>
              <p>
                This isn&apos;t a tourism platform. It&apos;s a filmmaker&apos;s
                notebook, a strategist&apos;s toolkit, and a traveler&apos;s
                companion — folded into one quiet, powerful ecosystem.
              </p>
              <p>
                Whether you&apos;re crossing Southeast Asia on a budget or
                chasing golden hour in Patagonia, Backpackervun moves with you.
              </p>
            </div>

            {/* Stat row */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10"
              style={{ borderTop: "1px solid var(--color-border)" }}>
              {[
                { value: "12k+", label: "Travelers" },
                { value: "40+", label: "Countries" },
                { value: "300+", label: "Trip Plans" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl lg:text-3xl font-light mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cinematic image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop')",
                  filter: "saturate(0.55) brightness(0.75)",
                }}
              />
              {/* Overlay vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%, rgba(10,10,10,0.4) 100%)",
                }}
              />
            </div>

            {/* Floating quote card */}
            <div
              className="absolute -bottom-6 -left-6 lg:-left-12 max-w-xs p-6"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-sm font-light leading-relaxed italic mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "rgba(240,236,228,0.75)",
                  fontSize: "1rem",
                }}
              >
                &ldquo;The world is too large to plan loosely and too precious to rush through.&rdquo;
              </p>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
              >
                — Backpackervun
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
