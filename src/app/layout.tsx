import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudeOC — Orange County Claude Community",
  description:
    "The official Anthropic Ambassador community in Orange County. Join us for meetups, hackathons, and conversations about how AI is shaping work.",
  openGraph: {
    title: "ClaudeOC — Orange County Claude Community",
    description:
      "The official Anthropic Ambassador community in Orange County. Meetups, Impact Labs, and more.",
    type: "website",
    url: "https://claudeoc.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Poppins:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
