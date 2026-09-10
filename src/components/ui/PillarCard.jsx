import { motion } from 'framer-motion'
import Card from './Card'

export default function PillarCard({ pillar, index }) {
  const Icon = pillar.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group">
        <div className="w-14 h-14 rounded-full bg-akf-primary-soft flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-akf-primary group-hover:scale-110">
          <Icon className="w-7 h-7 text-akf-primary-dark transition-colors duration-300 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pillar.title}</h3>
        <p className="text-gray-700 leading-relaxed">{pillar.shortDescription}</p>
      </Card>
    </motion.div>
  )
}
