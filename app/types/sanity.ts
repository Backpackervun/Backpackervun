// ─── Shared ───────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

// ─── Site Settings ────────────────────────────────────────────────────────────
export interface SiteSettings {
  siteTitle: string;
  tagline?: string;
  hashtag?: string;
  whatsappNumber?: string;
  email?: string;
  logoUrl?: string;
  navigationLinks?: NavLink[];
  socialLinks?: SocialLink[];
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export interface HeroData {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  hashtag?: string;
  heroImageUrl?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

// ─── Ecosystem Card ───────────────────────────────────────────────────────────
export interface EcosystemCardData {
  _id: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  external?: boolean;
}

// ─── Private Trip ─────────────────────────────────────────────────────────────
export interface Destination {
  name: string;
  region: string;
}

export interface PrivateTripData {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  features?: string[];
  buttonText?: string;
  destinations?: Destination[];
}

// ─── Trip Series ──────────────────────────────────────────────────────────────
export interface TripSeriesData {
  _id: string;
  tag?: string;
  destination: string;
  title: string;
  imageUrl?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  totalSlots?: number;
  slotsLeft?: number;
  price?: string;
  status: "open" | "full" | "cancelled" | "completed";
}

// ─── About ────────────────────────────────────────────────────────────────────
export interface AboutData {
  eyebrow?: string;
  name: string;
  bio?: string[];
  bioHighlight?: string;
  profileImageUrl?: string;
  quote?: string;
  stats?: Stat[];
  hashtag?: string;
}

// ─── Product ──────────────────────────────────────────────────────────────────
export interface ProductData {
  _id: string;
  title: string;
  tag?: string;
  description?: string;
  thumbnailUrl?: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export interface FooterData {
  tagline?: string;
  hashtag?: string;
  email?: string;
  copyright?: string;
  exploreLinks?: NavLink[];
  socialLinks?: SocialLink[];
}

// ─── Full Homepage Payload ────────────────────────────────────────────────────
export interface HomepageData {
  settings: SiteSettings | null;
  hero: HeroData | null;
  ecosystemCards: EcosystemCardData[];
  privateTrip: PrivateTripData | null;
  tripSeries: TripSeriesData[];
  about: AboutData | null;
  products: ProductData[];
  footer: FooterData | null;
}
