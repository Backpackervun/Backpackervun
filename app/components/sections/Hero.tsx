"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}>

      {/* BG image — animates in first */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=90&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center 55%",
          filter: "saturate(0.55) brightness(0.3)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,17,31,0.25) 0%, rgba(7,17,31,0.05) 35%, rgba(7,17,31,0.6) 75%, rgba(7,17,31,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 50%, transparent 45%, rgba(7,17,31,0.5) 100%)" }} />
      </motion.div>

      {/* Content — staggered after bg */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 1.5rem", maxWidth: "860px", width: "100%", marginTop: "4rem" }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", maxWidth: "min(84vw, 740px)", marginBottom: "1.5rem" }}>
          <Image src="/logo-white.png" alt="Backpackervun" width={740} height={90}
            style={{ width: "100%", height: "auto", objectFit: "contain" }} priority />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          style={{ fontFamily: "var(--f)", fontWeight: 600, fontSize: "clamp(0.82rem, 1.7vw, 1rem)", color: "rgba(239,242,248,0.58)", marginBottom: "0.55rem" }}>
          Supporting people on their first and next unforgettable journeys.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="t-eye" style={{ marginBottom: "2.25rem", color: "rgba(232,168,32,0.65)" }}>
          #AwalSemuaCerita
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <a href="#services" className="btn-gold">Explore More</a>
          <a href="#contact" className="btn-outline">Plan Your Trip</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
        <span style={{ fontFamily: "var(--f)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "var(--text-faint)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: "1px", height: "1.75rem", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </motion.div>
    </section>
  );
}
