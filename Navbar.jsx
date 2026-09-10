import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(links.map((l) => l.id))

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-ink/80 backdrop-blur border-b border-line">
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-semibold text-text-primary tracking-tight"
        >
          S. Sandhiya
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded transition-colors ${
                  activeId === link.id
                    ? 'text-amber'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-block font-mono text-sm px-4 py-2 border border-teal text-teal rounded hover:bg-teal hover:text-ink transition-colors"
        >
          Contact me
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-primary"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="h-[2px] bg-current block"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="h-[2px] bg-current block"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="h-[2px] bg-current block"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-line bg-ink font-mono text-sm"
          >
            {links.map((link) => (
              <li key={link.id} className="border-b border-line/60">
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-5 py-3 ${
                    activeId === link.id ? 'text-amber' : 'text-text-muted'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
