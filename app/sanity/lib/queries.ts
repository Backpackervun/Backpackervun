import { groq } from "next-sanity";

// ─── Site Settings ──────────────────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    tagline,
    hashtag,
    whatsappNumber,
    email,
    "logoUrl": logo.asset->url,
    navigationLinks[] { label, href, external },
    socialLinks[] { platform, url }
  }
`;

// ─── Hero ────────────────────────────────────────────────────────────────────
export const HERO_QUERY = groq`
  *[_type == "hero"][0] {
    eyebrow,
    headline,
    subheadline,
    hashtag,
    "heroImageUrl": heroImage.asset->url,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
`;

// ─── Ecosystem Cards ─────────────────────────────────────────────────────────
export const ECOSYSTEM_QUERY = groq`
  *[_type == "ecosystemCard"] | order(order asc) {
    _id,
    number,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    buttonText,
    buttonLink,
    external
  }
`;

// ─── Private Trip ────────────────────────────────────────────────────────────
export const PRIVATE_TRIP_QUERY = groq`
  *[_type == "privateTrip"][0] {
    eyebrow,
    headline,
    headlineAccent,
    description,
    features,
    buttonText,
    destinations[] { name, region }
  }
`;

// ─── Trip Series ─────────────────────────────────────────────────────────────
export const TRIP_SERIES_QUERY = groq`
  *[_type == "tripSeries" && featured == true && status == "open"] | order(startDate asc) [0..2] {
    _id,
    tag,
    destination,
    title,
    "imageUrl": image.asset->url,
    startDate,
    endDate,
    duration,
    totalSlots,
    slotsLeft,
    price,
    status
  }
`;

// ─── About ───────────────────────────────────────────────────────────────────
export const ABOUT_QUERY = groq`
  *[_type == "about"][0] {
    eyebrow,
    name,
    bio,
    bioHighlight,
    "profileImageUrl": profileImage.asset->url,
    quote,
    stats[] { value, label },
    hashtag
  }
`;

// ─── Products ────────────────────────────────────────────────────────────────
export const PRODUCTS_QUERY = groq`
  *[_type == "product" && featured == true] | order(order asc) {
    _id,
    title,
    tag,
    description,
    "thumbnailUrl": thumbnail.asset->url,
    price,
    buttonText,
    buttonLink
  }
`;

// ─── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER_QUERY = groq`
  *[_type == "footer"][0] {
    tagline,
    hashtag,
    email,
    copyright,
    exploreLinks[] { label, href, external },
    socialLinks[] { platform, url }
  }
`;

// ─── All homepage data in one query (most efficient) ────────────────────────
export const HOMEPAGE_QUERY = groq`
  {
    "settings": *[_type == "siteSettings"][0] {
      siteTitle, tagline, hashtag, whatsappNumber, email,
      "logoUrl": logo.asset->url,
      navigationLinks[] { label, href, external },
      socialLinks[] { platform, url }
    },
    "hero": *[_type == "hero"][0] {
      eyebrow, headline, subheadline, hashtag,
      "heroImageUrl": heroImage.asset->url,
      primaryButtonText, primaryButtonLink,
      secondaryButtonText, secondaryButtonLink
    },
    "ecosystemCards": *[_type == "ecosystemCard"] | order(order asc) {
      _id, number, title, subtitle, description,
      "imageUrl": image.asset->url,
      buttonText, buttonLink, external
    },
    "privateTrip": *[_type == "privateTrip"][0] {
      eyebrow, headline, headlineAccent, description, features, buttonText,
      destinations[] { name, region }
    },
    "tripSeries": *[_type == "tripSeries" && featured == true && status == "open"] | order(startDate asc) [0..2] {
      _id, tag, destination, title,
      "imageUrl": image.asset->url,
      startDate, endDate, duration, totalSlots, slotsLeft, price, status
    },
    "about": *[_type == "about"][0] {
      eyebrow, name, bio, bioHighlight,
      "profileImageUrl": profileImage.asset->url,
      quote, stats[] { value, label }, hashtag
    },
    "products": *[_type == "product" && featured == true] | order(order asc) {
      _id, title, tag, description,
      "thumbnailUrl": thumbnail.asset->url,
      price, buttonText, buttonLink
    },
    "footer": *[_type == "footer"][0] {
      tagline, hashtag, email, copyright,
      exploreLinks[] { label, href, external },
      socialLinks[] { platform, url }
    }
  }
`;
