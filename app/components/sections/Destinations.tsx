"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    city: "Japan",
    sub: "Tokyo · Kyoto · Osaka",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "South Korea",
    sub: "Seoul · Busan · Jeju",
    img: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Thailand",
    sub: "Bangkok · Chiang Mai",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "SEA Trip",
    sub: "Multi-country Southeast Asia",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Europe",
    sub: "Paris · Amsterdam · London",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&auto=format&fit=crop",
    status: "coming",
  },
  {
    city: "Umrah",
    sub: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Sport Tourism",
    sub: "Berlin Marathon & more",
    img: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80&auto=format&fit=crop",
    status: "available",
  },
];

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Destinations</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400 }}>
              Cities worth<br /><em>every step.</em>
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "290px", fontSize: "0.82rem" }}>
            Curated city experiences for those who want to feel the pulse of a place — not just pass through.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1px", background: "var(--border)" }}>
          {destinations.map((d, i) => (
            <motion.div key={d.city} className="dest-card"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.07 }}
              style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", cursor: "pointer", background: "var(--bg)" }}>
              <div className="dest-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.45) brightness(0.5)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.4) 55%, transparent 100%)" }} />

              {d.status === "coming" && (
                <div style={{ position: "absolute", top: "0.85rem", right: "0.85rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.28rem 0.65rem", background: "rgba(7,17,31,0.85)", color: "var(--text-muted)", border: "1px solid var(--border)", backdropFilter: "blur(6px)" }}>Coming Soon</span>
                </div>
              )}

              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1.1rem" }}>
                <h3 style={{ fontFamily: "var(--f-head)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", lineHeight: 1, marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>{d.city}</h3>
                <p style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 300 }}>{d.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="#contact" className="btn-outline">Request a Custom Destination</a>
        </motion.div>
      </div>
    </section>
  );
}
