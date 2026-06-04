/**
 * Sanity Studio — accessible at /studio
 * This page is intentionally excluded from static generation.
 */
"use client";

import { useEffect, useState } from "react";

// Dynamically import to avoid SSR issues
export default function StudioPage() {
  const [Studio, setStudio] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    async function loadStudio() {
      const { NextStudio } = await import("next-sanity/studio");
      const { default: config } = await import("@/sanity/sanity.config");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setStudio(() => () => <NextStudio config={config} />);
    }
    loadStudio();
  }, []);

  if (!Studio) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0a0a", color: "#c8a96e", fontFamily: "sans-serif" }}>
        Loading Studio...
      </div>
    );
  }

  return <Studio />;
}
