import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { MapPin, Mail, User } from 'lucide-react'
import { orgContact } from '../data/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We welcome the opportunity to discuss how AKF can support your programming objectives"
        image="/images/community.svg"
      />
      <SectionDivider />

      <div className="py-20 min-h-screen section-pattern">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <Card>
                <h3 className="text-xl font-bold mb-6">Organization Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-700">{orgContact.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <User className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">{orgContact.chairperson.title}</p>
                      <p className="text-gray-700">{orgContact.chairperson.name}</p>
                      <a
                        href={`tel:+92${orgContact.chairperson.phone.replace(/^0/, '')}`}
                        className="text-akf-primary-dark hover:text-akf-primary text-sm mt-1 inline-block"
                      >
                        {orgContact.chairperson.phoneDisplay}
                      </a>
                      <div className="mt-2 space-y-1">
                        {orgContact.chairperson.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="block text-sm text-gray-700 hover:text-akf-primary-dark break-all"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <User className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">{orgContact.generalSecretary.title}</p>
                      <p className="text-gray-700">{orgContact.generalSecretary.name}</p>
                      <a
                        href={`tel:+92${orgContact.generalSecretary.phone.replace(/^0/, '')}`}
                        className="text-akf-primary-dark hover:text-akf-primary text-sm mt-1 inline-block"
                      >
                        {orgContact.generalSecretary.phoneDisplay}
                      </a>
                      <a
                        href={`mailto:${orgContact.generalSecretary.email}`}
                        className="block text-sm text-gray-700 hover:text-akf-primary-dark mt-1 break-all"
                      >
                        {orgContact.generalSecretary.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-akf-steampunk text-sm text-gray-600 space-y-1">
                  <p>{orgContact.notes.officialEmail}</p>
                  <p>{orgContact.notes.linkedIn}</p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-akf-steampunk text-gray-900 placeholder:text-gray-500 focus:border-akf-primary focus:outline-none focus:ring-2 focus:ring-akf-primary/20"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-akf-steampunk text-gray-900 placeholder:text-gray-500 focus:border-akf-primary focus:outline-none focus:ring-2 focus:ring-akf-primary/20"
                  />
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-akf-steampunk text-gray-900 placeholder:text-gray-500 focus:border-akf-primary focus:outline-none focus:ring-2 focus:ring-akf-primary/20 resize-none"
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  )
}
