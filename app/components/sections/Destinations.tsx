"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 7 destinations — no empty card gap
const destinations = [
  {
    city: "Japan",
    sub: "Tokyo · Kyoto · Osaka",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "South Korea",
    sub: "Seoul · Busan · Jeju",
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Thailand",
    sub: "Bangkok · Chiang Mai",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "SEA Trip",
    sub: "Singapore · Vietnam · Malaysia",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Europe",
    sub: "Netherlands · Germany · France · Belgium",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=85&auto=format&fit=crop",
    status: "coming",
  },
  {
    city: "Umrah",
    sub: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Sport Tourism",
    sub: "Berlin Marathon · Tokyo Marathon",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=85&auto=format&fit=crop",
    status: "available",
  },
];

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.75rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.8rem" }}>Destinations</p>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.7rem, 3.8vw, 2.8rem)" }}>
              Cities worth<br />every step.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>
            Curated city experiences for those who want to feel the pulse of a place — not just pass through.
          </p>
        </motion.div>

        {/* 7 cards — auto-fit, no empty gaps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }} className="dest-grid">
          {destinations.map((d, i) => (
            <motion.div key={d.city} className="dest-card"
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.07 }}
              style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", background: "var(--bg)" }}>
              <div className="dest-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.48)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.35) 55%, transparent 100%)" }} />
              {d.status === "coming" && (
                <div style={{ position: "absolute", top: "0.85rem", right: "0.85rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.88)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>Coming Soon</span>
                </div>
              )}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.1rem 1rem" }}>
                <h3 style={{ fontFamily: "var(--f-head)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, marginBottom: "0.3rem", letterSpacing: "-0.01em" }}>{d.city}</h3>
                <p style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500 }}>{d.sub}</p>
              </div>
            </motion.div>
          ))}
          {/* 8th card — CTA card to fill the grid row */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.56 }}
            style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", background: "var(--bg-3)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem", textAlign: "center", border: "1px dashed rgba(232,168,32,0.2)" }}>
            <p style={{ fontFamily: "var(--f-head)", fontSize: "0.85rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>Your<br />Destination?</p>
            <p style={{ fontFamily: "var(--f-body)", fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 400, marginBottom: "1.25rem", lineHeight: 1.5 }}>We can plan almost anywhere.</p>
            <a href="#contact" style={{ fontFamily: "var(--f-body)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>Ask Us →</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <a href="#contact" className="btn-outline">Request a Custom Destination</a>
        </motion.div>
      </div>
      <style>{`@media (max-width: 900px) { .dest-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 520px) { .dest-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </section>
  );
}
