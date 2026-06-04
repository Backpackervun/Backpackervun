"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Order: Trip Series first, Private Trip second, then rest
const services = [
  {
    no: "01", tag: "Open Trip",
    title: "Trip Series",
    desc: "Curated group departures to Asia's best cities. Join solo, meet fellow travelers, and experience every destination fully guided — from arrival to the last moment.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=80&auto=format&fit=crop",
    cta: "See Schedule", href: "#schedule",
  },
  {
    no: "02", tag: "Custom Trip",
    title: "Private Trip",
    desc: "Fully tailored travel experience designed around you. From intimate couple getaways to group adventures of 50+. You choose the city — we handle everything.",
    img: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=700&q=80&auto=format&fit=crop",
    cta: "Request Trip", href: "#contact",
  },
  {
    no: "03", tag: "Digital Tool",
    title: "Travel Planner",
    desc: "Smart itinerary builder for modern travelers. Plan day-by-day, track your budget, and organize every detail of your city journey — all in one place.",
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=700&q=80&auto=format&fit=crop",
    cta: "Open App", href: "https://travelplanner.backpackervun.com", external: true,
  },
  {
    no: "04", tag: "Templates",
    title: "Digital Products",
    desc: "Premium itinerary templates, budget trackers, and city travel guides. Download once, use forever — built for the detail-oriented traveler.",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&q=80&auto=format&fit=crop",
    cta: "Browse Products", href: "#products",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "5rem", background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ marginBottom: "3.5rem" }}>
          <p className="t-eye" style={{ marginBottom: "1rem" }}>What We Offer</p>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text)", fontWeight: 400, lineHeight: 1.1 }}>
            Everything you need,<br /><em>one partner for all of it.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: "1px", background: "var(--border)" }}>
          {services.map((s, i) => (
            <motion.div key={s.no} className="card-wrap"
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: i * 0.1 }}
              style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Image */}
              <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
                <div className="img-zoom" style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.4) brightness(0.55)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 35%, var(--bg-2) 100%)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)" }}>{s.no}</span>
                </div>
                <div style={{ position: "absolute", top: "1rem", right: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.28rem 0.65rem", background: "rgba(7,17,31,0.8)", color: "rgba(232,168,32,0.9)", backdropFilter: "blur(6px)" }}>{s.tag}</span>
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: "1.4rem 1.5rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "var(--f-head)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.7rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p className="t-body" style={{ flex: 1, marginBottom: "1.25rem", fontSize: "0.8rem" }}>{s.desc}</p>
                <a href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noopener noreferrer" : undefined}
                  style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  {s.cta} →
                </a>
              </div>
              <div className="card-bar" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
