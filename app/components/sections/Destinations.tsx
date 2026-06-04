"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const destinations = [
  {
    id: "japan",
    city: "Japan",
    sub: "Tokyo · Kyoto · Osaka · Hiroshima",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=90&auto=format&fit=crop",
    status: "available",
    // SVG map % positions (x=left%, y=top%)
    x: 79.5, y: 32,
  },
  {
    id: "korea",
    city: "South Korea",
    sub: "Seoul · Busan · Jeju",
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=90&auto=format&fit=crop",
    status: "available",
    x: 77.5, y: 30,
  },
  {
    id: "thailand",
    city: "Thailand",
    sub: "Bangkok · Chiang Mai · Phuket",
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=90&auto=format&fit=crop",
    status: "available",
    x: 72, y: 44,
  },
  {
    id: "sea",
    city: "SEA Trip",
    sub: "Indonesia · Malaysia · Singapore · Vietnam · Philippines · Thailand · Cambodia · Myanmar",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=90&auto=format&fit=crop",
    status: "available",
    x: 74, y: 49,
  },
  {
    id: "europe",
    city: "Europe",
    sub: "Netherlands · Germany · France · Belgium",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=90&auto=format&fit=crop",
    status: "coming",
    x: 48, y: 24,
  },
  {
    id: "umrah",
    city: "Umrah",
    sub: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=90&auto=format&fit=crop",
    status: "available",
    x: 57, y: 40,
  },
];

