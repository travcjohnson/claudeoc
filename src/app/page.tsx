import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { ImpactLabs } from "@/components/ImpactLabs";
import { GetInvolved } from "@/components/GetInvolved";
import { CommunityLeaders } from "@/components/CommunityLeaders";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Events />
        <ImpactLabs />
        <GetInvolved />
        <CommunityLeaders />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
