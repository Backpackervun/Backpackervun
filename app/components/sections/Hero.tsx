"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Cinematic background — layered image + grain + overlay */}
      <div className="absolute inset-0 z-0">
        {/* Primary bg image via unsplash (CDN, no auth needed) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop')",
            filter: "saturate(0.6) brightness(0.45)",
          }}
        />
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.7) 80%, rgba(10,10,10,1) 100%)",
          }}
        />
        {/* Subtle film grain via SVG noise */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Travel Ecosystem
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,8.5rem)] leading-none tracking-tight mb-6 select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
          }}
        >
          BACKPACKERVUN
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-base lg:text-xl font-light mb-12 max-w-md"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "rgba(240,236,228,0.65)",
            fontWeight: 300,
          }}
        >
          Travel smarter, journey deeper.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#ecosystem"
            className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              fontWeight: 500,
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4b87a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)";
            }}
          >
            Explore Planner
          </a>
          <a
            href="#products"
            className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text)",
              borderColor: "rgba(240,236,228,0.25)",
              fontWeight: 400,
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.25)";
            }}
          >
            Explore Pricing
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
