"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "planner",
    no: "01",
    tag: "Digital Tool",
    title: "Travel Planner",
    desc: "Smart itinerary builder for your next city adventure. Plan day-by-day, manage budget, and organize every detail — all in one place.",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&q=80&auto=format&fit=crop",
    // Seoul at night
    cta: "Open App →",
    href: "https://travelplanner.backpackervun.com",
    external: true,
  },
  {
    id: "digital",
    no: "02",
    tag: "Templates",
    title: "Digital Products",
    desc: "Premium itinerary templates, budget trackers, and travel guides. Download once, use forever — crafted for the detail-oriented traveler.",
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=700&q=80&auto=format&fit=crop",
    // Tokyo streets
    cta: "Browse Products →",
    href: "#products",
    external: false,
  },
  {
    id: "private",
    no: "03",
    tag: "Custom Trip",
    title: "Private Trip",
    desc: "Fully tailored travel experience built around you. From intimate couple trips to group adventures of 50+. You name the city, we plan everything.",
    img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=700&q=80&auto=format&fit=crop",
    // Seoul Gyeongbokgung
    cta: "Request Trip →",
    href: "#contact",
    external: false,
  },
  {
    id: "opentrip",
    no: "04",
    tag: "Open Trip",
    title: "Trip Series",
    desc: "Curated group departures to Asia's best cities. Join solo, meet fellow explorers, and experience the city together — fully guided.",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=700&q=80&auto=format&fit=crop",
    // Japan cityscape
    cta: "See Schedule →",
    href: "#schedule",
    external: false,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "5rem", background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
      <div className="container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}>
          <p className="t-eyebrow" style={{ marginBottom: "1rem" }}>What We Offer</p>
          <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text)", fontWeight: 400, lineHeight: 1.1 }}>
            Everything you need,<br /><em>one partner for all of it.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "var(--border)" }}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, index, inView }: { s: typeof services[0]; index: number; inView: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column", overflow: "hidden", cursor: "pointer" }}
      className="service-card">
      {/* Image */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <div className="service-img" style={{
          position: "absolute", inset: 0, backgroundImage: `url('${s.img}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "saturate(0.45) brightness(0.6)",
          transition: "transform 0.6s ease, filter 0.4s",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, var(--bg-2) 100%)" }} />
        <div style={{ position: "absolute", top: "1.1rem", left: "1.25rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--f-body)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)" }}>{s.no}</span>
        </div>
        <div style={{ position: "absolute", top: "1rem", right: "1.25rem" }}>
          <span style={{ fontFamily: "var(--f-body)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.3rem 0.7rem", background: "rgba(8,8,8,0.75)", color: "rgba(196,158,84,0.9)", backdropFilter: "blur(6px)" }}>{s.tag}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem 1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--f-body)", fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
        <p className="t-body" style={{ flex: 1, marginBottom: "1.25rem", fontSize: "0.82rem" }}>{s.desc}</p>
        <a href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noopener noreferrer" : undefined}
          style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", transition: "gap 0.2s", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          className="service-link">
          {s.cta}
        </a>
      </div>

      {/* Bottom accent */}
      <div className="service-bar" style={{ height: "2px", background: "var(--gold)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" }} />
    </motion.div>
  );
}
