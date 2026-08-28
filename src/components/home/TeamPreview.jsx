import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import MemberAvatar from '../ui/MemberAvatar'
import { foundingMembers } from '../../data/members'

export default function TeamPreview() {
  const preview = foundingMembers.slice(0, 4)

  return (
    <section className="py-24 bg-white section-pattern">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Meet Our Founding Team"
          subtitle="Lawyers and social workers committed to community welfare in Malakand Division"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {preview.map((member) => (
            <Card key={member.id} className="overflow-hidden p-0 text-center h-full">
              <div className="h-56 sm:h-60 md:h-64">
                <MemberAvatar member={member} />
              </div>
              <div className="p-4">
                <p className="text-akf-primary-dark text-xs font-semibold uppercase mb-1">{member.role}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{member.name}</h3>
                <p className="text-gray-600 text-xs">{member.occupation}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-700 mb-6 leading-relaxed">
          View full profiles with bios, contact details, and areas of expertise for all founding members.
        </p>
        <div className="text-center">
          <Link
            to="/team"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-akf-primary hover:bg-akf-primary-dark text-white transition-colors"
          >
            View Full Team Profiles
          </Link>
        </div>
      </div>
    </section>
  )
}
