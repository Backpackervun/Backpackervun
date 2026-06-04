"use client";
import { WA_MSG, PLANNER_URL } from "@/app/lib/data";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bg?: string;
}

export default function CTASection({
  title = "Ready to start your journey?",
  subtitle = "Reach out via WhatsApp and we'll help you plan the perfect trip.",
  primaryLabel = "Chat on WhatsApp",
  primaryHref,
  secondaryLabel = "Open Planner",
  secondaryHref = PLANNER_URL,
  bg = "var(--bg)",
}: CTASectionProps) {
  return (
    <section className="section" style={{ background: bg, borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      <div className="pattern-dots" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.3 }} />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <p className="t-eye" style={{ marginBottom: "1rem" }}>Start Planning</p>
        <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          {title}
        </h2>
        <p className="t-body" style={{ maxWidth: "400px", margin: "0 auto 2.5rem" }}>{subtitle}</p>
        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={primaryHref ?? WA_MSG("I'd like to plan a trip")} target="_blank" rel="noopener noreferrer" className="btn-gold">{primaryLabel}</a>
          <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn-outline">{secondaryLabel}</a>
        </div>
      </div>
    </section>
  );
}
