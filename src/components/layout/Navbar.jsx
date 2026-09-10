import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandLockup from '../ui/BrandLockup'
import { navLinks } from '../../data/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-akf-primary-dark border-b-2 border-akf-primary bg-white/60'
        : 'text-gray-800 hover:text-akf-primary-dark hover:bg-white/40'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-akf-steampunk shadow-sm overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between min-h-[4.25rem] sm:min-h-[4.5rem] py-2 gap-3">
          <Link
            to="/"
            className="flex items-center shrink min-w-0 overflow-hidden max-w-[calc(100%-3.5rem)] sm:max-w-none"
            onClick={() => setOpen(false)}
          >
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
            type="button"
            className="lg:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-gray-700"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 top-[4.25rem] sm:top-[4.5rem] bg-black/25 lg:hidden z-40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="absolute left-0 right-0 top-full z-50 lg:hidden pb-3 pt-1 bg-akf-steampunk-light rounded-b-xl shadow-lg border-x border-b border-akf-steampunk max-h-[min(70dvh,22rem)] overflow-y-auto">
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
          </>
        )}
      </div>
    </nav>
  )
}
