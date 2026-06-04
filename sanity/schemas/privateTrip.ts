import { defineField, defineType } from "sanity";

export const privateTrip = defineType({
  name: "privateTrip",
  title: "Private Trip Section",
  type: "document",
  icon: () => "✈️",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", initialValue: "Private Trip" }),
    defineField({ name: "headline", title: "Headline", type: "string", initialValue: "Your Journey," }),
    defineField({ name: "headlineAccent", title: "Headline Accent (gold)", type: "string", initialValue: "Your Way." }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "features",
      title: "Features List",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points shown on the left side",
    }),
    defineField({ name: "buttonText", title: "Button Text", type: "string", initialValue: "Request Your Trip" }),
    defineField({
      name: "destinations",
      title: "Popular Destinations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Destination Name", type: "string" }),
            defineField({ name: "region", title: "Region", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "region" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Private Trip Section" }),
  },
});
