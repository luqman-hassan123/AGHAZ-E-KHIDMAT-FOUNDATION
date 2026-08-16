import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { foundingMembers } from '../../data/members'

export default function TeamPreview() {
  const preview = foundingMembers.slice(0, 4)

  return (
    <section className="py-24 bg-akf-steampunk-light">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Meet Our Founding Team"
          subtitle="Lawyers and social workers committed to community welfare in Malakand Division"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {preview.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-akf-primary to-akf-primary-dark flex items-center justify-center text-white text-xl font-bold mb-3">
                  {member.name.replace(/^(Ms\.|Mr\.)\s*/, '').charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 leading-snug">{member.name}</h3>
                <p className="text-akf-primary-dark text-xs font-medium">{member.occupation}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-700 mb-6 leading-relaxed">
          Plus {foundingMembers.length - 4} more founding members forming the initial Executive Committee for a three-year term.
        </p>
        <div className="text-center">
          <Link
            to="/team"
            className="text-akf-primary-dark font-semibold hover:text-akf-primary transition-colors"
          >
            View full team →
          </Link>
        </div>
      </div>
    </section>
  )
}
