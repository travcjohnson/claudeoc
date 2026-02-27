import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhyJoin from '@/components/WhyJoin'
import Community from '@/components/Community'
import Gallery from '@/components/Gallery'
import HackForGood from '@/components/HackForGood'
import CommunityLeaders from '@/components/CommunityLeaders'
import StayConnected from '@/components/StayConnected'
import JoinCTA from '@/components/JoinCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyJoin />
        <Community />
        <Gallery />
        <HackForGood />
        <CommunityLeaders />
        <StayConnected />
        <JoinCTA />
      </main>
      <Footer />
    </>
  )
}
