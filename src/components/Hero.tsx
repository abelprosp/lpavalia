import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import terrenoImg from '../assets/terreno.png'
import casaImg from '../assets/casa.png'
import apartamentoImg from '../assets/apartamento.png'
import { SIGN_UP_URL } from '../constants/app'

const propertyImages = [
  {
    src: terrenoImg,
    label: 'Terreno',
  },
  {
    src: casaImg,
    label: 'Casa',
  },
  {
    src: apartamentoImg,
    label: 'Apartamento',
  },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % propertyImages.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="container hero__inner">
        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="hero__line">
            <span className="hero__word">Avalie, capte</span>
            <span className="hero__pill" aria-label={propertyImages[currentIndex].label}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={propertyImages[currentIndex].src}
                  alt={propertyImages[currentIndex].label}
                  className="hero__pill-image"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </span>
            <span className="hero__word">e feche</span>
          </span>
          <span className="hero__line hero__line--second">
            com IA no fluxo do corretor
          </span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Corretores usam avaliações, leads de proprietários e CRM num só saldo de
          créditos. Proprietários descobrem o valor do imóvel e publicam para os
          corretores da região.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a href={SIGN_UP_URL} className="btn btn--primary btn--pill">
            Sou corretor
          </a>
          <a href={SIGN_UP_URL} className="btn btn--outline btn--pill">
            Sou proprietário
          </a>
          <Link to="/#como-funciona" className="hero__secondary-cta">
            Ver como funciona
            <span className="hero__arrow-circle">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>

        <motion.p
          className="hero__microcopy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Planos a partir de R$ 97/mês · 3 avaliações grátis por mês para proprietários
        </motion.p>
      </div>
    </section>
  )
}
