import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Text", type: "string", initialValue: "Your Traveling Partner" }),
    defineField({ name: "headline", title: "Headline", type: "string", initialValue: "BACKPACKERVUN", validation: (Rule) => Rule.required() }),
    defineField({ name: "subheadline", title: "Subheadline / Tagline", type: "string" }),
    defineField({ name: "hashtag", title: "Hashtag", type: "string", initialValue: "#AwalSemuaCerita" }),
    defineField({ name: "heroImage", title: "Background Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryButtonText", title: "Primary Button Text", type: "string", initialValue: "Open Planner" }),
    defineField({ name: "primaryButtonLink", title: "Primary Button Link", type: "string", initialValue: "https://travelplanner.backpackervun.com" }),
    defineField({ name: "secondaryButtonText", title: "Secondary Button Text", type: "string", initialValue: "Request Private Trip" }),
    defineField({ name: "secondaryButtonLink", title: "Secondary Button Link", type: "string", initialValue: "#private-trip" }),
  ],
  preview: {
    select: { title: "headline" },
  },
});
