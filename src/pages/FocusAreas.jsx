import SectionHeading from '../components/ui/SectionHeading'
import PillarCard from '../components/ui/PillarCard'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import { pillars } from '../data/pillars'

export default function FocusAreas() {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Thematic Focus Areas"
          subtitle="Six pillars mapping onto government priorities and UN Sustainable Development Goals"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
        <AnimatedSection>
          <Card className="bg-akf-primary-light border-akf-primary">
            <p className="text-akf-primary-dark leading-relaxed">
              Within these pillars, AKF is also committed to family planning services, recreational programs that build resilience against anti-social activity, and undertaking any lawful activity that advances development and creates awareness amongst communities of their rights in Pakistan.
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
