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
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
            <p className="t-eye" style={{ marginBottom: "1rem" }}>About</p>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.4rem" }}>
              Hi, I&apos;m
            </h2>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--gold)", marginBottom: "2rem" }}>
              Ervan A. Anggakusuma.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
              {[
                "From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places. I have explored countries across Asia and the Middle East, gaining valuable insight into diverse traditions, lifestyles, and travel experiences.",
                "I have led and organized group trips of various sizes — from small private groups to over 58 participants, including managing a large group trip to Bangkok and coordinating monthly Umrah pilgrimages.",
                "As a reliable trip buddy, I ensure every journey runs smoothly — from crafting detailed itineraries to making sure each participant has a meaningful and enjoyable experience. I also run my own production house, capturing authentic travel moments through photo and video.",
                "Currently developing a travel agency to help more people enjoy well-planned, memorable, and purpose-driven adventures.",
              ].map((p, i) => <p key={i} className="t-body" style={{ fontSize: "0.83rem" }}>{p}</p>)}
            </div>

            {/* Quote */}
            <div style={{ padding: "1.1rem 1.4rem", borderLeft: "2px solid var(--gold)", background: "var(--gold-faint)", marginBottom: "2.5rem" }}>
              <p style={{ fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.65 }}>
                &ldquo;With me, travel becomes more than a destination — it becomes a story worth remembering.&rdquo;
              </p>
            </div>

            {/* Stats — no Umrah Group */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", paddingTop: "1.75rem", borderTop: "1px solid var(--border)" }}>
              {[["58+", "Participants"], ["10+", "Countries"], ["5+", "Years Experience"]].map(([v, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "var(--f-display)", fontSize: "2rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>{v}</p>
                  <p className="t-eye" style={{ marginTop: "0.4rem", color: "var(--text-faint)", fontSize: "0.58rem" }}>{l}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <p className="t-eye" style={{ color: "var(--gold)", fontSize: "0.58rem" }}>Trip Director</p>
              <span style={{ color: "var(--text-faint)", fontSize: "0.7rem" }}>·</span>
              <p className="t-eye" style={{ color: "var(--gold)", fontSize: "0.58rem" }}>Visual Storyteller</p>
              <span style={{ color: "var(--text-faint)", fontSize: "0.7rem" }}>·</span>
              <p className="t-eye" style={{ color: "rgba(232,168,32,0.5)", fontSize: "0.58rem" }}>#AwalSemuaCerita</p>
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.1 }}
            style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
              <Image src="/ervan-sq.jpg" alt="Ervan A. Anggakusuma — Trip Director" fill
                style={{ objectFit: "cover", objectPosition: "center top" }} />
              {/* Navy overlay for brand consistency */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,17,31,0.15) 0%, transparent 60%, rgba(7,17,31,0.25) 100%)", mixBlendMode: "multiply" }} />
            </div>
            {/* Floating info card */}
            <div style={{ position: "absolute", bottom: "-1.25rem", left: "-1.5rem", padding: "1rem 1.25rem", background: "var(--bg)", border: "1px solid var(--border)", maxWidth: "220px" }}>
              <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.2rem" }}>Ervan A. Anggakusuma</p>
              <p style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", color: "var(--gold)", fontWeight: 500 }}>Trip Director · Visual Storyteller</p>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
