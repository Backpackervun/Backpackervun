"use client";
import { useState } from "react";

export default function DevBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "linear-gradient(90deg, #0D1B3E, #162A58, #0D1B3E)",
      borderBottom: "2px solid var(--gold)",
      padding: "0.6rem 1.5rem",
      display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1, justifyContent: "center" }}>
        <span style={{
          fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800,
          letterSpacing: "0.18em", textTransform: "uppercase",
          background: "var(--gold)", color: "#07111F",
          padding: "0.2rem 0.6rem",
        }}>Beta</span>
        <p style={{
          fontFamily: "var(--f)", fontSize: "0.72rem", fontWeight: 600,
          color: "rgba(239,242,248,0.85)", letterSpacing: "0.02em",
        }}>
          This website is currently under development. Some features may not be fully available yet.
        </p>
        <a href="https://wa.me/6281298053826?text=Hi+Ervan%2C+I%27d+like+to+know+more+about+Backpackervun"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--gold)", textDecoration: "none", whiteSpace: "nowrap",
          }}>
          Contact Us →
        </a>
      </div>
      <button onClick={() => setVisible(false)} aria-label="Dismiss"
        style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(239,242,248,0.4)", fontSize: "1rem", lineHeight: 1, flexShrink: 0, padding: "0 4px" }}>
        ×
      </button>
    </div>
  );
}
