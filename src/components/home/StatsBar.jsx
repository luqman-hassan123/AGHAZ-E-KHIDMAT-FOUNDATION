import { motion } from 'framer-motion'
import { orgStats } from '../../data/home'

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {orgStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-akf-steampunk p-6 text-center shadow-lg hover:border-akf-primary hover:shadow-xl transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-akf-primary-dark">{stat.value}</p>
              <p className="font-semibold text-gray-800 mt-2 text-sm md:text-base">{stat.label}</p>
              <p className="text-gray-700 text-xs md:text-sm mt-1 font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
