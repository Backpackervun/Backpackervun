import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";
export const metadata = { title: "Indonesia — Backpackervun" };
export default function IndonesiaPage() {
  const cities = [
    { name: "Bali", desc: "Rice terraces, sacred temples, surf beaches, and the spiritual center of the archipelago.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=85&auto=format&fit=crop" },
    { name: "Yogyakarta", desc: "Home to Borobudur and Prambanan — two of the most stunning ancient temples in Southeast Asia.", img: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=600&q=85&auto=format&fit=crop" },
    { name: "Banyuwangi", desc: "Gateway to Ijen's blue fire, the savanna of Baluran, and raw East Java nature.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=85&auto=format&fit=crop" },
    { name: "Batukaras", desc: "A hidden gem surf village in West Java — relaxed, beautiful, and off the beaten path.", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=85&auto=format&fit=crop" },
  ];
  return (
    <>
      <DevBanner /><Navbar />
      <PageHero eyebrow="Indonesia" title="Hidden Beaches," titleAccent="Ancient Temples." subtitle="Our home — and one of the world's most diverse travel destinations." bgImg="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations", href: "/destinations" }, { label: "Indonesia" }]} />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Featured Cities</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="cities-grid">
            {cities.map(c => (
              <div key={c.name} style={{ background: "var(--bg-2)", overflow: "hidden" }} className="card-wrap">
                <div style={{ height: "160px", backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.55)" }} />
                <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.35rem" }}>{c.name}</p>
                  <p className="t-body" style={{ fontSize: "0.72rem" }}>{c.desc}</p>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
          <style>{`.cities-grid { } @media (max-width: 768px) { .cities-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
        </div>
      </section>
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Why Explore Indonesia With Us?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="why-grid">
            {[["Local Knowledge", "As Indonesians, we know the hidden spots, the best warung, and when to avoid the crowds."],
              ["Off the Beaten Path", "Our programs go beyond Kuta. We take you to the real Indonesia."],
              ["Full Support", "Even domestically, having a guide changes everything — logistics, language, and local context."]].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg)", padding: "1.4rem 1.5rem", borderLeft: "2px solid var(--gold)" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.76rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
      <CTASection title="Discover Indonesia your way." subtitle="Local expertise. Real experiences. Your home country seen fresh." primaryLabel="Plan My Indonesia Trip" primaryHref={WA_MSG("I'd like to explore Indonesia")} />
      <Footer />
    </>
  );
}
