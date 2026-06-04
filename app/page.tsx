// Force this page to always fetch fresh data from Sanity on every request
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { client } from "@/app/sanity/lib/client";
import { HOMEPAGE_QUERY } from "@/app/sanity/lib/queries";
import type { HomepageData } from "@/app/types/sanity";

import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import Ecosystem from "@/app/components/sections/Ecosystem";
import PrivateTrip from "@/app/components/sections/PrivateTrip";
import TripSeries from "@/app/components/sections/TripSeries";
import About from "@/app/components/sections/About";
import FeaturedProducts from "@/app/components/sections/FeaturedProducts";
import Footer from "@/app/components/ui/Footer";

const FALLBACK: HomepageData = {
  settings: {
    siteTitle: "Backpackervun",
    tagline: "Supporting people on their first and next unforgettable journeys.",
    hashtag: "#AwalSemuaCerita",
    whatsappNumber: "628XXXXXXXXX",
    email: "hello@backpackervun.com",
    logoUrl: "/logo-white.png",
    navigationLinks: [
      { label: "Planner", href: "https://travelplanner.backpackervun.com", external: true },
      { label: "Private Trip", href: "#private-trip" },
      { label: "Trip Series", href: "#trip-series" },
      { label: "About", href: "#about" },
    ],
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/backpackervun" },
      { platform: "YouTube", url: "https://youtube.com/@backpackervun" },
      { platform: "TikTok", url: "https://tiktok.com/@backpackervun" },
      { platform: "WhatsApp", url: "https://wa.me/628XXXXXXXXX" },
    ],
  },
  hero: {
    eyebrow: "Your Traveling Partner",
    headline: "BACKPACKERVUN",
    subheadline: "Supporting people on their first and next unforgettable journeys.",
    hashtag: "#AwalSemuaCerita",
    heroImageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop",
    primaryButtonText: "Open Planner",
    primaryButtonLink: "https://travelplanner.backpackervun.com",
    secondaryButtonText: "Request Private Trip",
    secondaryButtonLink: "#private-trip",
  },
  ecosystemCards: [
    { _id: "1", number: "01", title: "Travel Planner", subtitle: "Plan Without Limits", description: "Smart itinerary tools and travel organization built for the modern explorer.", imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80", buttonText: "Open Planner", buttonLink: "https://travelplanner.backpackervun.com", external: true },
    { _id: "2", number: "02", title: "Private Trip", subtitle: "Your Journey, Your Way", description: "Want a fully customized travel experience? Request your own private trip.", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", buttonText: "Request Now", buttonLink: "#private-trip", external: false },
    { _id: "3", number: "03", title: "Trip Series", subtitle: "Join an Open Trip", description: "Curated open trips for solo travelers and small groups.", imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", buttonText: "See Schedule", buttonLink: "#trip-series", external: false },
  ],
  privateTrip: {
    eyebrow: "Private Trip",
    headline: "Your Journey,",
    headlineAccent: "Your Way.",
    description: "Want a fully customized travel experience? We build private trips entirely around your schedule, group, and dream destinations.",
    features: ["Custom itinerary crafted for you", "Flexible group size — from 2 to 50+", "Full coordination: flights, hotels, activities", "Dedicated trip leader throughout", "Photo & video documentation available"],
    buttonText: "Request Your Trip",
    destinations: [
      { name: "Japan", region: "Asia" }, { name: "South Korea", region: "Asia" },
      { name: "Thailand", region: "Asia" }, { name: "Saudi Arabia", region: "Middle East" },
      { name: "Turkey", region: "Middle East" }, { name: "Morocco", region: "Africa" },
    ],
  },
  tripSeries: [
    { _id: "t1", tag: "Open Trip", destination: "Japan", title: "Japan Autumn Explorer", imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", startDate: "2025-11-15", endDate: "2025-11-25", duration: "10 Days", totalSlots: 12, slotsLeft: 5, price: "Rp 28.500.000", status: "open" },
    { _id: "t2", tag: "Open Trip", destination: "South Korea", title: "Seoul Winter Escape", imageUrl: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80", startDate: "2025-12-20", endDate: "2025-12-29", duration: "9 Days", totalSlots: 15, slotsLeft: 8, price: "Rp 22.000.000", status: "open" },
    { _id: "t3", tag: "Open Trip", destination: "Thailand", title: "Bangkok & Chiang Mai", imageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80", startDate: "2026-01-10", endDate: "2026-01-17", duration: "7 Days", totalSlots: 20, slotsLeft: 12, price: "Rp 14.500.000", status: "open" },
  ],
  about: {
    eyebrow: "About Me",
    name: "Ervan Kusuma",
    bio: [
      "From Indonesia — a passionate traveler with a deep love for discovering new cultures, people, and places. I've explored countries across Asia and the Middle East, gaining valuable insight into diverse traditions, lifestyles, and travel experiences.",
      "I've led and organized group trips of various sizes — from small private groups to over 58 participants, including a large group trip to Bangkok and coordinating monthly Umrah pilgrimages for up to 36 participants.",
      "As a reliable trip buddy, I ensure every journey runs smoothly — from crafting detailed itineraries to making sure each participant has a meaningful and enjoyable experience. I also run my own production house, capturing authentic travel moments through photo and video.",
    ],
    bioHighlight: "With me, travel becomes more than a destination — it becomes a story worth remembering.",
    profileImageUrl: "/ervan-profile.png",
    quote: "Travel becomes more than a destination — it becomes a story worth remembering.",
    stats: [{ value: "58+", label: "Participants" }, { value: "10+", label: "Countries" }, { value: "36", label: "Umrah Group" }],
    hashtag: "#AwalSemuaCerita",
  },
  products: [
    { _id: "p1", title: "Japan Travel Planner", tag: "Asia", description: "A complete, editable 14-day itinerary for Japan. Covers Tokyo, Kyoto, Osaka, and Hiroshima.", thumbnailUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", price: "Rp 49.000", buttonText: "Get Template", buttonLink: "#" },
    { _id: "p2", title: "Budget Spreadsheet", tag: "Finance", description: "A powerful travel budget tracker with category breakdowns, currency conversion, and daily spending summaries.", thumbnailUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", price: "Rp 35.000", buttonText: "Get Spreadsheet", buttonLink: "#" },
    { _id: "p3", title: "Itinerary Pack", tag: "Planning", description: "A flexible, multi-destination itinerary template pack — adaptable for any trip length, region, or travel style.", thumbnailUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80", price: "Rp 65.000", buttonText: "Get Pack", buttonLink: "#" },
  ],
  footer: {
    tagline: "Supporting people on their first and next unforgettable journeys.",
    hashtag: "#AwalSemuaCerita",
    email: "hello@backpackervun.com",
    copyright: "Backpackervun. All rights reserved.",
    exploreLinks: [
      { label: "Travel Planner", href: "https://travelplanner.backpackervun.com", external: true },
      { label: "Private Trip", href: "#private-trip" },
      { label: "Trip Series", href: "#trip-series" },
      { label: "Digital Products", href: "#products" },
      { label: "About", href: "#about" },
    ],
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/backpackervun" },
      { platform: "YouTube", url: "https://youtube.com/@backpackervun" },
      { platform: "TikTok", url: "https://tiktok.com/@backpackervun" },
      { platform: "WhatsApp", url: "https://wa.me/628XXXXXXXXX" },
    ],
  },
};

async function getHomepageData(): Promise<HomepageData> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.log("[page] No Sanity project ID — using fallback");
    return FALLBACK;
  }
  try {
    console.log("[page] Fetching from Sanity project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    const data = await client.fetch<HomepageData>(HOMEPAGE_QUERY);
    console.log("[page] Sanity fetch OK. about.name =", data?.about?.name);
    return {
      settings:      data.settings      ?? FALLBACK.settings,
      hero:          data.hero          ?? FALLBACK.hero,
      ecosystemCards: data.ecosystemCards?.length ? data.ecosystemCards : FALLBACK.ecosystemCards,
      privateTrip:   data.privateTrip   ?? FALLBACK.privateTrip,
      tripSeries:    data.tripSeries?.length ? data.tripSeries : FALLBACK.tripSeries,
      about:         data.about         ?? FALLBACK.about,
      products:      data.products?.length ? data.products : FALLBACK.products,
      footer:        data.footer        ?? FALLBACK.footer,
    };
  } catch (err) {
    console.error("[page] Sanity fetch FAILED:", err);
    return FALLBACK;
  }
}

export default async function HomePage() {
  const data = await getHomepageData();
  return (
    <main>
      <Navbar settings={data.settings} />
      <Hero hero={data.hero} />
      <Ecosystem cards={data.ecosystemCards} />
      <PrivateTrip data={data.privateTrip} whatsapp={data.settings?.whatsappNumber} />
      <TripSeries trips={data.tripSeries} whatsapp={data.settings?.whatsappNumber} />
      <About about={data.about} />
      <FeaturedProducts products={data.products} />
      <Footer footer={data.footer} logoUrl={data.settings?.logoUrl} />
    </main>
  );
}
