import PageHero from '../components/ui/PageHero'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import { MapPin, User } from 'lucide-react'
import LinkedInIcon from '../components/ui/LinkedInIcon'
import { orgContact } from '../data/contact'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We welcome the opportunity to discuss how AKF can support your programming objectives"
      />
      <SectionDivider />

      <div className="py-20 min-h-screen section-pattern">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto">
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
                <li className="flex items-start gap-3">
                  <LinkedInIcon className="w-5 h-5 text-akf-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    {orgContact.linkedIn.url ? (
                      <a
                        href={orgContact.linkedIn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-akf-primary-dark hover:text-akf-primary break-all"
                      >
                        {orgContact.linkedIn.label}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700">{orgContact.linkedIn.label}</p>
                    )}
                  </div>
                </li>
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}
