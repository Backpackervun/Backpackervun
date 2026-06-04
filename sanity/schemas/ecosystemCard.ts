import { defineField, defineType } from "sanity";

export const ecosystemCard = defineType({
  name: "ecosystemCard",
  title: "Ecosystem Cards",
  type: "document",
  fields: [
    defineField({ name: "number", title: "Card Number", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Card Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "buttonText", title: "Button Text", type: "string" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
    defineField({ name: "external", title: "Open in new tab?", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "subtitle" } },
});
