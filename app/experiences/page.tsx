import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import Link from "next/link";
import { EXPERIENCES, WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Experiences — Backpackervun" };

export default function ExperiencesPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Experiences" title="Travel with" titleAccent="Purpose." subtitle="From group departures to fully private escapes — every journey designed for depth, not just distance." bgImg="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Experiences" }]} />

      {/* Overview */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="exp-grid">
            {EXPERIENCES.map((exp) => (
              <Link key={exp.slug} href={`/experiences/${exp.slug}`}
                style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column", overflow: "hidden", textDecoration: "none", position: "relative" }}
                className="card-wrap">
                <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                  <div className="card-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${exp.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.55) brightness(0.52)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--bg-2) 100%)" }} />
                  <span style={{ position: "absolute", top: "1rem", right: "1.1rem", fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.88)", color: "rgba(232,168,32,0.95)" }}>{exp.tag}</span>
                </div>
                <div style={{ padding: "1.5rem 1.6rem 2rem", flex: 1 }}>
                  <h2 style={{ fontFamily: "var(--f)", fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{exp.name}</h2>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 600, color: "var(--gold)", marginBottom: "0.75rem", letterSpacing: "0.02em" }}>{exp.tagline}</p>
                  <p className="t-body" style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>{exp.desc}</p>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Explore →</span>
                </div>
                <div className="card-bar" />
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .exp-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>How It Works</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>Simple steps to your next adventure.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="steps-grid">
            {[
              { step: "01", title: "Choose Your Experience", desc: "Browse our trip series, request a private journey, or join a sport event." },
              { step: "02", title: "Talk to Ervan", desc: "Share your dates, group size, and destination. We'll craft the right plan for you." },
              { step: "03", title: "Confirm & Prepare", desc: "Receive your full itinerary, packing guide, and pre-trip briefing." },
              { step: "04", title: "Depart & Discover", desc: "Your trip leader handles everything. You just show up and experience it." },
            ].map(s => (
              <div key={s.step} style={{ background: "var(--bg)", padding: "1.75rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "2rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.75rem", lineHeight: 1 }}>{s.step}</p>
                <h3 style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p className="t-body" style={{ fontSize: "0.78rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .steps-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <CTASection title="Not sure which experience fits?" subtitle="Tell us your travel style and we'll recommend the perfect program." primaryLabel="Ask Ervan" primaryHref={WA_MSG("I'd like help choosing an experience")} />
      <Footer />
    </>
  );
}
