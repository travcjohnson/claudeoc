import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";

export const metadata: Metadata = {
  title: "Gallery — ClaudeOC",
  description: "Photos from ClaudeOC events across Orange County.",
  openGraph: {
    title: "Gallery — ClaudeOC",
    description: "Photos from ClaudeOC events across Orange County.",
    type: "website",
    url: "https://claudeoc.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <GalleryHero />
        <PhotoGrid />
      </main>
      <Footer />
    </>
  );
}
