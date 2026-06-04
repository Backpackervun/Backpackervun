import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backpackervun — Your Traveling Partner",
  description: "Supporting people on their first and next unforgettable journeys. #AwalSemuaCerita",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-512.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-512.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
