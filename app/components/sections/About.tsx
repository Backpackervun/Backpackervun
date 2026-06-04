"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { AboutData } from "@/app/types/sanity";

interface AboutProps {
  about: AboutData | null;
}

export default function About({ about }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const bio = about?.bio ?? ["From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places."];
  const stats = about?.stats ?? [{ value: "58+", label: "Participants" }, { value: "10+", label: "Countries" }, { value: "36", label: "Umrah Group" }];
  const profileImg = about?.profileImageUrl ?? "/ervan-profile.png";

  return (
    <section id="about" ref={ref} className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "var(--color-surface)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{about?.eyebrow ?? "About Me"}</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-8 uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Hi, I&apos;m<br /><span style={{ color: "var(--color-accent)" }}>{about?.name ?? "Ervan Kusuma"}.</span>
            </h2>
            <div className="space-y-5 text-sm font-light leading-loose" style={{ color: "rgba(240,236,228,0.6)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {bio.map((para, i) => <p key={i}>{para}</p>)}
              {about?.bioHighlight && (
                <p><span style={{ color: "var(--color-accent)", fontWeight: 500 }}>{about.bioHighlight}</span></p>
              )}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)" }}>{stat.value}</p>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs tracking-widest" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>{about?.hashtag ?? "#AwalSemuaCerita"}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={profileImg} alt={`${about?.name ?? "Ervan Kusuma"} — Founder of Backpackervun`} fill className="object-cover object-top" style={{ filter: "saturate(0.85) brightness(0.9)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.2) 0%, transparent 50%, rgba(10,10,10,0.3) 100%)" }} />
            </div>
            {about?.quote && (
              <div className="absolute -bottom-6 -left-6 lg:-left-10 max-w-xs p-5" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                <p className="text-sm font-light leading-relaxed mb-3 italic" style={{ fontFamily: "var(--font-body)", color: "rgba(240,236,228,0.75)", fontWeight: 300 }}>&ldquo;{about.quote}&rdquo;</p>
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>— {about.name}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
