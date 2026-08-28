import { motion } from 'framer-motion'
import { Scale, Users, MapPin } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedSection from '../ui/AnimatedSection'

export default function AboutIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
            <div className="w-16 h-1 bg-akf-primary mt-3 rounded-full" />
            <p className="mt-4 text-lg text-gray-700 mb-6">
              A newly established organization rooted in Malakand Division, built for transparent community service
            </p>
            <div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Aghaz-e-Khidmat Foundation (AKF) is a non-profit, non-political, and voluntary social welfare organization founded by lawyers and social workers to serve communities across Khyber Pakhtunkhwa — beginning in Malakand Division.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Visit our About page for our full story, vision, mission, legal status, founding timeline, and organizational profile.
              </p>
              <Button to="/about">About Us</Button>
            </div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-3xl overflow-hidden border border-akf-steampunk shadow-lg">
              <img
                src="/images/community.svg"
                alt="AKF community service"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="bg-akf-primary-soft rounded-2xl p-5 border border-akf-primary/20 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-akf-primary flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Legal & Governance Foundation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Registered under the Societies Registration Act, 1860 with an Executive Committee and accountable General Body.
                  </p>
                </div>
              </div>
              <div className="bg-akf-primary rounded-2xl p-5 flex gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Experienced Founding Team</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    Seven founding members combining legal expertise, social work, and grassroots community mobilization.
                  </p>
                </div>
              </div>
              <div className="bg-akf-primary-dark rounded-2xl p-5 flex gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Grassroots Local Presence</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    Based in Village Musa Mina, Dargai — with direct access to underserved communities in Malakand Division.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
