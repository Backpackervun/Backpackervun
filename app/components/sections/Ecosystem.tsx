"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    number: "01",
    title: "Travel Planner",
    subtitle: "Plan Without Limits",
    description:
      "Smart itinerary tools and travel organization built for the modern explorer. Build trip timelines, manage bookings, and travel with clarity.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop",
    cta: "Open Planner",
    href: "#",
  },
  {
    number: "02",
    title: "Travel Pricing",
    subtitle: "Budget Like a Pro",
    description:
      "Estimate transportation, accommodation, and daily costs across any destination. Stop guessing—start planning with precision.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop",
    cta: "View Pricing",
    href: "#",
  },
  {
    number: "03",
    title: "Digital Products",
    subtitle: "Carry Your Tools",
    description:
      "Premium templates and resources crafted for modern travelers. Curated digital packs that fit in your pocket and sharpen every trip.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop",
    cta: "Browse Products",
    href: "#products",
  },
];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Subtle top border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-accent))" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
          >
            The Ecosystem
          </p>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-light leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Everything you need<br />
            <em>in one place.</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "var(--color-border)" }}>
          {cards.map((card, i) => (
            <EcosystemCard key={card.number} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({
  card,
  index,
  inView,
}: {
  card: (typeof cards)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('${card.image}')`,
            filter: "saturate(0.5) brightness(0.6)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, var(--color-surface) 100%)",
          }}
        />
        {/* Number overlay */}
        <div className="absolute top-5 left-6">
          <span
            className="text-xs tracking-widest"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
          >
            {card.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 lg:p-8">
        <p
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
        >
          {card.subtitle}
        </p>
        <h3
          className="text-2xl font-light mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          {card.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-8 flex-1"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {card.description}
        </p>
        <a
          href={card.href}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase group/link"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
        >
          {card.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: "var(--color-accent)" }}
      />
    </motion.div>
  );
}
