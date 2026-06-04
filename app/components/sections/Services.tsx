"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    no: "01", tag: "Open Trip",
    title: "Trip Series",
    desc: "Curated group departures to Asia's best cities. Join solo, meet fellow travelers, and experience every destination fully guided.",
    // Japan landmark - Senso-ji temple / Tokyo tower
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=90&auto=format&fit=crop",
    cta: "See Schedule", href: "/experiences/open-trip",
  },
  {
    no: "02", tag: "Custom Trip",
    title: "Private Trip",
    desc: "Fully tailored travel experience designed around you. From intimate couple getaways to group adventures of 50+.",
    // South Korea landmark - Gyeongbokgung Palace Seoul
    img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=90&auto=format&fit=crop",
    cta: "Request Trip", href: "/contact",
  },
  {
    no: "03", tag: "Sport Tourism",
    title: "Sport Tourism",
    desc: "Travel for athletes and enthusiasts. Join World Marathon Majors, sport events, and active experiences in cities around the world.",
    // World marathon majors - runners mass race
    img: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=90&auto=format&fit=crop",
    cta: "Learn More", href: "/contact",
  },
  {
    no: "04", tag: "Digital Tool",
    title: "Travel Planner",
    desc: "Smart itinerary builder for city travelers. Plan day-by-day, track your budget, and organize every detail in one app.",
    // Airplane window seat view
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=90&auto=format&fit=crop",
    cta: "Open App", href: "https://travelplanner.backpackervun.com", external: true,
  },
  {
    no: "05", tag: "Templates",
    title: "Digital Products",
    desc: "Premium itinerary templates, budget trackers, and city travel guides. Download once, use forever.",
    // Hot air balloon
    img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=90&auto=format&fit=crop",
    cta: "Browse Products", href: "/products",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* Decorative diagonal pattern top-right */}
      <div className="pattern-lines" style={{ position: "absolute", top: 0, right: 0, width: "240px", height: "240px", opacity: 0.6, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "4rem", background: "linear-gradient(to bottom, transparent, var(--gold))" }} />

      <div className="container" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <div style={{ paddingTop: "0.25rem" }}>
            <div className="deco-line-v" style={{ marginBottom: "0.5rem" }} />
          </div>
          <div>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>What We Offer</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Everything you need,<br />one partner for all of it.
            </h2>
          </div>
        </motion.div>

        {/* Row 1 — 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)", marginBottom: "1px" }} className="svc-row1">
          {services.slice(0,3).map((s, i) => <SvcCard key={s.no} s={s} index={i} inView={inView} />)}
        </div>
        {/* Row 2 — 2 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "var(--border)" }} className="svc-row2">
          {services.slice(3).map((s, i) => <SvcCard key={s.no} s={s} index={i+3} inView={inView} tall />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .svc-row1 { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .svc-row1,.svc-row2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function SvcCard({ s, index, inView, tall }: { s: typeof services[0]; index: number; inView: boolean; tall?: boolean }) {
  return (
    <motion.div className="card-wrap"
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.08 }}
      style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ position: "relative", height: tall ? "250px" : "200px", overflow: "hidden" }}>
        <div className="card-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.65) brightness(0.58)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,17,31,0.1) 0%, transparent 40%, var(--bg-2) 100%)" }} />
        <div style={{ position: "absolute", top: "1rem", left: "1.1rem" }}>
          <span style={{ fontFamily: "var(--f)", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.2em", color: "var(--gold)" }}>{s.no}</span>
        </div>
        <div style={{ position: "absolute", top: "1rem", right: "1.1rem" }}>
          <span style={{ fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.88)", color: "rgba(232,168,32,0.95)" }}>{s.tag}</span>
        </div>
      </div>
      <div style={{ padding: "1.3rem 1.4rem 1.6rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontFamily: "var(--f)", fontSize: "1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
        <p className="t-body" style={{ flex: 1, marginBottom: "1.1rem", fontSize: "0.8rem" }}>{s.desc}</p>
        <a href={s.href} target={(s as {external?:boolean}).external ? "_blank" : undefined} rel={(s as {external?:boolean}).external ? "noopener noreferrer" : undefined}
          style={{ fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
          {s.cta} →
        </a>
      </div>
      <div className="card-bar" />
    </motion.div>
  );
}
