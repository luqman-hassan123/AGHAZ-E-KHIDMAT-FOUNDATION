import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image = '/images/malakand.svg' }) {
  return (
    <section className="relative -mt-16 pt-20 md:pt-24 min-h-[280px] md:min-h-[320px] flex items-end overflow-hidden bg-akf-primary-dark">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-akf-primary-dark/95 via-akf-primary-dark/80 to-akf-primary/60" />
      <div className="absolute inset-0 section-pattern opacity-30" />

      <div className="container mx-auto px-6 pb-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-gray-100 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
