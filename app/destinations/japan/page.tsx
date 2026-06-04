import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Japan — Backpackervun" };

const cities = [
  { name: "Tokyo", desc: "Neon lights, Shibuya crossing, Akihabara, world-class ramen, and the perfect blend of tradition and modernity.", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=85&auto=format&fit=crop" },
  { name: "Kyoto", desc: "Ancient temples, bamboo forests, geisha districts, and the spiritual heart of Japan.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=85&auto=format&fit=crop" },
  { name: "Osaka", desc: "Street food paradise, Dotonbori neon, vibrant nightlife, and Japan's friendliest locals.", img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=85&auto=format&fit=crop" },
  { name: "Nara", desc: "Roam with deer, visit Todai-ji Temple, and explore ancient Japan at a relaxed pace.", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=85&auto=format&fit=crop" },
  { name: "Hiroshima", desc: "History, resilience, and the Peace Memorial Park — a profound and essential visit.", img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=85&auto=format&fit=crop" },
];

const programs = [
  { title: "Japan Highlights — 10 Days", cities: "Tokyo · Kyoto · Osaka · Nara", price: "Rp 28.500.000", type: "Open Trip" },
  { title: "Tokyo Focus — 7 Days", cities: "Tokyo · Harajuku · Akihabara", price: "Rp 21.000.000", type: "Private" },
  { title: "Japan Cultural Deep Dive — 14 Days", cities: "Tokyo · Kyoto · Osaka · Hiroshima · Nara", price: "Rp 42.000.000", type: "Private" },
];

export default function JapanPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Japan" title="Where Ancient Temples" titleAccent="Meet Neon Streets." subtitle="A journey through contrasts — serene shrines, bustling cities, and the most refined culture on earth." bgImg="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations", href: "/destinations" }, { label: "Japan" }]} />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Why Japan?</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                No other destination quite like it.
              </h2>
              {["Japan is the country that consistently ranks as the world's most fascinating travel destination — and for good reason.",
                "From Tokyo's electric energy to Kyoto's meditative calm, from Osaka's street food culture to Hiroshima's powerful history — every city tells a different story.",
                "Backpackervun has run multiple dedicated Japan programs, making it our most well-documented and beloved destination."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[["Language", "Japanese — English menus common in cities"],
                ["Currency", "Japanese Yen (JPY) · Cash widely used"],
                ["Best Time", "Spring (Mar–May) · Autumn (Sep–Nov)"],
                ["Visa", "Visa on arrival for Indonesian passport (30 days)"],
                ["Flight", "~7–8 hours from Jakarta"]].map(([k, v]) => (
                <div key={k} style={{ background: "var(--bg-2)", padding: "0.85rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", minWidth: "80px", paddingTop: "1px" }}>{k}</span>
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
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>Five cities, one unforgettable trip.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1px", background: "var(--border)" }} className="cities-grid">
            {cities.map(c => (
              <div key={c.name} style={{ background: "var(--bg)", overflow: "hidden" }} className="card-wrap">
                <div style={{ height: "150px", backgroundImage: `url('${c.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.55)" }} />
                <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{c.name}</p>
                  <p className="t-body" style={{ fontSize: "0.72rem" }}>{c.desc}</p>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 1000px) { .cities-grid { grid-template-columns: repeat(3,1fr) !important; } } @media (max-width: 600px) { .cities-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section>

      <section className="section-sm" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Travel Seasons</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="seasons-grid">
            {[{ s: "Spring", m: "Mar – May", note: "Cherry Blossom Season", best: true },
              { s: "Summer", m: "Jun – Aug", note: "Festivals & hot weather", best: false },
              { s: "Autumn", m: "Sep – Nov", note: "Fall foliage, cool air", best: true },
              { s: "Winter", m: "Dec – Feb", note: "Snow, fewer crowds", best: false }].map(({ s, m, note, best }) => (
              <div key={s} style={{ background: best ? "rgba(232,168,32,0.07)" : "var(--bg-2)", padding: "1.4rem 1.25rem", borderTop: best ? "2px solid var(--gold)" : "2px solid transparent" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: best ? "var(--gold)" : "var(--text)", marginBottom: "0.2rem" }}>{s}</p>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.5rem" }}>{m}</p>
                <p className="t-body" style={{ fontSize: "0.72rem" }}>{note}</p>
                {best && <p className="t-eye" style={{ marginTop: "0.5rem", fontSize: "0.52rem" }}>Recommended</p>}
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .seasons-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Sample Programs</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {programs.map(p => (
              <div key={p.title} style={{ background: "var(--bg)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }} className="hover-border-gold">
                <div>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", marginBottom: "0.25rem" }}>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.2rem 0.5rem", background: "var(--gold-dim)", color: "var(--gold)", border: "1px solid rgba(232,168,32,0.25)" }}>{p.type}</span>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)" }}>{p.title}</span>
                  </div>
                  <p className="t-body" style={{ fontSize: "0.72rem" }}>{p.cities}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: "var(--gold)" }}>{p.price}</span>
                  <a href={WA_MSG(`I'm interested in the ${p.title}`)} target="_blank" rel="noopener noreferrer" className="hover-outline-gold"
                    style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.45rem 1rem", border: "1px solid rgba(239,242,248,0.18)", color: "var(--text)", textDecoration: "none", whiteSpace: "nowrap" }}>
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Travel Tips</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="tips-grid">
            {[["Get a Suica Card", "Load this IC card for all public transport across Japan."],
              ["Cash Is Still King", "Many restaurants and small shops don't accept cards. Always carry yen."],
              ["Use Google Maps Offline", "Download offline maps for Tokyo and Kyoto before you land."],
              ["Luggage Forwarding", "Use takkyubin services to forward bags between cities."],
              ["Respect Quiet Zones", "Trains have quiet cars. No phone calls on board."],
              ["Timing Matters", "Book cherry blossom season 3–6 months ahead — hotels fill up fast."]].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg-2)", padding: "1.25rem 1.35rem" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.75rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .tips-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .tips-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>FAQ</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", maxWidth: "720px" }}>
            {[["Do I need a visa?", "Indonesian passport holders get visa-free entry to Japan for up to 30 days."],
              ["Is Japan expensive?", "Japan is mid-range when budgeted well. Our packages include accommodation and transport."],
              ["What's the best city to start with?", "Tokyo — the gateway hub with direct flights from Jakarta."],
              ["Can I join if I don't speak Japanese?", "Absolutely. Major cities are very English-friendly, and your trip leader handles all logistics."]].map(([q, a]) => (
              <div key={q} style={{ background: "var(--bg)", padding: "1.2rem 1.5rem" }} className="hover-border-gold">
                <p style={{ fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.35rem" }}>{q}</p>
                <p className="t-body" style={{ fontSize: "0.78rem" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to experience Japan?" subtitle="Join our next departure or design your own private Japan journey." primaryLabel="Plan My Japan Trip" primaryHref={WA_MSG("I'd like to plan a Japan trip")} />
      <Footer />
    </>
  );
}
