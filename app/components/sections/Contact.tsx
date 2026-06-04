"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA = "https://wa.me/6281298053826";

const options = [
  { title: "Private Trip",      desc: "Custom trip for you and your group",     msg: "I'd+like+to+request+a+private+trip" },
  { title: "Open Trip",         desc: "Join a scheduled group departure",        msg: "I'm+interested+in+joining+an+open+trip" },
  { title: "Consultation",      desc: "Ask about a destination, budget, or itinerary", msg: "I'd+like+to+consult+about+a+trip" },
  { title: "Digital Products",  desc: "Itinerary templates and travel guides",   msg: "I'd+like+to+know+more+about+digital+products" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="t-eye" style={{ marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Ready to plan<br /><em>your next city?</em>
            </h2>
            <p className="t-body" style={{ marginBottom: "2.5rem", fontSize: "0.88rem" }}>
              Whether it&apos;s a private trip, joining an open trip, or just asking about a destination — reach out via WhatsApp and we&apos;ll respond within the hour.
            </p>

            <a href={`${WA}?text=Hi+Ervan%2C+I'd+like+to+plan+a+trip`} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginBottom: "2.5rem" }}>
              Chat on WhatsApp
            </a>

            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p className="t-eye" style={{ marginBottom: "1.25rem", color: "var(--text-faint)" }}>Follow the Journey</p>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { name: "Instagram", url: "https://instagram.com/backpackervun" },
                  { name: "YouTube",   url: "https://youtube.com/@backpackervun" },
                  { name: "TikTok",    url: "https://tiktok.com/@backpackervun" },
                ].map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.05em" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — options, no icons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {options.map((item, i) => (
              <motion.a key={item.title}
                href={`${WA}?text=Hi+Ervan%2C+${item.msg}`}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }}
                style={{ background: "var(--bg-2)", padding: "1.35rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", textDecoration: "none", transition: "background 0.2s", borderLeft: "2px solid transparent" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--bg-3)"; el.style.borderLeftColor = "var(--gold)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--bg-2)"; el.style.borderLeftColor = "transparent"; }}>
                <div>
                  <p style={{ fontFamily: "var(--f-head)", fontSize: "0.88rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 300 }}>{item.desc}</p>
                </div>
                <span style={{ color: "var(--gold)", fontSize: "0.8rem", flexShrink: 0 }}>→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
