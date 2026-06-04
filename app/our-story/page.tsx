import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import CTASection from "@/app/components/shared/CTASection";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Our Story — Backpackervun" };

export default function OurStoryPage() {
  return (
    <>
      <DevBanner /><Navbar />
      <PageHero eyebrow="Our Story" title="#AwalSemuaCerita" titleAccent="" subtitle="The beginning of every story. Why Backpackervun exists — and what we believe travel should be." bgImg="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Our Story" }]} />

      {/* Origin */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>The Beginning</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", lineHeight: 1.1 }}>
            Not a travel agency.<br /><span style={{ color: "var(--gold)" }}>A travel ecosystem.</span>
          </h2>
          {["Backpackervun was born from a simple frustration: travel planning is scattered, stressful, and rarely built around the actual traveler.", "Most agencies sell packages. Most platforms sell data. Neither one truly walks with you — from the first search to the last memory.", "We built Backpackervun to be different. Not just a trip operator, but a complete ecosystem for modern travelers — tools to plan, programs to join, and a community to grow with.", "The name says it all: we started as backpackers. We believe the most meaningful journeys happen when you show up curious, open, and a little unpolished — and come home changed."].map((t, i) => (
            <p key={i} className="t-body" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>{t}</p>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Travel Philosophy</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "3rem" }}>What we believe about travel.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }} className="phil-grid">
            {[
              ["Depth Over Distance", "Going far means nothing without going deep. We design trips that let you actually feel a place, not just photograph it."],
              ["Travel Is for Everyone", "You don't need to be an experienced traveler to have a meaningful journey. We build programs that work for first-timers and veterans alike."],
              ["Community First", "The best travel memories aren't about places — they're about people. Every program we build is designed to create genuine human connection."],
              ["Purpose Over Tourism", "Every journey should mean something. Whether it's cultural, spiritual, athletic, or simply adventurous — we help you find your reason to go."],
              ["Honesty Over Hype", "We don't oversell destinations or hide the hard parts. Real travel includes challenges — and we prepare you for them."],
              ["Stories Worth Telling", "Travel is raw material for the stories that define us. #AwalSemuaCerita — every adventure starts somewhere."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "var(--bg)", padding: "1.75rem 1.5rem", position: "relative", overflow: "hidden" }}>
                <div className="pattern-dots" style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", opacity: 0.3, pointerEvents: "none" }} />
                <p style={{ fontFamily: "var(--f)", fontSize: "0.9rem", fontWeight: 800, color: "var(--gold)", marginBottom: "0.65rem" }}>{t}</p>
                <p className="t-body" style={{ fontSize: "0.78rem" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .phil-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .phil-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Mission / Vision */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }} className="mv-grid">
            <div style={{ background: "var(--bg-2)", padding: "3rem 2.5rem" }}>
              <p className="t-eye" style={{ marginBottom: "1rem" }}>Mission</p>
              <h3 style={{ fontFamily: "var(--f)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>Supporting people on their first and next unforgettable journeys.</h3>
              <p className="t-body" style={{ fontSize: "0.82rem" }}>To provide accessible, well-organized, and meaningful travel experiences — through expert guidance, practical tools, and genuine community.</p>
            </div>
            <div style={{ background: "var(--bg-3)", padding: "3rem 2.5rem", borderLeft: "3px solid var(--gold)" }}>
              <p className="t-eye" style={{ marginBottom: "1rem" }}>Vision</p>
              <h3 style={{ fontFamily: "var(--f)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>To become Indonesia's most trusted travel ecosystem for purposeful city travel.</h3>
              <p className="t-body" style={{ fontSize: "0.82rem" }}>A complete platform where travelers plan, book, explore, and connect — with every touchpoint reflecting the quality and care of a real partner, not a vendor.</p>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .mv-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Community */}
      <section className="section-sm" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Community</p>
          <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>Travel changes people. Community keeps them growing.</h2>
          <p className="t-body" style={{ fontSize: "0.88rem", marginBottom: "1rem" }}>Every Backpackervun traveler becomes part of a growing network of explorers — people who share a belief that the world is worth showing up for.</p>
          <p className="t-body" style={{ fontSize: "0.88rem", marginBottom: "2rem" }}>Through our social channels, trip WhatsApp groups, and repeat programs, we foster genuine connections that extend long after the trip ends.</p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a href="https://instagram.com/backpackervun" target="_blank" rel="noopener noreferrer" className="btn-gold">Follow on Instagram</a>
            <a href={WA_MSG("I'd like to join the Backpackervun community")} target="_blank" rel="noopener noreferrer" className="btn-outline">Join the Community</a>
          </div>
        </div>
      </section>

      <CTASection title="Ready to be part of the story?" subtitle="Your journey starts here. Join a departure, plan your own, or just start exploring." />
      <Footer />
    </>
  );
}
