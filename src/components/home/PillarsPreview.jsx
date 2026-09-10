import SectionHeading from '../ui/SectionHeading'
import PillarCard from '../ui/PillarCard'
import Button from '../ui/Button'
import { pillars } from '../../data/pillars'

export default function PillarsPreview() {
  const preview = pillars.slice(0, 3)

  return (
    <section className="py-14 md:py-24 relative overflow-hidden bg-akf-primary-soft">
      <img
        src="/images/backgrounds/akf-wash-school-hygiene.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-akf-primary-soft/88" />
      <div className="absolute inset-0 section-pattern opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Thematic Focus Areas"
          subtitle="Six pillars aligned with national priorities and UN Sustainable Development Goals"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {preview.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
        <div className="text-center space-y-4">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore detailed programme activities, SDG alignment, and community interventions for all six thematic pillars.
          </p>
          <Button to="/focus-areas">Explore Programmes in Detail</Button>
        </div>
      </div>
    </section>
  )
}
