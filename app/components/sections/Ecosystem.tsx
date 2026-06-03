"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    number: "01",
    title: "Travel Planner",
    subtitle: "Plan Without Limits",
    description:
      "Smart itinerary tools and travel organization built for the modern explorer. Build trip timelines, organize your journey, and travel with full clarity.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop",
    cta: "Open Planner",
    href: "https://travelplanner.backpackervun.com",
    external: true,
  },
  {
    number: "02",
    title: "Private Trip",
    subtitle: "Your Journey, Your Way",
    description:
      "Want a fully customized travel experience? Request your own private trip — destination, dates, and group size tailored entirely around you.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop",
    cta: "Request Now",
    href: "#private-trip",
    external: false,
  },
  {
    number: "03",
    title: "Trip Series",
    subtitle: "Join an Open Trip",
    description:
      "Curated open trips for solo travelers and small groups. Check the latest schedules, join a departure, and connect with fellow explorers.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop",
    cta: "See Schedule",
    href: "#trip-series",
    external: false,
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--color-accent))" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            The Ecosystem
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-tight" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontWeight: 300 }}>
            Everything you need<br />
            <span className="font-semibold">in one place.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
          {cards.map((card, i) => (
            <EcosystemCard key={card.number} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({ card, index, inView }: { card: (typeof cards)[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${card.image}')`, filter: "saturate(0.5) brightness(0.6)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--color-surface) 100%)" }} />
        <div className="absolute top-5 left-6">
          <span className="text-xs tracking-widest" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}>
            {card.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7 lg:p-8">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {card.subtitle}
        </p>
        <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {card.description}
        </p>
        <a
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase group/link"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600 }}
        >
          {card.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ background: "var(--color-accent)" }} />
    </motion.div>
  );
}
