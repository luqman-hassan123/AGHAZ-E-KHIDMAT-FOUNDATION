import { motion } from 'framer-motion'

const defaultPageHeroImage = '/images/backgrounds/akf-schools-education.png'

export default function PageHero({ title, subtitle, image = defaultPageHeroImage }) {
  const isPhoto = /\.(jpe?g|png|webp)$/i.test(image)

  return (
    <section className="relative -mt-[4.75rem] sm:-mt-20 pt-[5.5rem] sm:pt-24 min-h-[200px] sm:min-h-[280px] md:min-h-[320px] flex items-end overflow-hidden bg-akf-primary-dark">
      <img
        src={image}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${
          isPhoto ? '' : 'opacity-40 mix-blend-luminosity'
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${
          isPhoto
            ? 'bg-gradient-to-r from-akf-primary-dark/90 via-akf-primary-dark/75 to-akf-primary/55'
            : 'bg-gradient-to-r from-akf-primary-dark/95 via-akf-primary-dark/80 to-akf-primary/60'
        }`}
      />
      <div className="absolute inset-0 section-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-gray-100 text-base sm:text-lg md:text-xl mt-3 sm:mt-4 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
