import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Card from '../ui/Card'
import MemberAvatar from '../ui/MemberAvatar'

export default function MemberProfileCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className="overflow-hidden p-0 h-full" hover>
        <div className="relative h-64 overflow-hidden">
          <MemberAvatar member={member} />
          <div className="absolute inset-0 bg-gradient-to-t from-akf-primary-dark/90 via-akf-primary-dark/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">{member.role}</p>
            <h3 className="text-white text-lg font-bold leading-snug">{member.name}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-akf-primary-dark font-semibold text-sm mb-3 leading-snug">{member.occupation}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>

          {(member.phoneDisplay || member.emails?.length > 0) && (
            <ul className="space-y-2 mb-4 text-sm">
              {member.phoneDisplay && (
                <li>
                  <a
                    href={`tel:+92${member.phone?.replace(/^0/, '')}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-akf-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4 text-akf-primary shrink-0" />
                    {member.phoneDisplay}
                  </a>
                </li>
              )}
              {member.emails?.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-start gap-2 text-gray-700 hover:text-akf-primary-dark transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-akf-primary shrink-0 mt-0.5" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md bg-akf-primary-soft text-akf-primary-dark text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