// Simple world map SVG path (simplified continents)
const WORLD_MAP = `
M 8,18 L 12,15 L 16,16 L 20,14 L 18,20 L 14,22 L 10,21 Z
M 20,22 L 28,19 L 34,20 L 36,26 L 34,32 L 28,35 L 22,33 L 18,28 Z
M 38,18 L 45,15 L 52,16 L 56,20 L 60,24 L 64,22 L 68,24 L 74,22 L 80,24 L 84,28 L 86,34 L 82,38 L 76,40 L 70,38 L 64,40 L 60,38 L 56,40 L 52,36 L 48,38 L 44,36 L 40,30 L 36,26 L 38,22 Z
M 52,42 L 58,40 L 64,42 L 68,46 L 70,52 L 66,56 L 60,58 L 54,56 L 50,50 L 50,45 Z
M 72,38 L 78,36 L 84,38 L 88,44 L 90,50 L 86,54 L 80,56 L 74,54 L 70,48 L 70,42 Z
M 82,24 L 86,22 L 90,24 L 92,28 L 90,32 L 86,34 L 82,32 L 80,28 Z
M 38,42 L 44,40 L 48,44 L 50,50 L 46,56 L 40,58 L 36,54 L 34,48 Z
`;

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.8rem" }}>Destinations</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.7rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Cities worth<br />every step.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>
            Click any destination to explore. Curated city experiences for those who want to feel the pulse of a place.
          </p>
        </motion.div>

        {/* MAP — SVG world map with interactive pins */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }}
          style={{ position: "relative", background: "var(--bg-3)", border: "1px solid var(--border)", overflow: "hidden", marginBottom: "1px" }}>

          {/* SVG map canvas */}
          <svg viewBox="0 0 100 60" style={{ width: "100%", display: "block" }} preserveAspectRatio="xMidYMid meet">
            {/* Ocean background */}
            <rect width="100" height="60" fill="rgba(13,27,62,0.6)" />

            {/* Latitude grid lines */}
            {[15, 30, 45].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
            ))}
            {[25, 50, 75].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
            ))}

            {/* Continents — simplified filled shapes */}
            {/* North America */}
            <polygon points="8,12 16,10 22,14 24,20 20,26 14,28 10,24 6,18" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* South America */}
            <polygon points="20,30 26,28 30,32 32,40 28,48 22,50 18,44 16,36" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Europe */}
            <polygon points="44,10 50,8 56,10 58,14 56,18 52,20 48,20 44,16 42,12" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Africa */}
            <polygon points="46,22 54,20 60,24 62,32 60,42 54,48 48,46 44,38 42,28" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Middle East */}
            <polygon points="54,20 60,18 64,22 66,28 60,30 54,26" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Russia / Central Asia */}
            <polygon points="56,6 70,4 82,6 86,10 82,14 74,16 66,14 58,12 54,8" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* South Asia */}
            <polygon points="62,24 70,22 74,26 72,34 66,36 60,32 58,26" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Southeast Asia */}
            <polygon points="70,30 78,28 84,30 86,36 82,42 76,44 70,40 68,34" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* East Asia */}
            <polygon points="74,16 82,14 88,18 88,24 82,28 76,28 72,22 72,18" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />
            {/* Australia */}
            <polygon points="78,44 86,42 90,46 90,52 84,56 78,54 74,50 76,46" fill="rgba(22,42,88,1)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25" />

            {/* Destination pins — rendered inside SVG for correct positioning */}
            {destinations.map((d, i) => (
              <g key={d.id} style={{ cursor: "pointer" }} onClick={() => setActive(active === i ? null : i)}>
                {/* Pulse ring for active */}
                {active === i && (
                  <circle cx={d.x} cy={d.y} r="3.5" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4">
                    <animate attributeName="r" values="2;5;2" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Pin dot */}
                <circle
                  cx={d.x} cy={d.y} r={active === i ? "1.8" : "1.2"}
                  fill={d.status === "coming" ? "rgba(239,242,248,0.45)" : (active === i ? "white" : "var(--gold)")}
                  stroke={active === i ? "var(--gold)" : "none"} strokeWidth="0.4"
                  style={{ transition: "all 0.2s", filter: active === i ? "drop-shadow(0 0 2px rgba(232,168,32,0.8))" : "none" }}
                />
                {/* Label */}
                <text
                  x={d.x} y={d.y - 2.5}
                  textAnchor="middle"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.8px",
                    fontWeight: 700,
                    fill: active === i ? "var(--gold)" : "rgba(239,242,248,0.75)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                  {d.city}
                </text>
              </g>
            ))}
          </svg>

          {/* Popup card when pin is active */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 8 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute", bottom: "1rem", right: "1rem",
                  width: "240px", background: "rgba(7,17,31,0.97)",
                  border: "1px solid var(--border)", backdropFilter: "blur(16px)", overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}>
                <div style={{ height: "120px", backgroundImage: `url('${destinations[active].img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.65) brightness(0.72)" }} />
                <div style={{ padding: "0.9rem 1.1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <h3 style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text)" }}>{destinations[active].city}</h3>
                    {destinations[active].status === "coming" && (
                      <span style={{ fontFamily: "var(--f)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "2px 5px" }}>Soon</span>
                    )}
                  </div>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 500, lineHeight: 1.5 }}>{destinations[active].sub}</p>
                  <a href="#contact" style={{ display: "inline-block", marginTop: "0.65rem", fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                    Plan This Trip →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map hint */}
          {active === null && (
            <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)" }}>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(239,242,248,0.3)", whiteSpace: "nowrap" }}>
                Click a pin to explore
              </p>
            </div>
          )}
        </motion.div>

        {/* Destination pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "var(--border)" }}>
          {destinations.map((d, i) => (
            <motion.button key={d.id}
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.06 }}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                flex: "1 1 150px", padding: "1rem 1.25rem",
                background: active === i ? "var(--bg-3)" : "var(--bg-2)",
                border: "none", cursor: "pointer", textAlign: "left",
                borderLeft: active === i ? "2px solid var(--gold)" : "2px solid transparent",
                transition: "all 0.2s",
              }}>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: active === i ? "var(--gold)" : "var(--text)", marginBottom: "0.15rem" }}>{d.city}</p>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", color: "var(--text-muted)", fontWeight: 500, lineHeight: 1.4 }}>{d.sub}</p>
            </motion.button>
          ))}
          <motion.a href="#contact"
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}
            style={{ flex: "1 1 150px", padding: "1rem 1.25rem", background: "var(--gold-dim)", textDecoration: "none", display: "block", borderLeft: "2px solid rgba(232,168,32,0.25)", transition: "background 0.2s" }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,168,32,0.15)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold-dim)")}>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--gold)", marginBottom: "0.15rem" }}>+ Your City?</p>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", color: "var(--text-muted)", fontWeight: 500 }}>We plan almost anywhere</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
