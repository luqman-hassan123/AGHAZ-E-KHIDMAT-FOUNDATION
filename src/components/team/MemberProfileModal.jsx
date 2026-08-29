import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, X } from 'lucide-react'
import MemberAvatar from '../ui/MemberAvatar'

export default function MemberProfileModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [member, onClose])

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="member-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-akf-primary-dark/70 backdrop-blur-sm"
            aria-label="Close profile"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-akf-steampunk"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 rounded-full p-2 text-gray-500 hover:text-akf-primary-dark hover:bg-akf-primary-soft transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex gap-4 sm:gap-5 pr-8">
                <div className="relative w-24 sm:w-28 aspect-[3/4] shrink-0 overflow-hidden rounded-xl bg-akf-primary-soft border border-akf-steampunk">
                  <MemberAvatar member={member} />
                </div>

                <div className="min-w-0">
                  <p className="text-akf-primary-dark text-xs font-semibold uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <h2 id="member-modal-title" className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {member.name}
                  </h2>
                  <p className="text-akf-primary-dark font-semibold text-sm mt-2 leading-snug">
                    {member.occupation}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mt-5">{member.bio}</p>

                {(member.phoneDisplay || member.emails?.length > 0) && (
                  <ul className="space-y-2 mt-5 text-sm">
                    {member.phoneDisplay && (
                      <li>
                        <a
                          href={`tel:+92${member.phone?.replace(/^0/, '')}`}
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-akf-primary-dark transition-colors"
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
                          className="inline-flex items-start gap-2 text-gray-700 hover:text-akf-primary-dark transition-colors break-all"
                        >
                          <Mail className="w-4 h-4 text-akf-primary shrink-0 mt-0.5" />
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {(member.expertise ?? []).length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {(member.expertise ?? []).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-akf-primary-soft text-akf-primary-dark text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
