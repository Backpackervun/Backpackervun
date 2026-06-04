import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { PRODUCTS, WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Digital Products — Backpackervun" };

export default function ProductsPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Digital Products" title="Travel Smarter." titleAccent="Plan Better." subtitle="Premium templates, guides, and tools built for serious travelers." bgImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Products" }]} />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>All Products</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
            Tools for the deliberate traveler.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="prod-grid">
            {PRODUCTS.map(p => (
              <div key={p.id} style={{ background: "var(--bg-2)", overflow: "hidden", display: "flex", flexDirection: "column" }} className="card-wrap">
                <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
                  <div className="card-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${p.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.55)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--bg-2) 100%)" }} />
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.88)", color: "rgba(232,168,32,0.95)" }}>
                    {p.tag}
                  </span>
                </div>
                <div style={{ padding: "1.25rem 1.3rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.6rem" }}>{p.name}</h3>
                  <p className="t-body" style={{ fontSize: "0.76rem", flex: 1, marginBottom: "1.25rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.875rem", borderTop: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "var(--f)", fontSize: "1rem", fontWeight: 800, color: "var(--gold)" }}>{p.price}</span>
                    <a href={p.href} className="hover-outline-gold"
                      style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.4rem 0.9rem", border: "1px solid rgba(239,242,248,0.18)", color: "var(--text)", textDecoration: "none" }}>
                      Get Now
                    </a>
                  </div>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .prod-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .prod-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Why Our Products?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="why-grid">
            {[
              ["Built by a Traveler", "Every product is created from real trip experience — not theory."],
              ["Instant Download", "Buy and use immediately. All products delivered as digital files."],
              ["Fully Editable", "Every template is designed to be customized for your specific destination."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg)", padding: "1.4rem 1.5rem", borderLeft: "2px solid var(--gold)" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.76rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
      <CTASection title="Need a custom product?" subtitle="Looking for something specific? We can create custom itineraries and guides." primaryLabel="Request Custom Product" primaryHref={WA_MSG("I'd like a custom travel product")} />
      <Footer />
    </>
  );
}
