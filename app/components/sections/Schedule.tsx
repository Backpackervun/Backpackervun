"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trips = [
  { city: "Tokyo & Kyoto", country: "Japan",       dates: "15 – 24 Nov 2025", duration: "10 Days", price: "Rp 28.500.000", total: 12, left: 5,  img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80&auto=format&fit=crop" },
  { city: "Seoul",         country: "South Korea",  dates: "20 – 28 Dec 2025", duration: "9 Days",  price: "Rp 22.000.000", total: 15, left: 8,  img: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=400&q=80&auto=format&fit=crop" },
  { city: "Bangkok",       country: "Thailand",     dates: "10 – 17 Jan 2026", duration: "7 Days",  price: "Rp 14.500.000", total: 20, left: 12, img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80&auto=format&fit=crop" },
];

export default function Schedule() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="schedule" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Open Trip Schedule</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400 }}>
              Join a departure,<br /><em>start your story.</em>
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>
            Solo traveler? Join a curated group departure and connect with people who love cities as much as you do.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {trips.map((t, i) => {
            const pct = Math.round((t.left / t.total) * 100);
            return (
              <motion.div key={t.city} className="trip-row"
                initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ background: "var(--bg-2)", display: "grid", gridTemplateColumns: "72px 1fr auto", overflow: "hidden" }}>
                {/* Thumb */}
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <div className="tr-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.35) brightness(0.5)" }} />
                </div>
                {/* Info */}
                <div style={{ padding: "1.4rem 1.75rem", borderLeft: "1px solid var(--border)" }}>
                  <div style={{ marginBottom: "0.35rem" }}>
                    <span style={{ fontFamily: "var(--f-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)", marginRight: "0.5rem" }}>{t.country}</span>
                    <span style={{ fontFamily: "var(--f-head)", fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{t.city}</span>
                  </div>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 300, marginBottom: "1rem" }}>{t.dates} · {t.duration}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "100px", height: "2px", background: "var(--border)" }}>
                      <div style={{ height: "2px", width: `${pct}%`, background: "var(--gold)" }} />
                    </div>
                    <span style={{ fontFamily: "var(--f-body)", fontSize: "0.62rem", fontWeight: 500, color: t.left <= 5 ? "#e07070" : "var(--text-muted)" }}>{t.left} slots remaining</span>
                  </div>
                </div>
                {/* Price + CTA */}
                <div style={{ padding: "1.4rem 1.75rem", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.75rem", minWidth: "175px" }}>
                  <p style={{ fontFamily: "var(--f-display)", fontSize: "1.05rem", color: "var(--gold)", fontWeight: 400 }}>{t.price}</p>
                  <a href="https://wa.me/6281298053826" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.5rem 1.1rem", border: "1px solid rgba(239,242,248,0.15)", color: "var(--text)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(239,242,248,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)"; }}>
                    Join Trip
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a href="https://wa.me/6281298053826?text=Hi%20Ervan%2C%20I%27d%20like%20to%20see%20all%20open%20trip%20schedules" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Schedules
          </a>
        </motion.div>
      </div>
    </section>
  );
}
