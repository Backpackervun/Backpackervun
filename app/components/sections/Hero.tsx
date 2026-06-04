"use client";

import { motion } from "framer-motion";
import type { HeroData } from "@/app/types/sanity";

interface HeroProps {
  hero: HeroData | null;
}

export default function Hero({ hero }: HeroProps) {
  const bgImage = hero?.heroImageUrl ?? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "var(--color-bg)" }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')`, filter: "saturate(0.6) brightness(0.4)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.65) 80%, rgba(10,10,10,1) 100%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "200px" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {hero?.eyebrow ?? "Your Traveling Partner"}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.8rem,9vw,8rem)] leading-none tracking-tight mb-6 select-none font-bold uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", letterSpacing: "-0.02em" }}>
          {hero?.headline ?? "BACKPACKERVUN"}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="text-base lg:text-lg font-light mb-3 max-w-xl" style={{ color: "rgba(240,236,228,0.7)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {hero?.subheadline ?? "Supporting people on their first and next unforgettable journeys."}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.68, ease: [0.16, 1, 0.3, 1] }} className="text-xs tracking-widest mb-10" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {hero?.hashtag ?? "#AwalSemuaCerita"}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={hero?.primaryButtonLink ?? "https://travelplanner.backpackervun.com"}
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 font-medium"
            style={{ fontFamily: "var(--font-body)", backgroundColor: "var(--color-accent)", color: "var(--color-bg)", fontWeight: 600 }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4b87a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)"; }}
          >
            {hero?.primaryButtonText ?? "Open Planner"}
          </a>
          <a
            href={hero?.secondaryButtonLink ?? "#private-trip"}
            className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", borderColor: "rgba(240,236,228,0.25)", fontWeight: 500 }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.6)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.25)"; }}
          >
            {hero?.secondaryButtonText ?? "Request Private Trip"}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }} />
      </motion.div>
    </section>
  );
}
