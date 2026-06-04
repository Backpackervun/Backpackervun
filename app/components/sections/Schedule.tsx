"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trips = [
  {
    id: "jp1",
    flag: "🇯🇵",
    city: "Tokyo & Kyoto",
    dates: "15 – 24 Nov 2025",
    duration: "10 Hari",
    price: "Rp 28.500.000",
    total: 12,
    left: 5,
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "kr1",
    flag: "🇰🇷",
    city: "Seoul Explorer",
    dates: "20 – 28 Des 2025",
    duration: "9 Hari",
    price: "Rp 22.000.000",
    total: 15,
    left: 8,
    img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "th1",
    flag: "🇹🇭",
    city: "Bangkok & Chiang Mai",
    dates: "10 – 17 Jan 2026",
    duration: "7 Hari",
    price: "Rp 14.500.000",
    total: 20,
    left: 12,
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Schedule() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="schedule" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <p className="t-eyebrow" style={{ marginBottom: "0.9rem" }}>Open Trip</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400 }}>
              Join a group,<br /><em>start your story.</em>
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>Solo traveler? No problem. Join a curated departure and meet people who love cities as much as you do.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {trips.map((t, i) => (
            <TripRow key={t.id} t={t} index={i} inView={inView} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a href="https://wa.me/628XXXXXXXXX?text=Hi%20Ervan%2C%20saya%20tertarik%20ikut%20open%20trip!"
            target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Lihat Semua Jadwal →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TripRow({ t, index, inView }: { t: typeof trips[0]; index: number; inView: boolean }) {
  const pct = Math.round((t.left / t.total) * 100);
  return (
    <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ background: "var(--bg-2)", display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "0", alignItems: "stretch", overflow: "hidden" }}
      className="trip-row">
      {/* Thumbnail */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.4) brightness(0.55)", transition: "transform 0.5s" }} className="trip-img" />
      </div>

      {/* Info */}
      <div style={{ padding: "1.5rem 1.75rem", borderLeft: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "1rem" }}>{t.flag}</span>
          <h3 style={{ fontFamily: "var(--f-body)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{t.city}</h3>
        </div>
        <p style={{ fontFamily: "var(--f-body)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 300, marginBottom: "1rem" }}>{t.dates} · {t.duration}</p>
        {/* Availability bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ flex: 1, height: "2px", background: "var(--border)", maxWidth: "120px" }}>
            <div style={{ height: "2px", width: `${pct}%`, background: "var(--gold)", transition: "width 1s ease" }} />
          </div>
          <span style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", color: t.left <= 5 ? "#e07070" : "var(--text-muted)", fontWeight: 500 }}>{t.left} slot tersisa</span>
        </div>
      </div>

      {/* Price + CTA */}
      <div style={{ padding: "1.5rem 1.75rem", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.75rem", minWidth: "180px" }}>
        <p style={{ fontFamily: "var(--f-display)", fontSize: "1.1rem", color: "var(--gold)", fontWeight: 400 }}>{t.price}</p>
        <a href="https://wa.me/628XXXXXXXXX" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", padding: "0.5rem 1.1rem", border: "1px solid rgba(242,237,230,0.15)", color: "var(--text)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s", whiteSpace: "nowrap" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,237,230,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)"; }}>
          Join Trip
        </a>
      </div>
    </motion.div>
  );
}
