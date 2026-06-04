"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PLANNER_URL, PRICING_URL } from "@/app/lib/data";

const EXPERIENCES_SUB = [
  { label: "Trip Series", href: "/experiences/open-trip", desc: "Curated group departures" },
  { label: "Private Trip", href: "/experiences/private-trip", desc: "Fully tailored for you" },
  { label: "Sport Tourism", href: "/experiences/sport-tourism", desc: "For athletes & enthusiasts" },
];

const DESTINATIONS_SUB = [
  { label: "Japan", href: "/destinations/japan" },
  { label: "South Korea", href: "/destinations/south-korea" },
  { label: "Indonesia", href: "/destinations/indonesia" },
  { label: "Europe", href: "/destinations/europe" },
  { label: "Umrah", href: "/destinations/umrah" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDropdown(null); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const linkStyle = { fontFamily: "var(--f)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", cursor: "pointer", background: "none", border: "none" };

  return (
    <>
      {/* Dev Banner spacing */}
      <div style={{ height: "36px" }} />

      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: "36px", left: 0, right: 0, zIndex: 50,
          background: scrolled ? "rgba(7,17,31,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.25rem" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/logo-white.png" alt="Backpackervun" width={140} height={17}
              style={{ height: "1.15rem", width: "auto", objectFit: "contain", opacity: scrolled ? 1 : 0, transition: "opacity 0.4s", pointerEvents: scrolled ? "auto" : "none" }} priority />
          </Link>

          {/* Desktop nav */}
          <nav ref={ddRef} style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-d">
            {/* Experiences dropdown */}
            <div style={{ position: "relative" }}>
              <button style={linkStyle} onClick={() => setDropdown(dropdown === "exp" ? null : "exp")}
                onMouseEnter={() => setDropdown("exp")}
                onMouseLeave={() => setDropdown(null)}>
                Experiences
              </button>
              <AnimatePresence>
                {dropdown === "exp" && (
                  <motion.div key="exp-dd" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                    onMouseLeave={() => setDropdown(null)}
                    style={{ position: "absolute", top: "calc(100% + 1rem)", left: "-1rem", background: "rgba(7,17,31,0.97)", border: "1px solid var(--border)", backdropFilter: "blur(20px)", minWidth: "220px", padding: "0.5rem 0" }}>
                    {EXPERIENCES_SUB.map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                        style={{ display: "block", padding: "0.7rem 1.25rem", textDecoration: "none", borderLeft: "2px solid transparent", transition: "all 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,168,32,0.05)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                        <p style={{ fontFamily: "var(--f)", fontSize: "0.78rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.15rem" }}>{item.label}</p>
                        <p style={{ fontFamily: "var(--f)", fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500 }}>{item.desc}</p>
                      </Link>
                    ))}
                    <div style={{ borderTop: "1px solid var(--border)", margin: "0.25rem 0" }} />
                    <Link href="/experiences" onClick={() => setDropdown(null)} style={{ display: "block", padding: "0.6rem 1.25rem", fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                      All Experiences →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Destinations dropdown */}
            <div style={{ position: "relative" }}>
              <button style={linkStyle} onClick={() => setDropdown(dropdown === "dest" ? null : "dest")}
                onMouseEnter={() => setDropdown("dest")}
                onMouseLeave={() => setDropdown(null)}>
                Destinations
              </button>
              <AnimatePresence>
                {dropdown === "dest" && (
                  <motion.div key="dest-dd" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                    onMouseLeave={() => setDropdown(null)}
                    style={{ position: "absolute", top: "calc(100% + 1rem)", left: "-1rem", background: "rgba(7,17,31,0.97)", border: "1px solid var(--border)", backdropFilter: "blur(20px)", minWidth: "190px", padding: "0.5rem 0" }}>
                    {DESTINATIONS_SUB.map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                        style={{ display: "block", padding: "0.65rem 1.25rem", fontFamily: "var(--f)", fontSize: "0.78rem", fontWeight: 700, color: "var(--text)", textDecoration: "none", borderLeft: "2px solid transparent", transition: "all 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,168,32,0.05)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                        {item.label}
                      </Link>
                    ))}
                    <div style={{ borderTop: "1px solid var(--border)", margin: "0.25rem 0" }} />
                    <Link href="/destinations" onClick={() => setDropdown(null)} style={{ display: "block", padding: "0.6rem 1.25rem", fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                      All Destinations →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/products" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Products</Link>
            <a href={PLANNER_URL} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Planner</a>
            <a href={PRICING_URL} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Pricing</a>
            <Link href="/our-story" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>Our Story</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <Link href="/contact" className="btn-gold nav-d" style={{ padding: "0.55rem 1.2rem", fontSize: "0.6rem" }}>Contact</Link>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu" style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }} className="nav-m">
              <div style={{ width: "20px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ display: "block", height: "1px", background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
                <span style={{ display: "block", height: "1px", background: "var(--text)", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
                <span style={{ display: "block", height: "1px", background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div key="mob" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(7,17,31,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0", overflowY: "auto", paddingTop: "5rem" }}>
            {[
              { label: "Experiences", href: "/experiences" },
              { label: "Destinations", href: "/destinations" },
              { label: "Products", href: "/products" },
              { label: "Planner", href: PLANNER_URL, ext: true },
              { label: "Pricing", href: PRICING_URL, ext: true },
              { label: "Our Story", href: "/our-story" },
              { label: "Contact", href: "/contact" },
            ].map((l, i) => (
              <motion.div key={l.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                style={{ width: "100%", borderBottom: "1px solid var(--border)", textAlign: "center" }}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined}
                  style={{ display: "block", padding: "1.25rem", fontFamily: "var(--f)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", textDecoration: "none", letterSpacing: "-0.01em" }}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`.nav-d { display: flex; } .nav-m { display: none; } @media (max-width: 1024px) { .nav-d { display: none !important; } .nav-m { display: flex !important; } }`}</style>
    </>
  );
}
