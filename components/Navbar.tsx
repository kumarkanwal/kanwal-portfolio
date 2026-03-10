'use client'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl border-b'
          : 'py-5'
      }`}
      style={{
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border flex items-center justify-center text-xs font-mono font-bold transition-all"
            style={{ borderColor: 'var(--cyber)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}>
            KK
          </div>
          <span className="font-display font-900 text- font-bold hidden sm:block" style={{ color: 'var(--text-primary)' }}>
            Kanwal Kumar <span style={{ color: 'var(--cyber)' }}>(AI)</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded border flex items-center justify-center transition-all hover:scale-110"
            style={{ borderColor: 'var(--border)', color: 'var(--cyber)', background: 'var(--cyber-glow)' }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-mono rounded border transition-all hover:scale-105"
            style={{ borderColor: 'var(--cyber)', color: 'var(--bg-primary)', background: 'var(--cyber)' }}
          >
            Hire Me
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: 'var(--cyber)' }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 pt-2 border-t flex flex-col gap-4" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link text-sm" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
