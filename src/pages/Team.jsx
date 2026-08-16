import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import { foundingMembers } from '../data/members'

export default function Team() {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Founding Members"
          subtitle="Seven founding members spanning law and grassroots social work"
        />

        <AnimatedSection className="mb-10">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            The founding members form the initial Executive Committee for a term of three years, after which office bearers are elected by the General Body by secret ballot.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foundingMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.05}>
              <Card className="text-center h-full">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-akf-primary to-akf-primary-dark flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-akf-primary-dark text-sm font-medium">{member.occupation}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
