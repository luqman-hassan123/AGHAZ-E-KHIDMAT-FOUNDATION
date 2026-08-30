import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { strategicPriorities } from '../../data/governance'

export default function RoadmapPreview() {
  return (
    <section className="py-24 relative overflow-hidden bg-akf-steampunk-light">
      <img
        src="/images/backgrounds/akf-drm-school-safety.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-akf-steampunk-light/88" />
      <div className="absolute inset-0 section-pattern opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Our First-Phase Roadmap"
          subtitle="From strong governance foundation to demonstrated field results"
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-akf-primary/30 md:-translate-x-1/2 hidden sm:block" />

          {strategicPriorities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-akf-primary border-4 border-white shadow-md md:-translate-x-1/2 top-6 hidden sm:block" />

              <div className="md:w-1/2 pl-14 sm:pl-0">
                <div className="bg-white rounded-2xl p-6 border border-akf-steampunk shadow-sm hover:border-akf-primary hover:shadow-md transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-akf-primary-soft text-akf-primary-dark text-xs font-bold mb-3">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
          We welcome partnerships at any stage — from institutional-strengthening grants to co-financing a specific pilot project.
        </p>
        <div className="text-center mt-8">
          <Link
            to="/partner-with-us"
            className="text-akf-primary-dark font-semibold hover:text-akf-primary transition-colors"
          >
            Explore partnership opportunities →
          </Link>
        </div>
      </div>
    </section>
  )
}
