import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Sport Tourism — Backpackervun" };

const events = [
  { name: "Berlin Marathon", city: "Berlin, Germany", date: "Sep 2026", type: "Marathon", img: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=85&auto=format&fit=crop" },
  { name: "Tokyo Marathon", city: "Tokyo, Japan", date: "Mar 2026", type: "Marathon", img: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=600&q=85&auto=format&fit=crop" },
  { name: "Bali Spirit Festival", city: "Bali, Indonesia", date: "Apr 2026", type: "Wellness", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=85&auto=format&fit=crop" },
];

export default function SportTourismPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Sport Tourism" title="Travel With Purpose." titleAccent="Compete With Passion." subtitle="Join world-class sport events while experiencing the cities that host them." bgImg="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Experiences", href: "/experiences" }, { label: "Sport Tourism" }]} />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="two-col">
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>What Is Sport Tourism?</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Race in the city.<br /><span style={{ color: "var(--gold)" }}>Live the city.</span></h2>
              {["Sport Tourism combines athletic events with immersive city experiences. You participate in a world-class event — marathon, triathlon, or wellness festival — while exploring the host city as a traveler.", "We handle all the logistics: flight, hotel, race registration, city tours, and post-race recovery plans. You focus on the race and the experience.", "Our programs are designed for beginners entering their first major race as well as experienced runners looking for a fully supported international event."].map((t, i) => (
                <p key={i} className="t-body" style={{ fontSize: "0.84rem", marginBottom: "0.85rem" }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[["Race Registration", "We handle event entry and bib number logistics"], ["Full Itinerary", "Pre-race city exploration + race day + recovery"], ["Certified Leader", "BNSP-certified leader who understands athletes"], ["Community", "Run and travel with fellow Indonesian athletes"]].map(([t, d]) => (
                <div key={t} style={{ background: "var(--bg-2)", padding: "1.1rem 1.4rem", borderLeft: "2px solid var(--gold)" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{t}</p>
                  <p className="t-body" style={{ fontSize: "0.75rem" }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Upcoming events */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Upcoming Events</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>Pick your race.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="ev-grid">
            {events.map(ev => (
              <div key={ev.name} style={{ background: "var(--bg)", overflow: "hidden" }} className="card-wrap">
                <div style={{ height: "180px", backgroundImage: `url('${ev.img}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.55) brightness(0.55)", position: "relative" }}>
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: "var(--f)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(7,17,31,0.88)", color: "rgba(232,168,32,0.95)" }}>{ev.type}</span>
                </div>
                <div style={{ padding: "1.25rem 1.3rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--f)", fontSize: "1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.3rem" }}>{ev.name}</p>
                  <p style={{ fontFamily: "var(--f)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: "0.75rem" }}>{ev.city} · {ev.date}</p>
                  <a href={WA_MSG(`I'm interested in the ${ev.name} trip`)} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--f)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                    Learn More →
                  </a>
                </div>
                <div className="card-bar" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .ev-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <CTASection title="Ready to race and travel?" subtitle="Tell us your target race and we'll build the perfect trip around it." primaryLabel="Join a Sport Trip" primaryHref={WA_MSG("I'm interested in sport tourism")} />
      <Footer />
    </>
  );
}
