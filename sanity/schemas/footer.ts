import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: () => "🔻",
  fields: [
    defineField({ name: "tagline", title: "Brand Tagline", type: "string" }),
    defineField({ name: "hashtag", title: "Hashtag", type: "string", initialValue: "#AwalSemuaCerita" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "copyright", title: "Copyright Text", type: "string", description: "Year is added automatically" }),
    defineField({
      name: "exploreLinks",
      title: "Explore Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
            defineField({ name: "external", title: "Open in new tab?", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", title: "Platform", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "platform" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Footer Settings" }),
  },
});
