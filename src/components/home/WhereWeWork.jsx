import { motion } from 'framer-motion'
import { MapPin, HeartHandshake } from 'lucide-react'
import { workAreas } from '../../data/home'

export default function WhereWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-akf-primary to-akf-primary-dark rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <MapPin className="w-16 h-16 text-white mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Where We Serve</h3>
              <p className="text-gray-100 leading-relaxed mb-6">
                AKF is rooted in Malakand Division and expanding programmes across Khyber Pakhtunkhwa — starting where community trust and local knowledge run deepest.
              </p>
              <ul className="space-y-3">
                {workAreas.map((area, index) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/15 rounded-lg px-4 py-3 text-white font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Community at the Centre</h2>
            <div className="w-16 h-1 bg-akf-primary mt-3 rounded-full" />
            <p className="mt-4 text-lg text-gray-700 mb-6">
              Programmes designed with and for the people we serve
            </p>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our first-phase work focuses on Musa Mina and surrounding union councils — conducting needs assessments, building local partnerships, and launching pilot interventions that respond to real community priorities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether in education, health, WASH, disaster preparedness, or rights awareness, AKF ensures vulnerable groups — especially women, youth, and children — are not left behind.
              </p>
              <div className="flex items-start gap-4 bg-akf-steampunk-light rounded-xl p-5 border border-akf-steampunk mt-6">
                <HeartHandshake className="w-8 h-8 text-akf-primary-dark shrink-0 mt-1" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  We also promote family planning services, recreational programmes that build resilience against anti-social activity, and lawful activities that advance development and civic rights awareness across Pakistan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
