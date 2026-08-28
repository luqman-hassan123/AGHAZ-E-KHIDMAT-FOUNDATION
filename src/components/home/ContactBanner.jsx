import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { orgContact } from '../../data/contact'

export default function ContactBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-akf-primary via-akf-primary-dark to-akf-primary rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-akf-primary-light rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make an Impact Together?
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Whether you are a donor, NGO, government department, or development partner — we would welcome the opportunity to discuss how AKF&apos;s community reach and governance structure can support your objectives in Khyber Pakhtunkhwa.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button to="/contact" variant="white">Contact Us</Button>
              <Button
                to="/governance"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-akf-primary-dark"
              >
                View Governance
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-100 font-medium">
              <a href={`tel:+92${orgContact.primaryPhone.replace(/^0/, '')}`} className="flex items-center justify-center gap-2 hover:text-white">
                <Phone className="w-4 h-4" /> {orgContact.primaryPhoneDisplay}
              </a>
              <a href={`mailto:${orgContact.primaryEmail}`} className="flex items-center justify-center gap-2 hover:text-white break-all">
                <Mail className="w-4 h-4" /> {orgContact.primaryEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
