import type { ReactNode } from 'react'
import { Newspaper } from 'lucide-react'
import { APP_URL } from '../constants/app'
import { Logo } from './Logo'
import { ScrollReveal } from './ScrollReveal'

const quickLinks = [
  { label: 'Início', href: '/' },
  { label: 'Recursos', href: '/#plataforma' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Agentes IA', href: '/#plataforma' },
  { label: 'Contato', href: APP_URL, external: true },
]

const exploreLinks = [
  { label: 'Ao vivo', href: APP_URL, external: true },
  { label: 'Simulação WhatsApp', href: '/#plataforma' },
  { label: 'Chamada à ação', href: APP_URL, external: true },
]

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a href={href} className="footer__social-link" aria-label={label}>
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <ScrollReveal>
        <div className="cta-banner">
          <div className="container cta-banner__inner">
            <h2 className="cta-banner__title">
              Seu <span>acesso exclusivo</span> ao roadmap da Avalia Imobe em
              construção
            </h2>
            <div className="cta-banner__action">
              <a href={APP_URL} className="cta-banner__btn">
                <Newspaper size={18} strokeWidth={2} />
                Acompanhar o roadmap
              </a>
              <p className="cta-banner__hint">
                Participe das decisões e receba novidades em primeira mão.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="footer__body">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <Logo />
            </a>
            <p className="footer__description">
              Um produto pensado para avaliação imobiliária com IA — clareza de
              mercado e resultado onde você já conversa todos os dias.
            </p>
            <a href={APP_URL} className="footer__cta-btn">
              Fale conosco
            </a>
            <div className="footer__social">
              <SocialIcon label="Facebook" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Links rápidos</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Explorar</h4>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__column-title">Fale conosco</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Telefone</span>
              <a href="tel:+5551995501677">(51) 99550-1677</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">E-mail</span>
              <a href="mailto:contato@avaliaimobe.com.br">contato@avaliaimobe.com.br</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Endereço</span>
              <address>
                Rua Dom Pedro II, 190
                <br />
                Bairro American — Lajeado, RS
              </address>
            </div>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          Avalia Imobe
        </div>
      </div>
    </footer>
  )
}
