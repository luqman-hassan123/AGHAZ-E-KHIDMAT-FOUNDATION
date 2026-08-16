import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import PillarCard from '../ui/PillarCard'
import { pillars } from '../../data/pillars'

export default function PillarsPreview() {
  return (
    <section className="py-20 bg-akf-steampunk-light">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Thematic Focus Areas"
          subtitle="Six pillars aligned with national priorities and UN Sustainable Development Goals"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/focus-areas"
            className="text-akf-primary-dark font-semibold hover:text-akf-primary transition-colors"
          >
            View all focus areas →
          </Link>
        </div>
      </div>
    </section>
  )
}
