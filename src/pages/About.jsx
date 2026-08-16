import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import { legalStatus } from '../data/governance'

export default function About() {
  return (
    <div className="py-20 bg-akf-steampunk-light min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About AKF"
          subtitle="A newly established organization built on strong governance and community experience"
        />

        <AnimatedSection className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700">
              Aghaz-e-Khidmat Foundation (AKF) is a non-profit, non-political, non-governmental and voluntary social welfare organization founded by a group of lawyers and social workers for providing services in Khyber Pakhtunkhwa, starting with Malakand Division. AKF has completed its founding documentation and is registered under the Societies Registration Act, 1860.
            </p>
          </Card>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.1}>
            <Card className="h-full border-l-4 border-l-akf-primary">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="leading-relaxed text-gray-700">
                A Khyber Pakhtunkhwa in which every community has access to education, health, a safe environment and the means to build a dignified, self-reliant future.
              </p>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Card className="h-full border-l-4 border-l-akf-primary">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="leading-relaxed text-gray-700">
                To mobilize local and international resources to deliver education, health, disaster response, environmental and community-development programs that are transparent, community-driven and sustainable, with a particular focus on women, youth, children and other vulnerable groups.
              </p>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Legal Status</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  {legalStatus.map((item) => (
                    <tr key={item.label} className="border-b border-akf-steampunk last:border-0">
                      <td className="py-4 pr-6 font-semibold text-akf-primary-dark whitespace-nowrap">{item.label}</td>
                      <td className="py-4 text-gray-700">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
