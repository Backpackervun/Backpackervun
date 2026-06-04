import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const client = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion: "2024-06-01",
  useCdn: false,         // ALWAYS fresh — never use CDN cache
  perspective: "published", // Only fetch published content (not drafts)
});

export const isSanityConfigured = Boolean(projectId);
