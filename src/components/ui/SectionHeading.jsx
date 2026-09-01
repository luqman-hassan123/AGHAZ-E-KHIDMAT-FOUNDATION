import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-1"
    >
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-akf-primary mx-auto mt-3 rounded-full" />
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-gray-100' : 'text-gray-700'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
