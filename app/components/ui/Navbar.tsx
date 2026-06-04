"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
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
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>
          {/* Logo — always visible in navbar */}
          <a href="#" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo-white.png"
              alt="Backpackervun"
              width={148}
              height={18}
              style={{ height: "1.25rem", width: "auto", objectFit: "contain",
                opacity: scrolled ? 1 : 0,
                transition: "opacity 0.4s",
                pointerEvents: scrolled ? "auto" : "none"
              }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: "var(--f-body)", fontSize: "0.72rem", fontWeight: 500,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--text-muted)", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{l.label}</a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="https://travelplanner.backpackervun.com" target="_blank" rel="noopener noreferrer" className="btn-gold hidden-mobile" style={{ padding: "0.6rem 1.4rem", fontSize: "0.65rem" }}>
              Open Planner
            </a>
            {/* Hamburger */}
            <button onClick={() => setOpen(v => !v)} aria-label="Menu" className="show-mobile" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
              <span style={{ display: "block", width: "20px", height: "1px", background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
              <span style={{ display: "block", width: "20px", height: "1px", background: "var(--text)", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", width: "20px", height: "1px", background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div key="mob" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(8,8,8,0.97)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ fontFamily: "var(--f-display)", fontSize: "2rem", color: "var(--text)", textDecoration: "none", fontStyle: "italic" }}>
                {l.label}
              </motion.a>
            ))}
            <motion.a href="https://travelplanner.backpackervun.com" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="btn-gold" onClick={() => setOpen(false)}>
              Open Planner
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
