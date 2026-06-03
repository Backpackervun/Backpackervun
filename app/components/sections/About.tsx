"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              About Me
            </p>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-8 uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Hi, I&apos;m<br />
              <span style={{ color: "var(--color-accent)" }}>Ervan Kusuma.</span>
            </h2>

            <div className="space-y-5 text-sm font-light leading-loose" style={{ color: "rgba(240,236,228,0.6)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <p>
                From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places. I&apos;ve explored countries across Asia and the Middle East, gaining valuable insight into diverse traditions, lifestyles, and travel experiences.
              </p>
              <p>
                I&apos;ve led and organized group trips of various sizes — from small private groups to over 58 participants, including a large group trip to Bangkok and coordinating monthly Umrah pilgrimages for up to 36 participants.
              </p>
              <p>
                As a reliable trip buddy, I ensure every journey runs smoothly — from crafting detailed itineraries to making sure each participant has a meaningful and enjoyable experience. I also run my own production house, capturing authentic travel moments through photo and video.
              </p>
              <p>
                Currently, I&apos;m building Backpackervun to help more people enjoy well-planned, memorable, and purpose-driven adventures. <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>With me, travel becomes more than a destination — it becomes a story worth remembering.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
              {[
                { value: "58+", label: "Participants" },
                { value: "10+", label: "Countries" },
                { value: "36", label: "Umrah Group" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Hashtag */}
            <p className="mt-8 text-xs tracking-widest" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>
              #AwalSemuaCerita
            </p>
          </motion.div>

          {/* Right: Ervan's photo */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/ervan-profile.png"
                alt="Ervan Kusuma — Founder of Backpackervun"
                fill
                className="object-cover object-top"
                style={{ filter: "saturate(0.85) brightness(0.9)" }}
              />
              {/* Subtle vignette */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.2) 0%, transparent 50%, rgba(10,10,10,0.3) 100%)" }}
              />
            </div>

            {/* Quote card */}
            <div
              className="absolute -bottom-6 -left-6 lg:-left-10 max-w-xs p-5"
              style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
            >
              <p className="text-sm font-light leading-relaxed mb-3 italic" style={{ fontFamily: "var(--font-body)", color: "rgba(240,236,228,0.75)", fontWeight: 300 }}>
                &ldquo;Travel becomes more than a destination — it becomes a story worth remembering.&rdquo;
              </p>
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>
                — Ervan Kusuma
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
