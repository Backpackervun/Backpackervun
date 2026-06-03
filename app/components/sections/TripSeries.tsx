"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trips = [
  {
    id: "japan-nov",
    tag: "Open Trip",
    destination: "Japan",
    title: "Japan Autumn Explorer",
    dates: "Nov 15 – Nov 25, 2025",
    duration: "10 Days",
    slots: "12 Slots",
    slotsLeft: 5,
    price: "Rp 28.500.000",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop",
    status: "open",
  },
  {
    id: "korea-dec",
    tag: "Open Trip",
    destination: "South Korea",
    title: "Seoul Winter Escape",
    dates: "Dec 20 – Dec 29, 2025",
    duration: "9 Days",
    slots: "15 Slots",
    slotsLeft: 8,
    price: "Rp 22.000.000",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80&auto=format&fit=crop",
    status: "open",
  },
  {
    id: "thailand-jan",
    tag: "Open Trip",
    destination: "Thailand",
    title: "Bangkok & Chiang Mai",
    dates: "Jan 10 – Jan 17, 2026",
    duration: "7 Days",
    slots: "20 Slots",
    slotsLeft: 12,
    price: "Rp 14.500.000",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&auto=format&fit=crop",
    status: "open",
  },
];

export default function TripSeries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trip-series"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Trip Series
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Join an<br />
              <span style={{ color: "var(--color-accent)" }}>Open Trip.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Solo traveler? Join a curated group departure. Meet new people, explore new places, create new stories.
          </p>
        </motion.div>

        {/* Trip cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trips.map((trip, i) => (
            <TripCard key={trip.id} trip={trip} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://wa.me/628XXXXXXXXX?text=Hi%20Ervan%2C%20I%27m%20interested%20in%20joining%20an%20open%20trip!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-widest uppercase border transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-accent)",
              borderColor: "rgba(200,169,110,0.35)",
              fontWeight: 600,
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
            View All Schedules →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TripCard({ trip, index, inView }: { trip: (typeof trips)[0]; index: number; inView: boolean }) {
  const availPct = (trip.slotsLeft / parseInt(trip.slots)) * 100;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden"
      style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.image}')`, filter: "saturate(0.5) brightness(0.65)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--color-surface-2) 100%)" }} />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="text-xs tracking-widest uppercase px-2.5 py-1"
            style={{ background: "rgba(10,10,10,0.8)", color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600, backdropFilter: "blur(8px)" }}
          >
            {trip.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="text-xs px-2.5 py-1"
            style={{
              background: trip.slotsLeft <= 5 ? "rgba(200,80,60,0.85)" : "rgba(60,150,80,0.85)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              backdropFilter: "blur(8px)",
            }}
          >
            {trip.slotsLeft} slots left
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>
          {trip.destination}
        </p>
        <h3 className="text-base font-semibold mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
          {trip.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-5">
          {[trip.duration, trip.slots].map((item) => (
            <span key={item} className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {item}
            </span>
          ))}
        </div>

        {/* Availability bar */}
        <div className="mb-5">
          <div className="flex justify-between mb-1.5">
            <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>Availability</span>
            <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>{trip.slotsLeft} left</span>
          </div>
          <div className="h-px w-full" style={{ background: "var(--color-border)" }}>
            <div className="h-px transition-all duration-1000" style={{ width: `${availPct}%`, background: "var(--color-accent)" }} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div>
            <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {trip.dates}
            </p>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)" }}>
              {trip.price}
            </p>
          </div>
          <a
            href="https://wa.me/628XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-300"
            style={{ color: "var(--color-text)", borderColor: "rgba(240,236,228,0.15)", fontFamily: "var(--font-body)", fontWeight: 500 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
            }}
          >
            Join Trip
          </a>
        </div>
      </div>
    </motion.article>
  );
}
