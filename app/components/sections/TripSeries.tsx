"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TripSeriesData } from "@/app/types/sanity";

interface TripSeriesProps {
  trips: TripSeriesData[];
  whatsapp?: string;
}

export default function TripSeries({ trips, whatsapp }: TripSeriesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const waNumber = whatsapp ?? "628XXXXXXXXX";

  return (
    <section id="trip-series" ref={ref} className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "var(--color-surface)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 500 }}>Trip Series</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Join an<br /><span style={{ color: "var(--color-accent)" }}>Open Trip.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>Solo traveler? Join a curated group departure. Meet new people, explore new places, create new stories.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trips.map((trip, i) => <TripCard key={trip._id} trip={trip} index={i} inView={inView} waNumber={waNumber} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-center">
          <a href={`https://wa.me/${waNumber}?text=Hi%20Ervan%2C%20I%27m%20interested%20in%20joining%20an%20open%20trip!`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-widest uppercase border transition-all duration-300" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)", borderColor: "rgba(200,169,110,0.35)", fontWeight: 600 }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-bg)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)"; }}>
            View All Schedules →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function TripCard({ trip, index, inView, waNumber }: { trip: TripSeriesData; index: number; inView: boolean; waNumber: string }) {
  const total = trip.totalSlots ?? 1;
  const left = trip.slotsLeft ?? 0;
  const availPct = (left / total) * 100;
  const imgUrl = trip.imageUrl ?? "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80";
  const dateLabel = trip.startDate ? `${formatDate(trip.startDate)} – ${formatDate(trip.endDate)}` : "";

  return (
    <motion.article initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group flex flex-col overflow-hidden" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}>
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${imgUrl}')`, filter: "saturate(0.5) brightness(0.65)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--color-surface-2) 100%)" }} />
        <div className="absolute top-4 left-4"><span className="text-xs tracking-widest uppercase px-2.5 py-1" style={{ background: "rgba(10,10,10,0.8)", color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600, backdropFilter: "blur(8px)" }}>{trip.tag ?? "Open Trip"}</span></div>
        <div className="absolute top-4 right-4"><span className="text-xs px-2.5 py-1" style={{ background: left <= 5 ? "rgba(200,80,60,0.85)" : "rgba(60,150,80,0.85)", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 500, backdropFilter: "blur(8px)" }}>{left} slots left</span></div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 400 }}>{trip.destination}</p>
        <h3 className="text-base font-semibold mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>{trip.title}</h3>
        <div className="flex items-center gap-4 mb-5">
          {[trip.duration, `${trip.totalSlots} Slots`].filter(Boolean).map((item) => (
            <span key={item} className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>{item}</span>
          ))}
        </div>
        <div className="mb-5">
          <div className="flex justify-between mb-1.5">
            <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>Availability</span>
            <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>{left} left</span>
          </div>
          <div className="h-px w-full" style={{ background: "var(--color-border)" }}>
            <div className="h-px transition-all duration-1000" style={{ width: `${availPct}%`, background: "var(--color-accent)" }} />
          </div>
        </div>
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div>
            <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>{dateLabel}</p>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)" }}>{trip.price}</p>
          </div>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-300" style={{ color: "var(--color-text)", borderColor: "rgba(240,236,228,0.15)", fontFamily: "var(--font-body)", fontWeight: 500 }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,236,228,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)"; }}>
            Join Trip
          </a>
        </div>
      </div>
    </motion.article>
  );
}
