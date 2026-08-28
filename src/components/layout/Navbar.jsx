import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandLockup from '../ui/BrandLockup'
import { navLinks } from '../../data/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-akf-primary-dark border-b-2 border-akf-primary'
        : 'text-gray-800 hover:text-akf-primary-dark'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-akf-steampunk shadow-sm overflow-visible">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between min-h-16 md:min-h-[4.5rem] py-2 gap-3">
          <Link to="/" className="flex items-center shrink-0 overflow-visible max-w-[calc(100%-3rem)] sm:max-w-none">
            <BrandLockup compact />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 bg-akf-steampunk-light rounded-b-xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
