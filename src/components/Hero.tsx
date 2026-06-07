import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import terrenoImg from '../assets/terreno.png'
import casaImg from '../assets/casa.png'
import apartamentoImg from '../assets/apartamento.png'
import { APP_URL } from '../constants/app'

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
            <span className="hero__word">Seu</span>
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
            <span className="hero__word">imóvel</span>
          </span>
          <span className="hero__line hero__line--second">
            avaliado da maneira certa
          </span>
        </motion.h1>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a href={APP_URL} className="btn btn--primary btn--pill">
            Testar agora mesmo
          </a>
          <a href="#plataforma" className="hero__secondary-cta">
            Ver demonstração
            <span className="hero__arrow-circle">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
