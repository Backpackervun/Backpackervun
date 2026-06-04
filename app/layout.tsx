import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backpackervun — Your Traveling Partner",
  description: "Supporting people on their first and next unforgettable journeys. City tours to Japan, Korea, Bangkok, Europe. #AwalSemuaCerita",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
