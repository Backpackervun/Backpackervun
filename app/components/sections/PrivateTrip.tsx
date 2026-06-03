"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  { name: "Japan", region: "Asia" },
  { name: "South Korea", region: "Asia" },
  { name: "Thailand", region: "Asia" },
  { name: "Saudi Arabia", region: "Middle East" },
  { name: "Turkey", region: "Middle East" },
  { name: "Morocco", region: "Africa" },
];

export default function PrivateTrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="private-trip"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Private Trip
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight mb-6 uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Your Journey,<br />
              <span style={{ color: "var(--color-accent)" }}>Your Way.</span>
            </h2>
            <p className="text-sm leading-loose mb-8 max-w-md" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Want a fully customized travel experience? We build private trips entirely around your schedule, group, and dream destinations. From intimate couples getaways to group adventures of 50+.
            </p>

            {/* What's included */}
            <div className="space-y-3 mb-10">
              {[
                "Custom itinerary crafted for you",
                "Flexible group size — from 2 to 50+",
                "Full coordination: flights, hotels, activities",
                "Dedicated trip leader throughout",
                "Photo & video documentation available",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--color-accent)" }} />
                  <span className="text-sm" style={{ color: "rgba(240,236,228,0.65)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/628XXXXXXXXX?text=Hi%20Ervan%2C%20I%27d%20like%20to%20request%20a%20private%20trip%20with%20Backpackervun!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4b87a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)"; }}
            >
              Request Your Trip
              <span>→</span>
            </a>
          </motion.div>

          {/* Right: Destinations grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Popular Destinations
            </p>
            <div className="grid grid-cols-2 gap-px" style={{ background: "var(--color-border)" }}>
              {destinations.map((dest, i) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="group p-6 flex flex-col gap-1 cursor-pointer transition-colors duration-300"
                  style={{ background: "var(--color-surface)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--color-surface-2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--color-surface)"; }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>
                    {dest.region}
                  </span>
                  <span className="text-base font-semibold" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
                    {dest.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "rgba(240,236,228,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Don&apos;t see your destination? Reach out — we can plan almost anywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
