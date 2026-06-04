"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
            <p className="t-eyebrow" style={{ marginBottom: "1rem" }}>About Me</p>
            <h2 style={{ fontFamily: "var(--f-body)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
              Hi, I&apos;m<br />
              <span style={{ color: "var(--gold)" }}>Ervan Kusuma.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                "From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places across Asia and the Middle East.",
                "I've led group trips of various sizes — from intimate private groups to 58+ participants, including monthly Umrah pilgrimages for up to 36 people.",
                "As your trip buddy, I handle everything: itinerary, logistics, coordination, and authentic moments captured through photo and video.",
              ].map((p, i) => (
                <p key={i} className="t-body">{p}</p>
              ))}
            </div>

            {/* Highlight */}
            <div style={{ padding: "1.25rem 1.5rem", borderLeft: "2px solid var(--gold)", background: "var(--gold-dim)", marginBottom: "2.5rem" }}>
              <p style={{ fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "1rem", color: "var(--text)", lineHeight: 1.6 }}>
                &ldquo;With me, travel becomes more than a destination — it becomes a story worth remembering.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", paddingTop: "1.75rem", borderTop: "1px solid var(--border)" }}>
              {[["58+", "Peserta"], ["10+", "Negara"], ["36", "Umrah Group"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: "var(--f-display)", fontSize: "2rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>{val}</p>
                  <p className="t-eyebrow" style={{ marginTop: "0.4rem", color: "var(--text-faint)" }}>{lbl}</p>
                </div>
              ))}
            </div>

            <p className="t-eyebrow" style={{ marginTop: "1.75rem", color: "rgba(196,158,84,0.6)" }}>#AwalSemuaCerita</p>
          </motion.div>

          {/* Right — photo */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.1 }}
            style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
              <Image src="/ervan-profile.png" alt="Ervan Kusuma" fill style={{ objectFit: "cover", objectPosition: "top", filter: "brightness(0.9) saturate(0.9)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,8,8,0.15) 0%, transparent 60%)" }} />
            </div>
            {/* City badge */}
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", padding: "1.1rem 1.4rem", background: "var(--bg)", border: "1px solid var(--border)", maxWidth: "240px" }}>
              <p style={{ fontFamily: "var(--f-body)", fontSize: "0.75rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.5 }}>
                Currently building the best way to experience Asia&apos;s cities. 🌏
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
