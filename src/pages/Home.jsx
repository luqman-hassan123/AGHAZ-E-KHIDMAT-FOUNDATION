import Hero from '../components/home/Hero'
import AboutIntro from '../components/home/AboutIntro'
import PillarsPreview from '../components/home/PillarsPreview'
import WhereWeWork from '../components/home/WhereWeWork'
import RoadmapPreview from '../components/home/RoadmapPreview'
import TrustSection from '../components/home/TrustSection'
import CoreValues from '../components/home/CoreValues'
import TeamPreview from '../components/home/TeamPreview'
import PartnerCTA from '../components/home/PartnerCTA'
import ContactBanner from '../components/home/ContactBanner'
import SectionDivider from '../components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <AboutIntro />
      <PillarsPreview />
      <WhereWeWork />
      <RoadmapPreview />
      <TrustSection />
      <CoreValues />
      <TeamPreview />
      <PartnerCTA />
      <ContactBanner />
    </>
  )
}
