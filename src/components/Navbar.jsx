import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig.js'
import ContactLink from './ContactLink.jsx'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/archive', label: 'Archive' },
  { to: '/about', label: 'About' },
]

function Navbar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" onClick={closeMenu} aria-label={`${siteConfig.brandName} home`}>
        <span className="brand-symbol">g<span>l.</span></span>
        <span className="brand-copy"><strong>{siteConfig.brandName}</strong><small>MOBILE VIDEOGRAPHY</small></span>
      </NavLink>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={closeMenu} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
            {label}
          </NavLink>
        ))}
        <ContactLink className="nav-link" onClick={closeMenu}>Contact</ContactLink>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
        </button>
        <ContactLink className="nav-cta" onClick={closeMenu}>Start a project <ArrowUpRight size={15} /></ContactLink>
      </nav>
    </header>
  )
}

export default Navbar
