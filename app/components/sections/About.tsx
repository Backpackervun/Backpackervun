"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "300+", label: "Travelers Guided" },
    { value: "15+",  label: "Countries Visited" },
    { value: "5+",   label: "Years Experience" },
    { value: "BNSP", label: "Certified Tour Leader" },
  ];

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {/* Decorative corner pattern */}
      <div className="pattern-dots" style={{ position: "absolute", top: 0, right: 0, width: "250px", height: "250px", pointerEvents: "none", opacity: 0.4 }} />

      <div className="container" style={{ position: "relative" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            {/* Gold accent line + eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div className="deco-line-h" />
              <p className="t-eye">About</p>
            </div>

            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem", letterSpacing: "-0.02em" }}>Hi, I&apos;m</h2>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "var(--gold)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
              Ervan Kusuma.
            </h2>

            {/* Storytelling bio — no specific numbers */}
            {[
              "From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places. I have explored countries across Asia, the Middle East, and Europe, gaining first-hand insight into diverse traditions, lifestyles, and travel experiences.",
              "Over the years I have led group trips of all sizes — from intimate private getaways to large corporate outings and spiritual pilgrimages. I have collaborated with multiple travel partners across Asia, building a track record of well-run, memorable journeys that travelers keep coming back for.",
              "As a BNSP-Certified Tour Leader, I ensure every journey runs smoothly — from crafting detailed itineraries to making sure each traveler has a meaningful, safe, and memorable experience. I also run my own production house, capturing authentic travel moments through photo and video.",
              "Currently developing Backpackervun into a full-scale travel agency — built to help more people enjoy well-planned, purpose-driven city adventures.",
            ].map((p, i) => (
              <p key={i} className="t-body" style={{ marginBottom: "0.85rem", fontSize: "0.82rem" }}>{p}</p>
            ))}

            {/* Quote */}
            <div style={{ margin: "1.75rem 0", padding: "1rem 1.4rem", borderLeft: "3px solid var(--gold)", background: "var(--gold-dim)" }}>
              <p style={{ fontFamily: "var(--f)", fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.6 }}>
                &ldquo;With me, travel becomes more than a destination — it becomes a story worth remembering.&rdquo;
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }} className="stats-grid">
              {stats.map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--f)", fontSize: s.value === "BNSP" ? "1.2rem" : "1.5rem", color: "var(--gold)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</p>
                  <p className="t-eye" style={{ marginTop: "0.35rem", color: "var(--text-faint)", fontSize: "0.52rem" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <div className="deco-line-h" style={{ width: "20px" }} />
              <span className="t-eye" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>Trip Director</span>
              <span style={{ color: "var(--border)", fontFamily: "var(--f)", fontWeight: 800 }}>·</span>
              <span className="t-eye" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>Visual Storyteller</span>
              <span style={{ color: "var(--border)", fontFamily: "var(--f)", fontWeight: 800 }}>·</span>
              <span className="t-eye" style={{ color: "rgba(232,168,32,0.45)", fontSize: "0.55rem" }}>#AwalSemuaCerita</span>
            </div>
          </motion.div>

          {/* Right photo */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }}
            style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
              <Image src="/ervan-sq.jpg" alt="Ervan Kusuma" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,17,31,0.1) 0%, transparent 60%, rgba(7,17,31,0.2) 100%)" }} />
            </div>
            {/* Name card */}
            <div style={{ position: "absolute", bottom: "-1rem", left: "-1.25rem", padding: "0.9rem 1.2rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)" }}>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.72rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.4 }}>Ervan Kusuma</p>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", color: "var(--gold)", fontWeight: 600, marginTop: "0.15rem" }}>Trip Director · Visual Storyteller</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        @media (max-width: 540px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
