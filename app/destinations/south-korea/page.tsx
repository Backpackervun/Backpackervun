import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "South Korea — Backpackervun" };

const cities = [
  { name: "Seoul", desc: "K-pop culture, royal palaces, street food alleys, rooftop cafés, and a city that never sleeps.", img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=85&auto=format&fit=crop" },
  { name: "Busan", desc: "Colorful hillside villages, stunning beaches, fresh seafood markets, and a slower coastal rhythm.", img: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=600&q=85&auto=format&fit=crop" },
  { name: "Jeju Island", desc: "Volcanic landscapes, Hallasan mountain, Hyeopjae beach, and a UNESCO-recognized natural wonder.", img: "https://images.unsplash.com/photo-1542816774-e4a7a79ba6a9?w=600&q=85&auto=format&fit=crop" },
  { name: "Gyeongju", desc: "The ancient Silla Kingdom capital — temples, royal tombs, and lotus ponds in a walkable historic city.", img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=85&auto=format&fit=crop" },
];

export default function SouthKoreaPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="South Korea" title="K-Culture, Royal Palaces," titleAccent="And Unforgettable Food." subtitle="A destination that's equal parts modern energy and ancient elegance." bgImg="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations", href: "/destinations" }, { label: "South Korea" }]} />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Why South Korea?</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>More than K-pop.<br /><span style={{ color: "var(--gold)" }}>More than kimchi.</span></h2>
              {["South Korea has exploded as one of Asia's most dynamic travel destinations — and the reality far exceeds the hype.", "Seoul is a world-class city with stunning palaces, a vibrant food scene, and nightlife that rivals anywhere on earth.", "Beyond Seoul, Busan's coastal energy, Jeju's volcanic landscapes, and Gyeongju's ancient temples round out one of Asia's most complete travel experiences."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[["Language", "Korean · English signage common in Seoul"], ["Currency", "Korean Won (KRW) · Cards accepted widely"], ["Best Time", "Spring (Apr–Jun) · Autumn (Sep–Nov)"], ["Visa", "Visa on arrival for Indonesian passport (30 days)"], ["Flight", "~6.5 hours from Jakarta"]].map(([k, v]) => (
                <div key={k} style={{ background: "var(--bg-2)", padding: "0.85rem 1.25rem", display: "flex", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", minWidth: "80px" }}>{k}</span>
                  <span className="t-body" style={{ fontSize: "0.76rem" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Featured Cities</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="cities-grid">
            {cities.map(c => (
              <div key={c.name} style={{ background: "var(--bg)", overflow: "hidden" }} className="card-wrap">
                <div style={{ height: "160px", backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.55)" }} />
                <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{c.name}</p>
                  <p className="t-body" style={{ fontSize: "0.72rem" }}>{c.desc}</p>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .cities-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section>

      <CTASection title="Ready to explore South Korea?" subtitle="Join our next Seoul departure or build your own custom Korea journey." primaryLabel="Plan My Korea Trip" primaryHref={WA_MSG("I'd like to plan a South Korea trip")} />
      <Footer />
    </>
  );
}
