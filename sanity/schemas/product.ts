import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Digital Products",
  type: "document",
  icon: () => "📦",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Category Tag",
      type: "string",
      description: "e.g. Asia, Finance, Planning",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "price",
      title: "Price Label",
      type: "string",
      description: "e.g. Rp 49.000",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Get Template",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link / Checkout URL",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "price", media: "thumbnail" },
  },
});
