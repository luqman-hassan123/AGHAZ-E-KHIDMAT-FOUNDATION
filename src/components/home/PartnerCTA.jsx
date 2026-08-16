import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import { partnerReasons } from '../../data/governance'

export default function PartnerCTA() {
  return (
    <section className="py-20 bg-akf-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With AKF?
            </h2>
            <p className="text-white text-lg mb-6 leading-relaxed">
              We welcome strategic partnerships to jointly design and implement impactful projects across Khyber Pakhtunkhwa.
            </p>
            <Button to="/partner-with-us" variant="white">Become a Partner</Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {partnerReasons.slice(0, 4).map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-white">
                <CheckCircle className="w-5 h-5 mt-1 shrink-0 text-white" />
                <span>{reason}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
