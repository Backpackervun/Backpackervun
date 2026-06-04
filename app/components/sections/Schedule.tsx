"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trips = [
  {
    country: "Japan", city: "Tokyo & Kyoto",
    dates: "15 – 24 Nov 2025", duration: "10 Days",
    price: "Rp 28.500.000", total: 12, left: 5,
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=400&q=90&auto=format&fit=crop",
  },
  {
    country: "South Korea", city: "Seoul",
    dates: "20 – 28 Dec 2025", duration: "9 Days",
    price: "Rp 22.000.000", total: 15, left: 8,
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400&h=400&q=90&auto=format&fit=crop",
  },
  {
    country: "Thailand", city: "Bangkok",
    dates: "10 – 17 Jan 2026", duration: "7 Days",
    price: "Rp 14.500.000", total: 20, left: 12,
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=400&q=90&auto=format&fit=crop",
  },
  {
    country: "Indonesia", city: "Bali",
    dates: "Feb 2026", duration: "5 Days",
    price: "Rp 8.500.000", total: 20, left: 15,
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=400&q=90&auto=format&fit=crop",
  },
  {
    country: "SEA Trip", city: "Singapore & Vietnam",
    dates: "Mar 2026", duration: "8 Days",
    price: "Rp 18.000.000", total: 15, left: 15,
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=400&q=90&auto=format&fit=crop",
  },
];

export default function Schedule() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="schedule" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {/* Diagonal lines pattern right side */}
      <div className="pattern-lines" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "180px", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Open Trip Schedule</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Join a departure,<br />start your story.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "260px", fontSize: "0.82rem" }}>
            Solo traveler? Join a curated group departure and connect with people who love cities as much as you do.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {trips.map((t, i) => {
            const pct = Math.round((t.left / t.total) * 100);
            return (
              <motion.div key={t.city} className="trip-row"
                initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.09 }}
                style={{ background: "var(--bg-2)", display: "grid", gridTemplateColumns: "64px 1fr auto", overflow: "hidden", alignItems: "stretch" }}>

                {/* Square thumbnail */}
                <div style={{ width: "64px", height: "64px", flexShrink: 0, overflow: "hidden", position: "relative", alignSelf: "center", margin: "0" }}>
                  <div className="tr-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.6)" }} />
                </div>

                {/* Info */}
                <div style={{ padding: "1.1rem 1.5rem", borderLeft: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{t.country}</span>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em" }}>{t.city}</span>
                  </div>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: "0.7rem" }}>{t.dates} · {t.duration}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "80px", height: "2px", background: "rgba(255,255,255,0.1)" }}>
                      <div style={{ height: "2px", width: `${pct}%`, background: "var(--gold)", transition: "width 1s ease" }} />
                    </div>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 700, color: t.left <= 5 ? "#e07070" : "var(--text-muted)" }}>
                      {t.left} slots remaining
                    </span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{ padding: "1.1rem 1.5rem", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "0.65rem", minWidth: "160px" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "1rem", fontWeight: 800, color: "var(--gold)", letterSpacing: "-0.01em" }}>{t.price}</p>
                  <a href="https://wa.me/6281298053826" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.45rem 1rem", border: "1px solid rgba(239,242,248,0.18)", color: "var(--text)", textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(239,242,248,0.18)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)"; }}>
                    Join Trip
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a href="https://wa.me/6281298053826?text=Hi+Ervan%2C+I'd+like+to+see+all+trip+schedules" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Schedules
          </a>
        </motion.div>
      </div>
    </section>
  );
}
