import PageHero from "@/app/components/shared/PageHero";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import DevBanner from "@/app/components/ui/DevBanner";
import { WA, WA_MSG } from "@/app/lib/data";

export const metadata = { title: "Contact — Backpackervun" };

const options = [
  { title: "Private Trip Request", desc: "Custom trip for you and your group — any destination, any size.", msg: "I'd like to request a private trip" },
  { title: "Open Trip Inquiry", desc: "Ask about upcoming departures and available slots.", msg: "I'm interested in an open trip" },
  { title: "Umrah Package", desc: "Inquire about Umrah programs, schedules, and group rates.", msg: "I'd like to know about Umrah packages" },
  { title: "Sport Tourism", desc: "Join a marathon trip or sport event travel program.", msg: "I'm interested in sport tourism" },
  { title: "Digital Products", desc: "Questions about templates, guides, or custom products.", msg: "I have a question about digital products" },
  { title: "General Consultation", desc: "Not sure where to start? Just ask — we'll guide you.", msg: "I'd like a travel consultation" },
];

export default function ContactPage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <PageHero eyebrow="Contact" title="Let's Plan" titleAccent="Your Next Journey." subtitle="Reach out via WhatsApp — we respond within the hour." bgImg="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1920&q=90&auto=format&fit=crop" />
      <Breadcrumb crumbs={[{ label: "Contact" }]} />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p className="t-eye" style={{ marginBottom: "0.9rem" }}>Get In Touch</p>
              <h2 style={{ fontFamily: "var(--f)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Ready to plan your next city?
              </h2>
              <p className="t-body" style={{ fontSize: "0.85rem", marginBottom: "2.5rem" }}>
                Whether it is a private trip, joining an open trip, or just asking about a destination — reach out on WhatsApp and we will respond within the hour.
              </p>
              <a href={`${WA}?text=Hi+Ervan%2C+I'd+like+to+plan+a+trip`} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginBottom: "2.5rem" }}>
                Open WhatsApp
              </a>
              <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                <p className="t-eye" style={{ marginBottom: "1.1rem", color: "var(--text-faint)" }}>Direct Contact</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <a href="tel:+6281298053826" className="hover-gold-text" style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>+62 812 9805 3826</a>
                  <a href="mailto:info@backpackervun.com" className="hover-gold-text" style={{ fontFamily: "var(--f)", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>info@backpackervun.com</a>
                </div>
              </div>
              <div style={{ paddingTop: "2rem", marginTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                <p className="t-eye" style={{ marginBottom: "1.1rem", color: "var(--text-faint)" }}>Follow the Journey</p>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                  {[["Instagram", "https://instagram.com/backpackervun"], ["YouTube", "https://youtube.com/@backpackervun"], ["TikTok", "https://tiktok.com/@backpackervun"]].map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="hover-gold-text"
                      style={{ fontFamily: "var(--f)", fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {options.map((item) => (
                <a key={item.title} href={WA_MSG(item.msg)} target="_blank" rel="noopener noreferrer"
                  className="hover-gold-border"
                  style={{ background: "var(--bg-2)", padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", textDecoration: "none" }}>
                  <div>
                    <p style={{ fontFamily: "var(--f)", fontSize: "0.85rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</p>
                    <p style={{ fontFamily: "var(--f)", fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>{item.desc}</p>
                  </div>
                  <span style={{ color: "var(--gold)", fontFamily: "var(--f)", fontWeight: 800, flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>
      <Footer />
    </>
  );
}
