"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    city: "Japan",
    route: "Tokyo · Kyoto · Osaka · Hiroshima · Nara",
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=90&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "South Korea",
    route: "Seoul · Busan · Jeju · Incheon",
    img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=90&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "SEA Trip",
    route: "Singapore · Vietnam · Thailand · Malaysia",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=90&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Umrah",
    route: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=90&auto=format&fit=crop",
    status: "available",
  },
  {
    city: "Europe",
    route: "Netherlands · Germany · Belgium · France",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=90&auto=format&fit=crop",
    status: "coming",
  },
  {
    city: "Indonesia",
    route: "Batukaras · Banyuwangi · Bali",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=90&auto=format&fit=crop",
    status: "available",
  },
];

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {/* Dot grid pattern bottom-left */}
      <div className="pattern-dots" style={{ position: "absolute", bottom: 0, left: 0, width: "300px", height: "300px", pointerEvents: "none", opacity: 0.5 }} />

      <div className="container" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.75rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.8rem" }}>Destinations</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.7rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Cities worth<br />every step.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>
            Curated city experiences for those who want to feel the pulse of a place — not just pass through.
          </p>
        </motion.div>

        {/* Cards — 3 per row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="dest-grid">
          {destinations.map((d, i) => (
            <motion.div key={d.city} className="dest-card"
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.07 }}
              style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", background: "var(--bg)", cursor: "pointer" }}>
              <div className="dest-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.55) brightness(0.5)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.3) 60%, transparent 100%)" }} />

              {/* Coming soon badge */}
              {d.status === "coming" && (
                <div style={{ position: "absolute", top: "0.85rem", right: "0.85rem" }}>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.25rem 0.65rem", background: "rgba(7,17,31,0.9)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1.2rem" }}>
                <h3 style={{ fontFamily: "var(--f)", fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>{d.city}</h3>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", color: "rgba(239,242,248,0.6)", fontWeight: 500, lineHeight: 1.5 }}>{d.route}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="#contact" className="btn-outline">Request a Custom Destination</a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .dest-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .dest-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
