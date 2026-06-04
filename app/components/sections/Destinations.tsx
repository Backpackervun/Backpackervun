"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const destinations = [
  {
    city: "Japan",        sub: "Tokyo · Kyoto · Osaka",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=900&q=90&auto=format&fit=crop",
    status: "available", x: 78, y: 38,
  },
  {
    city: "South Korea",  sub: "Seoul · Busan · Jeju",
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=900&q=90&auto=format&fit=crop",
    status: "available", x: 75, y: 35,
  },
  {
    city: "Thailand",     sub: "Bangkok · Chiang Mai",
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=900&q=90&auto=format&fit=crop",
    status: "available", x: 70, y: 48,
  },
  {
    city: "SEA Trip",     sub: "Singapore · Vietnam · Malaysia",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=90&auto=format&fit=crop",
    status: "available", x: 72, y: 52,
  },
  {
    city: "Europe",       sub: "Netherlands · Germany · France · Belgium",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&q=90&auto=format&fit=crop",
    status: "coming", x: 48, y: 28,
  },
  {
    city: "Umrah",        sub: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&q=90&auto=format&fit=crop",
    status: "available", x: 58, y: 45,
  },
];

export default function Destinations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="destinations" ref={ref} className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", overflow: "hidden" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.8rem" }}>Destinations</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.7rem, 3.8vw, 2.8rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Cities worth<br />every step.
            </h2>
          </div>
          <p className="t-body" style={{ maxWidth: "280px", fontSize: "0.82rem" }}>
            Tap any destination to explore. Curated city experiences for those who want to feel the pulse of a place.
          </p>
        </motion.div>

        {/* World map with pins */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: "relative", borderRadius: "2px", overflow: "hidden", marginBottom: "1px" }}>

          {/* World map SVG background */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "50%", background: "var(--bg-3)", overflow: "hidden" }}>
            {/* Subtle grid lines for map feel */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }} viewBox="0 0 100 50" preserveAspectRatio="none">
              {[10,20,30,40,50,60,70,80,90].map(x => <line key={x} x1={x} y1="0" x2={x} y2="50" stroke="rgba(239,242,248,1)" strokeWidth="0.2" />)}
              {[10,20,30,40].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(239,242,248,1)" strokeWidth="0.2" />)}
            </svg>

            {/* Unsplash world map */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0) brightness(0.18) contrast(1.2)" }} />

            {/* Pins */}
            {destinations.map((d, i) => (
              <motion.button
                key={d.city}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  position: "absolute",
                  left: `${d.x}%`, top: `${d.y}%`,
                  transform: "translate(-50%, -100%)",
                  background: "none", border: "none", cursor: "pointer", zIndex: 2,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
                }}>
                {/* Pin dot */}
                <motion.div
                  animate={{ scale: active === i ? 1.3 : 1 }}
                  style={{ width: active === i ? "10px" : "8px", height: active === i ? "10px" : "8px", borderRadius: "50%", background: d.status === "coming" ? "rgba(239,242,248,0.5)" : "var(--gold)", border: active === i ? "2px solid white" : "none", transition: "all 0.2s", boxShadow: active === i ? "0 0 12px var(--gold)" : "0 0 6px rgba(232,168,32,0.5)" }} />
                {/* Pin label */}
                <span style={{ fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 700, color: active === i ? "var(--text)" : "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", background: "rgba(7,17,31,0.8)", padding: "1px 4px" }}>
                  {d.city}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active destination preview card */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem", width: "220px", background: "rgba(7,17,31,0.95)", border: "1px solid var(--border)", backdropFilter: "blur(12px)", overflow: "hidden" }}>
                <div style={{ height: "110px", backgroundImage: `url('${destinations[active].img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.6) brightness(0.7)" }} />
                <div style={{ padding: "0.85rem 1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)" }}>{destinations[active].city}</h3>
                    {destinations[active].status === "coming" && <span style={{ fontFamily: "var(--f)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "2px 5px" }}>Soon</span>}
                  </div>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 500 }}>{destinations[active].sub}</p>
                  <a href="#contact" style={{ display: "inline-block", marginTop: "0.65rem", fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                    Plan This Trip →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Destination pills below map */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "var(--border)" }}>
          {destinations.map((d, i) => (
            <motion.button key={d.city}
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.07 }}
              onClick={() => setActive(active === i ? null : i)}
              style={{ flex: "1 1 160px", padding: "1rem 1.25rem", background: active === i ? "var(--bg-3)" : "var(--bg-2)", border: "none", cursor: "pointer", textAlign: "left", borderLeft: active === i ? "2px solid var(--gold)" : "2px solid transparent", transition: "all 0.2s" }}>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: active === i ? "var(--gold)" : "var(--text)", marginBottom: "0.15rem" }}>{d.city}</p>
              <p style={{ fontFamily: "var(--f)", fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500 }}>{d.sub}</p>
            </motion.button>
          ))}
          {/* Placeholder — custom destination */}
          <motion.a href="#contact"
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1 }}
            style={{ flex: "1 1 160px", padding: "1rem 1.25rem", background: "var(--gold-dim)", border: "none", cursor: "pointer", textAlign: "left", borderLeft: "2px solid rgba(232,168,32,0.25)", textDecoration: "none", display: "block" }}>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--gold)", marginBottom: "0.15rem" }}>+ Your City?</p>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500 }}>We plan almost anywhere</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
