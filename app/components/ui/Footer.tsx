"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "4rem 0 2rem" }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <Image src="/logo-white.png" alt="Backpackervun" width={148} height={18}
              style={{ height: "1.25rem", width: "auto", objectFit: "contain", marginBottom: "1.1rem", opacity: 0.88 }} />
            <p className="t-body" style={{ maxWidth: "250px", marginBottom: "0.75rem", fontSize: "0.78rem" }}>
              Supporting people on their first and next unforgettable journeys.
            </p>
            <p className="t-eye" style={{ color: "rgba(232,168,32,0.45)", fontSize: "0.58rem" }}>#AwalSemuaCerita</p>
            <p style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", color: "var(--text-faint)", marginTop: "0.75rem", fontWeight: 300 }}>
              Est. 2025
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="t-eye" style={{ marginBottom: "1.25rem", color: "var(--text-faint)", fontSize: "0.58rem" }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { l: "Trip Series",       h: "#schedule" },
                { l: "Private Trip",      h: "#contact" },
                { l: "Travel Planner",    h: "https://travelplanner.backpackervun.com", ext: true },
                { l: "Digital Products",  h: "#products" },
              ].map(item => (
                <a key={item.l} href={item.h}
                  target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined}
                  style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", fontWeight: 300, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                  {item.l}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <p className="t-eye" style={{ marginBottom: "1.25rem", color: "var(--text-faint)", fontSize: "0.58rem" }}>Destinations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Japan", "South Korea", "Thailand", "SEA Trip", "Europe", "Umrah", "Sport Tourism"].map(d => (
                <span key={d} style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", fontWeight: 300, color: "var(--text-muted)" }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="t-eye" style={{ marginBottom: "1.25rem", color: "var(--text-faint)", fontSize: "0.58rem" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { l: "Instagram", h: "https://instagram.com/backpackervun" },
                { l: "YouTube",   h: "https://youtube.com/@backpackervun" },
                { l: "TikTok",    h: "https://tiktok.com/@backpackervun" },
                { l: "WhatsApp",  h: "https://wa.me/6281298053826" },
              ].map(s => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", fontWeight: 300, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", color: "var(--text-faint)", fontWeight: 300 }}>
            © 2025 Backpackervun. All rights reserved.
          </p>
          <a href="mailto:info@backpackervun.com"
            style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", color: "var(--text-faint)", textDecoration: "none", transition: "color 0.2s", fontWeight: 300 }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}>
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
