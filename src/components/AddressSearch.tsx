import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const demos = [
  {
    address: 'Rua Benjamin Constant, 890 — Lajeado',
    m2: 'R$ 4.820/m²',
    zone: 'ZR — Residencial',
  },
  {
    address: 'Av. Senador Alberto Pasqualini, 500 — Lajeado',
    m2: 'R$ 5.140/m²',
    zone: 'ZM — Mista',
  },
  {
    address: 'Rua Oswaldo Aranha, 120 — Lajeado',
    m2: 'R$ 4.650/m²',
    zone: 'ZR — Residencial',
  },
]

const TYPE_MS = 42
const PAUSE_AFTER_TYPE = 600
const RESULTS_MS = 3200
const PAUSE_BEFORE_NEXT = 800

export function AddressSearch() {
  const [demoIndex, setDemoIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  const current = demos[demoIndex]

  useEffect(() => {
    setTyped('')
    setShowResults(false)
    setIsTyping(true)

    const address = demos[demoIndex].address
    let charIndex = 0

    const typeInterval = setInterval(() => {
      charIndex += 1
      setTyped(address.slice(0, charIndex))

      if (charIndex >= address.length) {
        clearInterval(typeInterval)
        setIsTyping(false)

        setTimeout(() => setShowResults(true), PAUSE_AFTER_TYPE)
      }
    }, TYPE_MS)

    return () => clearInterval(typeInterval)
  }, [demoIndex])

  useEffect(() => {
    if (!showResults) return

    const nextTimer = setTimeout(() => {
      setShowResults(false)
      setTimeout(() => {
        setDemoIndex((prev) => (prev + 1) % demos.length)
      }, PAUSE_BEFORE_NEXT)
    }, RESULTS_MS)

    return () => clearTimeout(nextTimer)
  }, [showResults, demoIndex])

  return (
    <section className="address-search" aria-hidden="true">
      <div className="container address-search__inner">
        <ScrollReveal>
          <p className="address-search__eyebrow">Veja a avaliação em ação</p>
          <h2 className="address-search__title">Onde fica o imóvel?</h2>

          <div className="address-search__bar address-search__bar--demo">
            <MapPin size={20} className="address-search__icon" strokeWidth={1.75} />
            <div className="address-search__display">
              <span className="address-search__typed">{typed}</span>
              {isTyping && <span className="address-search__cursor" />}
            </div>
            <span className="address-search__submit address-search__submit--demo">
              Avaliar
              <ArrowRight size={16} />
            </span>
          </div>

          <div className="address-search__examples">
            <span className="address-search__examples-label">Exemplos:</span>
            {demos.map((demo, i) => (
              <span
                key={demo.address}
                className={`address-search__example address-search__example--demo${
                  i === demoIndex ? ' address-search__example--active' : ''
                }`}
              >
                {demo.address}
              </span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {showResults && (
              <motion.div
                key={demoIndex}
                className="address-search__results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="address-search__result">
                  <div>
                    <span className="address-search__result-label">Valor médio do m²</span>
                    <span className="address-search__result-value">{current.m2}</span>
                  </div>
                </div>
                <div className="address-search__result">
                  <div>
                    <span className="address-search__result-label">Plano diretor</span>
                    <span className="address-search__result-value">{current.zone}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  )
}
