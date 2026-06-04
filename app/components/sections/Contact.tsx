"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="t-eyebrow" style={{ marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text)", fontWeight: 400, marginBottom: "1.5rem" }}>
              Ready to plan<br /><em>your next city?</em>
            </h2>
            <p className="t-body" style={{ marginBottom: "2.5rem", fontSize: "0.88rem" }}>
              Whether it&apos;s a private trip, joining an open trip, or just asking about a destination — reach out via WhatsApp and we&apos;ll respond within the hour.
            </p>

            <a href="https://wa.me/628XXXXXXXXX?text=Hi%20Ervan%2C%20saya%20mau%20tanya%20tentang%20trip%20ke..."
              target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginBottom: "2rem" }}>
              Chat on WhatsApp →
            </a>

            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p className="t-eyebrow" style={{ marginBottom: "1.25rem", color: "var(--text-faint)" }}>Follow the journey</p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {[
                  { name: "Instagram", url: "https://instagram.com/backpackervun" },
                  { name: "YouTube", url: "https://youtube.com/@backpackervun" },
                  { name: "TikTok", url: "https://tiktok.com/@backpackervun" },
                ].map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f-body)", fontSize: "0.75rem", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — quick options */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {[
              { icon: "✈️", title: "Private Trip", desc: "Custom trip untuk kamu & rombongan", wa: "saya+mau+request+private+trip" },
              { icon: "🗓️", title: "Open Trip", desc: "Join jadwal keberangkatan bersama", wa: "saya+tertarik+open+trip" },
              { icon: "🗺️", title: "Konsultasi", desc: "Tanya destinasi, budget, atau itinerary", wa: "saya+mau+konsultasi+trip" },
              { icon: "📦", title: "Digital Products", desc: "Template itinerary & travel guides", wa: "saya+mau+beli+digital+product" },
            ].map((item, i) => (
              <motion.a key={item.title} href={`https://wa.me/628XXXXXXXXX?text=Hi+Ervan%2C+${item.wa}`}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }}
                style={{ background: "var(--bg-2)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1.25rem", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-2)")}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 300 }}>{item.desc}</p>
                </div>
                <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
