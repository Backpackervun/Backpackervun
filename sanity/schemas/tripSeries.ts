import { defineField, defineType } from "sanity";

export const tripSeries = defineType({
  name: "tripSeries",
  title: "Trip Series / Open Trips",
  type: "document",
  icon: () => "🗓️",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      initialValue: "Open Trip",
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Trip Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Trip Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "duration",
      title: "Duration Label",
      type: "string",
      description: "e.g. 10 Days",
    }),
    defineField({
      name: "totalSlots",
      title: "Total Slots",
      type: "number",
    }),
    defineField({
      name: "slotsLeft",
      title: "Slots Remaining",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price (e.g. Rp 28.500.000)",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Open", value: "open" },
          { title: "Full", value: "full" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "destination",
      media: "image",
    },
  },
});
