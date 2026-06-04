interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gold?: string; // accent word
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "left", gold }: SectionHeaderProps) {
  const parts = gold ? title.split(gold) : null;
  return (
    <div style={{ textAlign: align, marginBottom: "3rem" }}>
      {eyebrow && <p className="t-eye" style={{ marginBottom: "0.9rem" }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
        {parts ? <>{parts[0]}<span style={{ color: "var(--gold)" }}>{gold}</span>{parts[1]}</> : title}
      </h2>
      {subtitle && <p className="t-body" style={{ marginTop: "0.9rem", maxWidth: align === "center" ? "500px" : "420px", margin: align === "center" ? "0.9rem auto 0" : "0.9rem 0 0" }}>{subtitle}</p>}
    </div>
  );
}
