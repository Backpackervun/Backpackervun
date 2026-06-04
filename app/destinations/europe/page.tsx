import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";
export const metadata = { title: "Europe — Backpackervun" };
export default function EuropePage() {
  return (
    <>
      <DevBanner /><Navbar />
      <PageHero eyebrow="Europe — Coming Soon" title="Canal Cities," titleAccent="Cobblestone Streets." subtitle="Our Europe series is in development. Register your interest and be the first to know." bgImg="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations", href: "/destinations" }, { label: "Europe" }]} />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ maxWidth: "640px" }}>
            <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Coming Soon</p>
            <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Europe is next on<br /><span style={{ color: "var(--gold)" }}>our map.</span></h2>
            <p className="t-body" style={{ marginBottom: "1rem" }}>We're currently developing our Europe program, beginning with a multi-city route covering the Netherlands, Germany, France, and Belgium.</p>
            <p className="t-body" style={{ marginBottom: "2.5rem" }}>Register your interest and you'll be among the first to receive program details, pricing, and departure dates when we launch.</p>
            <a href={WA_MSG("I'm interested in the Europe trip — please notify me when it launches")} target="_blank" rel="noopener noreferrer" className="btn-gold">Register My Interest</a>
          </div>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)", maxWidth: "640px" }}>
            {["Amsterdam, Netherlands", "Berlin, Germany", "Paris, France", "Brussels, Belgium"].map(c => (
              <div key={c} style={{ background: "var(--bg-2)", padding: "1.1rem 1.25rem" }}>
                <p style={{ fontFamily: "var(--f)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)" }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want Europe updates?" subtitle="Register now and be the first notified when our Europe program launches." primaryLabel="Notify Me" primaryHref={WA_MSG("Notify me when Europe trips launch")} />
      <Footer />
    </>
  );
}
