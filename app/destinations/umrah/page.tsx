import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";
export const metadata = { title: "Umrah — Backpackervun" };
export default function UmrahPage() {
  return (
    <>
      <DevBanner /><Navbar />
      <PageHero eyebrow="Umrah" title="A Spiritual Journey" titleAccent="Of a Lifetime." subtitle="Guided Umrah programs led with care, respect, and deep attention to every detail of your pilgrimage." bgImg="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations", href: "/destinations" }, { label: "Umrah" }]} />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>About Our Umrah Programs</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Guided with care.<br /><span style={{ color: "var(--gold)" }}>Every step of the way.</span></h2>
              {["Our Umrah programs have been led by Ervan Kusuma across multiple rounds — each one organized with meticulous attention to the spiritual, logistical, and personal needs of every pilgrim.", "We coordinate everything: flights, accommodation near Al-Masjid al-Haram, daily transportation, ziyarah schedules, and a knowledgeable guide throughout.", "Our groups are intentionally small to ensure every participant receives personal attention and a deeply meaningful experience."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[["Destinations", "Makkah Al-Mukarramah · Madinah Al-Munawwarah"], ["Duration", "9–14 days (full Umrah program)"], ["Group Size", "Small groups — typically 15–36 pilgrims"], ["Includes", "Flights, accommodation, transport, guide"], ["Visa", "Umrah visa included in package coordination"]].map(([k, v]) => (
                <div key={k} style={{ background: "var(--bg-2)", padding: "0.85rem 1.25rem", display: "flex", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--f)", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", minWidth: "90px" }}>{k}</span>
                  <span className="t-body" style={{ fontSize: "0.76rem" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>What&apos;s Included</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="inc-grid">
            {[["Pre-departure Briefing", "Full preparation session covering rituals, etiquette, and what to expect."],
              ["Accommodation", "Hotels within walking distance of Al-Masjid al-Haram in Makkah."],
              ["Daily Transportation", "Private buses for ziyarah and all scheduled movements."],
              ["Guidance Throughout", "Your trip leader is with you every step of the spiritual journey."],
              ["Ziyarah Schedule", "Visits to all major historical and spiritual sites in both cities."],
              ["Post-trip Support", "Documentation, photos, and follow-up for your group."]].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg)", padding: "1.25rem 1.35rem" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.4rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.75rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .inc-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
      <CTASection title="Plan your Umrah journey." subtitle="Reach out to discuss upcoming schedules, group rates, and available packages." primaryLabel="Inquire About Umrah" primaryHref={WA_MSG("I'd like to know about Umrah programs")} />
      <Footer />
    </>
  );
}
