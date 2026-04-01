import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { CommunitySegments } from "@/components/home/CommunitySegments";
import { UpcomingEvent } from "@/components/home/UpcomingEvent";
import { ImpactLabsTeaser } from "@/components/home/ImpactLabsTeaser";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { GetInvolved } from "@/components/home/GetInvolved";
import { StayConnected } from "@/components/home/StayConnected";
import { JoinCTA } from "@/components/home/JoinCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <CommunitySegments />
        <UpcomingEvent />
        <ImpactLabsTeaser />
        <PhotoCarousel />
        <GetInvolved />
        <StayConnected />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
