"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const navLinks = [
  { label: "Planner", href: "#ecosystem" },
  { label: "Pricing", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Twitter/X", href: "#" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-lg tracking-[0.2em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
                fontWeight: 300,
              }}
            >
              BACKPACKERVUN
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
              }}
            >
              A travel ecosystem for the modern explorer. Plan smarter, budget
              better, journey deeper.
            </p>
            <a
              href="mailto:hello@backpackervun.com"
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#d4b87a")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-accent)")
              }
            >
              hello@backpackervun.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: "rgba(240,236,228,0.45)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(240,236,228,0.45)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
            >
              Follow
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: "rgba(240,236,228,0.45)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(240,236,228,0.45)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="text-xs tracking-wider"
            style={{ color: "rgba(240,236,228,0.2)", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Backpackervun. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-wider transition-colors duration-300"
                style={{
                  color: "rgba(240,236,228,0.2)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(240,236,228,0.5)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(240,236,228,0.2)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
