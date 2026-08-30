import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import { accountabilityPoints } from '../data/governance'
import { executiveCommitteeNamed } from '../data/members'
import { CheckCircle } from 'lucide-react'

export default function Governance() {
  return (
    <>
      <PageHero
        title="Governance Structure"
        subtitle="Clear lines of accountability designed for donor confidence and community trust"
      />
      <SectionDivider />

      <div className="py-20 bg-akf-steampunk-light min-h-screen section-pattern">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <Card>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AKF is governed by an Executive Committee (day-to-day steward) and a General Body (ultimate authority over budgets, audited accounts and major appointments).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-akf-primary text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Position</th>
                      <th className="px-4 py-3 text-left">Office Bearer</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {executiveCommitteeNamed.map((row, i) => (
                      <tr key={row.position} className={i % 2 === 0 ? 'bg-white' : 'bg-akf-steampunk-light'}>
                        <td className="px-4 py-4 font-semibold text-akf-primary-dark align-top whitespace-nowrap">{row.position}</td>
                        <td className="px-4 py-4 text-gray-900 font-medium align-top">{row.name}</td>
                        <td className="px-4 py-4 text-gray-700">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Accountability</h3>
              <ul className="space-y-4">
                {accountabilityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-akf-primary shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}
