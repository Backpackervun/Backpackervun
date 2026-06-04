"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    city: "Tokyo",
    country: "Japan",
    desc: "Shibuya, Shinjuku, Asakusa",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format&fit=crop",
    flag: "🇯🇵",
    status: "Available",
  },
  {
    city: "Seoul",
    country: "South Korea",
    desc: "Myeongdong, Gangnam, Hongdae",
    img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80&auto=format&fit=crop",
    flag: "🇰🇷",
    status: "Available",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    desc: "Sukhumvit, Chatuchak, Chao Phraya",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80&auto=format&fit=crop",
    flag: "🇹🇭",
    status: "Available",
  },
  {
    city: "Paris",
    country: "France",
    desc: "Eiffel, Le Marais, Montmartre",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&auto=format&fit=crop",
    flag: "🇫🇷",
    status: "Coming Soon",
  },
];

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div>
            <p className="t-eyebrow" style={{ marginBottom: "0.9rem" }}>City Destinations</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400 }}>
              Urban adventures<br /><em>waiting for you.</em>
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "300px", fontSize: "0.82rem" }}>
            City tours crafted for those who want to feel the pulse of a place — not just see it.
          </p>
        </motion.div>

        {/* Destination grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {destinations.map((d, i) => (
            <motion.div key={d.city} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "3/4" }}
              className="dest-card">
              {/* Image */}
              <div className="dest-img" style={{
                position: "absolute", inset: 0, backgroundImage: `url('${d.img}')`,
                backgroundSize: "cover", backgroundPosition: "center",
                filter: "saturate(0.5) brightness(0.55)",
                transition: "transform 0.6s ease, filter 0.4s",
              }} />
              {/* Overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)" }} />

              {/* Status badge */}
              {d.status === "Coming Soon" && (
                <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.3rem 0.7rem", background: "rgba(8,8,8,0.8)", color: "var(--text-muted)", backdropFilter: "blur(6px)", border: "1px solid var(--border)" }}>Soon</span>
                </div>
              )}

              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.25rem" }}>
                <p style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem" }}>{d.flag} {d.country}</p>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: "1.6rem", color: "var(--text)", fontWeight: 400, lineHeight: 1, marginBottom: "0.5rem" }}>{d.city}</h3>
                <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 300 }}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#contact" className="btn-ghost">Request a Custom Destination</a>
        </motion.div>
      </div>
    </section>
  );
}
