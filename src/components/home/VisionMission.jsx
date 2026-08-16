import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function VisionMission() {
  return (
    <section className="py-24 bg-akf-steampunk-light">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Vision & Mission"
          subtitle="Guiding every programme we design and every partnership we build"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-t-4 border-t-akf-primary">
              <div className="w-14 h-14 rounded-full bg-akf-primary-light flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-akf-primary-dark" />
              </div>
              <h3 className="text-2xl font-bold text-akf-primary-dark mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A Khyber Pakhtunkhwa in which every community has access to education, health, a safe environment and the means to build a dignified, self-reliant future.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="h-full border-t-4 border-t-akf-primary-dark">
              <div className="w-14 h-14 rounded-full bg-akf-primary-light flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-akf-primary-dark" />
              </div>
              <h3 className="text-2xl font-bold text-akf-primary-dark mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To mobilize local and international resources to deliver education, health, disaster response, environmental and community-development programs that are transparent, community-driven and sustainable — with a particular focus on women, youth, children and other vulnerable groups.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
