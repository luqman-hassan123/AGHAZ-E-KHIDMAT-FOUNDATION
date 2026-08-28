import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function FocusAreaDetail({ pillar, index, reverse = false }) {
  const Icon = pillar.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      id={pillar.id}
      className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-akf-steampunk shadow-lg bg-white`}
    >
      <div className={`relative min-h-[260px] lg:min-h-[420px] bg-gradient-to-br ${pillar.accent} ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={pillar.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <Icon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{pillar.title}</h2>
          <p className="text-gray-100 mt-2 text-sm font-medium">{pillar.sdgs.join(' · ')}</p>
        </div>
      </div>

      <div className={`p-8 md:p-10 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
        <span className="text-akf-primary font-bold text-sm tracking-wide uppercase">
          Pillar {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-gray-700 leading-relaxed mt-3 mb-6">{pillar.description}</p>

        <h3 className="font-bold text-gray-900 mb-3">Key Activities</h3>
        <ul className="space-y-2.5 mb-6">
          {pillar.activities.map((activity) => (
            <li key={activity} className="flex items-start gap-2.5 text-gray-700 text-sm">
              <CheckCircle className="w-4 h-4 text-akf-primary shrink-0 mt-0.5" />
              <span>{activity}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {pillar.sdgs.map((sdg) => (
            <span
              key={sdg}
              className="px-3 py-1 rounded-full bg-akf-primary-soft text-akf-primary-dark text-xs font-semibold"
            >
              {sdg}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
