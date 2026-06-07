import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP_URL } from '../constants/app'
import { Logo } from './Logo'

const navLinks = [
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Plataforma', href: '/#plataforma' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className="header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="header__actions-mobile">
            <a href={APP_URL} className="header__login" onClick={() => setMenuOpen(false)}>
              Entrar
            </a>
            <a href={APP_URL} className="header__signup" onClick={() => setMenuOpen(false)}>
              Começar grátis
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a href={APP_URL} className="header__login">
            Entrar
          </a>
          <a href={APP_URL} className="header__signup">
            Começar grátis
          </a>
        </div>

        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}
