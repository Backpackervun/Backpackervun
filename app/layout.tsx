import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backpackervun — Your Traveling Partner",
  description: "Supporting people on their first and next unforgettable journeys. City tours ke Japan, Korea, Bangkok, Europe. #AwalSemuaCerita",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
