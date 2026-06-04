import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Private Trip — Backpackervun" };

export default function PrivateTripPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Private Trip" title="Your Journey," titleAccent="Your Rules." subtitle="Fully customized travel designed around your schedule, group, and dream destinations." bgImg="https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Experiences", href: "/experiences" }, { label: "Private Trip" }]} />

      {/* What is it */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Overview</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>No fixed schedule.<br /><span style={{ color: "var(--gold)" }}>No compromise.</span></h2>
              {["A Private Trip is a completely custom journey built around you — your dates, your destination, your pace, and your group size.", "From a romantic 3-day city escape to a 14-day corporate group adventure, we design every element with precision.", "You get a dedicated trip leader, a full pre-trip briefing, and 24/7 support throughout the journey."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", alignContent: "start" }}>
              {[["2–60+", "Group Size"], ["Any", "Destination"], ["1–21 Days", "Trip Length"], ["Custom", "Every Detail"]].map(([v, l]) => (
                <div key={l} style={{ background: "var(--bg-2)", padding: "1.5rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "1.6rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{v}</p>
                  <p className="t-eye" style={{ marginTop: "0.35rem", fontSize: "0.55rem", color: "var(--text-faint)" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      {/* Who it's for */}
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Who Is It For?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "var(--border)", maxWidth: "780px" }} className="who-grid-2">
            {[
              ["Couples & Families", "Romantic getaways, honeymoons, and family trips designed around your story."],
              ["Corporate Groups", "Team outings, incentive trips, and retreats — professionally organized."],
              ["Friend Groups", "Plan a trip your way — your crew, your cities, your timeline."],
              ["Pilgrimage Groups", "Spiritual journeys (Umrah, visits) handled with care and respect."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg)", padding: "1.4rem 1.5rem", borderLeft: "2px solid var(--gold)" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.76rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 580px) { .who-grid-2 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>How It Works</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>From idea to departure in 4 steps.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }} className="steps-grid">
            {[["01", "Share Your Vision", "Tell us your destination, dates, group size, and travel style — as much or as little detail as you have."],
              ["02", "Get a Proposal", "We design a custom itinerary and send you a full program with pricing within 48 hours."],
              ["03", "Refine & Confirm", "We adjust the plan together until it's exactly right. A deposit locks in your trip."],
              ["04", "Travel, Fully Supported", "Your dedicated trip leader ensures every detail runs smoothly, start to finish."]].map(([s, t, d]) => (
              <div key={s} style={{ background: "var(--bg-2)", padding: "1.75rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "2rem", fontWeight: 900, color: "var(--gold)", marginBottom: "0.75rem", lineHeight: 1 }}>{s}</p>
                <h3 style={{ fontFamily: "var(--f)", fontSize: "0.88rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{t}</h3>
                <p className="t-body" style={{ fontSize: "0.76rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .steps-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section>

      {/* Destinations */}
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Popular Destinations</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {["Japan", "South Korea", "Thailand", "Singapore", "Vietnam", "Malaysia", "Indonesia", "Netherlands", "Germany", "France", "Belgium", "Saudi Arabia", "Turkey", "Morocco"].map(d => (
              <span key={d} style={{ fontFamily: "var(--f)", fontSize: "0.75rem", fontWeight: 700, padding: "0.45rem 1rem", border: "1px solid var(--border)", color: "var(--text-muted)", letterSpacing: "0.05em" }}>{d}</span>
            ))}
          </div>
          <p className="t-body" style={{ marginTop: "1.25rem", fontSize: "0.78rem" }}>Don&apos;t see your destination? We can plan almost anywhere.</p>
        </div>
      </section>

      <CTASection title="Design your private trip." subtitle="Tell us your dream journey and we'll make it happen." primaryLabel="Request Your Trip" primaryHref={WA_MSG("I'd like to request a private trip")} />
      <Footer />
    </>
  );
}
