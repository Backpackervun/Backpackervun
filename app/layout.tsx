import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backpackervun — Supporting People on Their First and Next Unforgettable Journeys",
  description:
    "Your traveling partner. Supporting people on their first and next unforgettable journeys. #AwalSemuaCerita",
  openGraph: {
    title: "Backpackervun",
    description: "Supporting people on their first and next unforgettable journeys.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
