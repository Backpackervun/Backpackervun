"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    no: "01", tag: "Open Trip",
    title: "Trip Series",
    desc: "Curated group departures to Asia's best cities. Join solo, meet fellow travelers, and experience every destination fully guided — from arrival to the last moment.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=85&auto=format&fit=crop",
    cta: "See Schedule", href: "#schedule",
  },
  {
    no: "02", tag: "Custom Trip",
    title: "Private Trip",
    desc: "Fully tailored travel experience designed around you. From intimate couple getaways to group adventures of 50+. You choose the destination — we handle everything.",
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=700&q=85&auto=format&fit=crop",
    cta: "Request Trip", href: "#contact",
  },
  {
    no: "03", tag: "Digital Tool",
    title: "Travel Planner",
    desc: "Smart itinerary builder for modern travelers. Plan day-by-day, track your budget, and organize every detail of your city journey — all in one app.",
    img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=700&q=85&auto=format&fit=crop",
    cta: "Open App", href: "https://travelplanner.backpackervun.com", external: true,
  },
  {
    no: "04", tag: "Templates",
    title: "Digital Products",
    desc: "Premium itinerary templates, budget trackers, and city travel guides. Download once, use forever — built for the detail-oriented traveler.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=85&auto=format&fit=crop",
    cta: "Browse Products", href: "#products",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "4.5rem", background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}>
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>What We Offer</p>
          <h2 className="t-h2" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Everything you need,<br />one partner for all of it.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.no} className="card-wrap"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.09 }}
              style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "185px", overflow: "hidden" }}>
                <div className="card-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.45) brightness(0.55)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, var(--bg-2) 100%)" }} />
                <div style={{ position: "absolute", top: "0.9rem", left: "1.1rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.2em", color: "var(--gold)" }}>{s.no}</span>
                </div>
                <div style={{ position: "absolute", top: "0.9rem", right: "1.1rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.85)", color: "rgba(232,168,32,0.9)" }}>{s.tag}</span>
                </div>
              </div>
              <div style={{ padding: "1.3rem 1.4rem 1.6rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "var(--f-head)", fontSize: "1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.65rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p className="t-body" style={{ flex: 1, marginBottom: "1.1rem", fontSize: "0.78rem", fontWeight: 400 }}>{s.desc}</p>
                <a href={s.href} target={(s as { external?: boolean }).external ? "_blank" : undefined} rel={(s as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                  style={{ fontFamily: "var(--f-body)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                  {s.cta} →
                </a>
              </div>
              <div className="card-bar" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 520px) { .services-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
