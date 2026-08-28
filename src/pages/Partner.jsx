import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import {
  partnerReasons,
  strategicPriorities,
  crossCutting,
  donorAccountability,
} from '../data/governance'
import { CheckCircle } from 'lucide-react'

export default function Partner() {
  return (
    <>
      <PageHero
        title="Partner With AKF"
        subtitle="Join us in delivering measurable, sustainable results across Khyber Pakhtunkhwa"
        image="/images/malakand.svg"
      />
      <SectionDivider />

    <div className="py-20 bg-akf-steampunk-light min-h-screen section-pattern">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12">
          <Card>
            <h3 className="text-2xl font-bold mb-6">Why Partner With Us</h3>
            <ul className="space-y-4">
              {partnerReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Strategic Priorities — First Phase</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPriorities.map((item, index) => (
              <Card key={item.title} className="border-t-4 border-t-akf-primary">
                <span className="text-akf-primary font-bold text-sm">0{index + 1}</span>
                <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection>
            <Card className="h-full">
              <h3 className="text-xl font-bold mb-4">Cross-Cutting Commitments</h3>
              <ul className="space-y-3">
                {crossCutting.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="text-akf-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Card className="h-full">
              <h3 className="text-xl font-bold mb-4">Donor Accountability</h3>
              <ul className="space-y-3">
                {donorAccountability.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="text-akf-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>

        <div className="text-center">
          <Button to="/contact">Get In Touch</Button>
        </div>
      </div>
    </div>
    </>
  )
}
