import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { MapPin, Mail, Phone, User } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Contact Us"
          subtitle="We welcome the opportunity to discuss how AKF can support your programming objectives"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection>
            <Card>
              <h3 className="text-xl font-bold mb-6">Organization Details</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">
                      Village Musa Mina, Post Office Dargai, Malakand Division, Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-akf-primary shrink-0" />
                  <span>Contact number: ____________________</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-akf-primary shrink-0" />
                  <span>Email: ____________________</span>
                </li>
                <li className="flex items-center gap-3">
                  <User className="w-5 h-5 text-akf-primary shrink-0" />
                  <span>Chairperson: ____________________</span>
                </li>
              </ul>
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
  )
}
