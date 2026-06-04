"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--bg)" }}>

      {/* BG — Seoul Gangnam city night, premium urban */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=1920&q=85&auto=format&fit=crop')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
          filter: "saturate(0.55) brightness(0.3)",
        }} />
        {/* Navy gradient overlay from bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,17,31,0.25) 0%, rgba(7,17,31,0.1) 40%, rgba(7,17,31,0.65) 75%, rgba(7,17,31,1) 100%)" }} />
        {/* Subtle left navy vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 75% 50%, transparent 50%, rgba(7,17,31,0.5) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 1.5rem", maxWidth: "880px", width: "100%", marginTop: "4rem" }}>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="t-eye" style={{ marginBottom: "2rem" }}>
          Your Traveling Partner
        </motion.p>

        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", maxWidth: "min(86vw, 780px)", marginBottom: "1.75rem" }}>
          <Image src="/logo-white.png" alt="Backpackervun" width={780} height={95}
            style={{ width: "100%", height: "auto", objectFit: "contain" }} priority />
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9 }}
          style={{ fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(239,242,248,0.6)", marginBottom: "0.6rem", fontWeight: 400, lineHeight: 1.5 }}>
          Supporting people on their first and next unforgettable journeys.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="t-eye" style={{ marginBottom: "2.5rem", color: "rgba(232,168,32,0.65)" }}>
          #AwalSemuaCerita
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
          <a href="#services" className="btn-gold">Explore More</a>
          <a href="#contact" className="btn-outline">Plan Your Trip</a>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        style={{ position: "absolute", bottom: "2.25rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
        <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-faint)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </motion.div>
    </section>
  );
}
