import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string", initialValue: "About Me" }),
    defineField({ name: "name", title: "Name", type: "string", initialValue: "Ervan Kusuma", validation: (Rule) => Rule.required() }),
    defineField({ name: "bio", title: "Bio Paragraphs", type: "array", of: [{ type: "text" }], description: "Each item = one paragraph" }),
    defineField({ name: "bioHighlight", title: "Highlighted Sentence (gold)", type: "string" }),
    defineField({ name: "profileImage", title: "Profile Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Quote (floating card)", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Value", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string" }),
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
    defineField({ name: "hashtag", title: "Hashtag", type: "string", initialValue: "#AwalSemuaCerita" }),
  ],
  preview: {
    select: { title: "name" },
  },
});
