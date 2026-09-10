import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { coreValues } from '../../data/home'

export default function CoreValues() {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-br from-akf-primary-dark to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What We Stand For"
          subtitle="Cross-cutting commitments across every programme we deliver"
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 card-interactive group"
            >
              <div className="w-10 h-1 bg-akf-primary rounded-full mb-4 transition-all duration-300 group-hover:w-14" />
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-gray-100 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
