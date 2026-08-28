import { motion } from 'framer-motion'
import { ShieldCheck, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'
import { registrationInfo } from '../../data/governance'

export default function RegistrationCertificate() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-akf-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-akf-primary-dark font-bold text-sm uppercase tracking-wide">Official Registration</p>
              <h3 className="text-2xl font-bold text-gray-900">Certificate of Registration</h3>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Aghaz-e-Khidmat Foundation (AKF) is duly registered under the Societies Registration Act, 1860 with the Provincial Registrar, Joint Stock Companies &amp; Societies, Khyber Pakhtunkhwa, Peshawar.
          </p>

          <dl className="space-y-3 mb-6">
            {registrationInfo.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4 border-b border-akf-steampunk/50 pb-3 last:border-0">
                <dt className="font-semibold text-akf-primary-dark sm:w-40 shrink-0">{item.label}</dt>
                <dd className="text-gray-700">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="text-sm text-gray-600 italic">
            Note: Validity of the certificate requires an Annual Renewal Certificate as issued by the Registrar.
          </p>

          <a
            href="/images/documents/registration-certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-akf-primary-dark font-semibold hover:text-akf-primary transition-colors"
          >
            View full certificate <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-akf-steampunk-light p-6 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-akf-steampunk"
        >
          <a
            href="/images/documents/registration-certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm w-full group"
          >
            <img
              src="/images/documents/registration-certificate.png"
              alt="AKF Certificate of Registration under Societies Registration Act 1860"
              className="w-full rounded-lg border border-akf-steampunk shadow-md group-hover:shadow-xl transition-shadow"
            />
            <p className="text-center text-sm text-gray-600 mt-3 group-hover:text-akf-primary-dark">
              Click to view full size
            </p>
          </a>
        </motion.div>
      </div>
    </Card>
  )
}
