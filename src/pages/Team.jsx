import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import MemberProfileCard from '../components/team/MemberProfileCard'
import MemberProfileModal from '../components/team/MemberProfileModal'
import { foundingMembers } from '../data/members'

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <PageHero
        title="Founding Members"
        subtitle="Lawyers and social workers who established AKF and form the initial Executive Committee"
      />
      <SectionDivider />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading
              title="Our Founding Team"
              subtitle="Seven dedicated professionals combining legal governance with grassroots community experience"
            />
            <p className="text-center text-gray-700 max-w-3xl mx-auto -mt-6 leading-relaxed">
              The founding members form the initial Executive Committee for a term of three years, after which office bearers are elected by the General Body through secret ballot. Male and female members are shown with distinct placeholder icons until official photos are added.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
            {foundingMembers.map((member, index) => (
              <MemberProfileCard
                key={member.id}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <MemberProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </>
  )
}
