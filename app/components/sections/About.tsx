"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Stats calculated from real data:
// 4x Umrah × 36 pax = 144
// B2B outing 58 pax + 50 pax = 108
// Japan trip 13 pax
// Other smaller trips ~35 pax
// Total ~300+ travelers

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "300+", label: "Travelers Guided" },
    { value: "15+", label: "Countries Visited" },
    { value: "5+", label: "Years Experience" },
    { value: "BNSP", label: "Certified Tour Leader" },
  ];

  const bios = [
    "From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places. I have explored countries across Asia, the Middle East, and beyond, gaining valuable insight into diverse traditions, lifestyles, and travel experiences.",
    "I have led group trips of all sizes — from intimate private groups to 58+ corporate participants, coordinated 4 rounds of Umrah pilgrimages with up to 36 participants each, and guided dedicated Japan tours and multi-country Southeast Asia trips.",
    "As a reliable trip buddy and BNSP-certified Tour Leader, I ensure every journey runs smoothly — from crafting detailed itineraries to making sure each traveler has a meaningful and memorable experience. I also run my own production house, capturing authentic moments through photo and video.",
    "Currently developing Backpackervun into a full-scale travel agency — built to help more people enjoy well-planned, purpose-driven city adventures.",
  ];

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>About</p>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", marginBottom: "0.2rem" }}>Hi, I&apos;m</h2>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", color: "var(--gold)", marginBottom: "2rem" }}>
              Ervan A. Anggakusuma.
            </h2>

            {bios.map((p, i) => (
              <p key={i} className="t-body" style={{ marginBottom: "0.85rem", fontSize: "0.82rem", fontWeight: 400 }}>{p}</p>
            ))}

            {/* Quote block */}
            <div style={{ margin: "1.75rem 0", padding: "1rem 1.4rem", borderLeft: "3px solid var(--gold)", background: "var(--gold-dim)" }}>
              <p style={{ fontFamily: "var(--f-body)", fontWeight: 600, fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.6, fontStyle: "normal" }}>
                &ldquo;With me, travel becomes more than a destination — it becomes a story worth remembering.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }} className="stats-grid">
              {stats.map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--f-head)", fontSize: "1.5rem", color: "var(--gold)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</p>
                  <p className="t-eye" style={{ marginTop: "0.35rem", color: "var(--text-faint)", fontSize: "0.55rem" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <span className="t-eye" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>Trip Director</span>
              <span style={{ color: "var(--text-faint)", fontSize: "0.7rem", fontFamily: "var(--f-body)" }}>·</span>
              <span className="t-eye" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>Visual Storyteller</span>
              <span style={{ color: "var(--text-faint)", fontSize: "0.7rem", fontFamily: "var(--f-body)" }}>·</span>
              <span className="t-eye" style={{ color: "rgba(232,168,32,0.45)", fontSize: "0.55rem" }}>#AwalSemuaCerita</span>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }}
            style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
              <Image src="/ervan-sq.jpg" alt="Ervan A. Anggakusuma" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,17,31,0.1) 0%, transparent 60%, rgba(7,17,31,0.2) 100%)" }} />
            </div>
            <div style={{ position: "absolute", bottom: "-1rem", left: "-1.25rem", padding: "0.9rem 1.2rem", background: "var(--bg)", border: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4 }}>Ervan A. Anggakusuma</p>
              <p style={{ fontFamily: "var(--f-body)", fontSize: "0.62rem", color: "var(--gold)", fontWeight: 600, marginTop: "0.15rem" }}>Trip Director · Visual Storyteller</p>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        @media (max-width: 540px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
