"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Planner", href: "https://travelplanner.backpackervun.com" },
  { label: "Private Trip", href: "#private-trip" },
  { label: "Trip Series", href: "#trip-series" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/70 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="Backpackervun"
              width={160}
              height={20}
              className="h-7 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-xs tracking-widest uppercase transition-colors duration-300"
                  style={{
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-muted)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://travelplanner.backpackervun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 border"
              style={{
                color: "var(--color-accent)",
                borderColor: "rgba(200,169,110,0.35)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                letterSpacing: "0.12em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
              }}
            >
              Open Planner
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--color-text)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--color-text)" }} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--color-text)" }} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: "rgba(10,10,10,0.97)" }}
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-2xl tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
                <a
                  href="https://travelplanner.backpackervun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-widest uppercase px-6 py-3 border inline-block"
                  style={{ color: "var(--color-accent)", borderColor: "rgba(200,169,110,0.4)" }}
                >
                  Open Planner
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
