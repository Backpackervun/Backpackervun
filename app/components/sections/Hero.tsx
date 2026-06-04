"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--bg)" }}>

      {/* ── City BG ── Tokyo Shibuya crossing at night */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "saturate(0.7) brightness(0.35)",
        }} />
        {/* Gradient vignette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.1) 35%, rgba(8,8,8,0.55) 75%, rgba(8,8,8,1) 100%)" }} />
        {/* Subtle film grain */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat", backgroundSize: "180px",
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 1.5rem", maxWidth: "900px", width: "100%" }}>

        {/* Eyebrow */}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="t-eyebrow" style={{ marginBottom: "2rem" }}>
          Your Traveling Partner
        </motion.p>

        {/* Logo as hero headline */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", maxWidth: "min(88vw, 820px)", marginBottom: "1.75rem" }}>
          <Image src="/logo-white.png" alt="Backpackervun" width={820} height={100} style={{ width: "100%", height: "auto", objectFit: "contain" }} priority />
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
          style={{ fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(242,237,230,0.65)", marginBottom: "0.65rem", fontWeight: 400 }}>
          Supporting people on their first and next unforgettable journeys.
        </motion.p>

        {/* Hashtag */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}
          className="t-eyebrow" style={{ marginBottom: "2.5rem", color: "rgba(196,158,84,0.7)" }}>
          #AwalSemuaCerita
        </motion.p>

        {/* CTA row */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
          <a href="https://travelplanner.backpackervun.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Open Planner →
          </a>
          <a href="#services" className="btn-ghost">Explore Services</a>
        </motion.div>
      </div>

      {/* ── Destination pills ── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
        style={{ position: "absolute", bottom: "5.5rem", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap", padding: "0 1.5rem", zIndex: 1 }}>
        {["🇯🇵 Japan", "🇰🇷 Korea", "🇹🇭 Bangkok", "🇪🇺 Europe"].map(d => (
          <span key={d} style={{
            fontFamily: "var(--f-body)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em",
            padding: "0.4rem 0.9rem", border: "1px solid rgba(196,158,84,0.3)",
            color: "rgba(196,158,84,0.9)", background: "rgba(196,158,84,0.05)",
          }}>{d}</span>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
        <span style={{ fontFamily: "var(--f-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-faint)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </motion.div>
    </section>
  );
}
