import Link from "next/link";

interface Crumb { label: string; href?: string; }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
      <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link href="/" style={{ fontFamily: "var(--f)", fontSize: "0.68rem", fontWeight: 600, color: "var(--text-faint)", textDecoration: "none", letterSpacing: "0.05em" }}>Home</Link>
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "var(--text-faint)", fontSize: "0.6rem" }}>›</span>
            {c.href ? (
              <Link href={c.href} style={{ fontFamily: "var(--f)", fontSize: "0.68rem", fontWeight: 600, color: i === crumbs.length - 1 ? "var(--gold)" : "var(--text-faint)", textDecoration: "none" }}>{c.label}</Link>
            ) : (
              <span style={{ fontFamily: "var(--f)", fontSize: "0.68rem", fontWeight: 600, color: "var(--gold)" }}>{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
