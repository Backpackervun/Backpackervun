"use client";
import Image from "next/image";

const linkStyle = {
  fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 600,
  color: "rgba(239,242,248,0.75)", textDecoration: "none", transition: "color 0.2s",
} as const;

const headStyle = {
  fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 800,
  letterSpacing: "0.18em", textTransform: "uppercase" as const,
  color: "rgba(239,242,248,0.45)", marginBottom: "1.1rem", display: "block",
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "4rem 0 2rem" }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <Image src="/logo-white.png" alt="Backpackervun" width={140} height={17}
              style={{ height: "1.2rem", width: "auto", objectFit: "contain", marginBottom: "1.1rem", opacity: 0.92 }} />
            <p style={{ fontFamily: "var(--f)", fontWeight: 500, fontSize: "0.82rem", color: "rgba(239,242,248,0.7)", maxWidth: "240px", marginBottom: "0.65rem", lineHeight: 1.6 }}>
              Supporting people on their first and next unforgettable journeys.
            </p>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,168,32,0.55)" }}>#AwalSemuaCerita</p>
            <p style={{ fontFamily: "var(--f)", fontSize: "0.7rem", color: "rgba(239,242,248,0.4)", marginTop: "0.65rem", fontWeight: 500 }}>Est. 2025</p>
          </div>

          {/* Services */}
          <div>
            <span style={headStyle}>Services</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { l: "Trip Series",      h: "#schedule" },
                { l: "Private Trip",     h: "#contact" },
                { l: "Sport Tourism",    h: "#contact" },
                { l: "Travel Planner",   h: "https://travelplanner.backpackervun.com", ext: true },
                { l: "Digital Products", h: "#products" },
              ].map(item => (
                <a key={item.l} href={item.h}
                  target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,242,248,0.75)")}>
                  {item.l}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <span style={headStyle}>Destinations</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["Japan", "South Korea", "Thailand", "SEA Trip", "Europe", "Umrah", "Sport Tourism"].map(d => (
                <span key={d} style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 500, color: "rgba(239,242,248,0.65)" }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <span style={headStyle}>Connect</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { l: "Instagram", h: "https://instagram.com/backpackervun" },
                { l: "YouTube",   h: "https://youtube.com/@backpackervun" },
                { l: "TikTok",    h: "https://tiktok.com/@backpackervun" },
                { l: "WhatsApp",  h: "https://wa.me/6281298053826" },
              ].map(s => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,242,248,0.75)")}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--f)", fontSize: "0.72rem", color: "rgba(239,242,248,0.5)", fontWeight: 500 }}>
            © 2025 Backpackervun. All rights reserved.
          </p>
          <a href="mailto:info@backpackervun.com"
            style={{ fontFamily: "var(--f)", fontSize: "0.72rem", color: "rgba(239,242,248,0.5)", textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(239,242,248,0.5)")}>
            info@backpackervun.com
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
