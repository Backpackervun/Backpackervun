"use client";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImg: string;
  height?: string;
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle, bgImg, height = "55vh" }: PageHeroProps) {
  return (
    <section style={{ position: "relative", height, minHeight: "380px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${bgImg}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.55) brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,17,31,0.3) 0%, rgba(7,17,31,0.1) 30%, rgba(7,17,31,0.75) 75%, rgba(7,17,31,1) 100%)" }} />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "3.5rem" }}>
        {eyebrow && <p className="t-eye" style={{ marginBottom: "0.75rem" }}>{eyebrow}</p>}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "var(--f)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: titleAccent ? "0" : "0" }}>
          {title}
          {titleAccent && <><br /><span style={{ color: "var(--gold)" }}>{titleAccent}</span></>}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 500, color: "rgba(239,242,248,0.6)", marginTop: "1rem", maxWidth: "500px" }}>
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
