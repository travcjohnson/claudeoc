import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { HostAndEvent } from "@/components/home/HostAndEvent";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { StayConnected } from "@/components/home/StayConnected";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <HostAndEvent />
        <PhotoGallery />
        <StayConnected />
      </main>
      <Footer />
    </>
  );
}
