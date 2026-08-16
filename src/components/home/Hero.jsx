import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-akf-primary via-akf-primary-dark to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-akf-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1 rounded-full bg-white/25 text-white text-sm font-medium mb-6"
        >
          Non-profit · Non-political · Community-driven
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight"
        >
          Aghaz-e-Khidmat Foundation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-white font-medium mt-6 max-w-2xl"
        >
          &ldquo;Aghaz&rdquo; means a new beginning — our beginning is in service.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-100 mt-4 max-w-2xl leading-relaxed text-base md:text-lg"
        >
          Delivering transparent, accountable and community-driven programmes across Khyber Pakhtunkhwa — starting from Village Musa Mina, Malakand Division.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {['Education', 'Health & WASH', 'Disaster Response', 'Environment', 'Community Development'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium border border-white/30"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Button to="/partner-with-us" variant="white">Partner With Us</Button>
          <Button
            to="/about"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-akf-primary-dark"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
