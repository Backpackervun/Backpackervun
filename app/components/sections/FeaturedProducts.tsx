"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: "japan",
    tag: "Asia",
    title: "Japan Travel Planner",
    description:
      "A complete, editable 14-day itinerary for Japan. Covers Tokyo, Kyoto, Osaka, and Hiroshima — with transport breakdowns, budget estimates, and daily schedules.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80&auto=format&fit=crop",
    price: "Rp 49.000",
    cta: "Get Template",
  },
  {
    id: "budget",
    tag: "Finance",
    title: "Budget Spreadsheet",
    description:
      "A powerful travel budget tracker with category breakdowns, currency conversion, and daily spending summaries — built for the obsessive planner.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&auto=format&fit=crop",
    price: "Rp 35.000",
    cta: "Get Spreadsheet",
  },
  {
    id: "itinerary",
    tag: "Planning",
    title: "Itinerary Pack",
    description:
      "A flexible, multi-destination itinerary template pack — adaptable for any trip length, region, or travel style. Clean, minimal, print-ready.",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80&auto=format&fit=crop",
    price: "Rp 65.000",
    cta: "Get Pack",
  },
];

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
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
              Digital Products
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
              Tools for the<br />
              <span style={{ color: "var(--color-accent)" }}>deliberate traveler.</span>
            </h2>
          </div>
          <a href="#" className="text-xs tracking-widest uppercase self-start lg:self-auto inline-flex items-center gap-2"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            View All Products <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, inView }: { product: (typeof products)[0]; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden"
      style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
    >
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')`, filter: "saturate(0.5) brightness(0.65)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, var(--color-surface-2) 100%)" }} />
        <div className="absolute top-4 left-4">
          <span className="text-xs tracking-widest uppercase px-2.5 py-1"
            style={{ background: "rgba(10,10,10,0.7)", color: "var(--color-accent)", fontFamily: "var(--font-body)", fontWeight: 600, backdropFilter: "blur(8px)" }}>
            {product.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-semibold mb-3" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
          {product.title}
        </h3>
        <p className="text-xs leading-relaxed flex-1 mb-6" style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <span className="text-base font-bold" style={{ fontFamily: "var(--font-body)", color: "var(--color-accent)" }}>
            {product.price}
          </span>
          <a
            href="#"
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
            {product.cta}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
