import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Trip Series — Open Trip | Backpackervun" };

const programs = [
  { dest: "Japan", cities: "Tokyo & Kyoto", duration: "10 Days", price: "Rp 28.500.000", dates: "Nov 2025", img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=85&auto=format&fit=crop" },
  { dest: "South Korea", cities: "Seoul", duration: "9 Days", price: "Rp 22.000.000", dates: "Dec 2025", img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=85&auto=format&fit=crop" },
  { dest: "Thailand", cities: "Bangkok", duration: "7 Days", price: "Rp 14.500.000", dates: "Jan 2026", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=85&auto=format&fit=crop" },
  { dest: "Indonesia", cities: "Bali", duration: "5 Days", price: "Rp 8.500.000", dates: "Feb 2026", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=85&auto=format&fit=crop" },
];

export default function OpenTripPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Open Trip" title="Join a Departure," titleAccent="Find Your People." subtitle="Curated group journeys to Asia's best cities. Solo or with friends — every departure is fully guided." bgImg="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Experiences", href: "/experiences" }, { label: "Trip Series" }]} />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>What Is a Trip Series?</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                The best way to explore without going alone.
              </h2>
              {["Our Trip Series are scheduled open departures — curated group journeys led by a certified trip leader. Whether you travel solo, as a couple, or with friends, you join a small group of like-minded explorers.",
                "Every trip is planned down to the last detail: flights, hotels, day-by-day itinerary, local experiences, and on-ground support. You just show up and discover.",
                "We keep groups intentionally small — typically 10–20 travelers — so every experience stays personal, flexible, and memorable."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[["Small Groups", "Max 20 travelers per departure"],
                ["Fully Guided", "BNSP-certified trip leader throughout"],
                ["All Inclusive", "Flights, hotels, activities, meals included"],
                ["On-Ground Support", "24/7 assistance during your trip"]].map(([t, d]) => (
                <div key={t} style={{ background: "var(--bg-2)", padding: "1.1rem 1.4rem", borderLeft: "2px solid var(--gold)" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{t}</p>
                  <p className="t-body" style={{ fontSize: "0.75rem" }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Who Is It For?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="who-grid">
            {[["Solo Travelers", "Join a group, make new friends, explore confidently.", "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80"],
              ["First-Time Travelers", "Let us handle everything — you focus on the experience.", "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&q=80"],
              ["Friend Groups", "Join with 2–5 friends and blend into a bigger group.", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80"]].map(([t, d, img]) => (
              <div key={t} style={{ background: "var(--bg)", overflow: "hidden" }} className="card-wrap">
                <div style={{ height: "160px", backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.55)" }} />
                <div style={{ padding: "1.2rem 1.3rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                  <p className="t-body" style={{ fontSize: "0.76rem" }}>{d}</p>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .who-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Upcoming Departures</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>Pick your departure.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {programs.map(p => (
              <div key={p.dest} style={{ background: "var(--bg-2)", display: "grid", gridTemplateColumns: "64px 1fr auto", overflow: "hidden", alignItems: "stretch" }} className="trip-row">
                <div style={{ width: "64px", height: "64px", overflow: "hidden", position: "relative", alignSelf: "center" }}>
                  <div className="tr-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${p.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.5) brightness(0.6)" }} />
                </div>
                <div style={{ padding: "1rem 1.5rem", borderLeft: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline", marginBottom: "0.25rem" }}>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{p.dest}</span>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.01em" }}>{p.cities}</span>
                  </div>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 500 }}>{p.dates} · {p.duration}</p>
                </div>
                <div style={{ padding: "1rem 1.5rem", borderLeft: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem", minWidth: "180px" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--gold)" }}>{p.price}</p>
                  <a href={WA_MSG(`I'd like to join the ${p.dest} trip`)} target="_blank" rel="noopener noreferrer" className="hover-outline-gold"
                    style={{ fontFamily: "var(--f)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.45rem 1rem", border: "1px solid rgba(239,242,248,0.18)", color: "var(--text)", textDecoration: "none", whiteSpace: "nowrap" }}>
                    Join
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>FAQ</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", maxWidth: "720px" }}>
            {[["Can I join alone?", "Absolutely. Most of our participants join solo. Our groups are welcoming and you'll quickly feel at home."],
              ["What's included in the price?", "Flights from Indonesia, accommodation, daily transport, entrance fees, guided tours, and a trip leader. Some meals included depending on program."],
              ["How do I secure my spot?", "Contact us on WhatsApp to check availability. A deposit confirms your booking."],
              ["Is this suitable for first-time international travelers?", "Yes. Our programs are designed to be accessible and stress-free, especially for first-timers."]].map(([q, a]) => (
              <div key={q} style={{ background: "var(--bg)", padding: "1.25rem 1.5rem" }} className="hover-border-gold">
                <p style={{ fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{q}</p>
                <p className="t-body" style={{ fontSize: "0.78rem" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to join a departure?" subtitle="Spots fill quickly. Reach out now to check availability." />
      <Footer />
    </>
  );
}
