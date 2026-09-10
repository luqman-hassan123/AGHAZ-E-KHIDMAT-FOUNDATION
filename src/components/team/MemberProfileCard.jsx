import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Card from '../ui/Card'
import MemberAvatar from '../ui/MemberAvatar'

export default function MemberProfileCard({ member, index, onSelect }) {
  const hasPhoto = Boolean(member.photo)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card
        className="overflow-hidden p-0 flex flex-col cursor-pointer select-none group"
        role="button"
        tabIndex={0}
        aria-label={`View profile for ${member.name}`}
        onClick={onSelect}
        onKeyDown={handleKeyDown}
      >
        <div className="relative overflow-hidden aspect-[3/4] w-full">
          <MemberAvatar member={member} imageClassName="group-hover:scale-105" />
          {!hasPhoto && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-akf-primary-dark/90 via-akf-primary-dark/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">{member.role}</p>
                <h3 className="text-white text-lg font-bold leading-snug">{member.name}</h3>
              </div>
            </>
          )}
        </div>

        <div className="p-4 sm:p-6 flex flex-col">
          {hasPhoto && (
            <div className="mb-4 pb-4 border-b border-akf-steampunk">
              <p className="text-akf-primary-dark text-xs font-semibold uppercase tracking-wider mb-1">
                {member.role}
              </p>
              <h3 className="text-gray-900 text-lg font-bold leading-snug">{member.name}</h3>
            </div>
          )}

          <p className="text-akf-primary-dark font-semibold text-sm leading-snug">{member.occupation}</p>

          <span className="pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-akf-primary-dark transition-all duration-300 group-hover:gap-2.5 group-hover:text-akf-primary">
            View profile
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Card>
    </motion.div>
  )
}

