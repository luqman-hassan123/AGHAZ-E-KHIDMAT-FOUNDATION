import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { orgContact } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="bg-akf-primary-dark text-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Aghaz-e-Khidmat Foundation</h3>
            <p className="leading-relaxed">
              &ldquo;Aghaz&rdquo; means a new beginning — our beginning is in service.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>{orgContact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0" />
                <a href={`tel:+92${orgContact.primaryPhone.replace(/^0/, '')}`} className="hover:text-white transition-colors">
                  {orgContact.primaryPhoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 shrink-0" />
                <a href={`mailto:${orgContact.primaryEmail}`} className="hover:text-white transition-colors break-all">
                  {orgContact.primaryEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-akf-primary mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aghaz-e-Khidmat Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
