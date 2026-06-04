"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA = "https://wa.me/6281298053826";

const options = [
  { title: "Private Trip",     desc: "Custom trip for you and your group",            msg: "I'd+like+to+request+a+private+trip" },
  { title: "Open Trip",        desc: "Join a scheduled group departure",               msg: "I'm+interested+in+joining+an+open+trip" },
  { title: "Consultation",     desc: "Ask about a destination, budget, or itinerary",  msg: "I'd+like+to+consult+about+a+trip" },
  { title: "Digital Products", desc: "Itinerary templates and travel guides",          msg: "I'd+like+to+know+more+about+digital+products" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Get In Touch</p>
            <h2 className="t-h2" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.75rem)", marginBottom: "1.25rem" }}>
              Ready to plan<br />your next city?
            </h2>
            <p className="t-body" style={{ marginBottom: "2.25rem", fontSize: "0.85rem" }}>
              Whether it&apos;s a private trip, joining an open trip, or just asking about a destination — reach out via WhatsApp and we&apos;ll respond within the hour.
            </p>

            <a href={`${WA}?text=Hi+Ervan%2C+I'd+like+to+plan+a+trip`} target="_blank" rel="noopener noreferrer"
              className="btn-gold" style={{ marginBottom: "2.5rem" }}>
              Chat on WhatsApp
            </a>

            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p className="t-eye" style={{ marginBottom: "1.1rem", color: "var(--text-faint)" }}>Follow the Journey</p>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { name: "Instagram", url: "https://instagram.com/backpackervun" },
                  { name: "YouTube",   url: "https://youtube.com/@backpackervun" },
                  { name: "TikTok",    url: "https://tiktok.com/@backpackervun" },
                ].map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — clean rows, no icons */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {options.map((item, i) => (
              <motion.a key={item.title}
                href={`${WA}?text=Hi+Ervan%2C+${item.msg}`}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 14 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }}
                style={{ background: "var(--bg-2)", padding: "1.3rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", textDecoration: "none", transition: "background 0.18s, border-left-color 0.18s", borderLeft: "2px solid transparent" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--bg-3)"; el.style.borderLeftColor = "var(--gold)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--bg-2)"; el.style.borderLeftColor = "transparent"; }}>
                <div>
                  <p style={{ fontFamily: "var(--f-head)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 400 }}>{item.desc}</p>
                </div>
                <span style={{ color: "var(--gold)", fontFamily: "var(--f-body)", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
