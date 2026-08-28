import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import FocusAreaDetail from '../components/focus/FocusAreaDetail'
import { pillars } from '../data/pillars'

export default function FocusAreas() {
  return (
    <>
      <PageHero
        title="Thematic Focus Areas"
        subtitle="Six programme pillars with detailed activities, SDG alignment, and community interventions across Khyber Pakhtunkhwa"
        image="/images/malakand.svg"
      />
      <SectionDivider />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <Card className="bg-akf-primary-soft border-akf-primary/20 max-w-4xl mx-auto text-center">
              <p className="text-gray-700 leading-relaxed">
                AKF&apos;s Constitution sets out a broad mandate for community welfare. Below are our six thematic pillars — each with programme activities aligned to national priorities and UN Sustainable Development Goals. We also deliver family planning services, recreational programmes, and lawful development activities that advance civic rights awareness.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-akf-steampunk-light section-pattern">
        <div className="container mx-auto px-6 space-y-12">
          {pillars.map((pillar, index) => (
            <FocusAreaDetail
              key={pillar.id}
              pillar={pillar}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    </>
  )
}
