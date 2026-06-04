import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "backpackervun",
  title: "Backpackervun CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("⚙️ Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.listItem()
              .title("🏔️ Hero Section")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("🗂️ Ecosystem Cards")
              .child(S.documentTypeList("ecosystemCard")),
            S.listItem()
              .title("✈️ Private Trip Section")
              .child(S.document().schemaType("privateTrip").documentId("privateTrip")),
            S.listItem()
              .title("🗓️ Trip Series / Open Trips")
              .child(S.documentTypeList("tripSeries")),
            S.listItem()
              .title("👤 About Section")
              .child(S.document().schemaType("about").documentId("about")),
            S.divider(),
            S.listItem()
              .title("📦 Digital Products")
              .child(S.documentTypeList("product")),
            S.divider(),
            S.listItem()
              .title("🔻 Footer")
              .child(S.document().schemaType("footer").documentId("footer")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
