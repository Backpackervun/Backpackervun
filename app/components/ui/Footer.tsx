"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { FooterData } from "@/app/types/sanity";

interface FooterProps {
  footer: FooterData | null;
  logoUrl?: string;
}

export default function Footer({ footer, logoUrl }: FooterProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const exploreLinks = footer?.exploreLinks ?? [];
  const socialLinks = footer?.socialLinks ?? [];
  const logo = logoUrl ?? "/logo-white.png";

  return (
    <footer ref={ref} className="relative pt-20 pb-10 overflow-hidden" style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Image src={logo} alt="Backpackervun" width={180} height={22} className="h-8 w-auto object-contain mb-5" />
            <p className="text-sm leading-relaxed max-w-xs mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {footer?.tagline ?? "Supporting people on their first and next unforgettable journeys."}
            </p>
            <p className="text-xs tracking-widest mb-6" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>{footer?.hashtag ?? "#AwalSemuaCerita"}</p>
            {footer?.email && (
              <a href={`mailto:${footer.email}`} className="text-xs tracking-widest uppercase transition-colors duration-300" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d4b87a")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)")}>
                {footer.email}
              </a>
            )}
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="text-sm transition-colors duration-300" style={{ color: "rgba(240,236,228,0.4)", fontFamily: "var(--font-body)", fontWeight: 300 }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,236,228,0.4)")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>Follow</p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-300" style={{ color: "rgba(240,236,228,0.4)", fontFamily: "var(--font-body)", fontWeight: 300 }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,236,228,0.4)")}>
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
          <p className="text-xs" style={{ color: "rgba(240,236,228,0.2)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} {footer?.copyright ?? "Backpackervun. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-xs transition-colors duration-300" style={{ color: "rgba(240,236,228,0.2)", fontFamily: "var(--font-body)" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,236,228,0.5)")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,236,228,0.2)")}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
