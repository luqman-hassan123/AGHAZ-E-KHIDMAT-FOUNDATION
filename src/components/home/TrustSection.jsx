import { motion } from 'framer-motion'
import { ShieldCheck, Lock, FileCheck, Globe } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { trustHighlights } from '../../data/home'

const icons = [ShieldCheck, Lock, FileCheck, Globe]

export default function TrustSection() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Built for Donor Confidence"
          subtitle="Governance, financial controls, and accountability you can rely on"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-akf-steampunk-light border border-akf-steampunk hover:bg-akf-primary-soft hover:border-akf-primary transition-all duration-300 group card-interactive"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-white group-hover:bg-akf-primary flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-akf-primary-dark group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
