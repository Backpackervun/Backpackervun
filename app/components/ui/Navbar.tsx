"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Services",     href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "rgba(7,17,31,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.25rem" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/logo-white.png" alt="Backpackervun" width={140} height={17}
              style={{ height: "1.15rem", width: "auto", objectFit: "contain", opacity: scrolled ? 1 : 0, transition: "opacity 0.4s", pointerEvents: scrolled ? "auto" : "none" }} priority />
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="nav-d">
            {links.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: "var(--f-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <a href="https://travelplanner.backpackervun.com" target="_blank" rel="noopener noreferrer"
              className="btn-gold nav-d" style={{ padding: "0.55rem 1.2rem", fontSize: "0.6rem" }}>
              Open Planner
            </a>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }}
              className="nav-m">
              <div style={{ width: "20px", display: "flex", flexDirection: "column", gap: "5px" }}>
                {[
                  open ? "rotate(45deg) translate(4px,4px)" : "none",
                  "none",
                  open ? "rotate(-45deg) translate(4px,-4px)" : "none",
                ].map((t, i) => (
                  <span key={i} style={{ display: "block", height: "1px", background: "var(--text)", transition: "all 0.3s", transform: t, opacity: i === 1 && open ? 0 : 1 }} />
                ))}
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div key="mob" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(7,17,31,0.97)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.25rem" }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ fontFamily: "var(--f-head)", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", textDecoration: "none", letterSpacing: "-0.01em" }}>
                {l.label}
              </motion.a>
            ))}
            <motion.a href="https://travelplanner.backpackervun.com" target="_blank" rel="noopener noreferrer"
              className="btn-gold" onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Open Planner
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`.nav-d { display: flex; } .nav-m { display: none; } @media (max-width: 768px) { .nav-d { display: none !important; } .nav-m { display: flex !important; } }`}</style>
    </>
  );
}
