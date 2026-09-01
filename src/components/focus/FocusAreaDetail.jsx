import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function FocusAreaDetail({ pillar, index, reverse = false }) {
  const Icon = pillar.icon
  const [imageSrc, setImageSrc] = useState(pillar.image)
  const isPhoto = /\.(jpe?g|png|webp)$/i.test(imageSrc)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      id={pillar.id}
      className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-akf-steampunk shadow-md bg-white transition-[border-color,box-shadow] duration-300 hover:border-akf-primary hover:shadow-lg`}
    >
      <div className={`relative min-h-[260px] lg:min-h-[420px] ${reverse ? 'lg:order-2' : ''} ${
        isPhoto ? 'bg-akf-primary-soft' : `bg-gradient-to-br ${pillar.accent}`
      }`}>
        <img
          src={imageSrc}
          alt={pillar.title}
          onError={() => {
            if (pillar.imageFallback && imageSrc !== pillar.imageFallback) {
              setImageSrc(pillar.imageFallback)
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover ${
            isPhoto ? '' : 'opacity-30 mix-blend-overlay'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-akf-primary-soft/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-akf-primary-dark" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-akf-primary-dark leading-snug">{pillar.title}</h2>
          <p className="text-akf-primary mt-2 text-xs sm:text-sm font-semibold break-words">{pillar.sdgs.join(' · ')}</p>
        </div>
      </div>

      <div className={`p-5 sm:p-8 md:p-10 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
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
