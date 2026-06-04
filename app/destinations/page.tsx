import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { DESTINATIONS } from "@/app/lib/data";
import Link from "next/link";

export const metadata = { title: "Destinations — Backpackervun" };

export default function DestinationsPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Destinations" title="Cities Worth" titleAccent="Every Step." subtitle="Curated city experiences across Asia, the Middle East, and Europe." bgImg="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Destinations" }]} />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="dest-all-grid">
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`}
                style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", display: "block", textDecoration: "none" }}
                className="dest-card">
                <div className="dest-img" style={{ position: "absolute", inset: 0, backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.55) brightness(0.5)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.25) 60%, transparent 100%)" }} />
                {d.badge && (
                  <div style={{ position: "absolute", top: "0.85rem", left: "0.85rem" }}>
                    <span style={{ fontFamily: "var(--f)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "0.25rem 0.65rem", background: d.status === "coming" ? "rgba(7,17,31,0.9)" : "var(--gold)", color: d.status === "coming" ? "var(--text-muted)" : "#07111F" }}>{d.badge}</span>
                  </div>
                )}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--f)", fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.35rem", letterSpacing: "-0.01em" }}>{d.name}</h3>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", color: "rgba(239,242,248,0.65)", fontWeight: 500, marginBottom: "0.5rem" }}>{d.route}</p>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>{d.status === "coming" ? "Coming Soon" : "Explore →"}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .dest-all-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .dest-all-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <CTASection title="Can't find your destination?" subtitle="We can plan trips to almost anywhere. Tell us where you want to go." />
      <Footer />
    </>
  );
}
