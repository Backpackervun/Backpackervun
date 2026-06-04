// ── Shared data for all pages ──────────────────────────────────────────

export const WA = "https://wa.me/6281298053826";
export const WA_MSG = (msg: string) => `${WA}?text=Hi+Ervan%2C+${encodeURIComponent(msg)}`;
export const PLANNER_URL = "https://travelplanner.backpackervun.com";
export const PRICING_URL = "https://travelpricing.backpackervun.com";

export const NAV_LINKS = [
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "Products", href: "/products" },
  { label: "Planner", href: PLANNER_URL, external: true },
  { label: "Pricing", href: PRICING_URL, external: true },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

export const DESTINATIONS = [
  {
    slug: "japan",
    name: "Japan",
    tagline: "Where ancient tradition meets neon-lit modernity.",
    route: "Tokyo · Kyoto · Osaka · Nara · Hiroshima",
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&q=90&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90&auto=format&fit=crop",
    status: "available",
    badge: "Most Popular",
  },
  {
    slug: "south-korea",
    name: "South Korea",
    tagline: "K-culture, royal palaces, and unforgettable food scenes.",
    route: "Seoul · Busan · Jeju · Incheon",
    img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=900&q=90&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=90&auto=format&fit=crop",
    status: "available",
    badge: "Trending",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    tagline: "Hidden beaches, ancient temples, and raw nature.",
    route: "Bali · Banyuwangi · Batukaras · Yogyakarta",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=90&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=1920&q=90&auto=format&fit=crop",
    status: "available",
    badge: "Local Pick",
  },
  {
    slug: "europe",
    name: "Europe",
    tagline: "Cobblestone streets, world-class museums, and canal cities.",
    route: "Netherlands · Germany · France · Belgium",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&q=90&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=90&auto=format&fit=crop",
    status: "coming",
    badge: "Coming Soon",
  },
  {
    slug: "umrah",
    name: "Umrah",
    tagline: "A spiritual journey of a lifetime, guided with care.",
    route: "Makkah · Madinah",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&q=90&auto=format&fit=crop",
    heroImg: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1920&q=90&auto=format&fit=crop",
    status: "available",
    badge: "Guided",
  },
];

export const EXPERIENCES = [
  {
    slug: "open-trip",
    name: "Trip Series",
    tagline: "Join a curated group departure.",
    desc: "Scheduled departures to Asia's best cities. Join solo or with friends — fully guided from start to finish.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=85&auto=format&fit=crop",
    tag: "Open Trip",
  },
  {
    slug: "private-trip",
    name: "Private Trip",
    tagline: "Fully tailored around you.",
    desc: "Design your perfect journey. We handle everything — flights, hotels, itinerary, and on-ground support.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=85&auto=format&fit=crop",
    tag: "Custom",
  },
  {
    slug: "sport-tourism",
    name: "Sport Tourism",
    tagline: "Travel with purpose. Compete with passion.",
    desc: "World Marathon Majors, sport events, and active city experiences for athletes and enthusiasts.",
    img: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=700&q=85&auto=format&fit=crop",
    tag: "Sport",
  },
];

export const PRODUCTS = [
  {
    id: "japan-planner",
    name: "Japan Travel Planner",
    tag: "Asia",
    desc: "Complete 14-day editable itinerary for Japan. Tokyo, Kyoto, Osaka, and more — with budget estimates and daily schedules.",
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=700&q=85&auto=format&fit=crop",
    price: "Rp 49.000",
    href: "#",
  },
  {
    id: "budget-sheet",
    name: "Travel Budget Spreadsheet",
    tag: "Finance",
    desc: "Powerful budget tracker with currency conversion, category breakdowns, and daily spending summaries.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=85&auto=format&fit=crop",
    price: "Rp 35.000",
    href: "#",
  },
  {
    id: "itinerary-pack",
    name: "Itinerary Template Pack",
    tag: "Planning",
    desc: "Flexible multi-destination itinerary templates. Clean, minimal, print-ready. Works for any trip length.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=85&auto=format&fit=crop",
    price: "Rp 65.000",
    href: "#",
  },
  {
    id: "korea-guide",
    name: "Seoul City Guide",
    tag: "Asia",
    desc: "A curated pocket guide to Seoul — neighborhoods, food spots, transport tips, and hidden gems.",
    img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=700&q=85&auto=format&fit=crop",
    price: "Rp 29.000",
    href: "#",
  },
];
